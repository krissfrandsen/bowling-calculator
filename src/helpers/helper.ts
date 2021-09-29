import { IFrame } from "@/types/frame";
import { addition, maxPoint } from "@/variables/variables";

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

export function calculateScore(currentFrame: IFrame, frames: IFrame[]) {
  //Lägg till hjälpfunktion
  if (isFirstRound(currentFrame) && !isLastRound(currentFrame)) {
    return currentFrame.rolls.reduce(addition);
  }
  //Lägg till hjälpfunktion
  const lastFrame: IFrame = frames.find(
    (stateFrame: IFrame) => stateFrame.index === currentFrame.index - 1
  );

  const prePreviousFrame: IFrame = frames.find(
    (stateFrame: IFrame) => stateFrame.index === currentFrame.index - 2
  );

  if (isStrike(lastFrame.rolls[0])) {
    // if (isStrike(prePreviousFrame.rolls[0])) {
    //   return (prePreviousFrame.score +=
    //     lastFrame.score + currentFrame.rolls.reduce(addition));
    // }
    return (lastFrame.score += currentFrame.rolls.reduce(addition));
  }

  if (isSpare(lastFrame.rolls[0], lastFrame.rolls[1])) {
    lastFrame.score += currentFrame.rolls[0];
    return (currentFrame.score += lastFrame.score + currentFrame.rolls[1]);
  }

  if (isLastRound(currentFrame)) {
    return 1234;
  }
  return lastFrame.score + currentFrame.rolls.reduce(addition);
}
