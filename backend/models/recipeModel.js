import mongoose from "mongoose";

const Schema = mongoose.Schema;

const recipeSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  ingredients: { type: [String], required: true },
  hour: { type: String, required: true },
  minutes: { type: String, required: true },  
  author: { type: String, required: true },
});

export default mongoose.model("Recipe", recipeSchema);
