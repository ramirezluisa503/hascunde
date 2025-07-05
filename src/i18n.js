import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Importa tus archivos de traducción
import translationEN from './locales/en/translation.json';
import translationES from './locales/es/translation.json';

// Los recursos son los objetos que contienen tus traducciones para cada idioma.
const resources = {
    en: {
        translation: translationEN,
    },
    es: {
        translation: translationES,
    },
};

i18n
    .use(initReactI18next) // Pasa i18n al react-i18next.
    .init({
        resources,
        lng: 'es', // Establece el idioma por defecto
        fallbackLng: 'es', // Idioma de respaldo si una traducción no está disponible
        interpolation: {
            escapeValue: false, // React ya escapa los valores por defecto
        },
    });

export default i18n;