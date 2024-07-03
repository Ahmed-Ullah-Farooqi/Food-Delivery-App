"use client";

import AddFoodItems from "@/app/_component/AddFoodItem";
import FoodItemList from "@/app/_component/FoodItemList";
import Header from "@/app/_component/Header";
import { useState } from "react";
const Dashboard = () => {
  const [addItem, setAddItem] = useState(false);

  return (
    <>
      <Header />
      <button onClick={() => setAddItem(true)}>Add Food</button>
      <button onClick={() => setAddItem(false)}>Dashboard</button>
      {addItem ? <AddFoodItems setAddItem={setAddItem} /> :<FoodItemList/>}
    </>
  );
};

export default Dashboard;
