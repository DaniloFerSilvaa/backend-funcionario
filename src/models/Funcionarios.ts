
import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../instances/pg';

export interface Funcionarios_Instance  extends Model {
     //O que contem no seu banco de dados.
     id: number;
     position: string;
     wage: number;
 };
 
 export const Funcionarios = sequelize.define<Funcionarios_Instance>('funcionarios',{
     //Estrutura do seu Banco de dados
     id: {
         primaryKey: true,
         autoIncrement: true,
         type: DataTypes.INTEGER
     },
     position: {
         type: DataTypes.STRING
     },
     wage: {
         type: DataTypes.FLOAT
     }
 }, {
     tableName: 'funcionarios',
     timestamps: false
 });
