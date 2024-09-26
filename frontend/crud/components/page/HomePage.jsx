"use client";

import { ButtonAddClothes } from "../button-add-clothes/ButtonAddClothes";
import { ButtonEditClothes } from "../button-edit-clothes/ButtonEditClothes";
import { List } from "../list/List";

const HomePage = () => {
  const BACKEND_ENDPOINT = "http://localhost:2222";

  const handleOnSubmit = async (event) => {
    event.preventDefault();

    const clothesData = {
      name: event.target.name.value,
      list: event.target.list.value,
      price: event.target.price.value,
    };

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(clothesData),
    };
    const response = await fetch(BACKEND_ENDPOINT, options);
    const data = await response.json();
    console.log(data);
  };

  return (
    <div className=" flex flex-col items-center justify-center ">
      <div className=" border flex justify-center w-[1000px] h-[600px]"></div>
      <List />
      <div className="flex gap-4 mt-4">
        <ButtonAddClothes handleOnsubmit={handleOnSubmit} />
        <ButtonEditClothes />
      </div>
    </div>
  );
};
export default HomePage;
