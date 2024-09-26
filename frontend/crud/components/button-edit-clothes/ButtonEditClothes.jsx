"use client";
export const ButtonEditClothes = () => {
  return (
    <div>
      <button
        className="btn"
        onClick={() => document.getElementById("my_modal_3").showModal()}
      >
        Бараа засах
      </button>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box  ">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-center text-lg">Бараа засах</h3>
          <div>
            <p className="py-4 font-bold ">Барааны нэр</p>
            <input
              className="border rounded bg-[#F4F4F4] p-3 w-full h-[56px]"
              placeholder="Барааны нэр"
              type="text"
            />
          </div>
          <div>
            <p className="py-4 font-bold ">Барааны ангилал</p>
            <select
              className="w-full rounded p-2 bg-[#F4F4F4] border h-[56px]"
              name=""
              id=""
            >
              <option disabled value="">
                Барааны ангилал
              </option>
              <option value="">Цамц</option>
              <option value="">Өмд</option>
              <option value="">Гадуур хувцас</option>
              <option value="">Гутал </option>
            </select>
          </div>
          <div>
            <p className="py-4 font-bold ">Үнэ</p>
            <input
              className="border rounded p-3 bg-[#F4F4F4]  w-full h-[56px]"
              placeholder="Үнэ"
              type="text"
            />
          </div>
          <div className="flex justify-end items-center mt-5 mb-5 ml-5 gap-2  ">
            <button className="p-3">Буцах</button>
            <button className="border rounded text-white bg-[#393939] pt-3 pb-3 pl-4 pr-4">
              засах
            </button>
          </div>
        </div>
      </dialog>
    </div>
  );
};
