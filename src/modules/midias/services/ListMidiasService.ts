import { prisma } from "@database/bd"
import { AppError } from "@shared/AppError/AppError"
import { Midia } from "@prisma/client"


export default class ListMidiasService{
    public async execute(): Promise<Midia[]>{

        const midia = await prisma.midia.findMany()  
        
        if(!midia){
            throw new AppError("Nenhuma midia encontrada", 404)
        }

        return midia
    }
}
