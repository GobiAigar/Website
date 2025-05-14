import React from "react";
import datas from "../../../components/constants/constants.json";
import MessageCard from "@/components/static/MessageCard";

const Page = () => {
  const messages = datas?.collaborationRequests;

  return (
    <div className="container px-4 py-8 flex  flex-wrap gap-4 justify-center items-center  ">
      {messages?.map((data) => {
        return <MessageCard key={data.id + data.id} data={data} />;
      })}
    </div>
  );
};

export default Page;
