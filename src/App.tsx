import { useEffect, useState } from "react";
import { PlayerId } from "rune-games-sdk/multiplayer";

import selectSoundAudio from "./assets/select.wav";
import { GameState } from "./types";

const selectSound = new Audio(selectSoundAudio);

function App() {
  const [game, setGame] = useState<GameState>();
  const [yourPlayerId, setYourPlayerId] = useState<PlayerId | undefined>();

  useEffect(() => {
    Rune.initClient({
      onChange: ({ game, action, yourPlayerId }) => {
        setGame(game);
        setYourPlayerId(yourPlayerId);

        if (action && action.name === "playMove") selectSound.play();
      },
    });
  }, []);

  if (!game) {
    // Rune only shows your game after an onChange() so no need for loading screen
    return;
  }

  const { board, lastMovePlayerId, playerIds } = game;

  return (
    <>
      <div id="board" className={!lastMovePlayerId ? "initial" : ""}>
        {board.ranksAndFiles.map((rank, rankIndex) => {
          {
            return rank.map((piece, fileIndex) => {
              // const sq = "PIECE";
              const sq = getSquareName(rankIndex, fileIndex);
              console.log(
                "Mapping board square",
                sq,
                piece,
                rankIndex % 2 === 0,
                fileIndex % 2 === 0
              );

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

      <ul id="playersSection">
        {playerIds.map((playerId, index) => {
          const player = Rune.getPlayerInfo(playerId);

          return (
            <li
              key={playerId}
              data-player={index.toString()}
              data-your-turn={String(playerIds[index] !== lastMovePlayerId)}
            >
              <img src={player.avatarUrl} />
              <span>
                {player.displayName}
                {player.playerId === yourPlayerId && (
                  <span>
                    <br />
                    (You)
                  </span>
                )}
              </span>
            </li>
          );
        })}
      </ul>
    </>
  );
}

function getSquareName(rank: number, file: number) {
  const rankNumber = 8 - rank;
  const fileLetterArray = ["A", "B", "C", "D", "E", "F", "G", "H"];
  const fileLetter = fileLetterArray[file];
  return `${fileLetter}${rankNumber}`;
}

export default App;
