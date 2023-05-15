import { Router } from "express";
import { prisma } from "../database";

export const rotas = Router()

rotas.get('/', async (req, res) => {
    try {
        const Users = await prisma.usuarios.findMany()
        res.json(Users).status(200)
    } catch (error) {
        res.status(400).send(error)
    }
})

rotas.post('/create', async (req, res) => {
        const { nome, email, age, gender, cpf, telephone } = req.body
        const PostUsers = await prisma.usuarios.create({
            data: {
                nome,
                email,
                age,
                gender,
                cpf,
                telephone
            }})
})

rotas.delete('/delete/:id', async (req, res) => {
    try {
        const { id } = req.params
        const deleteUser = await prisma.usuarios.delete({
            where: {
                id: id
            }
        })
        res.json(deleteUser).status(200)
    } catch (error) {
        res.json(error).status(400)
    }
})


rotas.put('/edit/:id', async (req, res) => {
    try {
        const { id } = req.params
        const { nome, email, age, gender, cpf, telephone } = req.body

        const EditUser = await prisma.usuarios.update({
            data: {
                age,
                cpf,
                email,
                nome,
                telephone,
                gender
            },
            where: {
                id,
            }
        })
        res.json(EditUser).status(200)
    } catch (error) {
        res.status(400)
    }

})

