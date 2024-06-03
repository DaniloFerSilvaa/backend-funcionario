import { Request, Response } from "express";
import { Sequelize } from "sequelize";
import { Funcionarios } from "../models/Funcionarios";
import * as bcrypt from "bcrypt";

export const ping = (req:Request, res:Response) => {
    res.json({pong: true})
}
//Criar tabela, necessario descomentar a roda em ./routes/routes.ts
export const create = (req:Request, res:Response) => {
    Funcionarios.sync({ force: true });
    
    res.json({Create: true})
}

export const funcionarios = async (req:Request, res:Response) => {
    const funcionarios = await Funcionarios.findAll()

    res.json({funcionarios})
}

export const funcionario = async (req:Request, res:Response) => {
    let {name, position, email, wage, password} = req.body;

    console.log(req.body);
    console.log(req.params);
    const saltRounds = 10;

    const hash = bcrypt.hashSync(password, saltRounds);
    let newFuncionario = await Funcionarios.create({name, position, email, wage, password: hash});

    res.json({id: newFuncionario.id, name, email, wage, password: hash});
    
}