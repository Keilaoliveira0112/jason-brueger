const API_URL = 'http://localhost:8080';

export const userLogin = async (email, password) => {
    const response = await fetch(`${API_URL}/login`, {
       method: "POST",
          headers: {
             'Content-Type': 'application/json'
          },
          body: JSON.stringify({ email, password })
      });
  
      if(response.status === 400) {
          console.log(response.status);
         throw new Error('Senha incorreta ou usuário não cadastrado!');
      } 
      return response.json();
  }