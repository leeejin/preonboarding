import { AxiosError, AxiosInstance } from "axios";
import { TTodo } from "../types/todo";


class TodosAPI {
  #client;
  constructor(server: AxiosInstance) {
    this.#client = server;
  }
  async getTodos(): Promise<TTodo[]> {
    try {
      const response = await this.#client.get("/todos");
      const data = response.data;
      return data;
    } catch (error) {
      const { response } = error as unknown as AxiosError;
      if (response) throw { status: response.status, data: response.data };
      else throw error;
    }
  }
  async getTodo(todoNm: number): Promise<TTodo> {
    try {
      const response = await this.#client.get(`/todos/${todoNm}`);
      const data = response.data;
      return data;
    } catch (error) {
      const { response } = error as unknown as AxiosError;
      if (response) throw { status: response.status, data: response.data };
      else throw error;
    }
  }
}

export default TodosAPI;
