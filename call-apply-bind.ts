const person = {
  firstName: 'blank',
  lastName: 'blank',
  getFullName: function (lastName: string = this.lastName) {
    return `${this.firstName} ${lastName}`;
  },
};

const go6o = {
  firstName: 'Go6o',
  lastName: 'Semenov',
};

console.log(person.getFullName());
console.log(person.getFullName.call(go6o));
console.log(person.getFullName.call(go6o, 'Dimitrov'));
console.log(person.getFullName.apply(go6o, ['6i6kov']));

const getDifferentGo6oFullName = person.getFullName.bind(go6o, ['Slabakov']);
console.log(getDifferentGo6oFullName());
