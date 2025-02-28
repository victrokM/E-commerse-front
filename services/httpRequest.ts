import { Response } from "../interfaces/response.interface";
import { ResponseObjectData } from "../types/response_data.type";

export default class HttpRequest {
  private endpoint: string;
  private params: string;
  private microService: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
    this.microService = `${process.env.NEXT_PUBLIC_API_URI ?? ""} `;
    this.params = "";
  }

  setMicroService(microService: string) {
    this.microService = microService;
  }

  setEndpoint(endpoint: string) {
    this.endpoint = endpoint;
  }

  setParams(params: string) {
    this.params = params;
  }

  buildUrl(id = ""): string {
    const endpoint = id !== "" ? `${this.endpoint}/${id}` : this.endpoint;
    const params = this.params !== "" ? `?${this.params}` : "";

    return `${this.microService}/${endpoint}${params}`;
  }

  async get<T>(
    id: string | null = null,
    isPublic = false,
    token: string | null = null
  ) {
    try {
      let response: globalThis.Response;
      if (id != null) {
        response = await fetch(this.buildUrl(id), {
          headers: {
            "Content-Type": "application/json",
            "api-key": isPublic
              ? process.env.NEXT_PUBLIC_FRONT_API_KEY ?? ""
              : "",
            Authorization: token !== null ? `Bearer ${token}` : "",
          },
        });
      } else {
        response = await fetch(this.buildUrl(""), {
          headers: {
            "Content-Type": "application/json",
            "api-key": isPublic
              ? process.env.NEXT_PUBLIC_FRONT_API_KEY ?? ""
              : "",
            Authorization: token !== null ? `Bearer ${token}` : "",
          },
        });
      }
      return response.json() as Response<T>;
    } catch (error) {
      return {
        data: null,
        errors: Array(error as string),
        code: 500,
      };
    }
  }

  async post<T>(
    data: ResponseObjectData,
    isPublic = false,
    token: string | null = null
  ): Promise<Response<T>> {
    try {
      const response: globalThis.Response = await fetch(this.buildUrl(""), {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
          "api-key": isPublic
            ? process.env.NEXT_PUBLIC_FRONT_API_KEY ?? ""
            : "",
          Authorization: token !== null ? `Bearer ${token}` : "",
        },
      });

      return response.json() as Response<T>;
    } catch (error) {
      console.error(error);
      return {
        data: null,
        errors: Array(error as string),
        code: 500,
      };
    }
  }

  async put<T>(
    id: string,
    data: ResponseObjectData,
    isPublic = false,
    token: string | null = null
  ): Promise<Response<T>> {
    try {
      const response: globalThis.Response = await fetch(this.buildUrl(id), {
        method: "PUT",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
          "api-key": isPublic
            ? process.env.NEXT_PUBLIC_FRONT_API_KEY ?? ""
            : "",
          Authorization: token !== null ? `Bearer ${token}` : "",
        },
      });

      return response.json() as Response<T>;
    } catch (error) {
      console.error(error);
      return {
        data: null,
        errors: Array(error as string),
        code: 500,
      };
    }
  }

  async putNew<T>(
    data: ResponseObjectData,
    isPublic = false,
    token: string | null = null
  ): Promise<Response<T>> {
    try {
      const response: globalThis.Response = await fetch(this.buildUrl(), {
        method: "PUT",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
          "api-key": isPublic
            ? process.env.NEXT_PUBLIC_FRONT_API_KEY ?? ""
            : "",
          Authorization: token !== null ? `Bearer ${token}` : "",
        },
      });

      return response.json() as Response<T>;
    } catch (error) {
      console.error(error);
      return {
        data: null,
        errors: Array(error as string),
        code: 500,
      };
    }
  }

  async delete<T>(
    id: string | null = null,
    isPublic = false,
    token: string | null = null
  ): Promise<Response<T>> {
    try {
      const response: globalThis.Response = await fetch(
        this.buildUrl(id ?? ""),

        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            "api-key": isPublic
              ? process.env.NEXT_PUBLIC_FRONT_API_KEY ?? ""
              : "",
            Authorization: token !== null ? `Bearer ${token}` : "",
          },
        }
      );
      if (response.status === 204) {
        return {
          code: 204,
        };
      }
      return response.json() as Response<T>;
    } catch (error) {
      console.error(error);
      return {
        data: null,
        errors: Array(error as string),
        code: 500,
      };
    }
  }
}
