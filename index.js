const express = require('express');
const app = express();
const path = require('path');
const cors = require("cors");
app.use(express.json());
//configuraciones
app.set('port', process.env.PORT || 4000);

app.use(express.static(path.join(__dirname, 'build')));
/*
 app.get('*', function (req, res) {
     res.sendFile(path.join(__dirname, 'build', 'index.html'));
 });
*/
//starting
const server = app.listen(app.get('port'), () => {
    console.log('server abierto en el puerto:', app.get('port'))
});


const io = require("socket.io")(server, { cors: { origin: "/" } });

io.use(async (socket, next) => {
    try {
        socket.userID = socket.handshake.query.token
        next()
    } catch (error) {
        error
    }
})

let rooms = [];

io.on('connection', (socket) => {
    socket.on('join', ({ username, room }) => {
        socket.user = username;
        socket.room = room;
        socket.spectate = false;
        socket.join(room);
        //la siguiente linea setea el usuario y la sala en el socket
        if (rooms.length == 0) {
            rooms.push({ room: room, users: [{ name: username, role: "admin", voted: false }], viewers: [] });
            io.to(room).emit('joined', ({ room: room, users: [{ name: username, role: "admin", voted: false }], viewers: [] }));
        } else {
            let count = 0;
            for (var roomOfArray of rooms) {
                if (roomOfArray.room == room) {
                    count++;
                    break;
                }
            };
            if (count > 0) {
                let count2 = 0;
                for (let user of roomOfArray.users) {
                    if (user.name == username) {
                        count2++;
                        break;
                    }
                }
                if (count2 == 0) {
                    roomOfArray.users.push({ name: username, role: "user", voted: false });
                    io.to(room).emit('joined', ({ room: room, users: roomOfArray.users, viewers: roomOfArray.viewers }));
                } else {
                    io.to(room).emit('joined', ({ room: room, users: roomOfArray.users, viewers: roomOfArray.viewers }));
                }
            } else {
                rooms.push({ room: room, users: [{ name: username, role: "admin", voted: false }], viewers:[] });
                io.to(room).emit('joined', ({ room: room, users: [{ name: username, role: "admin", voted: false }], viewers: [] }));
            }
        }
        
    });

    socket.on('select', ({ number, name, room }) => {
        for (let roomOfArray of rooms) {
            if (roomOfArray.room === room) {
                for (let user of roomOfArray.users) {
                    if (user.name === name) {
                        user.voted = true;
                        user.number = number;
                        io.to(room).emit('selected', ({ room: room, users: roomOfArray.users, viewers: roomOfArray.viewers }));
                        break;
                    }
                }
                break;
            }
        }
    }
    );

    socket.on('reveal', (room) => {
        for (let roomOfArray of rooms) {
            if (roomOfArray.room === room) {
                io.to(room).emit('revealed', ({ room: room, users: roomOfArray.users }));
                break;
            }
        }
    });


    socket.on('newVote', (room) => {
        for (let roomOfArray of rooms) {
            if (roomOfArray.room === room) {
                for (let user of roomOfArray.users) {
                    user.voted = false;
                    delete user.number;
                }
                io.to(room).emit('resetVote', ({ room: room, users: roomOfArray.users }));
                break;
            }
        }
    });

    socket.on('spectate', async ({ room, name, spectate }) => {
      
        for (let roomOfArray of rooms) {
            if (roomOfArray.room === room) {
                if (spectate === false) {
                    socket.spectate = true;
                    for (let user of roomOfArray.users) {
                        if (user.name === name) {

                            roomOfArray.users.splice(roomOfArray.users.indexOf(user), 1);
                            roomOfArray.viewers.push({ name: name });
                            io.to(room).emit('newViewer', ({ room: room, users: roomOfArray.users, viewers: roomOfArray.viewers }));
                            break;

                        }
                    }
                } else {
                    socket.spectate = false;
                    for (let user of roomOfArray.viewers) {
                        if (user.name === name) {
                            roomOfArray.viewers.splice(roomOfArray.viewers.indexOf(user), 1);
                            roomOfArray.users.push({ name: name });
                            io.to(room).emit('newViewer', ({ room: room, users: roomOfArray.users, viewers: roomOfArray.viewers }));
                            break;
                        }
                    }
                }
                break;
            }
        }
    });

    socket.on('disconnect', () => {

        for (let roomOfArray of rooms) {
           
            if (roomOfArray.room == socket.room) {
             
                if (socket.spectate == false) {
                    for (let user of roomOfArray.users) {
                        if (user.name == socket.user) {
                           
                            roomOfArray.users.splice(roomOfArray.users.indexOf(user), 1);
                            io.sockets.in(socket.room).emit('disconnected', ({ room: socket.room, users: roomOfArray.users, viewers: roomOfArray.viewers }));
                            break;
                        }
                    }
                } else {
                    for (let user of roomOfArray.viewers) {
                        if (user.name == socket.user) {
                            roomOfArray.viewers.splice(roomOfArray.viewers.indexOf(user), 1);
                            io.sockets.in(socket.room).emit('disconnected', ({ room: socket.room, users: roomOfArray.users, viewers: roomOfArray.viewers }));
                            break;
                        }
                    }
                }

                if(roomOfArray.users.length == 0 && roomOfArray.viewers.length == 0){
                    rooms.splice(rooms.indexOf(roomOfArray), 1);
                }

                break;
            }
        }
        socket.leave(socket.room);
        socket.disconnect();

    });

});