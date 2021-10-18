import { response, Router } from "express";
import path from "path"
import { getCustomRepository } from 'typeorm'
import fs from 'fs'
import multer from 'multer'
import uploadConfig from '../config/upload'

import ImageRepository from '../repositories/ImageRepository'

const imagesRouter = Router();
const upload = multer(uploadConfig)

/* //array do tipo pontos turisticos
const pontosTuristicos:PontosTuristico[] =[] */

imagesRouter.delete('/', async (request, response) => {

    const { id,nome } = request.body
    

    const imagesRepository = getCustomRepository(ImageRepository)
    const imagemFilePath = path.join(uploadConfig.directory,nome)
    await fs.promises.unlink(imagemFilePath)
    const image = await imagesRepository.delete(id)
    
    return response.json(image)
})

imagesRouter.post('/', upload.single('image'), async (request, response) => {
    const { id_item } = request.body
    console.log(request.file?.filename)
    const imagesRepository = getCustomRepository(ImageRepository)
    
    const image = imagesRepository.create({
        id_item, nome:request.file?.filename
    }
    )
    await imagesRepository.save(image)
    return response.json({ ok: true })
})
export default imagesRouter