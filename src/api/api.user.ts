import { AxiosInstance } from "axios";
import { TLoginUser, TUser } from "../types/user";

class UserAPI {
  #client;

  constructor(client: AxiosInstance) {
    this.#client = client;
  }

  async getUser(accessToken: string | null) {
    try {
      const resposne = await this.#client.get("/user", {
        headers: { Authorization: `Bearer ${accessToken}` },
      });

      const data = resposne.data;

      return data;
    } catch (error) {
      console.error(error);
    }
  }

  async registerUser(userData: TUser) {
    try {
      const response = await this.#client.post("/register", userData);
      const data = response.data;

      return data;
    } catch (error) {
      console.error(error);
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
      console.error(error);
    }
  }

  async updateUser({
    userData,
    accessToken,
  }: {
    userData: FormData;
    accessToken: string | null;
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
      console.error(error);
    }
  }

  async logOutUser(accessToken: string | null) {
    try {
      const response = await this.#client.delete("/login", {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      const data = response.data;

      return data;
    } catch (error) {
      console.error(error);
    }
  }
}

export default UserAPI;
