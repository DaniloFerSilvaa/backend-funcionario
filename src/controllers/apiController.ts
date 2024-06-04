import { Request, Response } from "express";
import { Sequelize } from "sequelize";
import { Funcionarios } from "../models/Funcionarios";

export const ping = (req:Request, res:Response) => {
    res.json({pong: true})
}
//Criar tabela, necessario descomentar a roda em ./routes/routes.ts
/*export const create = async (req:Request, res:Response) => {
    try {
        await Funcionarios.sync({ force: true });
    } catch (error) {
        res.json({error})
    }

    
    res.json({Create: true})
}*/

export const funcionarios = async (req:Request, res:Response) => {
    const funcionarios = await Funcionarios.findAll()

    res.json({funcionarios})
}