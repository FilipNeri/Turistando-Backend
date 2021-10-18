import 'reflect-metadata'
import express from "express"
import routes from "./routes";
import cors from 'cors';

import uploadConfig from './config/upload';
import "./database"

const app = express();

app.use(cors());
app.use('/files',express.static(uploadConfig.directory))
app.use(express.json());
app.use(routes)

app.listen(3333,()=>{
    console.log('🚀 Turistando-back rodando')
})