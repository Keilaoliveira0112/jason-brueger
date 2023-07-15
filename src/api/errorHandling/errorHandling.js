const errorHandling = (response) => {
  switch (response) {
    case "Cannot find user":
      throw new Error("Usuário Inexistente");
    case "Password is too short":
      throw new Error("Senha muito curta");
    case "Incorrect password":
      throw new Error("Senha incorreta");
    case "Email and password are required":
      throw new Error("Email e senha são obrigatórios");
    case "jwt malformed":
      throw new Error("Acesso restrito para apenas pessoas autorizadas");
    default:
      throw new Error(response);
  }
};

export default errorHandling;
