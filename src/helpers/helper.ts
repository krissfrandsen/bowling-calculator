import { maxPoint } from "@/variables/variables";

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
