"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "./styles.module.css";
const Meals = () => {
  const [search, setSearch] = useState("a");
  const [error, setError] = useState("");
  const [mealeds, setMealeds] = useState([]);
  const loadMealsData = async () => {
    try {
      if (search.length <= 1) {
        let res = await fetch(
          `https://www.themealdb.com/api/json/v1/1/search.php?f=${search}`
        );
        let data = await res.json();
        setMealeds(data?.meals);
        setError("");
      }
    } catch (error) {
      setError("Data is Not Found!");
    }
  };
  //   console.log(mealeds);
  useEffect(() => {
    loadMealsData();
  }, []);

  //   console.log(meals);

  const handle = (e) => {
    setSearch(e.target.value);
  };

  //   console.log(search);
  return (
    <div>
      <div className="mt-7">
        <input
          className="rounded-md px-14 outline-none py-3 border-transparent bg-gray-200"
          type="text"
          placeholder="Search  Meals One Letter"
          onChange={handle}
          defaultValue={"a"}
        />
        <button
          onClick={() => loadMealsData()}
          className="bg-orange-500 p-3  rounded-md text-white"
        >
          Search
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-3 mt-8">
        {mealeds.length &&
          mealeds?.map((item) => (
            <div key={item?.idMeal} className="border-2 p-4 rounded-lg">
              <Image
                src={item?.strMealThumb}
                width={400}
                height={200}
                alt="Meals"
              />
              <h3 className="mt-2"> {item?.strMeal} </h3>
            </div>
          ))}

        {error && <h3> Data Not Found !</h3>}
      </div>
    </div>
  );
};

export default Meals;
