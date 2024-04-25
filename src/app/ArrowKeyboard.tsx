import React from "react";
import ArrowKey, { Position } from "./components/ArrowKey";
import { ArrowKeys } from "~/utils/useArrowKeys";
type ArrowKeyboardProps = ArrowKeys

export default function ArrowKeyboard({
  up,down,left,right
}: ArrowKeyboardProps) {
  return (
    <div className="flex gap-2 flex-col">
      <div className="flex justify-center gap-2">
        <ArrowKey isActive={up} position={"UP"} size={"REGULAR"} />
      </div>
      <div className="flex justify-center gap-2">
        <ArrowKey isActive={left} position={"LEFT"} size={"REGULAR"} />
        <ArrowKey isActive={down} position={"DOWN"} size={"REGULAR"} />
        <ArrowKey isActive={right} position={"RIGHT"} size={"REGULAR"} />
      </div>
    </div>
  );
}
