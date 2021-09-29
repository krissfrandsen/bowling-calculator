export const initialState = () => {
  return {
    numberOfFrames: 10,
    playerList: [
      {
        id: 0,
        name: "",
        totalScore: 0,
        frames: [
          {
            rolls: [],
            score: 0,
            index: 1,
          },
        ],
      },
    ],
  };
};
