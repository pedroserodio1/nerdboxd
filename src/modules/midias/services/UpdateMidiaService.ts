import { prisma } from "@database/bd"
import { AppError } from "@shared/AppError/AppError"

interface IRequest {
  name?: string
  type?: string
  link?: string
  started_date?:Date
  finish_date?:Date
  author?:string
}

export default class UpdateMidiaService{
    public async execute(data: IRequest, id: string): Promise<void>{

        const midiaExist = await prisma.midia.findUnique({
            where: {
                id
            }
        })
        
        if(!midiaExist){
            throw new AppError("Midia não existe", 404)
        }

        data.type = data.type?.toUpperCase()

        await prisma.midia.update({
            data,
            where: {
                id
            }
        })
        

        return

    
    }
}
