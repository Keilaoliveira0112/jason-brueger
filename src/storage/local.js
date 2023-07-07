export const setItem = (chave, valor) => {
  localStorage.setItem(chave, valor);
};

export const getItem = (chave) => {
  return localStorage.getItem(chave);
};

export const removeItem = (chave) => {
  return localStorage.removeItem(chave);
};
