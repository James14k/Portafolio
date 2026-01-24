import { useLanguage } from "../context/LanguageContext";
import es from "./es.json";
import en from "./en.json";
import fr from "./fr.json";

const translations = { es, en, fr };

export default function useTranslation() {
  const { language, changeLanguage } = useLanguage();
  
  const t = (key, variables = {}) => {
    const keys = key.split(".");
    let value = translations[language];
    for (let k of keys) {
      value = value?.[k];
      if (!value) break;
    }
    
    // Si no se encontró la traducción, devolver la clave
    if (!value) return key;
    
    // Reemplazar variables en el formato {variable}
    if (typeof value === "string" && Object.keys(variables).length > 0) {
      return value.replace(/\{(\w+)\}/g, (match, varName) => {
        return variables[varName] !== undefined ? variables[varName] : match;
      });
    }
    
    return value;
  };
  
  const getCVLink = () => translations[language].cv_link;
  return { t, getCVLink, language, changeLanguage };
}
