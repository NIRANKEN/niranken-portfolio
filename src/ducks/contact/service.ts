import { apiUrl } from "lib/apiUrl";
import { ContactData } from "./ContactData";

export const send = async (contactData: ContactData): Promise<Response> => fetch(`${apiUrl}/contact/send`, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(contactData),
  mode: 'cors',
  credentials: 'include'
});