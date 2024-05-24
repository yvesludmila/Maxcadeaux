import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { generatePageNumbers } from "../../utils/pagination";
import { convertDateString } from "../../utils/converDate";

function CommandHistory({ data }) {
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
                <th className="py-3 px-6 text-left">Boutique</th>
                <th className="py-3 px-6 text-left">Catégorie</th>
                <th className="py-3 px-6 text-left">Montant</th>
                <th className="py-3 px-6 text-left">Code Promo</th>
                <th className="py-3 px-6 text-left">Status</th>
              </tr>
            </thead>

            <tbody className="text-gray-600 text-sm font-light">
              {data.length > 0 &&
                data.slice(valuePage.start, valuePage.end).map((command, i) => (
                  <tr
                    key={i}
                    className="border-b border-gray-200 bg-gray-50 hover:bg-gray-100"
                  >
                    <td className="py-3 px-6 text-left">
                      <div className="flex items-center cursor-pointer max-w-[200px]">
                        <span className="font-medium hover:text-yellow-500">
                          {convertDateString(command.date)}
                        </span>
                      </div>
                    </td>
                    <td className="py-3 px-6 text-left">
                      <div className="flex items-center cursor-pointer max-w-[200px]">
                        <span className="font-medium hover:text-yellow-500">
                          {command.bnom}
                        </span>
                      </div>
                    </td>
                    <td className="py-3 px-6 text-left">
                      <div className="flex items-center max-w-[150px]">
                        {command.cnom}
                      </div>
                    </td>
                    <td className="py-3 px-6 text-left">
                      <div className="flex items-center ">
                        {command.amount} €
                      </div>
                    </td>
                    <td className="py-3 px-6 text-left">
                      <div className="flex items-center font-semibold text-lg">
                        {command.code_promo}
                      </div>
                    </td>
                    <td className="py-3 px-6 text-end">
                      <div>
                        <div>
                          <div>
                            {command.status === "PENDING" ? (
                              <button className="bg-yellow-500 text-white py-1 px-3 rounded-full text-xs">
                                En attente
                              </button>
                            ) : command.status === "REFUSED" ? (
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
                ))}
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

export default CommandHistory;
