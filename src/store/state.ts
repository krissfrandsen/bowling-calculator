import { IGame } from "@/types/game";

export const state: IGame = {
  numberOfFrames: 10,
  playerList: [
    {
      id: 0,
      name: "",
      frames: [
        {
          rolls: [],
          score: 0,
          isSpare: false,
          isStrike: false,
        },
      ],
    },
  ],
};
