import { apiUrl } from "lib/apiUrl";

export const readAll = async (): Promise<Response> => fetch(`${apiUrl}/appeals`, {
  mode: 'cors',
  credentials: 'include'
});