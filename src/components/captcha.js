import React, { useEffect, useState } from "react";

export default function Captcha({ captchaState }) {
  const [captcha, setCaptcha] = useState("");
  const [captchaCalculation, setCaptchaCalculation] = useState([]);

  useEffect(() => {
    // const captcha = Math.random().toString(36).slice(-8).toUpperCase();

    // Randomize calculation of captcha as text and store response in captcha variable
    //const captcha = Math.floor(Math.random() * 100) + 1;

    // Randomize calculation of captcha as text and store response in captchaCalculation variable
    const captchaCalculation = [
      Math.floor(Math.random() * 10) + 1,
      ["+"],
      Math.floor(Math.random() * 10) + 1,
    ];

    // Set captchaCalculation in state
    setCaptchaCalculation(captchaCalculation);
    // console.log("captchaCalculation ==>", captchaCalculation)
    // [1, "+", 2]
    const captchaResponse = captchaCalculation.reduce((acc, curr) => {
      // 1 + 2 = 3  // 1 - 2 = -1
      if (typeof curr === "number") {
        return acc + curr;
      } else {
        return acc;
      }
    }, 0);

    console.log("captchaResponse==> ", captchaResponse);

    //setCaptcha(captcha);
  }, []);

  const resetCaptcha = () => {
    const captchaCalculation = [
      Math.floor(Math.random() * 10) + 1,
      ["+"],
      Math.floor(Math.random() * 10) + 1,
    ];

    setCaptchaCalculation(captchaCalculation);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (captchaState === captcha) {
      alert("Captcha Matched");
      resetCaptcha();
    } else {
      alert("Captcha Not Matched");
      resetCaptcha();
    }
  };

  return (
    <div>
      <div className="captcha" id="captcha">
        {/* <p>{captchaCalculation?.join(" ")}</p> */}
        <form onSubmit={(e) => handleSubmit(e)}>
          {/* <input type="text" placeholder="Enter Captcha" onChange={(e) => setCaptcha(e.target.value)} value={captcha} /> */}
          <div className="relative mt-2 flex items-center group filament-forms-text-input-component">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-500">
              <p className="mt-3 ">{captchaCalculation?.join(" ")}</p>
            </div>
            <div className="flex-1">
              <input
                type="number"
                onChange={(e) => setCaptcha(e.target.value)}
                placeholder="Enter Captcha"
                required=""
                className="block w-full pl-16 transition duration-75 py-2  text-sm border-1 rounded-lg  focus:border-indigo-600 focus:ring-1 focus:ring-inset focus:ring-indigo-600 disabled:opacity-70 border-gray-300"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
