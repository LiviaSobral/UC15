// =====================================
// ARQUIVO: src/context/UsuarioContext.tsx
// =====================================

import React, { createContext, useState, useContext, ReactNode } from "react";

type Usuario = { nome: string } | null;
type UsuarioContextType = {
  user: Usuario;
  setUser: React.Dispatch<React.SetStateAction<Usuario>>;
};

const UserContext = createContext<UsuarioContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<Usuario>(null); // começa sem usuário logado

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context)
    throw new Error("useUsuario deve ser usado dentro de UsuarioProvider");
  return context;
};