import { IPlayer } from "@/types/player";

export interface IGame {
  playerList: IPlayer[];
  numberOfFrames: number;
}
