
import { DataTypes } from 'sequelize';


const ClienteAtri ={
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    apellido: {
        type: DataTypes.STRING,
        allowNull: false
    },
    dni: {
        type: DataTypes.BIGINT,
        allowNull: false
    },
    direccion: {
        type: DataTypes.STRING,
        allowNull: false
    },
    nroTelefono:{
        type: DataTypes.BIGINT,
        allowNull: false
    } 

}

const ClienteOp = {
    tableName: 'cliente', 
    timestamps: false    
}

const ClienteModel = {
    ClienteAtri,
    ClienteOp
}


export default ClienteModel