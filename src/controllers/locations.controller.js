const Location = require("../models/location.Schema");

const location = (req, res) => {
  res.render("location");
};

const create = async (req, res) => {
  try {
    console.log(req.body);
    const { latitude, longitude, distance } = req.body;
    await Location.create({ latitude, longitude, distance }); // Use await for asynchronous operations
    res.json({ message: "Location created successfully" });
  } catch (error) {
    console.error("Error creating location:", error);
    res.status(500).json({ message: "Error creating location" });
  }
};

const findDistance = async (req, res) => {
  const result = await Location.find();

  const MonthlyDistance = calculate(result);
  console.log(MonthlyDistance);
  res
    .status(200)
    .json({ message: "Successfully found", Total: MonthlyDistance });
};

const calculate = (data) => {
  let sum = 0;
  const app = data.map((item) => (sum += +item.distance));
  return sum;
};
module.exports = { location, create, findDistance };
