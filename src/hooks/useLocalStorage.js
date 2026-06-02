import { useState, useEffect } from 'react';

const useLocalStorage = (clave, valorInicial) => {
  const [valor, setValor] = useState(() => {
    try {
      const item = localStorage.getItem(clave);
      return item ? JSON.parse(item) : valorInicial;
    } catch (err) {
      return valorInicial;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(clave, JSON.stringify(valor));
    } catch (err) {
      // noop
    }
  }, [clave, valor]);

  return [valor, setValor];
};

export default useLocalStorage;
