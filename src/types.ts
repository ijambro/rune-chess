import type { PlayerId, RuneClient } from "rune-games-sdk/multiplayer";
import { Board } from "./logic/Board";

export interface Move {
  rFrom: number;
  fFrom: number;
  rTo: number;
  fTo: number;
}

/**
 * GameState
 *
 * - The Board
 *
 * - Player management
 *
 * - Pieces captured by each Player
 */
export interface GameState {
  board: Board;

  lastMovePlayerId: PlayerId | null;
  playerIds: PlayerId[];
}

/**
 * GameActions
 *
 * Note:  Actions may only be void functions
 */
type GameActions = {
  print: () => void;
  playMove: (params: Move) => void;
};

declare global {
  const Rune: RuneClient<GameState, GameActions>;
}
