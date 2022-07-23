import { CsvFileReader } from "./CsvFileReader";
import { MatchReader } from "./MatchReader";
import { matchResult } from "./matchResult";

const reader = new MatchReader("football.csv");
reader.read();

const dateOfFirstMatch = reader.data[0][0];

let manUnitedWins = 0;

for (let match of reader.data) {
  if (match[1] === "Man United" && match[5] === matchResult.homeWin) {
    manUnitedWins++;
  } else if (match[2] === "Man United" && match[5] === matchResult.awayWin) {
    manUnitedWins++;
  }
}

console.log(`Man United won ${manUnitedWins} games!`);
