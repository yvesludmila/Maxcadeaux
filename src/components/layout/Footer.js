import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import axios from "axios";

/*
const month = [
    'Jan',
    'Fev',
    'Mar',
    'Avr',
    'Juin',
    'Juil',
    'Août',
    'Sept',
    'Oct',
    'Nov',
    'Dec',
];
//*/

function Footer() {
  const [news, setNews] = useState([]);
  const isMounted = useRef(true);
  // const [all, setAll] = useState(false);
  useEffect(() => {
    fetchData();
    return () => {
      isMounted.current = false;
    };
  }, []);

  const fetchData = () => {
    if (isMounted.current) {
      Promise.all([async () => getNews()]).then();
    }
  };

  function getNews() {
    axios.get(`/api/news/list`).then((res) => {
      setNews(res.data);
    });
  }

  return (
    <footer className="bg-gray-100 border-t border-gray-300">
      <div className="container px-5 mx-auto">
        <div className="py-5 space-y-5">
          <nav className="flex flex-wrap justify-center">
            <div className="px-5 py-1">
              <Link href="/term-condition">
                <a className="text-base text-gray-500 hover:text-gray-800">
                  Conditions d'utilisation
                </a>
              </Link>
            </div>
            <div className="px-5 py-1">
              <Link href="/privacy-policy">
                <a className="text-base text-gray-500 hover:text-gray-800">
                  Politique de confidentialité
                </a>
              </Link>
            </div>
            <div className="px-5 py-1">
              <Link href="/about">
                <a className="text-base text-gray-500 hover:text-gray-800">
                  À propos de nous
                </a>
              </Link>
            </div>
            {/* <div className="px-5 py-1">
                <Link href="/support">
                <a className="text-base text-gray-500 hover:text-gray-800">
                Support
                </a>
                </Link>
              </div> */}
            <div className="px-5 py-1">
              <Link href="/contact">
                <a className="text-base text-gray-500 hover:text-gray-800">
                  Contactez-nous
                </a>
              </Link>
            </div>
          </nav>
          <div className="flex justify-center space-x-6">
            <a
              href="https://www.maxiconcour.com"
              target="_blank"
              className="text-gray-400 hover:text-gray-500"
            >
              <svg
                className="h-6 w-6"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  width="48"
                  height="48"
                  fill="white"
                  fillOpacity="0.01"
                ></rect>
                <path
                  d="M36 12.5997H31.2489H29.9871C28.9009 12.5997 28.0203 13.4803 28.0203 14.5666V21.4674H36L34.8313 29.0643H28.0203V43H19.2451V29.0643H12V21.4674H19.1515L19.2451 14.2563L19.2318 12.9471C19.1879 8.60218 22.6745 5.04434 27.0194 5.0004C27.0459 5.00013 27.0724 5 27.0989 5H36V12.5997Z"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="4"
                  strokeLinejoin="round"
                ></path>
              </svg>{" "}
            </a>

            <a
              href="https://www.maxiconcour.com"
              target="_blank"
              className="text-gray-400 hover:text-gray-500"
            >
              <svg
                className="h-6 w-6"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  width="48"
                  height="48"
                  fill="white"
                  fillOpacity="0.01"
                ></rect>
                <path
                  d="M23.9986 5L17.8856 17.4776L4 19.4911L14.0589 29.3251L11.6544 43L23.9986 36.4192L36.3454 43L33.9586 29.3251L44 19.4911L30.1913 17.4776L23.9986 5Z"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="4"
                  strokeLinejoin="round"
                ></path>
              </svg>{" "}
            </a>
          </div>
          <div className="text-center text-base text-gray-400">
            © {new Date().getFullYear()} Maxiconcour, Inc. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
