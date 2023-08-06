"use client";

import React from "react";
import { Dancing_Script } from "@next/font/google";
import { default as cs } from "classnames";
const dancingScript = Dancing_Script({
  weight: ["500", "700"],
  subsets: ["latin"],
});
interface PropType {
  isLight: boolean;
}
export default function BrandName({ isLight }: PropType) {
  return (
    <div
      className={cs(
        dancingScript.className,
        "text-3xl",
        isLight ? "text-primary" : "text-secondary"
      )}
    >
      <span className="text-4xl text-primary">F</span>
      <span>ramer</span>
    </div>
  );
}
