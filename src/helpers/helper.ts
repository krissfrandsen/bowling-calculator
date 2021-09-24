const bowlingHelper = {
  calculateScore: function (rollsArr: number[]): number {
    const rollOne = rollsArr[0];
    const rollTwo = rollsArr[1] ?? 0;

    return rollOne + rollTwo;
  },
};

export default bowlingHelper;
