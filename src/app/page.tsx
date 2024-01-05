"use client"

import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";


export default function Home() {


  const [value, setValue] =useState("");
  const { push } = useRouter();


  const handlesSubmit = (event:FormEvent) => {
    event.preventDefault();
    push(`/prediction/${value}`);

  };

  
  return (
    <main>

      <h1>Enter oyur name</h1>

      <form onSubmit={handlesSubmit}>
        <input 

        type="text"
        value={value}
        onChange={(e)=>setValue(e.target.value)}
        className="text-black"
        placeholder="type something"

        />

        <button 
        type="submit"
        >submit</button>

      </form>
     
   </main>
  )
}
