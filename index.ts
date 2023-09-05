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

function isWomanGuard(person: Man | Woman): person is Woman {
  return (person as Woman).braSize !== undefined || 'braSize' in person;
}

function getSize(person: Man | Woman): number {
  if (isWomanGuard(person)) {
    return person.braSize;
  }

  return person.pantsSize;
}

const w: Woman = {
  name: 'Masha',
  age: 17,
  braSize: 2,
};

const m: Man = {
  name: 'Alex',
  age: 78,
  pantsSize: 3,
};

console.log(isWomanGuard(w));
console.log(isWomanGuard(m));
console.log(getSize(w));
