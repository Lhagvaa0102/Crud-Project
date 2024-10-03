"use client";
import { useState, useEffect } from "react";

export const ButtonEditClothes = ({ clothes, onUpdate }) => {
  const [clothesData, setClothesData] = useState({
    name: clothes.name,
    list: clothes.list,
    price: clothes.price,
  });

  useEffect(() => {
    setClothesData({
      name: clothes.name,
      list: clothes.list,
      price: clothes.price,
    });
  }, [clothes]);

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setClothesData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleOnEdit = async (event) => {
    event.preventDefault();
    const options = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: clothes.id, ...clothesData }),
    };
    await fetch(`http://localhost:2222/clothes`, options);
    document.getElementById("my_modal_2").close();
    onUpdate();
  };

  return (
    <div>
      <dialog id="my_modal_2" className="modal">
        <div className="modal-box">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-center text-lg">Бараа засах</h3>
          <form onSubmit={handleOnEdit}>
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
                onChange={handleOnChange}
                value={clothesData.list}
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
                onChange={handleOnChange}
                value={clothesData.price}
              />
            </div>
            <div className="flex justify-end items-center mt-5 mb-5 ml-5 gap-2">
              <button className="p-3">Буцах</button>
              <button
                type="submit"
                className="border rounded text-white bg-[#393939] pt-3 pb-3 pl-4 pr-4"
              >
                Засах
              </button>
            </div>
          </form>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  );
};
