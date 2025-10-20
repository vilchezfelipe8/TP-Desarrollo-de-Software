import { DataTypes } from 'sequelize';

const TurnoAtri ={
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    fecha:{
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    hora: {
        type: DataTypes.TIME,
        allowNull: false
    }
}

const TurnoOp ={
    timestamps: false,
    tableName: 'turno'
}

const TurnoModel = {
    TurnoAtri,
    TurnoOp
}

export default TurnoModel