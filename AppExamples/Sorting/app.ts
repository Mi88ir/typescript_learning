import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./charactersCollection";
import { LinkedList } from "./LinkedLists";

/**
 * For primitive data types (string, number, boolean) we use typeof.
 * For arrays we use instanceof
 */

//Sorting for array of numbers
const numberCollection = new NumbersCollection([3, 7, 2, 1]);
numberCollection.sort();
console.log(numberCollection.data);

//sorting for string types
const charactersCollection = new CharactersCollection("Mihir");
charactersCollection.sort();
console.log(charactersCollection.data);

//sorting linked lists
const linkedlist = new LinkedList();
linkedlist.add(500);
linkedlist.add(-23);
linkedlist.add(4);
linkedlist.add(-213);

linkedlist.sort();

linkedlist.print();
