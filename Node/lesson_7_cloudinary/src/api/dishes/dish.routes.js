const DishRoutes = require("express").Router();
const upload = require("../../middlewares/file");
const {
  getAllDishes,
  createDish,
  removeDish,
  patchDish,
} = require("./dish.controller");

DishRoutes.get("/", getAllDishes);
DishRoutes.post("/", upload.single("image"), createDish);
DishRoutes.patch("/:id", upload.single("image"), patchDish);
DishRoutes.delete("/:id", removeDish);

module.exports = DishRoutes;
