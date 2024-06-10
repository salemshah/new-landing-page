import i18n from "i18next";
import {initReactI18next} from "react-i18next";
import french from "./french.json"
import english from "./english.json"

const lang = localStorage.getItem("langKey")

i18n
    // .use(i18nBackend)
    .use(initReactI18next)
    .init({
        // fallbackLng: "en",
        lng: lang || 'fr',
        interpolation: {
            escapeValue: false,
        }, resources: {
            fr: {
                translation: french,
            }, en: {
                translation: english
            }
        },
    });

export default i18n;