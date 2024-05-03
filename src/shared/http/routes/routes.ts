import { Router } from "express";

const router = Router()

router.get('/', (req, res) => {
    return res.status(200).json({
        autor: "Pedro Serôdio",
        versão: "1.0.0",
        projeto: "Nerdboxd",
        contato: {
            twitter: "https://twitter.com/pedroserodio",
            linkedin: "https://www.linkedin.com/in/pedroserodio1/",
            github: "https://github.com/pedroserodio1"
        }
    })
})

export default router