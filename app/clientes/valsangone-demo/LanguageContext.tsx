"use client";

// Contexto de Idioma para a aplicação
import React, { createContext, useContext, useState, ReactNode } from 'react';

type Idioma = 'IT' | 'EN';

interface TipoContextoIdioma {
  idioma: Idioma;
  alternarIdioma: () => void;
  listaIdiomas: Idioma[];
}

const ContextoIdioma = createContext<TipoContextoIdioma | undefined>(undefined);

// Provedor de estado global para o idioma
export const ProvedorIdioma = ({ children }: { children: ReactNode }) => {
  const [idioma, setIdioma] = useState<Idioma>('IT'); // Idioma padrão: Italiano

  // Alterna entre Italiano e Inglês
  const alternarIdioma = () => {
    setIdioma((prev) => (prev === 'IT' ? 'EN' : 'IT'));
  };

  const listaIdiomas: Idioma[] = ['IT', 'EN'];

  return (
    <ContextoIdioma.Provider value={{ idioma, alternarIdioma, listaIdiomas }}>
      {children}
    </ContextoIdioma.Provider>
  );
};

// Hook customizado para usar o idioma em qualquer componente
export const useIdioma = () => {
  const contexto = useContext(ContextoIdioma);
  if (!contexto) {
    throw new Error('useIdioma deve ser usado dentro de um ProvedorIdioma');
  }
  return contexto;
};
