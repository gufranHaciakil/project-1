import React, { useState } from "react";

export const ArrayState = () => {
  const [brand, setBrand] = useState(["Apple", "Samsung", "Huawei"]);
  const [inputValue, setInputValue] = useState("");
  return (
    <div className="border-b-2 p-3">
      {brand.map((item, index) => {
        return (
          <li key={index} className="text-xl ml-10 mt-10">
            {item}{" "}
            <button
              onClick={(e) => {
                
              }}
              className="bg-gray-200 mr-3 px-1 pb-1 rounded-full active:scale-90 text-center"
            >
              edit
            </button>
            <button
              onClick={(e) => {
                console.log(index);
                const newArr = [...brand];
                newArr.splice(index, 1);
                setBrand(newArr);
              }}
              className="bg-gray-200 px-1 pb-1 rounded-full active:scale-90 text-center"
            >
              x
            </button>
          </li>
        );
      })}
      <input
        type="text"
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
        className="border-2 px-3 border-gray-500 "
      />
      <button
        onClick={() => {
          //حطيناها بين قوس مربع لانها ارريي
          setBrand([...brand, inputValue]);
          setInputValue("");
        }}
        className="bg-gray-300 px-4 py-[2px] mt-8 active:scale-90"
      >
        Add
      </button>
    </div>
  );
};
