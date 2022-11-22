const Dish = require("./dish.model");
const { setError } = require("../../helpers/errors");
const { deleteFile } = require("../../middlewares/delete-file");

const getAllDishes = async (req, res, next) => {
  try {
    const dishes = await Dish.find();
    return res.status(200).json({
      message: "All dishes",
      dishes,
    });
  } catch (error) {
    return next(setError(500, error.message | "Dishes not found"));
  }
};

const createDish = async (req, res, next) => {
  try {
    const dish = new Dish(req.body);
    if (req.file) {
      dish.image = req.file.path;
    }
    const dishInDB = await dish.save();
    return res.status(201).json({
      message: "Dish created",
      dishInDB,
    });
  } catch (error) {
    return next(setError(500, error.message | "Failed in dish creation"));
  }
};

const patchDish = async (req, res, next) => {
  try {
    const { id } = req.params;

    const patchDishDB = new Dish(req.body);

    patchDishDB._id = id;
    const dishDB = await Dish.findByIdAndUpdate(id, patchDishDB);

    if (req.file) {
      deleteFile(dishDB.image);
      patchDishDB.image = req.file.path;
    }

    if (!dishDB) {
      return next("Dish not found");
    }
    return res.status(200).json({
      new: patchDishDB,
      old: dishDB,
    });
  } catch (error) {
    return next(setError(500, error.message | "Failed in dish update"));
  }
};

const removeDish = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deletedDish = await Dish.findByIdAndDelete(id);
    if (deletedDish.image) {
      deleteFile(deletedDish.image);
    }
    if (!deletedDish) {
      return next(setError(404, "Dish not found"));
    }
    return res.status(200).json({
      message: "Dish deleted",
      deletedDish,
    });
  } catch (error) {
    return next(setError(500, error.message | "Failed in dish deletion"));
  }
};

module.exports = {
  getAllDishes,
  createDish,
  patchDish,
  removeDish,
};
