import { mockedWorks } from "./mockedWorks";

export const readAll = async ():Promise<Response> => ({
  json: async () => {
    await new Promise(resolve => setTimeout(resolve, 200));
    return mockedWorks;
  },
  status: 200,
  statusText: 'This is Dummy works',
} as Response);

export const read = async (workId: string):Promise<Response> => {
  await new Promise(resolve => setTimeout(resolve, 1000));
  const filteredMockedWorks = mockedWorks.filter(v => v.id === workId);
  return {
    json: async () => filteredMockedWorks.length === 0 ? {} : filteredMockedWorks[0],
    status: 200,
    statusText: 'This is Dummy work(workId 1)',
  } as Response
}