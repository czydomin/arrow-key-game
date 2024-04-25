"use client";
import React, { MouseEventHandler } from "react";
import { ArrowUpIcon } from "@heroicons/react/24/solid";
import { cn } from "~/utils/cn";

export type Position = "UP" | "DOWN" | "RIGHT" | "LEFT";

export type State = "HIT" | "MISS";
type Size = "LARGE" | "REGULAR";

export type ArrowKeyProps = {
  isActive: boolean;
  position: Position;
  state?: State;
  size: Size;
};

export default function ArrowKey({
  isActive,
  position,
  state,
  size,
}: ArrowKeyProps) {
  return (
    <div>
      <ArrowUpIcon
        className={cn("border-2 border-solid rounded", {
          "h-12 w-12 text-green-500 border-green-500 scale-125": isActive,
          "h-10 w-10 text-black border-black": !isActive,
          "rotate-90": position === "RIGHT",
          "-rotate-90": position === "LEFT",
          "rotate-180": position === "DOWN",
          "text-green-500 border-green-500": state === "HIT",
          "text-red-500 border-red-500": state === "MISS",
          "h-12 w-12": size === "LARGE",
          "h-10 w-10": size === "REGULAR",
        })}
      />
    </div>
  );
}
