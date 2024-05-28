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
    // Pawns
    for (let f = 0; f < W; f++) {
      this.ranksAndFiles[1][f] = new GamePiece("black", "pawn");
      this.ranksAndFiles[6][f] = new GamePiece("white", "pawn");
    }
    // Rooks
    this.ranksAndFiles[0][0] = new GamePiece("black", "rook");
    this.ranksAndFiles[0][7] = new GamePiece("black", "rook");
    this.ranksAndFiles[7][0] = new GamePiece("white", "rook");
    this.ranksAndFiles[7][7] = new GamePiece("white", "rook");

    // Knights
    this.ranksAndFiles[0][1] = new GamePiece("black", "knight");
    this.ranksAndFiles[0][6] = new GamePiece("black", "knight");
    this.ranksAndFiles[7][1] = new GamePiece("white", "knight");
    this.ranksAndFiles[7][6] = new GamePiece("white", "knight");

    // Bishops
    this.ranksAndFiles[0][2] = new GamePiece("black", "bishop");
    this.ranksAndFiles[0][5] = new GamePiece("black", "bishop");
    this.ranksAndFiles[7][2] = new GamePiece("white", "bishop");
    this.ranksAndFiles[7][5] = new GamePiece("white", "bishop");

    // Queens
    this.ranksAndFiles[0][3] = new GamePiece("black", "queen");
    this.ranksAndFiles[7][3] = new GamePiece("white", "queen");

    // Kings
    this.ranksAndFiles[0][4] = new GamePiece("black", "king");
    this.ranksAndFiles[7][4] = new GamePiece("white", "king");
  }

  toString() {
    let s = "";
    for (let r = 0; r < H; r++) {
      for (let f = 0; f < W; f++) {
        const piece = this.ranksAndFiles[r][f];
        const pieceStr = piece ? piece.toString() : "[ ]";
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
