"use client";
import { useState, useEffect } from "react";

import GridCard from "@/components/static/GridCard";
import { Button } from "@mui/material";
import Forms from "@/components/static/Form";
import ListCard from "@/components/static/ListCard";
import { Backend_Endpoint } from "@/config";

const Page = () => {
  const [isGrid, setIsGrid] = useState(true);
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch(`${Backend_Endpoint}/api/news`);
      const data = await response.json();
      setData(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container w-full px-4 py-8 flex flex-col flex-wrap gap-4 justify-center items-center ">
      <div className="w-full flex justify-end">
        <Button onClick={() => setIsGrid(!isGrid)}>Загвар өөрчлөх</Button>
      </div>
      <div className="flex items-start gap-8">
        <div className=" flex flex-wrap gap-4 justify-center md:justify-between items-center w-full">
          {isGrid
            ? data.map((data) => {
                return <GridCard key={data.id} data={data} />;
              })
            : data.map((data) => {
                return <ListCard key={data.id} data={data} />;
              })}
        </div>
        <div className="w-fit flex justify-center items-center">
          <Forms />
        </div>
      </div>
    </div>
  );
};

export default Page;
