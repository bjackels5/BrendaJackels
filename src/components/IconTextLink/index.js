import React from 'react';
import { BiMailSend, BiPhoneCall } from 'react-icons/bi';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const allTheFonts = {
    BiMailSend,
    BiPhoneCall,
    FaLinkedin,
    FaGithub
};

function IconTextLink({ hrefLink, iconName, descText }) {

    const Icon = () => {
        const icon = React.createElement(allTheFonts[iconName]);
        return <span className="icon-link">{icon}</span>;
    };

    return (
        <span className="two-links">
            <a href={`${hrefLink}`} target="_blank" rel="noreferrer"
            >
                <Icon iconName={iconName} />
                <span className="desc-link">
                    {descText}
                </span>
            </a>
        </span>
    )
}

export default IconTextLink;