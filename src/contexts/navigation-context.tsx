"use client"

import { createContext, useContext, useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

type NavigationContextType = {
    activeButton: string;
    setActiveButton: (button: string) => void;
};

const NavigationContext = createContext<NavigationContextType | undefined>(undefined);

const pathToButton: Record<string, string> = {
    '/': 'home',
    '/about': 'about',
};

export function NavigationProvider({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const [activeButton, setActiveButton] = useState(pathToButton[pathname] ?? 'home');

    useEffect(() => {
        setActiveButton(pathToButton[pathname] ?? 'home');
    }, [pathname]);

    const handleButtonClick = (button: string) => {
        if (button === activeButton) return;
        setActiveButton(button);
    };

    return (
        <NavigationContext.Provider value={{ activeButton, setActiveButton: handleButtonClick }}>
            {children}
        </NavigationContext.Provider>
    );
}

export function useNavigation() {
    const context = useContext(NavigationContext);
    if (!context) {
        throw new Error('useNavigation must be used within a NavigationProvider');
    }
    return context;
}
