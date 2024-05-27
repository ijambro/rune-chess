import { Piece } from "../logic/Piece";
import "./Board.css";

interface Props {
  ranksAndFiles: Array<Array<Piece>>;
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
              <button
                key={`${rankIndex}-${fileIndex}`}
                onClick={() => Rune.actions.print()}
                data-rank-even={rankIndex % 2 === 0}
                data-file-even={fileIndex % 2 === 0}
                data-piece={piece ? piece.type : undefined}
                data-team={piece ? piece.team : undefined}
              />
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
