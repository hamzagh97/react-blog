import React from "react";

const Modal = (props) => {
  return (
    <>
      <div
        className="absolute top-0 left-0 right-0 bottom-0 bg-slate-600 opacity-80 "
        onClick={props.close}
      ></div>
      <div className="fixed top-48 left-2/4 w-full -translate-x-2/4 -translate-y-2/4 animate-fadeIn rounded bg-white py-5 font-black text-black sm:max-w-sm">
        <p className="text-center">Are you sure you want to delete ?</p>
        <div className="mt-10 flex items-center justify-center space-x-5">
          <button
            className="rounded bg-white p-2 capitalize text-black hover:bg-slate-100"
            onClick={props.close}
          >
            cancel
          </button>
          <button
            className="rounded bg-violet-600 p-2 capitalize text-white hover:bg-violet-900"
            onClick={() => props.delete(props.id)}
          >
            confirm
          </button>
        </div>
      </div>
    </>
  );
};

export default Modal;
