"use client";
import MessageCard from "@/components/static/MessageCard";
import { Backend_Endpoint } from "@/config";
import { useEffect, useState } from "react";

const Page = () => {
  const [messages, setMessages] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch(`${Backend_Endpoint}/api/messages`);
      const data = await response.json();
      setMessages(data);
    } catch (error) {
      throw new Error(error);
    }
  };

  useEffect(() => {
    const user = sessionStorage.getItem("user");
    fetchData();
  }, []);

  return (
    <div className="container px-4 py-8 flex  flex-wrap gap-4 justify-center items-center  ">
      {messages?.map((data) => {
        return <MessageCard key={data.id} data={data} />;
      })}
    </div>
  );
};

export default Page;
