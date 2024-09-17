// Importing database functions. DO NOT MODIFY THIS LINE.
import { central, db1, db2, db3, vault } from "./database.js";

function getUserData(id) {
  const dbs = {
    db1: db1,
    db2: db2,
    db3: db3
  };
}

console.log(db1(1))
console.log ()

letTriangle=(){

    this.side1= side1
    this.side2=side2
    this.side3=side3

    if(side1 ===side2 && side2===side3&& side3===side1){
return true
    }else{
return false 
    }

}

class Animals{
    constructor(name,weight,height){
this.name=name;
this.weight=weight;
this.height=height;
    }
    display(){
        return [this.name,this.weight,this.height];
    }
}
const Racoon=new Animals("shadow",50,"2'11")
console.log(Racoon.display());

const dog= new Animals("cutie", 3,"1'1")
console.log(dog.display());
console.log(dog);


const snake = new Animals( "snaky",1,"5");
console.log(dog.display());
console.log(dog);

// how to make a subclass

class Reptile extends Animals{
    #coldblooded= true
    constructor(name,weight,height,legs,colors){
        super(name,weight,height);
        this.legs=legs;
        this.colors=colors;

    }
    issnake(){
        if(this.legs===0){
            console.log("this reptile is a snake")
        }
    }
    whatcolor{
        for(let i=0;i=this.colors.length-i; i++){
            console.log( "This animal is a reptile and has traces of ${this.colors[i]}");
        }
    }
    console.log()
   
}




