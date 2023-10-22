import React from "react";

export const Modal = ({ setOpenModal, errorText }) => {
  return (
    <div
      onClick={() => setOpenModal(false)}
      className="bg-[#0000005c] fixed top-0 bottom-0 left-0 right-0  flex justify-center items-center"
    >
      <div className="bg-slate-100 w-[40%] flex justify-between px-2 mx-auto ">
        <h1
          className={`${
            errorText != null ? "text-red-400" : "text-green-400"
          } text-2xl p-5 font-bold`}
        >
          {errorText != null ? errorText : "Modall Textt"}
        </h1>
        <button onClick={() => setOpenModal(false)}>X</button>
      </div>
    </div>
  );
};
