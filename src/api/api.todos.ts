import { AxiosInstance } from "axios";
import { TTodo } from "../types/todos";

class TodosAPI {
  #client;
  constructor(server: AxiosInstance) {
    this.#client = server;
  }
  async getTodos(): Promise<TTodo[]> {
    const response = await this.#client.get("/todos");
    const data = response.data;
    return data;
  }
  async getTodo(todoNm: number) {
    const response = await this.#client.get(`/todos/${todoNm}`);
    const data = response.data;
    return data;
  }
}

export default TodosAPI;
