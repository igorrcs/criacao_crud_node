import { DataTypes, Model, Sequelize } from "sequelize";
class Contratante extends Model {
}
const sequelize = new Sequelize({
    dialect: "mysql",
    database: "bcofionode",
    username: "root",
    password: "123456",
    host: "localhost",
    port: 3306,
});
Contratante.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nomeCompleto: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    sequelize,
    modelName: "Contratante",
    tableName: "contratante",
    timestamps: false,
    freezeTableName: true,
});
export default Contratante; // Isso exporta a classe Contratante
