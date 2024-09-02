
import 'reflect-metadata'
import express, {NextFunction, Request, Response } from 'express'
import 'express-async-errors'
import cors from 'cors'
import dotenv from 'dotenv'
import { errors } from 'celebrate'
import { AppError } from '@shared/AppError/AppError'
import router from './routes/routes'

//importação do arquivo de rotas
/* import router from '@shared/http/routes/routes'
import { AppError } from '@shared/AppError/AppError' */

//instanciando o modulo do express
import app from '@shared/app/app'

//configuração do dotenv para utilização de variaveis de ambiente
dotenv.config()

//instanciando modulos necessarios no express

//colocando rotas no express


//instanciando modulo de erro do celebrate no express
app.use(errors())

//midlleware de erro
// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    if (err instanceof AppError) {
        return res.status(err.status).json({
            status: 'Error',
            message: err.message,
            code: err.status
        })
    }

    return res.status(500).json({
        status: 'error',
        message: 'Internal server error',
        error: err.message
    })
})

/* eslint-disable no-console */
//iniciando servidor
app.listen(process.env.NUMBER_PORT, () => {
    console.log('------------------------------')
    console.log(`Inciando servidor local em localhost:${process.env.NUMBER_PORT}/api/v1/`)
    console.log('------------------------------')

})

export default app