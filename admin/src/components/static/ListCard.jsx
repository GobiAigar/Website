import React from "react";

const ListCard = ({ data }) => {
  return (
    <div className="w-full border rounded-sm p-4 shadow border-gray-200">
      {data.title}
    </div>
  );
};

export default ListCard;
