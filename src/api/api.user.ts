import { AxiosError, AxiosInstance } from "axios";
import { TAccessToken, TLoginUser, TUser } from "../types/user";

class UserAPI {
  #client;

  constructor(client: AxiosInstance) {
    this.#client = client;
  }

  async getUser(accessToken: TAccessToken) {
    try {
      const resposne = await this.#client.get("/user", {
        headers: { Authorization: `Bearer ${accessToken}` },
      });

      const data = resposne.data;
      console.log(data);
      return data;
    } catch (error) {
      const { response } = error as unknown as AxiosError;
      if (response) throw { status: response.status, data: response.data };
      else throw error;
    }
  }

  async registerUser(userData: TUser) {
    try {
      const response = await this.#client.post("/register", userData);
      const data = response.data;

      return data;
    } catch (error) {
      const { response } = error as unknown as AxiosError;
      if (response) throw { status: response.status, data: response.data };
      else throw error;
    }
  }

  async logInUser(userData: TLoginUser) {
    try {
      const response = await this.#client.post(
        "/login?expiresIn=10m",
        userData
      );
      const data = response.data;

      return data;
    } catch (error) {
      const { response } = error as unknown as AxiosError;
      if (response) throw { status: response.status, data: response.data };
      else throw error;
    }
  }

  async updateUser({
    userData,
    accessToken,
  }: {
    userData: FormData;
    accessToken: TAccessToken;
  }) {
    try {
      const response = await this.#client.patch("/profile", userData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${accessToken}`,
        },
      });
      const data = response.data;

      return data;
    } catch (error) {
      const { response } = error as unknown as AxiosError;
      if (response) throw { status: response.status, data: response.data };
      else throw error;
    }
  }
}

export default UserAPI;
