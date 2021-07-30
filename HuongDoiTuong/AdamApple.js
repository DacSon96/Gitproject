class Apple {
    weight;
    constructor(weight) {
        this.weight=weight;
    }
    decrease() {
        if (this.weight>0) {
            this.weight--;
        }
    }
    isEmpty() {
        if (this.weight==0) {
            return true;
        }
    }
    getWeight() {
        return this.weight;
    }
}
class Human {
    constructor(name, gender, weight) {
        this.name=name;
        this.gender=gender;
        this.weight=weight;
    }
    isMale() {
        if (this.gender===male) {
            return true;
        }
    }
    setGender(gender) {
        this.gender=gender;
    }
    checkApple(Apple) {
        Apple.isEmpty();
    }
    eat(Apple) {
        Apple.decrease();
    }
    say() {
        console.log('Hi, my name is '+this.name);
    }
    getName() {
        return this.name;
    }
    setName(name) {
        this.name=name;
        return this.name;
    }
    getWeight() {
        return this.weight;
    }
    setWeight(weight) {
        this.weight=weight;
        return this.weight;
    }
}
let apple= new Apple(10);
let adam= new Human( Adam, male, 60);
let eva= new Human(Eva, female, 50);
function eatApple() {

}