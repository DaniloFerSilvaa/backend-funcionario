import { Request, Response } from "express";
import { Sequelize } from "sequelize";
import { Funcionarios } from "../models/Funcionarios";

export const ping = (req:Request, res:Response) => {
    res.json({pong: true})
}
//Criar tabela, necessario descomentar a roda em ./routes/routes.ts
export const create = (req:Request, res:Response) => {
    Funcionarios.sync({ force: true });
    
    res.json({Create: true})
}
//Configure suas rotas aqui