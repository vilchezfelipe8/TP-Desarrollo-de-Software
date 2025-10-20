import { Sequelize } from "sequelize";
import dotenv from 'dotenv';
import AnimalModel from "./Animal.js";
import ClienteModel from "./Cliente.js";
import VeterinarioModel from "./Veterinario.js";
import TratamientoModel from "./Tratamiento.js";
import TurnoModel from "./Turno.js";


dotenv.config();


const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: 'sqlite'
})

const Animal = sequelize.define(
    'Animal',
    AnimalModel.AnimalAtri,
    AnimalModel.AnimalOp
)
const Cliente = sequelize.define(
    'Cliente',
    ClienteModel.ClienteAtri,
    ClienteModel.ClienteOp
)
const Tratamiento = sequelize.define(
    'Tratamiento',
    TratamientoModel.TratamientoAtri,
    TratamientoModel.TratamientoOp
)
const Veterinario = sequelize.define(
    'Veterinario',
    VeterinarioModel.VeterinarioAtri,
    VeterinarioModel.VeterinarioOp
)
const Turno = sequelize.define(
    'Turno',
    TurnoModel.TurnoAtri,
    TurnoModel.TurnoOp
)



sequelize.models.Animal.belongsTo(sequelize.models.Cliente, {
    foreignKey: 'IdCliente'
})

sequelize.models.Tratamiento.belongsTo(sequelize.models.Veterinario,{
    foreignKey: 'IdVeterinario'
})
sequelize.models.Tratamiento.belongsTo(sequelize.models.Animal, {
    foreignKey: 'IdAnimal'
})

sequelize.models.Turno.belongsTo(sequelize.models.Animal, {
    foreignKey: 'IdAnimal'
})
sequelize.models.Turno.belongsTo(sequelize.models.Veterinario, {
    foreignKey: 'IdVeterinario'
})


export { sequelize, Animal, Cliente, Tratamiento, Veterinario, Turno };