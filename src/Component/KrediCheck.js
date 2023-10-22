import React, { useState } from "react";
import { Modal } from "./Modal";

export const KrediCheck = () => {
  const [krediCard, setKrediCard] = useState({
    name: "",
    number: "",
    age: "",
    employee: false,
    salary: "",
  });
  const [errorMsg, setErrorMsg] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const [isDisabled, setIsDisabled] = useState("disabled");
  const nameValue = () => {
    if (krediCard.name === "" || krediCard.name.length < 4) {
      setIsDisabled("disabled");
    } else if (krediCard.age === "") {
      setIsDisabled("disabled");
    } else if (krediCard.number === "") {
      setIsDisabled("disabled");
    } else {
      setIsDisabled("");
    }
  };
  const { age, number } = krediCard;
  function handelSubmitForm() {
    setErrorMsg(null);
    if (age < 15 || age > 30) {
      setErrorMsg("The age must be between 15 and 30");
    } else if (number.length !== 11) {
      setErrorMsg("The number must be 11 crickets");
    } else {
      setErrorMsg(null);
    }
    setOpenModal(true);
  }
  return (
    <div className="flex items-center flex-col">
      <form
        className="m-3 flex flex-col w-96 gap-2"
        onSubmit={(eo) => {
          eo.preventDefault();
        }}
      >
        <label htmlFor="name">Name : </label>
        <input
          id="name"
          onChange={(eo) => {
            setKrediCard({ ...krediCard, name: eo.target.value });
            nameValue();
          }}
          type="text"
          value={krediCard.name}
          className="border-2 border-gray-400 p-1"
          placeholder=""
        />
        <label htmlFor="number">Phone Number :</label>
        <input
          id="number"
          onChange={(eo) => {
            setKrediCard({ ...krediCard, number: eo.target.value });
            nameValue();
          }}
          type="number"
          value={krediCard.number}
          className="border-2 border-gray-400 p-1"
          placeholder=""
        />
        <label htmlFor="age">Age :</label>
        <input
          id="age"
          onChange={(eo) => {
            setKrediCard({ ...krediCard, age: eo.target.value });
            nameValue();
          }}
          type="number"
          value={krediCard.age}
          className="border-2 border-gray-400 p-1"
          placeholder=""
        />
        <div className="flex items-center gap-1">
          <label htmlFor="employee">Are you a employee? </label>
          <input
            id="employee"
            type="checkbox"
            onChange={() => {
              setKrediCard({ ...krediCard, employee: !krediCard.employee });
            }}
          />
        </div>
        {krediCard.employee ? (
          <div>
            <label
              htmlFor="select"
              className="font-bold text-xl animate-opacity mr-3"
            >
              Salary
            </label>
            <select
              value={krediCard.salary}
              onChange={(eo) => {
                setKrediCard({ ...krediCard, salary: eo.target.value });
              }}
              className="border-b-2 border-gray-400 animate-opacity w-40"
            >
              <option>100$</option>
              <option>200$</option>
              <option>300$</option>
              <option>400$</option>
            </select>
          </div>
        ) : (
          ""
        )}
        <button
          disabled={isDisabled}
          onClick={() => {
            handelSubmitForm();
            console.log(krediCard);
          }}
          className="bg-gray-200 border-2 disabled:opacity-30 disabled:active:scale-100 active:scale-90 border-gray-400 mt-2 px-3"
        >
          Send
        </button>
      </form>
      <button onClick={() => setOpenModal(!openModal)}>open modal</button>
      {openModal ? (
        <Modal
          errorText={errorMsg}
          setOpenModal={setOpenModal}
          openModal={openModal}
        />
      ) : null}
    </div>
  );
};
