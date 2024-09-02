import request from 'supertest'
import app from '../../../shared/app/app'

describe('Rotas Midia', () => {
    it('Return 201 from create midia', async () => {
        const res = await request(app).post('/api/v1/midia/').send({
            name: "Yakuza 0",
            type: "Game",
            link: "https://www.backloggd.com/games/yakuza-0/",
            started_date: "25/08/2022",
            finish_date: "25/08/2022",
            author:"RGG"
        })

        expect(res.statusCode).toEqual(201)
                                    
    })
})

