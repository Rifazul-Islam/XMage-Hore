import React from "react";
import { Style_Script } from "next/font/google";

const headLine = Style_Script({ weight: ["400"], subsets: ["latin"] });
export const metadata = {
  title: {
    absolute: "about",
  },
  description: "This is A about Page ",
};

const gitTime = async () => {
  const res = await fetch("http://localhost:3000/time", {
    next: { revalidate: 5 },
  });
  const data = await res.json();
  return data.currentTime;
};

const AboutPage = async () => {
  const currentTimes = await gitTime();
  return (
    <div>
      <h2 className={` ${headLine.className} font-bold text-4xl`}>
        This is About Page
      </h2>
      <p className="text-3xl font-bold"> Current Time : {currentTimes}</p>
    </div>
  );
};

export default AboutPage;
