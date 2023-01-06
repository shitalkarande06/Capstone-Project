import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFoodItems } from "../Actions/FoodListaction";
import Client from "../Components/AuthPages/Client";
export default function HomePage() {
  const dispatch = useDispatch();
  const foodItemsstate = useSelector((state) => state.getAllFoodListReducer);

  const { foodItems, error, loading } = foodItemsstate;

  useEffect(() => {
    dispatch(getFoodItems());
  }, []);
  return (
    <div>
      <div className="row justify-content-center">
        {loading ? (
          <h1>Loading...</h1>
        ) : error ? (
          <h1>Something went wrong</h1>
        ) : (
          foodItems.map((foodItem) => {
            return (
              <div className="col-md-3" key={foodItem._id}>
                <div>
                  <Client foodItem={foodItem} />
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
