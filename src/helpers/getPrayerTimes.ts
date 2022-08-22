import { IApi } from "../interfaces";

export default async (url: string): Promise<IApi> => {
  const response = await fetch(url);
  return response.json();
};
