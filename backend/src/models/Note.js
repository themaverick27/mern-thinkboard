import mongoose from "mongoose";

// Step 1- create a schema
// Step 2- create a model based off of that schema

const noteSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      requried: true,
    },
    content: {
      type: String,
      requried: true,
    },
  },
  { timestamps: true } // createdAt, updatedAt
);

const Note = mongoose.model("Note", noteSchema);

export default Note;
