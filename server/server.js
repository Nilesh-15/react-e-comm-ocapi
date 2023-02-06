// import {
//   baseURL,
//   getCategory,
//   getProduct,
//   getTile,
//   config,
// } from "./routeConfig";

const express = require("express");
const cors = require("cors");
const axios = require("axios");
const port = process.env.PORT || 5000;

const app = express();
app.use(cors({ origin: true }));
app.use(express.json());

const baseURL =
  "https://zyeg-001.dx.commercecloud.salesforce.com/s/RefArch/dw/shop/v23_1/";
const getCategory = "categories/root?levels=4";
const getTile =
  "product_search?refine_1=cgid=womens&expand=images,prices,availability";
const getProduct = "";
const getRecommendation = "";

const config = {
  headers: {
    "x-dw-client-id": "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
  },
};

app.listen(port, () => console.log(`Server running on PORT >>>>> ${port}`));

app.get("/getPort", (req, res) => {
  res.send(`Hey Guys... Server running on PORT >>>>> ${port}`);
});

app.get("/getCategory", async (req, res) => {
  try {
    await axios
      .get(`${baseURL}${getCategory}`, config)
      .then(function (response) {
        res.json(response.data?.categories);
      })
      .catch(console.error());
  } catch (error) {
    res.send(error);
  }
});
