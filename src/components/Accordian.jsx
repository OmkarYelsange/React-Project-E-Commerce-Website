import React from "react";
import ListItems from "./ListItems";

const Accordian = ({ title, open, setOpen }) => {
  return (
    <div className="my-1 border w-64 border-gray-200 px-4 py-2 shadow-md mt-1 ">
      <div className="flex  justify-between ">
        <h1>{title}</h1>
        <button
          className="border text-white px-2 rounded-md text-sm shadow-sm"
          onClick={() => {
            setOpen();
          }}
        >
          {open === true ? "➖" : "➕"}
        </button>
      </div>
      {open && <ListItems />}
    </div>
  );
};

export default Accordian;
