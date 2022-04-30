import { apiUrl } from "lib/apiUrl";

export const readAll = async (): Promise<Response> => fetch(`${apiUrl}/skills`, {
  mode: 'cors',
  credentials: 'include'
});