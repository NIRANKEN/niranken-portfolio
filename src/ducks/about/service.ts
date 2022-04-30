import { apiUrl } from "lib/apiUrl";

export const read = async (): Promise<Response> => fetch(`${apiUrl}/about`, {
  mode: 'cors',
  credentials: 'include'
});