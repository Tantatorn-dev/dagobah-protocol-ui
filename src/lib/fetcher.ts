import { ZONDAX_URL } from "./const";

const zondaxFetcher = (url: string) =>
  fetch(`${ZONDAX_URL}${url}`, {
    headers: { Authorization: "Bearer " + process.env.NEXT_PUBLIC_ZONDAX_KEY },
  }).then((res) => res.json());

export default zondaxFetcher;
