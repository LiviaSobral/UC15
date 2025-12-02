import { StyleSheet, Text, View } from 'react-native'
import React, { createContext, ReactNode, useContext, useState } from 'react'

interface TemaContextType {
  temaEscuro: boolean, // indica se o tema está escuro (true) ou claro (false)
  setTemaEscuro: React.Dispatch<React.SetStateAction<boolean>>; // função para mudar o tema
}

const TemaContext = createContext<TemaContextType | undefined>(undefined);

export const useTema = ():TemaContextType => {
    const context = useContext(TemaContext);
  if (!context)
    throw new Error("useTema deve ser usado dentro de um TemaProvider");
  return context;
}

export const TemaProvider = (props: {children: ReactNode}) => {
    const [temaEscuro, setTemaEscuro] = useState(false);

    return(
        <TemaContext.Provider value={{temaEscuro,setTemaEscuro}}>
            {props.children}
        </TemaContext.Provider>
    )
}