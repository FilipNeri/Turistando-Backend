import { response, Router } from "express";
import { getCustomRepository, Table } from 'typeorm'
import multer from 'multer'
import uploadConfig from '../config/upload'

import EventosRepository from "../repositories/EventosRepository";
import CreateEventoService from "../services/CreateEventoService"


const eventosRouter = Router();
const upload = multer(uploadConfig)

/* //array do tipo pontos turisticos
const evento:PontosTuristico[] =[] */

eventosRouter.post('/', async (request, response) => {
    const { nome, texto, descricao, latitude, longitude } = request.body

    const createEvento = new CreateEventoService()
    const evento = await createEvento.execute({ nome, texto, descricao, latitude, longitude })
    return response.json(evento)
})
eventosRouter.put('/', async (request, response) => {
    const { id, nome, texto, descricao, latitude, longitude } = request.body

    const eventosRepository = getCustomRepository(EventosRepository)
    const evento = await eventosRepository.update(id, { nome, texto, descricao, latitude, longitude })
    return response.json(evento)
})
eventosRouter.delete('/', async (request, response) => {
    const { id } = request.body

    const eventosRepository = getCustomRepository(EventosRepository)
    const evento = await eventosRepository.delete(id)
    return response.json(evento)
})
eventosRouter.get('/', async (request, response) => {

    const eventosRepository = getCustomRepository(EventosRepository)
    const evento = await eventosRepository.find()
    return response.json(evento)
})
/* eventosRouter.patch('/image', upload.single('image'), async (request, response) => {
    return response.json({ ok: true })
}) */
export default eventosRouter