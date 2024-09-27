"use client";

import { useEffect, useState } from "react";
import { ButtonAddClothes } from "../button-add-clothes/ButtonAddClothes";
import { ButtonEditClothes } from "../button-edit-clothes/ButtonEditClothes";

const HomePage = () => {
  const [clothes, setClothes] = useState([""]);
  const fetchData = () => {
    fetch("http://localhost:2222/Clothes")
      .then((Response) => Response.json())
      .then((data) => setClothes(data));
  };
  useEffect(() => fetchData(), []);
  return (
    <div className=" flex flex-col items-center justify-center ">
      <div className=" border flex justify-center w-[1000px] h-[600px]">
        {clothes?.clothes?.map((clothes) => {
          return (
            <div key={clothes.id}>
              {clothes.name}
              <p>{clothes.list}</p>
              <p key={clothes.id}>{clothes.price}</p>
            </div>
          );
        })}
      </div>

      <div className="flex gap-4 mt-4">
        <ButtonAddClothes />
        <ButtonEditClothes />
      </div>
    </div>
  );
};
export default HomePage;
