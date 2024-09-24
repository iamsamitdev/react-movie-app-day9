import Axios, { AxiosResponse } from "axios"

// กำหนดประเภทของข้อมูลที่ส่งไปใน request
interface LoginData {
  email: string
  password: string
}

// กำหนดประเภทของข้อมูลที่รับกลับจาก response
interface AuthResponse {
  access_token: string
  refresh_token: string
  user: {
    id: number
    first_name: string
    last_name: string
    email: string
  }
}

// สร้าง login function
const authLogin = (data: LoginData): Promise<AxiosResponse<AuthResponse>> => {
  return Axios.post<AuthResponse>("/login", data, {
    baseURL: import.meta.env.VITE_BASE_URL_API,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  })
}

// สร้าง logout function
const authLogout = (): Promise<AxiosResponse> => {
  return Axios.get("/logout", {
    baseURL: import.meta.env.VITE_BASE_URL_API,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  })
}

export { authLogin, authLogout }
