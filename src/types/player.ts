import { IFrame } from "@/types/frame";

export interface IPlayer {
  id: number;
  name: string;
  totalScore: number;
  frames: IFrame[];
}
