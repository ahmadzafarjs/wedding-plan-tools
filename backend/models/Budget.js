import mongoose from "mongoose";
const Schema = mongoose.Schema;

// Define the schema for expenses
const ExpenseSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  estimatedBudget: {
    type: Number,
    default: 0,
  },
  finalCost: {
    type: Number,
    default: 0,
  },
  paid: {
    type: Number,
    default: 0,
  },
});

// Define the schema for the main document
const BudgetSchema = new Schema({
  userId: {
    type: mongoose.Types.ObjectId,
    ref: "User",
    require: true,
  },
  name: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
  },
  expenses: [ExpenseSchema],
});

// Create the model from the schema
const Budget = mongoose.model("Budget", BudgetSchema);
export default Budget;
