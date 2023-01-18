import { sequelize } from "../database/db.js";
import {DataTypes} from "sequelize"

export const Parametros = sequelize.define('parametros',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    temperatura: {
        type: DataTypes.INTEGER
    },
    emotor1: {
        type: DataTypes.BOOLEAN,
        allowNull: true, 
    },
    emotor2: {
        type: DataTypes.BOOLEAN
    },
    eresistencia: {
        type: DataTypes.BOOLEAN
    },
},{
    timestamps: false
})