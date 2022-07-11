import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumbersCollection";
/**
 * For primitive data types (string, number, boolean) we use typeof.
 * For arrays we use instanceof
 */

const numberCollection = new NumbersCollection([3, 7, 2, 1]);
const sorter = new Sorter(numberCollection);
sorter.sort();

console.log(numberCollection.data);
