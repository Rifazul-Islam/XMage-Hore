"use client";

const loading = () => {
  return (
    <div className="bg-black h-screen relative  flex justify-center items-center">
      <div>
        <div className="bg-green-700  w-28 h-28 mx-auto rounded-full ">
          <h2 className="text-green-700 bg-black flex justify-center items-center absolute left-[46%]  right-10  w-28 h-28 rounded-full">
            Loading
          </h2>
        </div>
      </div>
    </div>
  );
};

export default loading;
