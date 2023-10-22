import React, { useState } from "react";

export const InputState = () => {
  const [formInputs, setFormInputs] = useState({
    name: "",
    email: "",
    age: "",
    isAstudent: false,
  });
  return (
    <div className="border-b-2">
      <form className="mt-10 pb-2 pl-4"
        onSubmit={(e) => {
          e.preventDefault();
          console.log(formInputs);
        }}
      >
        <input
          value={formInputs.name}
          onChange={(e) => {
            setFormInputs({ ...formInputs, name: e.target.value });
          }}
          type="text"
          className="border-2 border-gray-500 ml-2 px-1"
          placeholder="name:"
        />
        <input
          value={formInputs.email}
          onChange={(e) => {
            // ساوينا نسخه من الستيت وعدلنا عالتيكست اللي لازمنا بهالانبوت بس
            setFormInputs({ ...formInputs, email: e.target.value });
          }}
          type="text"
          className="border-2 border-gray-500 ml-2 px-1"
          placeholder="email:"
        />
        <input
          value={formInputs.age}
          onChange={(e) => {
            setFormInputs({ ...formInputs, age: e.target.value });
          }}
          type="number"
          className="border-2 border-gray-500 ml-2 px-1"
          placeholder="age:"
        />
        <br />
        <label htmlFor="box">I'm a Student</label>
        <input
          id="box"
          type="checkbox"
          checked={formInputs.isAstudent}
          onChange={(e) => {
            setFormInputs({ ...formInputs, isAstudent: e.target.checked });
          }}
        />
        <br />
        <input
          type="submit"
          className="cursor-pointer border-2 border-gray-700 p-2 mt-3 font-bold"
        />
      </form>
    </div>
  );
};
