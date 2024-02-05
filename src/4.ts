class Key {
    private signature: number = Math.random();

    // constructor() {
    //     this.signature = Math.random();
    // }

    getSignature(): number {
        return this.signature;
    }
}

class Person {
    constructor(private key: Key) {    }

    getKey(): Key {
        return this.key;
    }
}

abstract class House {
    protected door: boolean = false;
    // protected key: Key;
    protected tenants: Person[] = [];

    constructor(protected key: Key) {
        // this.key = key;
    }

    abstract openDoor(key: Key): void;

    comeIn(person: Person): void {
        if (this.door) {
            this.tenants.push(person);
            console.log('Door open!');
        } else {
            console.log('Door closed!');
        }
    }
}

class MyHouse extends House {
    openDoor(key: Key): void {
        if (key.getSignature() === this.key.getSignature()) {
            this.door = true;
            console.log('Door open!');
        } else {
            console.log('Door closed!')
        }
    }
}

const myKey = new Key();
const myHouse = new MyHouse(myKey);
const person = new Person(myKey);

myHouse.openDoor(person.getKey());
myHouse.comeIn(person);

export {};