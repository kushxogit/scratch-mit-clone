import React from "react";
import MoveX from "./Options/MoveX";
import MoveY from "./Options/MoveY";
import Goto from "./Options/Goto";
import ChangeSize from "./Options/ChangeSize";
import Repeat from "./Options/Repeat";
import SetSize from "./Options/SetSize";
import Speak from "./Options/Speak";
import TurnAnti from "./Options/TurnAnti";
import TurnClock from "./Options/TurnClock";
import Wait from "./Options/Wait";
import Flag from "./Options/Flag";

export const getComponent = (key, id) => {
  switch (key) {
    case "MOVEX":
      return <MoveX />;
    case "MOVEY":
      return <MoveY />;
    case "GOTO":
      return <Goto />;
    case "WAIT":
      return <Wait />;
    case "TURNCLOCK":
      return <TurnClock />;
    case "TURNANTI":
      return <TurnAnti />;
    case "SPEAK":
      return <Speak />;
    case "CHANGESIZE":
      return <ChangeSize />;
    case "SETSIZE":
      return <SetSize />;
    case "REPEAT":
      return <Repeat />;
      case "FLAG":
      return <Flag />;
  }
};
