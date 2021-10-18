import { response, Router } from "express";
import { getCustomRepository } from 'typeorm'
import multer from 'multer'
import uploadConfig from '../config/upload'

import RotasTuristicasRepository from "../repositories/RotasTuristicasRepository";
import CreateRotaTuristicaService from "../services/CreateRotaTuristicaService"


const rotasTuristicasRouter = Router();
const upload = multer(uploadConfig)

/* //array do tipo pontos turisticos
const RotaTuristica:PontosTuristico[] =[] */

rotasTuristicasRouter.post('/', async (request, response) => {
    const { nome, texto, descricao, latitude, longitude } = request.body

    const createRotaTuristica = new CreateRotaTuristicaService()
    const RotaTuristica = await createRotaTuristica.execute({ nome, texto, descricao, latitude, longitude })
    return response.json(RotaTuristica)
})
rotasTuristicasRouter.put('/', async (request, response) => {
    const { id, nome, texto, descricao, latitude, longitude } = request.body

    const rotasTuristicasRepository = getCustomRepository(RotasTuristicasRepository)
    const RotaTuristica = await rotasTuristicasRepository.update(id, { nome, texto, descricao, latitude, longitude })
    return response.json(RotaTuristica)
})
rotasTuristicasRouter.delete('/', async (request, response) => {
    const { id } = request.body

    const rotasTuristicasRepository = getCustomRepository(RotasTuristicasRepository)
    const RotaTuristica = await rotasTuristicasRepository.delete(id)
    return response.json(RotaTuristica)
})
rotasTuristicasRouter.get('/', async (request, response) => {
    const rotasTuristicasRepository = getCustomRepository(RotasTuristicasRepository)
    const RotaTuristica = await rotasTuristicasRepository.find()
    return response.json(RotaTuristica)
})
/* rotasTuristicasRouter.patch('/image', upload.single('image'), async (request, response) => {
    return response.json({ ok: true })
}) */
export default rotasTuristicasRouter