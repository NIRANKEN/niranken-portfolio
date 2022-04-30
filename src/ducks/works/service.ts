import { mockedWorks } from "./mockedWorks";
import { apiUrl } from "lib/apiUrl";

export const readAll = async (): Promise<Response> => fetch(`${apiUrl}/works`, {
  mode: 'cors',
  credentials: 'include'
});

export const read = async (workId: string):Promise<Response> => {
  await new Promise(resolve => setTimeout(resolve, 1000));
  const filteredMockedWorks = mockedWorks.filter(v => v.id === workId);
  return {
    json: async () => filteredMockedWorks.length === 0 ? {} : filteredMockedWorks[0],
    status: 200,
    statusText: 'This is Dummy work(workId 1)',
  } as Response
}