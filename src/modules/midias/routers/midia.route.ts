import { Router } from "express";
import MidiaController from "../controller/MidiaController";
import { Joi, Segments, celebrate } from "celebrate";

const midiaRouter = Router()
const controller = new MidiaController()

midiaRouter.post('/', 
    celebrate({
        [Segments.BODY]: {
            name: Joi.string().required(),
            type: Joi.string().required(),
            link: Joi.string().required(),
            started_date:Joi.date().required(),
            finish_date:Joi.date().required(),
            author:Joi.string().required()
        }
    }),
    controller.create)

midiaRouter.get('/', controller.index)

midiaRouter.put('/:id', 
    celebrate({
        [Segments.BODY]: {
            name: Joi.string(),
            type: Joi.string(),
            link: Joi.string(),
            started_date:Joi.date(),
            finish_date:Joi.date(),
            author:Joi.string()
        },
        [Segments.PARAMS]: {
            id: Joi.string().uuid().required()
        }
    }),
    controller.update
)

midiaRouter.delete('/:id',
    celebrate({
        [Segments.PARAMS]: {
            id: Joi.string().uuid().required()
        }
    }),
    controller.delete
)


midiaRouter.post('/search',
    celebrate({
        [Segments.BODY]: {
            campo: Joi.string().required(),
            valor: Joi.string().required()
        }
    }),
    controller.search
)

midiaRouter.post('/listDate',
    celebrate({
        [Segments.BODY]: {
            finish_date: Joi.string().required()
        }
    }),
    controller.listDate
)
export default midiaRouter