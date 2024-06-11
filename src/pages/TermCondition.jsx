import React from 'react';
import {useTranslation} from "react-i18next";

const TermCondition = () => {
    const {t} = useTranslation();
    return (
        <div className="container mt-5 py-5">
            <h3 className="mt-5">Term and Condition</h3>
            <p>
                {t("contact.form.term.condition")}
            </p>
        </div>
    );
};

export default TermCondition;