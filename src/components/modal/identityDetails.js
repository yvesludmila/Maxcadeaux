import React from "react";
import { Fragment, useRef } from "react";

import { Dialog, Transition } from "@headlessui/react";

function IdentityModalDetails({
  show,
  setShow,
  user,
  acceptVerification,
  rejectVerification,
}) {
  const cancelButtonRef = useRef(null);

  return (
    <>
      <Transition.Root show={show} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          initialFocus={cancelButtonRef}
          onClose={setShow}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative min-w-[400px] transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 ">
                  <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                    <div className="">
                      <div className="mt-3 sm:mt-0 sm:ml-4 sm:text-left">
                        <Dialog.Title
                          as="h3"
                          className="flex items-center flex-col text-lg font-medium leading-6 text-gray-900"
                        >
                          {user.nom + " " + user.prenom}
                        </Dialog.Title>

                        <div className="mt-4 row">
                          {user.identityCardRecto.length > 0 && (
                            <div className="col-lg-6 mt-4">
                              <div className="form-group mb-4 text-black">
                                <img
                                  className="w-full h-full object-cover"
                                  src={
                                    "../../../uploads/" + user.identityCardRecto
                                  }
                                  alt=""
                                />
                              </div>
                            </div>
                          )}
                          {user.identityCardVerso.length > 0 && (
                            <div className="col-lg-6 mt-4">
                              <div className="form-group mb-4 text-black">
                                <img
                                  className="w-full h-full object-cover"
                                  src={
                                    "../../../uploads/" + user.identityCardVerso
                                  }
                                  alt=""
                                />
                              </div>
                            </div>
                          )}
                          {user.addressCard.length > 0 && (
                            <div className="col-lg-6 mt-4">
                              <div className="form-group mb-4 text-black">
                                <img
                                  className="w-full h-full object-cover"
                                  src={"../../../uploads/" + user.address}
                                  alt=""
                                />
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                    <button
                      onClick={() => setShow(false)}
                      className="py-2 px-4 text-sm font-medium text-white bg-gray-500 ml-2 hover:bg-indigo-400 rounded-md"
                    >
                      Fermer
                    </button>
                    <button
                      onClick={() => {
                        acceptVerification(user.hashId);
                        setShow(false);
                      }}
                      className="py-2 px-4 text-sm font-medium text-white ml-2 bg-[#00d7b3] hover:bg-[#01be9f] rounded-md"
                    >
                      Accepter
                    </button>

                    <button
                      onClick={() => {
                        rejectVerification(user.hashId);
                        setShow(false);
                      }}
                      className="py-2 px-4 text-sm font-medium text-white bg-red-500 ml-2 hover:bg-red-400 rounded-md"
                    >
                      Refuser
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
}

export default IdentityModalDetails;
