import fs from "fs";
import path from "path";
import { matchResult } from "./matchResult";

//We use Generics here i.e <TypeOfData> - create a component that can work over a variety of types rather than a single one. This allows users to consume these components and use their own types.
export abstract class CsvFileReader<TypeOfData> {
  data: TypeOfData[] = [];

  constructor(public filename: string) {}
  abstract mapRow(row: string[]): TypeOfData;

  read(): void {
    this.data = fs
      .readFileSync(path.join(__dirname, "..", this.filename), {
        encoding: "utf8",
      })
      .split("\n")
      .map((row: string): string[] => {
        return row.split(",");
      })
      .map(this.mapRow);
  }
}
