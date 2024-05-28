import { GameBoard } from "./GameBoard";

// function findWinningCombo(cells: Cells) {
//   return (
//     [
//       [0, 1, 2],
//       [3, 4, 5],
//       [6, 7, 8],
//       [0, 3, 6],
//       [1, 4, 7],
//       [2, 5, 8],
//       [0, 4, 8],
//       [2, 4, 6],
//     ].find((combo) =>
//       combo.every((i) => cells[i] && cells[i] === cells[combo[0]])
//     ) || null
//   );
// }

Rune.initLogic({
  minPlayers: 2,
  maxPlayers: 2,
  setup: (allPlayerIds) => ({
    board: new GameBoard(),
    // cells: new Array(9).fill(null),
    // winCombo: null,
    lastMovePlayerId: null,
    playerIds: allPlayerIds,
  }),
  actions: {
    print: (params, { game }) => {
      console.log(game.board.toString());
    },
    // Perform a move!
    playMove: (move, { game, playerId }) => {
      const { rFrom, fFrom, rTo, fTo } = move;
      console.log("Move requested:", rFrom, fFrom, rTo, fTo);
      console.log(
        "Move requested: piece to move",
        game.board.ranksAndFiles[rFrom][fFrom]
      );

      // Cannot play during someone else's turn
      if (playerId === game.lastMovePlayerId) {
        throw Rune.invalidAction();
      }

      // Ask the Board to validate the Move
      if (!game.board.isValidMove(move)) {
        throw Rune.invalidAction();
      }
    },

    // claimCell : (cellIndex, { game, playerId, allPlayerIds }) => {
    //   if (
    //     game.cells[cellIndex] !== null ||
    //     playerId === game.lastMovePlayerId
    //   ) {
    //     throw Rune.invalidAction();
    //   }

    //   game.cells[cellIndex] = playerId;
    //   game.lastMovePlayerId = playerId;
    //   game.winCombo = findWinningCombo(game.cells);

    //   if (game.winCombo) {
    //     const [player1, player2] = allPlayerIds;

    //     Rune.gameOver({
    //       players: {
    //         [player1]: game.lastMovePlayerId === player1 ? "WON" : "LOST",
    //         [player2]: game.lastMovePlayerId === player2 ? "WON" : "LOST",
    //       },
    //     });
    //   }

    //   game.freeCells = game.cells.findIndex((cell) => cell === null) !== -1;

    //   if (!game.freeCells) {
    //     Rune.gameOver({
    //       players: {
    //         [game.playerIds[0]]: "LOST",
    //         [game.playerIds[1]]: "LOST",
    //       },
    //     });
    //   }
    // },
  },
});
