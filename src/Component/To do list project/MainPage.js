import React, { useContext, useState, useEffect } from "react";
import { Button, Card } from "flowbite-react";
import CardComponents from "./CardComponents";
import { v4 as uuidv4 } from "uuid";
import { todoContexts } from "../../Contexts/TodoContexts";
const MainPage = () => {
  const [inputValue, setInputValue] = useState("");
  const [todoTypeBtn, setTodoTypeBtn] = useState("copleted");
  const { todoData, setTodoData } = useContext(todoContexts);
  function handleUpdateClick(updateId) {
    const updateTodoArr = todoData.map((it) => {
      if (it.id === updateId) {
        return console.log(it.id);
      }
      return it;
    });
    setTodoData(updateTodoArr);
    localStorage.setItem("Todos", JSON.stringify(updateTodoArr));
  }
  function handleDeleteClick(itemID) {
    const itemIdd = todoData.filter((i) => {
      return i.id !== itemID;
    });
    setTodoData(itemIdd);
    localStorage.setItem("Todos", JSON.stringify(itemIdd));
  }
  const CopletedTodosType = todoData.filter((t) => {
    return t.isCompleted;
  });
  const notCopletedTodosType = todoData.filter((t) => {
    return !t.isCompleted;
  });

  let todosToBeRender = todoData;

  if (todoTypeBtn === "copleted") {
    todosToBeRender = CopletedTodosType;
  } else if (todoTypeBtn === "notCopleted") {
    todosToBeRender = notCopletedTodosType;
  } else {
    todosToBeRender = todoData;
  }

  const data = todosToBeRender.map((item) => {
    return (
      <CardComponents
        key={item.id}
        item={item}
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
    const updateTodo = [...todoData, newTodo];
    setTodoData(updateTodo);
    localStorage.setItem("Todos", JSON.stringify(updateTodo));
    setInputValue("");
  }

  useEffect(() => {
    console.log("useEffect Changeddd");
    const StorageTodos = JSON.parse(localStorage.getItem("Todos"));
    setTodoData(StorageTodos);
  }, []);

  return (
    <div className="px-3 animate-opacity">
      <Card className="max-w-md border-4 mx-auto mt-16">
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          <p className="border-b-[1px] border-gray-600 pb-1">MY TO DO LIST</p>
        </h5>
        <Button.Group>
          <Button
            color="gray"
            onClick={() => {
              setTodoTypeBtn("all");
            }}
          >
            All
          </Button>
          <Button
            color="gray"
            onClick={() => {
              setTodoTypeBtn("copleted");
            }}
          >
            Done
          </Button>
          <Button
            color="gray"
            onClick={() => {
              setTodoTypeBtn("notCopleted");
            }}
          >
            Not accomplished
          </Button>
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
