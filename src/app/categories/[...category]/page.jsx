import React from "react";

const page = ({ params }) => {
  const items = params.category;

  if (items.length > 2) {
    return (
      <div>
        <p> This is Multiple Dynamic Page {items?.length} </p>
      </div>
    );
  }
  return (
    <div>
      <p> Check This Page </p>
    </div>
  );
};

export default page;
