import Image from "next/image";
import React from "react";

const DayState = ({ day }: { day: boolean | undefined }) => {
  let image: [string, string, number?] = [
    "/images/waiting.svg",
    "wainting",
    12,
  ];

  if (day === true) image = ["/images/check.svg", "green-check", 20];
  if (day === false) image = ["/images/failed.svg", "red-marked", 17];

  const [src, alt, size] = image;
  return (
    <div className="flex items-center justify-center h-9">
      <Image src={src} width={size} height={size} alt={alt} />
    </div>
  );
};

export default DayState;
