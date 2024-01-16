import React from "react";
import { useParams } from "react-router-dom";
import { productData } from "./Products";

export const ProductDetalise = () => {
  //بجيب المتغير يلي حطيتو بالرابط وبقارنو بالاي دي تبع البيانات تبعيتي
  const IdParams = useParams();
  const p = productData.find((item) => {
    return IdParams.id == item.id;
  });
  console.log(IdParams.id);

  if (p) {
    return (
      <p>
        <img src={p.img} alt="" />
        <h1 className="text-white text-2xl">{p.title}</h1>
      </p>
    );
  }

  return <h1 className="text-white">nooo page</h1>;
};
