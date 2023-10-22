import React, { useContext, useState } from "react";
import { Button, Card } from "flowbite-react";
import CardComponents from "./CardComponents";
import { v4 as uuidv4 } from "uuid";
import { todoContexts } from "../../Contexts/TodoContexts";
const MainPage = () => {
  const [inputValue, setInputValue] = useState("");
  //const [updatedTodo, setUpdatedTodo] = useState({ title: "gufran" });
  const MyContext = useContext(todoContexts);
  console.log(MyContext.todoData.id);
  function handleUpdateClick(updateId) {
    const updateTodoArr = MyContext.todoData.map((it) => {
      if (it.id === updateId) {
        return console.log(it.id);
      }
      return it;
    });
    MyContext.setTodoData(updateTodoArr);
  }
  function handleDeleteClick(itemID) {
    const itemIdd = MyContext.todoData.filter((i) => {
      return i.id !== itemID;
    });
    MyContext.setTodoData(itemIdd);
  }

  function test(itemId) {
  

    
  }

  const data = MyContext.todoData.map((item) => {
    return (
      <CardComponents
        key={item.id}
        item={item}
        test={test}
        handleDeleteClick={handleDeleteClick}
        handleUpdateClick={handleUpdateClick}
      />
    );
  });

  function handleAddButtonClick() {
    const newTodo = {
      id: uuidv4(),
      title: `${inputValue !== "" && inputValue}`,
      detailse: "Lorem ..",
      isCompleted: false,
    };
    MyContext.setTodoData([...MyContext.todoData, newTodo]);
    setInputValue("");
  }

  return (
    <div className="px-3 animate-opacity">
      <Card className="max-w-md border-4 mx-auto mt-16">
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          <p className="border-b-[1px] border-gray-600 pb-1">MY TO DO LIST</p>
        </h5>
        <Button.Group>
          <Button color="gray">All</Button>
          <Button color="gray">Done</Button>
          <Button color="gray">Not accomplished</Button>
        </Button.Group>

        {data.length === 0 ? (
          <h1 className="animate-opacity font-bold text-sm ">No any list</h1>
        ) : (
          data
        )}

        <div className="flex gap-2">
          <Button
            className="border-2 hover:bg-gray-200 "
            color="gray"
            onClick={() => {
              handleAddButtonClick();
            }}
          >
            <svg
              className="w-4 h-4 text-gray-800 dark:text-white hover:text-gray-900"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 18 18"
            >
              <path stroke="currentColor" d="M9 1v16M1 9h16" />
            </svg>
          </Button>
          <input
            value={inputValue}
            onChange={(eo) => {
              setInputValue(eo.target.value);
            }}
            type="text"
            placeholder="Title"
            className="px-2 transition-all duration-300 text-zinc-500 dark:bg-gray-800 border-2 border-zinc-300 focus:ring-0 focus:border-gray-700 rounded-md "
          />
        </div>
      </Card>
    </div>
  );
};
export default MainPage;
