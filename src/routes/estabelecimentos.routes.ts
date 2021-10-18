import { response, Router } from "express";
import { getCustomRepository } from 'typeorm'
import multer from 'multer'
import uploadConfig from '../config/upload'

import EstabelecimentosRepository from "../repositories/EstabelecimentosRepository";
import CreateEstabelecimentoService from "../services/CreateEstabelecimentoService"


const estabelecimentosRouter = Router();
const upload = multer(uploadConfig)

/* //array do tipo pontos turisticos
const estabelecimento:PontosTuristico[] =[] */

estabelecimentosRouter.post('/', async (request, response) => {
    const { nome, texto, descricao, latitude, longitude } = request.body

    const createEstabelecimento = new CreateEstabelecimentoService()
    const estabelecimento = await createEstabelecimento.execute({ nome, texto, descricao, latitude, longitude })
    return response.json(estabelecimento)
})
estabelecimentosRouter.put('/', async (request, response) => {
    const { id, nome, texto, descricao, latitude, longitude } = request.body

    const estabelecimentosRepository = getCustomRepository(EstabelecimentosRepository)
    const estabelecimento = await estabelecimentosRepository.update(id, { nome, texto, descricao, latitude, longitude })
    return response.json(estabelecimento)
})
estabelecimentosRouter.delete('/', async (request, response) => {
    const { id } = request.body

    const estabelecimentosRepository = getCustomRepository(EstabelecimentosRepository)
    const estabelecimento = await estabelecimentosRepository.delete(id)
    return response.json(estabelecimento)
})
estabelecimentosRouter.get('/', async (request, response) => {
    const estabelecimentosRepository = getCustomRepository(EstabelecimentosRepository)
    const estabelecimento = await estabelecimentosRepository.find()
    return response.json(estabelecimento)
})
/* estabelecimentosRouter.patch('/image', upload.single('image'), async (request, response) => {
    return response.json({ ok: true })
}) */
export default estabelecimentosRouter