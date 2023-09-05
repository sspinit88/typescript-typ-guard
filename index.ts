// Import stylesheets
import './style.css';

/* Type Guard */

interface Person {
  name: string;
  age: number;
}

interface Man extends Person {
  pantsSize: number;
}

interface Woman extends Person {
  braSize: number;
}

function getSize(person: Man | Woman): number {
  return 
}

function isWoman(person: Man | Woman): person is Woman {
  
}