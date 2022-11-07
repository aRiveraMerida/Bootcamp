import React, { useState, createContext } from "react";

import { IntlProvider } from "react-intl";

import French from "../lang/fr.json";
import Spanish from "../lang/es.json";
import English from "../lang/en.json";

export const contextLanguage = createContext();

const recoverLang = () => {
  return navigator.language === "fr-FR"
    ? French
    : navigator.language === "es-ES"
    ? Spanish
    : English;
};

const ProviderLanguage = (props) => {
  const [locale, setLocale] = useState(navigator.language);
  const [messages, setMessages] = useState(recoverLang());

  const handleLanguage = (e) => {
    setLocale(e.target.value);
    setMessages(
      e.target.value === "fr-FR"
        ? French
        : e.target.value === "es-ES"
        ? Spanish
        : English
    );
  };

  return (
    <contextLanguage.Provider value={{ locale, handleLanguage }}>
      <IntlProvider messages={messages} locale={locale}>
        {props.children}
      </IntlProvider>
    </contextLanguage.Provider>
  );
};

export default ProviderLanguage;
