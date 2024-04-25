import React from "react";
import ArrowKey, { Position } from "./ArrowKey";
type NextKeyProps = {
  value: Position;
};
export default function NextKey({ value }: NextKeyProps) {
  return (
    <div className="flex justify-center items-center gap-4 mt-4">
      <h1 className="text-2xl font-bold ">Next:</h1>
      <ArrowKey isActive={true} size={"LARGE"} position={value} />
    </div>
  );
}
