'use client'
import { useState } from "react";

export default function Home() {
  const [numState, setNumState] = useState<any>(0)
  const addToNumber = () =>{
    setNumState(numState + 1)
  }
  const subtractFromNumber = () =>{
    setNumState(numState - 1)
  }
  return (
    <>
      <main className="h-screen w-screen flex flex-col justify-center items-center">
        <h1 className="text-5xl font-serif text-[#6fddfb]">My Counter App</h1>
        <p className="text-7xl font-bold mt-4 text-white">{numState}</p>
        <div className="flex flex-row gap-10 mt-6">
          <button className="text-4xl bg-[#6fddfb] p-2 px-14 hover:border-[#6fddfb] hover:border-2 hover:bg-transparent hover:text-[#6fddfb]" onClick={addToNumber}>
            +
          </button>
          <button className="text-4xl p-2 px-14 border-2 border-[#6fddfb] text-[#6fddfb] rounded hover:bg-[#6fddfb] hover:text-[black]" onClick={subtractFromNumber}>
            -
          </button>
        </div>
      </main>
    </>
  );
}
