import {Request, Response} from 'express'
import CreateMidiaService from "../services/CreateMidiaService";
import ListMidiasService from '../services/ListMidiasService';
import UpdateMidiaService from '../services/UpdateMidiaService';
import DeleteMidiaService from '../services/DeleteMidiaService';
import SearchMidiaService from '../services/SearchMidiaService';
import ListDateMidiasService from '../services/ListDateMidiaService';

export default class MidiaController {
    public async create(req: Request, res: Response): Promise<Response>{
        const createMidiaService = new CreateMidiaService()

        const data = req.body

        const midia = await createMidiaService.execute(data)

        return res.status(201).json(midia)
    }

    public async index(req: Request, res: Response): Promise<Response>{
        const listMidiasServices = new ListMidiasService()

        const midias = await listMidiasServices.execute()

        return res.status(200).json(midias)
    }

    public async update(req: Request, res: Response): Promise<Response>{
        const updateMidiaService = new UpdateMidiaService()

        const data = req.body
        const id = req.params.id

        const midia = await updateMidiaService.execute(data, id)

        return res.status(204).json(midia)
    }

    public async delete(req: Request, res: Response): Promise<Response>{
        const deleteMidiaService = new DeleteMidiaService()

        const id = req.params.id
        
        const midia = await deleteMidiaService.execute(id)

        return res.status(204).json(midia)
    }

    public async search(req: Request, res: Response): Promise<Response> {
        const searchMidiaService = new SearchMidiaService()

        const {campo, valor} = req.body

        const midia = await searchMidiaService.execute(campo, valor)

        return res.status(200).json(midia)
    }

    public async listDate(req: Request, res: Response): Promise<Response> {
        const listDateMidiaService = new ListDateMidiasService()

        const {finish_date} = req.body

        const midia = await listDateMidiaService.execute(finish_date)

        return res.status(200).json(midia)
    }
}