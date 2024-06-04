import { Request, Response } from "express";
import { Funcionarios } from "../models/Funcionarios";
import * as bcrypt from "bcrypt";

interface EditFuncionarioBody {
    name?: string;
    position?: string;
    email?: string;
    wage?: number;
    password?: string;
}

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

export const funcionarios = async (req:Request<{}, {}, EditFuncionarioBody>, res:Response) => {
    const funcionarios = await Funcionarios.findAll()

    res.json({funcionarios});
}

export const editFuncionario = async (req:Request, res:Response) => {
    let {name, position, email, wage, password} = req.body;
    const id = req.params.id

    //Retornando erro, caso não seja enviado nenhum dado
    if (!name && !position && !email && !wage && !password) {
        res.json({error: "Coloque o dado que deseja mudar"});
        return
    }

    //Encontrando o user pelo id enviado pelo params usando tryCatch para caso haja erro no servidor
    try {
        let user = await Funcionarios.findByPk(id);

        if (!user) {
            res.json({ error: "Usuário não encontrado" });
            return;
        }

        if (name) user.name = name;
        if (position) user.position = position;
        if (email) user.email = email;
        if (wage) user.wage = wage;
        if (password) {
            user.password = await bcrypt.hash(password, 10);
        }

        await user.save();

        res.json({ user });
        return
        
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Erro interno do servidor" });
        return
    }

}