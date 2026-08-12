"use client";

import React, { createContext, useContext, useState, ReactNode } from 'react';

type Idioma = 'IT' | 'EN';

interface TipoContextoIdioma {
  idioma: Idioma;
  alternarIdioma: () => void;
}

const ContextoIdioma = createContext<TipoContextoIdioma | undefined>(undefined);

export const ProvedorIdioma = ({ children }: { children: ReactNode }) => {
  const [idioma, setIdioma] = useState<Idioma>('IT'); // Italiano por padrão

  const alternarIdioma = () => {
    setIdioma((prev) => (prev === 'IT' ? 'EN' : 'IT'));
  };

  return (
    <ContextoIdioma.Provider value={{ idioma, alternarIdioma }}>
      {children}
    </ContextoIdioma.Provider>
  );
};

export const useIdioma = () => {
  const contexto = useContext(ContextoIdioma);
  if (!contexto) {
    throw new Error('useIdioma deve ser usado dentro de um ProvedorIdioma');
  }
  return contexto;
};
