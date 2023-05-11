import axios from "axios";

const client = axios.create({
  baseURL: `${import.meta.env.VITE_BASE_URL}`,
  headers: {
    "Content-type": "application/json",
  },
});

export default client;

export const weatherGetFetcher = (url: string) =>
  client.get(url).then((res) => res.data);
