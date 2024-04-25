"use client";
import NextKey from "./components/NextKey";
import ArrowKeyboard from "./ArrowKeyboard";
import { useCallback, useState } from "react";
import { Position } from "./components/ArrowKey";
import useArrowKeys from "~/utils/useArrowKeys";
import ArrowKey from "./components/ArrowKey";
import { State } from "./components/ArrowKey";

type History = {
  position: Position;
  state: State;
};

export default function Home() {
  const [nextKey, setNextKey] = useState<Position>("DOWN");
  const [history, setHistory] = useState<History[]>([]);

  const onKeyPress = useCallback(
    (clickedKey: Position) => {
      const newHistory: History = {
        position: clickedKey,
        state: clickedKey === nextKey ? "HIT" : "MISS",
      };

      setHistory((prev) => [...prev, newHistory]);

      const options: Position[] = ["UP", "LEFT", "DOWN", "RIGHT"];
      const random = Math.floor(Math.random() * options.length);
      setNextKey(options[random]);
    },
    [nextKey]
  );

  const arrowKeys = useArrowKeys(onKeyPress);

  const score = history.filter((i) => i.state === "HIT");
  console.log(score.length);

  return (
    <div className="flex justify-center">
      <main className="flex flex-col justify-between  border-2 p-2  mt-2 rounded border-black w-96 h-96">
        <NextKey value={nextKey} />
        <div className="flex flex-col gap-2 ">
          <h1>Score: {score.length}</h1>

          <h1>History:</h1>
          <div className="flex gap-2 bg-blue-200 max-w-96 flex-wrap">
            {history.map((clickedKey, i) => {
              return (
                <ArrowKey
                  isActive={false}
                  position={clickedKey.position}
                  size={"REGULAR"}
                
                  key={i}
                  state={clickedKey.state}
                />
              );
            })}
          </div>
        </div>

        <ArrowKeyboard
          up={arrowKeys.up}
          left={arrowKeys.left}
          down={arrowKeys.down}
          right={arrowKeys.right}
        />
      </main>
    </div>
  );
}
