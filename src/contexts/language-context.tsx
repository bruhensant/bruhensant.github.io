"use client"

import { createContext, useContext, useState } from 'react';
import type { common } from '../../public/i18n/common';

type Language = keyof typeof common;

type LanguageContextType = {
    language: Language;
    setLanguage: (lang: Language) => void;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
    const [language, setLanguage] = useState<Language>('pt-BR');

    return (
        <LanguageContext.Provider value={{ language, setLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
}

export function useSwitchLanguage() {
	const { language, setLanguage } = useLanguage();

	const switchLanguage = () => {
		setLanguage(language === 'pt-BR' ? 'en' : 'pt-BR');
	}

	return switchLanguage;
}
