import { Move } from "../types";
import { GamePiece } from "./GamePiece";

const W = 8,
  H = 8;

/**
 * GameBoard class
 *
 * Define an 8x8 array.  Track where each player's pieces exist on the board.
 *
 * Note: functions of this class are available to backend logic, but only its properties are available to the App.
 */
export class GameBoard {
  ranksAndFiles: Array<Array<GamePiece>>;

  constructor() {
    console.log("Constructing GameBoard");
    this.ranksAndFiles = new Array(H);
    for (let i = 0; i < H; i++) {
      this.ranksAndFiles[i] = new Array(W);
    }

    this.setupPieces();
  }

  setupPieces() {
    for (let f = 0; f < W; f++) {
      this.ranksAndFiles[1][f] = new GamePiece("black", "pawn");
      this.ranksAndFiles[6][f] = new GamePiece("white", "pawn");
    }
  }

  toString() {
    let s = "";
    for (let r = 0; r < H; r++) {
      for (let f = 0; f < W; f++) {
        const piece = this.ranksAndFiles[r][f];
        const pieceStr = piece ? piece.toString() : "-?-";
        s += pieceStr + "\t";
      }
      s += "\n";
    }
    return s;
  }

  isValidMove(move: Move): boolean {
    console.log("isValidMove: TODO: returning true");
    return true;
  }
}
