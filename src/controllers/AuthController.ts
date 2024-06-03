import { Request, Response } from "express";
import { Funcionarios } from "../models/Funcionarios";
import * as bcrypt from "bcrypt";

export const singin = async (req:Request, res:Response) => {
    const {email, password} = req.body;

    if (!email || !password) {
        res.json({endpoint: "Necessario email e senha"});
        return
    }

    const user = await Funcionarios.findOne({
        where: {
            email
        }
    })

    if (!user) {
        res.json({endpoint: "Usuario não existe"});
        return
    }

    console.log(user.dataValues)
    const hash = user.dataValues.password

    const match = await bcrypt.compare(password, hash);
    
    if (!match) {
        res.json({endpoint: "Email ou senha errado."})
        return
    }

    res.json({user});
}