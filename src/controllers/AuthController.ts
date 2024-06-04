import { Request, Response } from "express";
import { Funcionarios } from "../models/Funcionarios";
import * as bcrypt from "bcrypt";

//Função para fazer login. Retorna o usuario logado, ou um erro
export const singin = async (req:Request, res:Response) => {
    const {email, password} = req.body;

    const emailToLower = email.toLowerCase();

    if (!email || !password) {
        res.json({erro: "Necessario email e senha"});
        return
    }

    const user = await Funcionarios.findOne({
        where: {
            email: emailToLower
        }
    })

    if (!user) {
        res.json({erro: "Usuario não existe"});
        return
    }

    console.log(user.dataValues)
    const hash = user.dataValues.password

    const match = await bcrypt.compare(password, hash);
    
    if (!match) {
        res.json({erro: "Email ou senha errado."})
        return
    }

    res.json({user});
}

export const singup = async (req:Request, res:Response) => {
    let {name, position, email, wage, password} = req.body;

    if (!name || !position || !email || !wage || !password) {
        res.json({erro: "Necessario preencher TODOS os dados"});
        return
    }
    const emailtoLower = email.toLowerCase();

    const user = await Funcionarios.findOne({
        where: {
            email: emailtoLower
        }
    });

    if (user) {
        res.json({erro: "Este email já existe!"});
        return
    }

    const saltRounds = 10;

    const hash = bcrypt.hashSync(password, saltRounds);
    let newUser = await Funcionarios.create({name, position, email: emailtoLower, wage, password: hash});

    res.json({newUser});
}