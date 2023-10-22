import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import { ProductPage } from "./Component/React Router/ProductPage";
import { ProductDetalise } from "./Component/React Router/ProductDetalise";
import MainPage from "./Component/To do list project/MainPage";
import { todoContexts } from "./Contexts/TodoContexts";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";

function App() {
  const MyData = [
    {
      id: uuidv4(),
      title: "html cours",
      detailse: "Lorem ..",
      isCompleted: false,
    },
    {
      id: uuidv4(),
      title: "React cours",
      detailse: "Lorem 2..",
      isCompleted: false,
    },
  ];
  const [todoData, setTodoData] = useState(MyData);

  return (
    <div className="">
      <div className="m-5">
        <Link
          to="/productPage"
          className="bg-gray-200 border-[1px] border-gray-400 text-2xl p-2 mr-2"
        >
          product Page
        </Link>
        <Link
          to="/"
          className="bg-gray-200 border-[1px] border-gray-400 text-2xl p-2"
        >
          Home Page
        </Link>
        <Link
          to="/todolistproject"
          className="bg-gray-200 border-[1px] border-gray-400 text-2xl p-2"
        >
          To Do List Project{" "}
        </Link>
      </div>
      <Routes>
        <Route path="/productPage" element={<ProductPage />} />
        <Route path="/productDetailse/:id" element={<ProductDetalise />} />
        <Route
          path="/todolistproject"
          element={
            <todoContexts.Provider value={{ todoData, setTodoData }}>
              <MainPage />
            </todoContexts.Provider>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
