const BASE_URL = "http://localhost:8080/api/";

export const GET = async (endpoint: string) => {
  const res = await fetch(`${BASE_URL}${endpoint}`);
  const data = await res.json();
  return data;
};

export const POST = (
  endpoint: string,
  obj: any,
  errorMsg: string,
  esiteFunc: any
) => {
  fetch(`${BASE_URL}${endpoint}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(obj),
  })
    .then((res) => {
      if (!res.ok) {
        throw new Error(errorMsg);
      }
      return res.json();
    })
    .then((result) => {
      esiteFunc(result);
    })
    .catch((error) => {
      console.error("Errore:", error);
    });
};
