import express from 'express';
import { home, addRoommate, getRoommates } from '../controllers/userController.js';
const router = express.Router()

router.get('/', home)

router.post('/roommate', addRoommate)

router.get('/roommates', getRoommates)  

router.get('*', (req, res)=>{
res.send('404 - page not found')
})


export default router