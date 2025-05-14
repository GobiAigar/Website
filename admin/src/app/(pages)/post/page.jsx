"use client";
import React from "react";
import datas from "../../../components/constants/constants.json";
import GridCard from "@/components/static/GridCard";
import { Button } from "@mui/material";
import Forms from "@/components/static/Form";
import ListCard from "@/components/static/ListCard";

const Page = () => {
  const [isGrid, setIsGrid] = React.useState(true);
  const news = datas.news;
  return (
    <div className="container w-full px-4 py-8 flex flex-col flex-wrap gap-4 justify-center items-center ">
      <div className="w-full flex justify-end">
        <Button onClick={() => setIsGrid(!isGrid)}>Загвар өөрчлөх</Button>
      </div>
      <div className="flex items-start gap-8">
        <div className=" flex flex-wrap gap-4 justify-center md:justify-between items-center w-full">
          {isGrid
            ? news.map((data) => {
                return <GridCard key={data.id} data={data} />;
              })
            : news.map((data) => {
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
