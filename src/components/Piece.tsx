// Styles
import "./Piece.css";
// Logic
import { PieceType, Team } from "../logic/GamePiece";

interface Props {
  team: Team;
  type: PieceType;
  index: number; // Because team and type can't uniquely identify a Piece (there are 8 white pawns, for example)
}

export default function Piece({ team, type, index }: Props) {
  const pc = getPieceName(team, type);
  console.log("Rendering Piece", pc, index);

  return (
    <button
      key={pc + index}
      className="piece"
      onClick={() => Rune.actions.print()}
      data-team={team}
      data-piece-type={type}
    >
      P
    </button>
  );
}

function getPieceName(team: string, type: string) {
  return `${type}(${team})`;
}
