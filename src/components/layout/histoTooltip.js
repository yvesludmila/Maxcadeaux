import { createRef, useState } from "react";
import { createPopper } from "@popperjs/core";
function HistoTooltip({ data }) {
    const [tooltipShow, setTooltipShow] = useState(false);
    const btnRef = createRef();
    const tooltipRef = createRef();
    
    const openLeftTooltip = () => {
        createPopper(btnRef.current, tooltipRef.current, {
            placement: "bottom",
        });
        setTooltipShow(true);
    };

    const closeLeftTooltip = () => {
        setTooltipShow(false);
    };

    return (
        <>
            <button
                type="button"
                onMouseEnter={openLeftTooltip}
                onMouseLeave={closeLeftTooltip}
                ref={btnRef}
                className=" animate__animated animate__bounceIn flex items-center justify-between px-1.5 py-1.5 rounded-lg cursor-pointer bg-gray-200 border-2 border-gray-200 hover:border-primary-600 transition-colors duration-300"
            >
                <div className="shrink-0">
                    <div className="flex h-6 w-6 rounded-full overflow-hidden">
                        {/* <img
                                  className="h-6 w-6"
                                  src="https://www.gravatar.com/avatar/27733e73efc059fcd0f8459a52e9f360?d=https%3A%2F%2Fui-avatars.com%2Fapi%2Fnazlicemen%40gmail.com%2F64%2Frandom%2F000000%2F1%2F0.5%2Ftrue%2Ftrue%2Ftrue"
                                /> */}
                        <span className="h-8 w-8 bg-indigo-500 font-extrabold text-white">
                            {data.offerwall.charAt(0)}
                        </span>
                    </div>
                </div>
                <div className="ml-2.5">
                    <div className="flex flex-col min-w-[60px] max-w-[60px]">
                        <span className="text-black leading-1 text-xs font-semibold truncate tracking-tighter text-left uppercase">
                            {data.offerwall}
                        </span>
                        {/* <span className="leading-1 text-xs truncate tracking-tight text-left text-gray-600">
                                  ID: TFZ4TY
                                </span> */}
                    </div>
                </div>
                <div className="ml-2.5">
                    <div className="flex items-center bg-gray-600 px-1 py-0.5 space-x-1.5 rounded">
                        <span
                            className="text-white text-xs font-semibold"
                            x-text="feed.balance"
                        >
                            {data.remuneration.toFixed(2)}
                        </span>
                        <span className="text-white">
                            <i className="fa fa-coins text-yellow-500"></i>
                        </span>
                    </div>
                </div>
            </button>
            <div
                className={
                    (tooltipShow ? "" : "hidden ") +
                    "text-white !max-w-[180px] py-2 px-2 text-sm rounded-lg shadow-sm border-0 mt-2 block z-50 font-normal leading-normal text-sm max-w-xs text-left no-underline break-words rounded-lg bg-gray-900"
                }
                ref={tooltipRef}
            >
                <div className="tooltip-arrow !-mt-3" data-popper-arrow></div>
                <div className="text-center">
                    <div>
                        {isNaN(data.idt) ? data.idt : data.nom}
                    </div>
                    <div>{data.date}</div>
                </div>
            </div>
        </>
    );
}

export default HistoTooltip;
