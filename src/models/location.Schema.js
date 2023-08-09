const { Schema, model, mongoose } = require("mongoose");

const locationSchema = new Schema(
  {
    latitude: {
      type: Number,
      required: true,
    },
    longitude: {
      type: Number,
      required: true,
    },
    distance: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = model("Location", locationSchema);
