const API_URL = 'https://burger-queen-api-mock-xi.vercel.app';

export const userLogin = async (email, password) => {
  const response = await fetch(`${API_URL}/login`, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email, password })
  });
 
  if(response.status >= 400 && response.status <= 500) {
    console.log(response);
    throw new Error('Verifique seus dados!');
  } 
  return response.json();
}