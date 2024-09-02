import { prisma } from "@database/bd"
import { AppError } from "@shared/AppError/AppError"
import { Midia } from "@prisma/client"

export default class SearchMidiaService{
    public async execute(campo: string, valor: string): Promise<Midia[]>{

        let where;

        console.log(campo)

        switch(campo){
            case "name": 
                where = {
                    'name': {
                        contains: valor
                    }
                }
                break;
            case "type": 
                where = {
                    'type': {
                        contains: valor.toUpperCase()
                    }
                }
                break;
            case "id": 
                where = {
                    'id': {
                        contains: valor
                    }
                }
                break;
            default:
                where = {
                    id: {
                        not: 'null'
                    }
                }
        }

        console.log(where)

        const midiaExist = await prisma.midia.findMany({
            where
        })
        
        if(!midiaExist){
            throw new AppError("Midia não existe", 404)
        }
        

        return midiaExist

    
    }
}
