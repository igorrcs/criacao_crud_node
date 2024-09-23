var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import express from "express";
import contratantesRoutes from "./routes/contratante-routes.js";
import sequelize from "./shared/connection.js";
const app = express();
app.use(express.json());
const PORT = 3000;
// Routes here
app.get("/", (req, res) => {
    res.status(200).send("Rodando a API - com Ts");
});
app.use("/", contratantesRoutes);
(() => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Testa a conexão
        yield sequelize.authenticate();
        console.log("Connection has been established successfully.");
        // Sincroniza os modelos com o banco de dados, forçando a recriação das tabelas
        yield sequelize.sync({ force: true }); // Adicione { force: true } aqui
        console.log("Models synchronized with the database.");
        // Inicia o servidor
        app.listen(PORT, () => {
            console.log("Server is running on port", PORT);
        });
    }
    catch (error) {
        console.error("Unable to connect to the database", error);
    }
}))();
export default app;
