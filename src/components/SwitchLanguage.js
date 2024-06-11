import React, {useState} from 'react';
import * as constants from "../constants";
import {useTranslation} from "react-i18next";

const LanguageDropdownWithFlags = () => {
    const {i18n} = useTranslation();

    const [selectedLanguage, setSelectedLanguage] = useState(() => {
        const langKey = localStorage.getItem("langKey")
        const language = constants.languages.find(item => item.key === langKey)
        if (!language?.key) {
            return {
                title: 'Français',
                key: "fr",
                icon: "/images/french.png"
            }
        }
        return language
    });
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const handleLanguageChange = async (lang) => {
        await i18n.changeLanguage(lang.key)
        localStorage.setItem("langKey", lang.key)
        setSelectedLanguage(lang);
        setDropdownOpen(false); // Close the dropdown after language selection
        // Implement logic to change the language
    };

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen); // Toggle dropdown visibility
    };

    return (
        <div className="language-dropdown">
            <div className="selected-language" onClick={toggleDropdown}>
                <img src={selectedLanguage.icon} alt="English Flag" className="flag-icon"/>
                {selectedLanguage.title}
            </div>
            {dropdownOpen && (
                <>
                    <div className="language-options">
                        {constants.languages.map(lang => (
                            <div onClick={() => handleLanguageChange(lang)} className="lang-item">
                                <img src={lang.icon} alt="English Flag" className="flag-icon"/>
                                {lang.title}
                            </div>
                        ))}
                    </div>

                </>
            )}
        </div>
    );
};

export default LanguageDropdownWithFlags