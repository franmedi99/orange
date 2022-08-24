import {Router} from 'express';
const router = Router();

router.get('/',(req,res)=> res.send('index'));

router.get('/about',(req,res)=> res.sendFile('about'));

router.get('/contact',(req,res)=> res.sendFile('contact'));

export default router;