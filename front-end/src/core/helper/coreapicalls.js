import { API } from "../../backend";

export const getProducts = () => {
  console.log(API)
  return fetch(` ${API}product/`, { method: "GET" })
    .then((response) => {
      console.log(`response is `);
      console.log(response.body)
      return response.json();
    })
    .catch((err) => console.log(err));
};
