
import { DataTypes } from 'sequelize';


const TratamientoAtri =  {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    descripcion: {
        type: DataTypes.STRING,
        allowNull: false
    },
}

const TratamientoOp = {
    timestamps: false,
    tableName: 'tratamiento'
}

const TratamientoModel = {
    TratamientoAtri,
    TratamientoOp
}


export default TratamientoModel