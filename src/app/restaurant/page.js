"use client";
import { useState } from "react";
import Login from "../_component/Login";
import SignUp from "../_component/SignUp";
import Header from "../_component/Header";
import Footer from "../_component/Footer";

export default function RestaurantPage() {
  const [login, setLogin] = useState(true);
  return (
    <div>
      
      <Header />
      <h3>Food Delivery App SignUp/Login</h3>
      {login ? <Login /> : <SignUp />}
      <button onClick={() => setLogin(!login)}>
        {login
          ? "Do not have account? SignUp"
          : "All ready have account? Login"}
      </button>
      <Footer />
    </div>
  );
}
