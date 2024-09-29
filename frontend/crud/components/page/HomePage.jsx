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
      <div className=" border flex gap-3 flex-wrap relative h-[600px]">
        {clothes?.clothes?.map((clothes) => {
          return (
            <div>
              <div className="card bg-base-100 w-[364px] shadow-xl">
                <div className="card-body">
                  <h2 className="card-title">{clothes.name}</h2>
                  <p>{clothes.list}</p>
                  <div className="card-actions justify-start">
                    <p>{clothes.price}</p>
                  </div>
                </div>
              </div>
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
