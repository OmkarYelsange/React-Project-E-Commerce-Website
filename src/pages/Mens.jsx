import React, { useState } from "react";
import Accordian from "../components/Accordian";

const Mens = () => {
  const [open, setOpen] = useState(0);

  return (
    <div className="max-w-6xl mx-auto mt-10">
      <h1 className="font-bold text-xl mb-5">Filter Options</h1>
      {["Mens", "Womens", "Kids", "Shoes"].map((title, index) => (
        <Accordian
          key={index}
          title={title}
          open={index === open ? true : false}
          setOpen={() => setOpen(index)}
        />
      ))}
    </div>
  );
};

export default Mens;
