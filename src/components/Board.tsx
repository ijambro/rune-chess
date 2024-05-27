// Components
import Piece from "./Piece";
// Styles
import "./Board.css";
// Logic
import { GamePiece } from "../logic/GamePiece";

interface Props {
  ranksAndFiles: Array<Array<GamePiece>>;
}

export default function Board({ ranksAndFiles }: Props) {
  return (
    <div id="board">
      {ranksAndFiles.map((rank, rankIndex) => {
        {
          return rank.map((piece, fileIndex) => {
            const sq = getSquareName(rankIndex, fileIndex);
            console.log("Mapping board square", sq, piece);

            return (
              <div
                className="square"
                key={sq}
                data-rank-even={rankIndex % 2 === 0}
                data-file-even={fileIndex % 2 === 0}
              >
                {piece ? (
                  <Piece
                    team={"white"}
                    type={"knight"}
                    index={rankIndex * fileIndex}
                  />
                ) : (
                  <Piece
                    team={"white"}
                    type={"pawn"}
                    index={rankIndex * fileIndex}
                  />
                )}
              </div>
            );
          });
        }
      })}
    </div>
  );
}

function getSquareName(rank: number, file: number) {
  const rankNumber = 8 - rank;
  const fileLetterArray = ["A", "B", "C", "D", "E", "F", "G", "H"];
  const fileLetter = fileLetterArray[file];
  return `${fileLetter}${rankNumber}`;
}
