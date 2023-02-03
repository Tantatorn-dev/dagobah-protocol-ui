import { FILFOX_URL, ZONDAX_URL } from "./const";

export const zondaxFetcher = (url: string) =>
  fetch(`${ZONDAX_URL}${url}`, {
    headers: { Authorization: "Bearer " + process.env.NEXT_PUBLIC_ZONDAX_KEY },
  }).then((res) => res.json());

export const filfoxFetcher = (url: string) =>
  fetch(`${FILFOX_URL}${url}`).then((res) => res.json());
