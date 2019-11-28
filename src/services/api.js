//Importacao do axios e conexao com o banco de dados local
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3333"
});

export default api;
