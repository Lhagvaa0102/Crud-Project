"use client";

import { useEffect, useState } from "react";

export const ButtonAddClothes = ({ onAdd }) => {
  const BACKEND_ENDPOINT = "https://crud-project-65a1.onrender.com/AddClothes";

  const [clothesData, setClothesData] = useState({
    name: "",
    list: "",
    price: "",
  });

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setClothesData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleOnSubmit = async (event) => {
    event.preventDefault();

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(clothesData),
    };
    try {
      const response = await fetch(BACKEND_ENDPOINT, options);
      document.getElementById("my_modal_3").close();
      setClothesData({
        name: "",
        list: "",
        price: "",
      });

      if (response.ok) {
        onAdd();
      }
    } catch (error) {
      console.log("error in create prod", error);
    }
  };

  return (
    <div>
      <button
        className="btn"
        onClick={() => document.getElementById("my_modal_3").showModal()}
      >
        Бараа үүсгэх
      </button>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>

          <h3 className="font-bold text-center text-lg">Бараа үүсгэх</h3>
          <div>
            <p className="py-4 font-bold">Барааны нэр</p>
            <input
              className="border rounded bg-[#F4F4F4] p-3 w-full h-[56px]"
              placeholder="Барааны нэр"
              type="text"
              name="name"
              value={clothesData.name}
              onChange={handleOnChange}
            />
          </div>
          <div>
            <p className="py-4 font-bold">Барааны ангилал</p>
            <select
              className="w-full rounded p-2 bg-[#F4F4F4] border h-[56px]"
              name="list"
              value={clothesData.list}
              onChange={handleOnChange}
            >
              <option disabled value="">
                Барааны ангилал
              </option>
              <option value="shirt">Цамц</option>
              <option value="pants">Өмд</option>
              <option value="outwear">Гадуур хувцас</option>
              <option value="shoes">Гутал</option>
            </select>
          </div>
          <div>
            <p className="py-4 font-bold">Үнэ</p>
            <input
              className="border rounded p-3 bg-[#F4F4F4] w-full h-[56px]"
              placeholder="Үнэ"
              type="text"
              name="price"
              value={clothesData.price}
              onChange={handleOnChange}
            />
          </div>
          <div className="flex justify-end items-center mt-5 mb-5 ml-5 gap-2">
            <button className="p-3">Буцах</button>
            <form method="dialog" onSubmit={handleOnSubmit}>
              <button
                type="submit"
                className="border rounded text-white bg-[#393939] pt-3 pb-3 pl-4 pr-4"
              >
                Үүсгэх
              </button>
            </form>
          </div>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  );
};
