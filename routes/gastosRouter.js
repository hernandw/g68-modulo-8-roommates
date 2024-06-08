import express from 'express';
import { addGasto, getGastos } from '../controllers/gastosController.js';
const router = express.Router()

router.post('/gasto', addGasto)

router.get('/gastos', getGastos)

router.get('*', (req, res)=>{
res.send('404 - page not found')
})


export default router