const bowlingHelper = {
  calculateScore: function (rollsArr: number[]): number {
    const rollOne = rollsArr[0];
    const rollTwo = rollsArr[1] ?? 0;

    return rollOne + rollTwo;
  },

  calculateStrike(prevRollsArr: number[], score): number {
    const rollOne = prevRollsArr[0];
    const rollTwo = prevRollsArr[1] ?? 0;

    return score + rollOne + rollTwo;
  },

  calculateDoubleStrike(prevPrevRollsArr: number[], score): number {
    const rollOne = prevPrevRollsArr[0];
    const rollTwo = prevPrevRollsArr[1] ?? 0;

    return score + rollOne + rollTwo;
  },

  calculateSpare(number: number, score: number): number {
    return number + score;
  },
};

export default bowlingHelper;
