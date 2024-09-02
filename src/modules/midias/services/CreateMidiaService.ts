import { prisma } from "@database/bd"
import { AppError } from "@shared/AppError/AppError"
import { Midia } from "@prisma/client"

interface IRequest {
  name: string
  type: string
  link: string
  started_date:Date
  finish_date:Date
  author:string
}

export default class CreateMidiaService{
    public async execute(data: IRequest): Promise<Midia>{

        data.type = data.type.toUpperCase()

        const midia = await prisma.midia.create({
            data
        })

        

        return midia
    }
}
