
import { DataTypes } from 'sequelize';



const AnimalAtri =  {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    especie: {
        type: DataTypes.STRING,
        allowNull: false
    },
    raza: {
        type: DataTypes.STRING,
        allowNull: false
    },
}

const AnimalOp = {
    tableName: 'animal',
    timestamps: false    
}

const AnimalModel = {
    AnimalAtri,
    AnimalOp
}
//Animal.hasOne(Cliente, {as: 'cliente'})
//Animal.hasMany(Tratamiento, {as: 'tratamiento'})

export default AnimalModel