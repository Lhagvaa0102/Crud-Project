import express, { response } from "express";
import bodyParser from "body-parser";
import cors from "cors";
import fs from "fs";
import { error } from "console";
import { request } from "http";

const port = 2222;
const app = express();

app.use(bodyParser.json());
app.use(cors());

app.post("/AddClothes", (request, response) => {
  const { name, list, price } = request.body;

  fs.readFile("./data/clothes.json", "utf-8", (readError, data) => {
    let savedData = data ? JSON.parse(data) : [];

    if (readError) {
      response.json({
        status: false,
        error: error,
      });
    }

    const newClothes = {
      id: Date.now().toString(),
      name: name,
      list: list,
      price: price,
    };
    savedData.push(newClothes);

    fs.writeFile("./data/clothes.json", JSON.stringify(savedData), (error) => {
      if (error) {
        response.json({
          status: false,
          error: error,
        });
      } else {
        response.json({
          status: true,
          clothes: newClothes,
        });
      }
    });
  });
});
app.get("/Clothes", (request, response) => {
  fs.readFile("./data/clothes.json", "utf-8", (readError, data) => {
    let clothes = JSON.parse(data);
    if (readError) {
      response.json({
        status: false,
        error: error,
      });
    } else {
      response.json({
        status: true,
        clothes: clothes,
      });
    }
  });
});
app.delete("/clothes", (request, response) => {
  const { id } = request.body;

  fs.readFile("./data/clothes.json", "utf-8", (readError, data) => {
    if (readError) {
      response.json({
        success: false,
        error: error,
      });
    }

    let dbData = data ? JSON.parse(data) : [];

    const filteredData = dbData.filter((data) => data?.id !== id);

    if (filteredData.length === dbData.length) {
      response.json({
        success: false,
        error: "Product id not found",
      });
    }

    fs.writeFile(
      "./data/clothes.json",
      JSON.stringify(filteredData),
      (error) => {
        if (error) {
          response.json({
            success: false,
            error: error,
          });
        } else {
          response.json({
            success: true,
            clothes: filteredData,
          });
        }
      }
    );
  });
});
app.put("/clothes", (request, response) => {
  const { id, name, list, price } = request.body;

  fs.readFile("./data/clothes.json", "utf-8", (readError, data) => {
    if (readError) {
      response.json({
        status: false,
        error: error,
      });
    }

    let dbData = data ? JSON.parse(data) : [];

    const editedData = dbData.map((data) => {
      if (data?.id === id) {
        return {
          id,
          name,
          list,
          price,
        };
      }
      return data;
    });

    fs.writeFile("./data/clothes.json", JSON.stringify(editedData), (error) => {
      if (error) {
        response.json({
          status: false,
          error: error,
        });
      } else {
        response.json({
          status: true,
          products: editedData,
        });
      }
    });
  });
});

app.listen(port, () => {
  console.log(`Server ajillaj bn http://localhost:${port}`);
});
