import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import fs from "fs";
import { error } from "console";

const port = 2222;
const app = express();

app.use(bodyParser.json());
app.use(cors());

app.post("/", (request, response) => {
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
app.listen(port, () => {
  console.log(`Server ajillaj bn http://localhost:${port}`);
});
