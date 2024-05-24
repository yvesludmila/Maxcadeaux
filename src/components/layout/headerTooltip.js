import React, { useState, useRef, useEffect } from "react";
import { createPopper } from "@popperjs/core";

function HeaderTooltip({ data, pending, auth }) {
    const [tooltipShow, setTooltipShow] = useState(false);
    const tooltipRef = useRef();

    useEffect(() => {
        if (tooltipShow) {
            createPopper(tooltipRef.current, tooltipRef.current, {
                placement: "top",
            });
        }
    }, [tooltipShow]);

    const tooltipData = {
        title: "Gain en attente",
        value: 0,
    };

    return (
        <>
            <div
                className={
                    "relative flex items-center bg-indigo-100 rounded-full pl-3 pr-1 h-10 cursor-pointer"
                }
                onMouseEnter={() => setTooltipShow(true)}
                onMouseLeave={() => setTooltipShow(false)}
            >
                <div className="flex items-center">
                    <div>
                        {auth && auth?.user?.euros > 0 ? (
                            <span className="font-semibold d-flex items-center">
                                {auth?.user?.euros}{" "}
                                <i className="fas fa-euro-sign text-yellow-500 ml-2"></i>
                            </span>
                        ) : (
                            <span className="font-semibold d-flex items-center">
                                0
                                <i className="fas fa-euro-sign text-yellow-500 ml-2"></i>
                            </span>
                        )}
                    </div>
                    <div className="h-5 w-px mx-2 bg-gray-500"></div>
                    {pending > 0 ? (
                        <span className=" ml-2">
                            {pending?.toFixed(2)}{" "}
                            <i className="fas fa-euro-sign text-yellow-500 mr-2"></i>{" "}
                        </span>
                    ) : (
                        <span className=" ml-2">
                            0 <i className="fas fa-euro-sign text-yellow-500 mr-2"></i>{" "}
                        </span>
                    )}
                </div>
                {tooltipShow && (
                    <div
                        className={
                            "text-white !max-w-[180px] py-2 px-2 text-sm rounded-lg shadow-sm border-0 mt-2 block z-50 font-normal leading-normal text-sm max-w-xs text-left no-underline break-words rounded-lg bg-gray-900"
                        }
                        ref={tooltipRef}
                    >
                        <div className="tooltip-arrow !-mt-3" data-popper-arrow></div>
                        <div className="text-center">
                            <div>{tooltipData.title}</div>
                            <div>
                                {tooltipData.value}{" "}
                                <i className="fas fa-euro-sign text-yellow-500 ml-2"></i>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}

export default HeaderTooltip;
