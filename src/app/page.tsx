"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [value, setValue] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleSubmit = () => {
    fetch("/reynard", {
      method: "POST",
      body: JSON.stringify({ name: value }),
    });

    setValue(""); // Clear the input value
  };

  useEffect(() => {
    console.log(value);
  }, [value]);

  return (
    <div className="flex flex-col items-center w-screen h-screen justify-center">
      Kirim sesuatu
      <input
        onChange={handleChange}
        type="text"
        className="text-black"
        value={value}
      />
      <button onClick={handleSubmit} type="submit">
        Kirim
      </button>
    </div>
  );
}
