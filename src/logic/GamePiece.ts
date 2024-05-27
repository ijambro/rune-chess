export type Team = "white" | "black";

export type PieceType =
  | "pawn"
  | "rook"
  | "knight"
  | "bishop"
  | "queen"
  | "king";

export class GamePiece {
  team: Team;
  type: PieceType;
  active: boolean;

  constructor(team: Team, type: PieceType) {
    this.team = team;
    this.type = type;
    this.active = true;
  }

  toString() {
    if (this.active) return `${this.type}(${this.team})`;
    else return `OUT-${this.type}(${this.team})`;
  }
}
