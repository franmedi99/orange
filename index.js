const express = require('express');
const app = express();
const path = require('path');
const cors = require("cors");
app.use(express.json());

//configuraciones
app.set('port', process.env.PORT || 4000);
// const corsOptions = {
//     origin: 'http://localhost:3000',
//     credentials: true,            //access-control-allow-credentials:true
//     optionSuccessStatus: 200,
// }

//middlewares
//app.use(cors(corsOptions))

 app.get('*', function (req, res) {
     res.sendFile(path.join(__dirname, 'build', 'index.html'));
 });

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
    // console.log("nuevo socket: " + socket.id)

    socket.on('join', ({ username, room }) => {
        socket.join(room);
        if (rooms.length == 0) {
            rooms.push({ room: room, users: [{ name: username, role: "admin", voted: false, spectate: false }] });
            io.to(room).emit('joined', ([{ room: room, users: [{ name: username, role: "admin", voted: false, spectate: false }] }]));
        } else {
            for (let roomOfArray of rooms) {
                if (roomOfArray.room == room) {
                    count = 0;
                    for (let user of roomOfArray.users) {
                        if (user.name == username) {

                            count++;
                            break;

                        }
                    }
                    if (count == 0) {
                        roomOfArray.users.push({ name: username, role: "user", voted: false, spectate: false });
                        io.to(room).emit('joined', ([{ room: room, users: roomOfArray.users }]));

                    } else {
                        io.to(room).emit('joined', ([{ room: room, users: roomOfArray.users }]));

                    }
                    break;
                } else {
                    rooms.push({ room: room, users: [{ name: username, role: "admin", voted: false, spectate: false }] });
                    io.to(room).emit('joined', ({ room: room, users: [{ name: username, role: "admin", voted: false, spectate: false }] }));
                }
            };
        }

    });

    socket.on('select', ({ number, name, room }) => {
        for (let roomOfArray of rooms) {
            if (roomOfArray.room === room) {
                for (let user of roomOfArray.users) {
                    if (user.name === name) {
                        user.voted = true;
                        user.number = number;
                        io.to(room).emit('selected', ({ room: room, users: roomOfArray.users }));
                        break;
                    }
                }
            }
        }
    }
    );

    socket.on('reveal', (room) => {
        for (let roomOfArray of rooms) {
            if (roomOfArray.room === room) {
                io.to(room).emit('revealed', ({ room: room, users: roomOfArray.users }));
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
            }
        }
    });
    /*
     socket.on('disconnect', ({username}) => {
        console.log("desconectado")
       for (let roomOfArray of rooms) {
         for (let user of roomOfArray.users) {
           if (user.name === username) {
                roomOfArray.users.splice(roomOfArray.users.indexOf(user), 1);
             io.to(room).emit('disconnected', ({room: room, users: roomOfArray.users}));
             break;
           }
    
         }
    
       }
     })
    */
});