import { IFrame } from "@/types/frame";
import { maxPoint } from "@/variables/variables";

export function getAllRolls(frames): number[] {
  return frames.flatMap((frame: IFrame) => {
    return frame.rolls.filter((roll: number) => roll !== 0);
  });
}

export function getSumOfLastTwoRolls(rolls: number[]): number {
  return rolls.slice(-1).reduce((a, b) => a + b, 0);
}

export function isFirstRound(round: IFrame): boolean {
  return round.index === 1;
}

export function isLastRound(round: IFrame): boolean {
  return round.index === 9;
}

export function isStrike(firstRoll: number): boolean {
  return firstRoll === maxPoint;
}

export function isSpare(firstRoll: number, secondRoll: number): boolean {
  if (secondRoll === maxPoint) {
    return true;
  }
  if (firstRoll + secondRoll === maxPoint) {
    return true;
  }
  return false;
}

//Hjälpfunktion för att plocak ut first roll / second roll

export function calculateScore(
  currentFrame: IFrame,
  frames: IFrame[],
  pin: number
) {
  //Lägg till hjälpfunktion
  if (isFirstRound(currentFrame) && !isLastRound(currentFrame)) {
    return currentFrame.rolls.reduce((a, b) => a + b, 0);
  }
  //Lägg till hjälpfunktion
  const lastFrame: IFrame = frames.find(
    (stateFrame: IFrame) => stateFrame.index === currentFrame.index - 1
  );
  console.log("currentFrame", currentFrame);
  console.log("lastFrame", lastFrame);

  if (isStrike(lastFrame.rolls[0])) {
    return (lastFrame.score += currentFrame.rolls.reduce((a, b) => a + b, 0));

    // gör uträkningen för strike
    // man får 10 + de två senaste slagen + de två slagen man slagit
    // return (
    //   lastFrame.score +
    //   getSumOfLastTwoRolls(getAllRolls(frames)) +
    //   currentFrame.rolls.reduce((a, b) => a + b, 0)
    // );
  }

  if (isSpare(lastFrame.rolls[0], lastFrame.rolls[1])) {
    lastFrame.score += currentFrame.rolls[0];
    currentFrame.score += lastFrame.score + currentFrame.rolls[1];
  }
  if (isLastRound(currentFrame)) {
    return 1234;
  }
  return (
    frames.find(
      (stateFrame: IFrame) => stateFrame.index === currentFrame.index - 1
    ).score + currentFrame.rolls.reduce((a, b) => a + b, 0)
  );
}
