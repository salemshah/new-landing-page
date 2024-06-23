import React from 'react';
import {Link} from "react-router-dom";
import {Icon} from "@iconify/react";

const IconLink = ({to, icon}) => {
    return (
        <div
            className={`social-icon`}
            data-aos="zoom-in"
            data-aos-duration="1200"
            data-aos-delay="300"
        >
            <Link
                to={to}
                target="_blank"
            >
                <Icon icon={icon}/>
            </Link>

        </div>
    );
};

export default IconLink;