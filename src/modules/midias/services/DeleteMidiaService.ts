import { prisma } from "@database/bd"
import { AppError } from "@shared/AppError/AppError"

export default class DeleteMidiaService{
    public async execute(id: string): Promise<void>{

        const midiaExist = await prisma.midia.findUnique({
            where: {
                id
            }
        })
        
        if(!midiaExist){
            throw new AppError("Midia não existe", 404)
        }

        await prisma.midia.delete({
            where: {
                id
            }
        })
        

        return

    
    }
}
