import Meals from "@/components/Meals/Meals";

const MealsPage = () => {
  return (
    <div className="text-center">
      <h2 className="text-3xl font-semibold text-center pt-4 text-purple-600">
        They Fovaruits Meals
      </h2>
      <p className="text-lg mt-2 ">This is Meals is helth verybody.</p>

      <div>
        <Meals></Meals>
      </div>
    </div>
  );
};

export default MealsPage;
