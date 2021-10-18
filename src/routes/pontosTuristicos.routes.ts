import { response, Router } from "express";
import { getCustomRepository } from 'typeorm'
import multer from 'multer'
import uploadConfig from '../config/upload'

import PontosTuristicosRepository from "../repositories/PontosTuristicosRepository";
import CreatePontoTuristicoService from "../services/CreatePontoTuristicoService"


const pontosTuristicosRouter = Router();
const upload = multer(uploadConfig)

/* //array do tipo pontos turisticos
const pontosTuristicos:PontosTuristico[] =[] */

pontosTuristicosRouter.post('/', async (request, response) => {
    const { nome, texto, descricao, latitude, longitude } = request.body

    const createPontoTuristico = new CreatePontoTuristicoService()
    const pontoTuristicos = await createPontoTuristico.execute({ nome, texto, descricao, latitude, longitude })
    return response.json(pontoTuristicos)
})
pontosTuristicosRouter.put('/', async (request, response) => {
    const { id, nome, texto, descricao, latitude, longitude } = request.body

    const pontosTuristicosRepository = getCustomRepository(PontosTuristicosRepository)
    const pontosTuristicos = await pontosTuristicosRepository.update(id, { nome, texto, descricao, latitude, longitude })
    return response.json(pontosTuristicos)
})
pontosTuristicosRouter.delete('/', async (request, response) => {
    const { id } = request.body

    const pontosTuristicosRepository = getCustomRepository(PontosTuristicosRepository)
    const pontosTuristicos = await pontosTuristicosRepository.delete(id)
    return response.json(pontosTuristicos)
})
pontosTuristicosRouter.get('/', async (request, response) => {
    const pontosTuristicosRepository = getCustomRepository(PontosTuristicosRepository)
    const pontosTuristicos = await pontosTuristicosRepository.find()
    return response.json(pontosTuristicos)
})
/* pontosTuristicosRouter.patch('/image', upload.single('image'), async (request, response) => {
    return response.json({ ok: true })
}) */
export default pontosTuristicosRouter