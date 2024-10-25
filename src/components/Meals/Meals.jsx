"use client";
import Image from "next/image";
import { useState } from "react";

const Meals = () => {
  const [search, setSearch] = useState("a"); // Default search letter is 'a'
  const [error, setError] = useState("");
  const [meals, setMeals] = useState([]); // Initialize meals as an empty array

  const loadMealsData = async () => {
    try {
      let res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?f=${search}`
      );
      let data = await res.json();

      if (data?.meals) {
        setMeals(data.meals); // Set meals if data is returned
        setError(""); // Clear any previous error
      } else {
        setMeals([]); // Set an empty array if no meals found
        setError("Data not found!"); // Set error if meals are null
      }
    } catch (error) {
      setMeals([]); // Clear meals on fetch error
      setError("An error occurred while fetching data!");
    }
  };

  // useCallback(() => {
  //   loadMealsData();
  // }, [loadMealsData]);

  const handleSearch = (e) => {
    setSearch(e.target.value); // Update the search term as the user types
  };

  const handleSearchClick = () => {
    loadMealsData(); // Trigger a new API call when clicking the search button
  };

  return (
    <div>
      <div className="mt-7">
        <input
          className="rounded-md px-14 outline-none py-3 border-transparent bg-gray-200"
          type="text"
          placeholder="Search Meals by First Letter"
          onChange={handleSearch} // Call handleSearch on input change
          value={search} // Controlled input to sync with state
        />
        {search?.length > 0 && search?.length < 2 ? (
          <>
            <button
              onClick={handleSearchClick}
              className="bg-orange-500 p-3 rounded-md text-white ml-3"
            >
              Search
            </button>
          </>
        ) : (
          <>
            <button
              disabled
              className="bg-orange-300 p-3 rounded-md text-white ml-3"
            >
              Search
            </button>{" "}
          </>
        )}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-3 mt-8">
        {meals.length > 0 ? (
          meals?.map((item) => (
            <div key={item?.idMeal} className="border-2 p-4 rounded-lg">
              <Image
                src={item?.strMealThumb}
                width={400}
                height={200}
                alt="Meal"
                className="rounded-lg"
              />
              <h3 className="mt-2 font-semibold">{item?.strMeal}</h3>
            </div>
          ))
        ) : (
          <h3>{error || "No meals found! ----"}</h3>
        )}
      </div>
    </div>
  );
};

export default Meals;
