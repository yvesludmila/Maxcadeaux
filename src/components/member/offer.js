import React, { useState } from "react";

import { generatePageNumbers } from "../../utils/pagination";

function OfferHistory({ data }) {
  const [valuePage, setValuePage] = useState({ start: 0, end: 8 });
  const pageSize = 7;
  const totalPages = Math.ceil(data.length / pageSize);
  const currentPage = valuePage.start / pageSize + 1;

  return (
    <>
      <div className="w-full overflow-x-auto">
        <div className="bg-white shadow-md rounded ">
          <table className="min-w-max w-full max-h-screen table-auto">
            <thead>
              <tr className=" text-gray-600 border-b-2 border-yellow-500 text-sm leading-normal">
                <th className="py-3 px-6 text-left">Date</th>
                <th className="py-3 px-6 text-left">Nom de l'offre</th>
                <th className="py-3 px-6 text-left">Rémunération</th>
                <th className="py-3 px-6 text-end">Status</th>
              </tr>
            </thead>

            <tbody className="text-gray-600 text-sm font-light">
              {data.length > 0 &&
                data
                  .slice(valuePage.start, valuePage.end)
                  .map((validation, i) => {
                    return (
                      <tr
                        key={i}
                        className="border-b border-gray-200 bg-gray-50 hover:bg-gray-100"
                      >
                        <td className="py-3 px-6 text-left">
                          <div className="flex items-center max-w-[150px]">
                            {validation.date}
                          </div>
                        </td>
                        <td className="py-3 px-6 text-left">
                          <div className="flex items-center cursor-pointer max-w-[400px]">
                            <span className="font-medium">
                              {validation.nom}
                            </span>
                            <span className="text-xs text-blue-500 ml-2">
                              ({validation.offerwall})
                            </span>
                          </div>
                        </td>

                        <td className="py-3 px-6 text-left">
                          <div className="flex items-center ">
                            {validation.renumeration}
                            €
                          </div>
                        </td>
                        <td className="py-3 px-6 text-end">
                          <div>
                            <div>
                              <div>
                                {validation.etat === "PENDING_VALIDATION" ? (
                                  <button className="bg-yellow-500 text-white py-1 px-3 rounded-full text-xs">
                                    Pré validation
                                  </button>
                                ) : validation.etat === "PENDING" ? (
                                  <button className="bg-yellow-500 text-white py-1 px-3 rounded-full text-xs">
                                    En attente
                                  </button>
                                ) : validation.etat === "REFUSED" ? (
                                  <button className="bg-red-500 text-white py-1 px-3 rounded-full text-xs">
                                    Refusé
                                  </button>
                                ) : (
                                  <button className="bg-green-500 text-white py-1 px-3 rounded-full text-xs">
                                    Accepté
                                  </button>
                                )}
                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
            </tbody>
          </table>
          <p>On trouve ({data.length}) résultat(s)</p>
        </div>
      </div>

      <div className="mt-4 flex justify-center">
        <ul className="flex space-x-2 items-center">
          {generatePageNumbers(totalPages).map((pageNumber) => (
            <li key={pageNumber}>
              <button
                onClick={() => {
                  setValuePage({
                    start: (pageNumber - 1) * pageSize,
                    end: pageNumber * pageSize,
                  });
                }}
                className={`text-white text-sm font-extrabold rounded btn ${currentPage === pageNumber ? 'btn-primary' : 'btn-secondary'
                  }`}
              >
                {pageNumber}
              </button>
            </li>
          ))}
        </ul>
      </div>

    </>
  );
}

export default OfferHistory;
