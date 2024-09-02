import { prisma } from "@database/bd"
import { AppError } from "@shared/AppError/AppError"
import { Midia, Prisma } from "@prisma/client"

//não funcionou como eu esperava, tenho que validar melhor como funciona
export default class ListDateMidiasService{
    public async execute(filter: string): Promise<(Prisma.PickEnumerable<Prisma.MidiaGroupByOutputType, "finish_date"[]> & {})[]>{

        const midia = await prisma.midia.groupBy({
            by: "finish_date"
        })  
        
        if(!midia){
            throw new AppError("Nenhuma midia encontrada", 404)
        }

        return midia
    }
}
