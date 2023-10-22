import { Button, Modal } from "flowbite-react";
import React, { useContext, useState } from "react";
import { todoContexts } from "../../Contexts/TodoContexts";
const CardComponents = ({ item, handleDeleteClick }) => {
  const { todoData, setTodoData } = useContext(todoContexts);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [openUpdateModal, setOpenUpdateModal] = useState(false);
  const [inputValue, setInputValue] = useState({ title: item.title });

  function handleUpdateTodo() {
    const updatetodoArr = todoData.map((t) => {
      if (t.id === item.id) {
        return { ...t, title: inputValue.title };
      } else {
        return t;
      }
    });
    setTodoData(updatetodoArr);
    localStorage.setItem("Todos", JSON.stringify(updatetodoArr));

    setOpenUpdateModal(false);
  }

  function handleDeleteConfirm() {
    handleDeleteClick(item.id);
    setOpenDeleteModal(false);
  }
  function UpdateCompleted() {
    const updateCompleted = todoData.map((t) => {
      if (t.id === item.id) {
        t.isCompleted = !t.isCompleted;
      }
      // الريتورن هون انو غييرلي الكومبليتيد بعدين رجعلي الستيت تبعي متل ماهيه
      return t;
    });
    setTodoData(updateCompleted);
    localStorage.setItem("Todos", JSON.stringify(updateCompleted));
  }


  return (
    <div>
      <Modal show={openUpdateModal} size="md" popup className="animate-opacity">
        <Modal.Body className="h-fit p-6">
          <div className="text-center">
            <div className="relative z-0">
              <input
                value={inputValue.title}
                onChange={(eo) => {
                  setInputValue({ ...inputValue, title: eo.target.value });
                }}
                type="text"
                id="floating_standard"
                className="block pb-1 pt-3 focus:pt-5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
              />
              <label
                htmlFor="floating_standard"
                className="absolute text-xl text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 left-0 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Title
              </label>
            </div>

            <div className="flex justify-center gap-4 mt-5">
              <Button color="blue" onClick={handleUpdateTodo}>
                Confirm
              </Button>
              <Button
                color="gray"
                onClick={() => {
                  setOpenUpdateModal(false);
                }}
              >
                No, cancel
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
      <Modal show={openDeleteModal} size="md" popup className="animate-opacity">
        <Modal.Body className="h-fit p-6">
          <div className="text-center">
            <h3 className="mb-1 text-lg font-normal text-gray-500 dark:text-gray-400">
              Are you sure you want to delete this product?
            </h3>
            <h4 className="mb-5 text-sm font-normal text-gray-300 dark:text-gray-400">
              You cannot undo the deletion after it is complete!{" "}
            </h4>
            <div className="flex justify-center gap-4">
              <Button color="failure" onClick={handleDeleteConfirm}>
                Yes, I'm sure
              </Button>
              <Button
                color="gray"
                onClick={() => {
                  setOpenDeleteModal(false);
                }}
              >
                No, cancel
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
      <div className="font-normal animate-opacity rounded-md hover:py-4 transition-all duration-200 text-gray-800 bg-zinc-300 flex gap-4 justify-between items-center px-4 py-2 dark:text-gray-400">
        <div>
          <h1 className="text-gray-500 font-bold animate-opacity">
            {" "}
            {item.title}{" "}
          </h1>
        </div>
        <div className="flex gap-4">
          <div
            onClick={() => {
              setOpenDeleteModal(true);
            }}
            className="bg-gray-400 p-1.5 rounded-full transition-all duration-200 hover:cursor-pointer hover:scale-125"
          >
            <svg
              className="w-4 h-4 text-gray-800"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 18 20"
            >
              <path d="M17 4h-4V2a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v2H1a1 1 0 0 0 0 2h1v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V6h1a1 1 0 1 0 0-2ZM7 2h4v2H7V2Zm1 14a1 1 0 1 1-2 0V8a1 1 0 0 1 2 0v8Zm4 0a1 1 0 0 1-2 0V8a1 1 0 0 1 2 0v8Z" />
            </svg>
          </div>

          <div
            onClick={() => {
              setOpenUpdateModal(true);
            }}
            className="bg-gray-400 p-1.5 rounded-full transition-all duration-200 hover:cursor-pointer hover:scale-125"
          >
            <svg
              className="w-4 h-4 text-gray-800 "
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="m13.835 7.578-.005.007-7.137 7.137 2.139 2.138 7.143-7.142-2.14-2.14Zm-10.696 3.59 2.139 2.14 7.138-7.137.007-.005-2.141-2.141-7.143 7.143Zm1.433 4.261L2 12.852.051 18.684a1 1 0 0 0 1.265 1.264L7.147 18l-2.575-2.571Zm14.249-14.25a4.03 4.03 0 0 0-5.693 0L11.7 2.611 17.389 8.3l1.432-1.432a4.029 4.029 0 0 0 0-5.689Z" />
            </svg>
          </div>

          <div
            onClick={UpdateCompleted}
            className={`${
              item.isCompleted ? "bg-green-400" : "bg-gray-400"
            } p-1.5 rounded-full transition-all duration-300 hover:cursor-pointer hover:scale-125`}
          >
            <svg
              className={`w-4 h-4 ${
                item.isCompleted ? "text-slate-100" : "text-gray-800"
              }`}
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 16 12"
            >
              <path stroke="currentColor" d="M1 5.917 5.724 10.5 15 1.5" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CardComponents;
