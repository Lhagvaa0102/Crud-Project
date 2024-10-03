"use client";

import { useEffect, useState } from "react";
import { ButtonAddClothes } from "../button-add-clothes/ButtonAddClothes";
import { ButtonEditClothes } from "../button-edit-clothes/ButtonEditClothes";

const HomePage = () => {
  const [clothes, setClothes] = useState([]);
  const [selectedClothes, setSelectedClothes] = useState([]);

  const fetchData = () => {
    fetch("http://localhost:2222/Clothes")
      .then((response) => response.json())
      .then((data) => setClothes(data));
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleOnDelete = async (clothes) => {
    const clothesData = {
      id: clothes.id,
    };
    const options = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(clothesData),
    };
    await fetch("http://localhost:2222/clothes", options);
    fetchData();
  };

  const handleEditClick = (clothesItem) => {
    setSelectedClothes(clothesItem);
    document.getElementById("my_modal_2").showModal();
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="container">
        <div className="border flex gap-3 flex-wrap relative p-5">
          {clothes?.clothes?.map((clothesItem) => {
            return (
              <div key={clothesItem?.id}>
                <div className="card bg-base-100 w-[364px] shadow-xl">
                  <div className="card-body">
                    <h2 className="card-title">
                      Барааны нэр : {clothesItem.name}
                    </h2>
                    <p>Барааны ангилал : {clothesItem.list}</p>
                    <div className="card-actions justify-start">
                      <p>Үнэ : {clothesItem.price}</p>
                      <div className="flex gap-2">
                        <form
                          onSubmit={(e) => {
                            e.preventDefault();
                            handleOnDelete(clothesItem);
                          }}
                        >
                          <button type="submit" className="btn">
                            Delete
                          </button>
                        </form>

                        <button
                          className="btn"
                          onClick={() => handleEditClick(clothesItem)}
                        >
                          Бараа засах
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex gap-4 mt-4">
          <ButtonAddClothes onAdd={fetchData} />
        </div>
        {selectedClothes && (
          <ButtonEditClothes clothes={selectedClothes} onUpdate={fetchData} />
        )}
      </div>
    </div>
  );
};

export default HomePage;
