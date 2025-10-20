
import { DataTypes } from 'sequelize';


const VeterinarioAtri =  {
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
    especialidad: {
        type: DataTypes.STRING,
        allowNull: false
    },
    nroTelefono:{
        type: DataTypes.BIGINT,
        allowNull: false
    } 

}

const VeterinarioOp = {
    timestamps: false,
    tableName: 'veterinario'
}

const VeterinarioModel = {
    VeterinarioAtri,
    VeterinarioOp
}




export default VeterinarioModel