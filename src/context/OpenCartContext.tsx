import { createContext, ReactNode, useContext, useState } from "react";

type ShoppingCartContext = {
    openCart: () => void
    closeCart: () => void
    isOpen: boolean
}

interface OpenCartProviderProps {
    children: ReactNode
}

const OpenCartContext = createContext({} as ShoppingCartContext);

export function useOpenCartContext() {
    return useContext(OpenCartContext);
} 

export function OpenCartProvider({children}: OpenCartProviderProps) {
    const [isOpen, setIsOpen] = useState<boolean>(false)

    const openCart = () => {
        setIsOpen(true);
    }

    const closeCart = () => {
        setIsOpen(false);
    }

    return (
        <OpenCartContext.Provider value={{openCart, closeCart, isOpen}}>
            {children}
        </OpenCartContext.Provider>
    )
}