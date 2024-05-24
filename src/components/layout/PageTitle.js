import React from "react";

function PageTitle({
  pageTitle,
  subTitle,
  show_button_order = false,
  handlechangeOrder,
  orderOfData,
  show_search_bar = false,
  text_search,
  handlechangeTextSearch }) {

  return (
    <>
      <div className="page_title">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col">
              <div>
                <div className="text-sm">{subTitle}</div>
                <h5 className="text-2xl underline underline-offset-1 decoration-[10px] decoration-yellow-200">{pageTitle}</h5>
              </div>
            </div>
            {show_search_bar && (
              <div className="col text-end">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Recherche..."
                    name="search"
                    value={text_search}
                    onChange={handlechangeTextSearch}
                    className="py-2 px-4 rounded-full bg-gray-200 focus:outline-none focus:ring focus:border-indigo-300"
                  />
                </div>
              </div>
            )}
            {show_button_order && (
              <div className="col text-end"> {/* Apply ml-auto to move the second column to the right */}
                <div className="revenue_universe">
                  <div className="option-btn">
                    <div className="dropdown">
                      <button
                        onClick={() => handlechangeOrder()}
                        className="btn btn-option px-2 py-1"
                        data-bs-toggle="dropdown"
                      >
                        {orderOfData === "UP" ? "Croissant" : "Décroissant"}
                        <span>
                          <i
                            className={
                              "la la-angle-" + (orderOfData === "UP" ? "up" : "down")
                            }
                            title="Tri par rémunération"
                          ></i>
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>


        </div>
      </div>
    </>
  );
}

export default PageTitle;
