import React from 'react';

export default function CardHeader({ icon, texte, setName, nombre, style }) {
    return (
        <div
            onClick={() => {
                setName(texte);
            }}
            className={`chart_current_data flex !min-w-[250px] !mb-1 cursor-pointer ${style}`}
        >
            <div className="flex flex-row justify-between ml-2">
                <div className="flex items-center">
                    {icon}
                </div>
                <div className="flex flex-col justify-center ml-2">
                    <h3 className="!text-white text-right">
                        {nombre}
                    </h3>
                    <p className="!text-white text-uppercase">{texte}</p>
                </div>
            </div>
        </div>
    );
}
