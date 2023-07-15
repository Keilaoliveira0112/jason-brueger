import errorHandling from "../errorHandling/errorHandling";

const API_URL = "https://burger-queen-api-mock-lilac.vercel.app";

const request = async (endpoint, method, headers, body) => {
  const options = {
    method,
    headers: {
      "Content-Type": "application/json",
      ...headers,
    },
  };
  if (body) {
    options.body = JSON.stringify(body);
  }
  const response = await fetch(`${API_URL}/${endpoint}`, options);

  const result = await response.json();

  if (response.ok) {
    return result;
  }
  return errorHandling(result);
};

export default request;
