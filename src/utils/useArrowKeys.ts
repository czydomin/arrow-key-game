import { useEffect, useState } from "react";
import { Position } from "~/app/components/ArrowKey";

export type ArrowKeys = {
  up: boolean;
  down: boolean;
  left: boolean;
  right: boolean;
};

const useArrowKeys = (cb: (clickedKey: Position) => void): ArrowKeys => {
  const [arrowKeys, setArrowKeys] = useState<ArrowKeys>({
    up: false,
    down: false,
    left: false,
    right: false,
  });

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      switch (event.key) {
        case "ArrowUp":
          setArrowKeys((prevKeys) => ({ ...prevKeys, up: true }));
          cb("UP");
          break;
        case "ArrowDown":
          setArrowKeys((prevKeys) => ({ ...prevKeys, down: true }));
          cb("DOWN");
          break;
        case "ArrowLeft":
          setArrowKeys((prevKeys) => ({ ...prevKeys, left: true }));
          cb("LEFT");
          break;
        case "ArrowRight":
          setArrowKeys((prevKeys) => ({ ...prevKeys, right: true }));
          cb("RIGHT");
          break;
        default:
          break;
      }
    };

    const handleKeyUp = (event: KeyboardEvent) => {
      switch (event.key) {
        case "ArrowUp":
          setArrowKeys((prevKeys) => ({ ...prevKeys, up: false }));
          break;
        case "ArrowDown":
          setArrowKeys((prevKeys) => ({ ...prevKeys, down: false }));
          break;
        case "ArrowLeft":
          setArrowKeys((prevKeys) => ({ ...prevKeys, left: false }));
          break;
        case "ArrowRight":
          setArrowKeys((prevKeys) => ({ ...prevKeys, right: false }));
          break;
        default:
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [cb]);

  return arrowKeys;
};

export default useArrowKeys;
