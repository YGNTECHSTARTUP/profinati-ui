"use client";

import { PlaceholdersAndVanishInput } from "@/components/ui/placeholders-and-vanish-input";
import { placeholders } from "./constant";
import { useState } from "react";

export default  function PlaceholdersAndVanishInputDemo() {
   const isProfaneTest = async (input:string) => {
   const response = await fetch("https://profanity-api.gagannaidu2006.workers.dev/",{
    method:"POST",
    headers:{"Content-Type":"application/json"},
    body:JSON.stringify({
        "message":input
    })
   })
   const data = await response.json();
   return data;
    
   }
  const [input,setInput] = useState<string>("");
  const [data,setData] = useState<{
    isProfane:boolean,
    word:{
        word:string,
        score:number
    },
    performance:number
  }| undefined>(undefined);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value)
  };
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    isProfaneTest(input).then((data) => {
      console.log(data);
    setData(data);
    })  
    console.log("submitted");
    
  };
  return (
  
  
      <PlaceholdersAndVanishInput
       data={data}
        placeholders={placeholders}
        onChange={handleChange}
        onSubmit={onSubmit}
       
      />

  );
}
