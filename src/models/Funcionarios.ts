
import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../instances/pg';

export interface Funcionarios_Instance  extends Model {
     //O que contem no seu banco de dados.
     id: number;
     name: string;
     position: string;
     email:string;
     wage: number;
     password: string;
 };
 
 export const Funcionarios = sequelize.define<Funcionarios_Instance>('funcionarios',{
     //Estrutura do seu Banco de dados
     id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
     },
     name: {
        type: DataTypes.STRING
     },
     position: {
        type: DataTypes.STRING
     },
     email: {
        type: DataTypes.STRING
     },
     wage: {
        type: DataTypes.FLOAT
     },
     password: {
        type: DataTypes.STRING
     }
 }, {
     tableName: 'funcionarios',
     timestamps: false
 });
