import axios from "axios";
import TodosAPI from "./api.todos";
import UserAPI from "./api.user";

export const BASE_URL = "https://moneyfulpublicpolicy.co.kr";
export const JSON_URL = "https://jsonplaceholder.typicode.com";
class API {
  #baseURL = BASE_URL;
  #jsonURL = JSON_URL;
  #client;
  #server;
  user;
  todos;

  constructor() {
    this.#client = axios.create({ baseURL: this.#baseURL });
    this.user = new UserAPI(this.#client);

    this.#server = axios.create({ baseURL: this.#jsonURL });
    this.todos = new TodosAPI(this.#server);
  }
}
const api = new API();

export default api;
