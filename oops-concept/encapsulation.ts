class person{

    name: string;
  
    id: string;
  
    add: string;
  
  constructor(name,id){
  
        this.name = name;
  
        this.id = id;
  
    }
  
    add_Address(add){
  
        this.add = add;
  
    }
  
    getDetails(){
  
        return `Name is ${this.name},Address is: ${this.add}`
  
    }
  
  }
  
  let person1 = new person('Mukul',21);
  
  person1.add_Address('Delhi');
  
  console.log(person1.getDetails()); // Name is Mukul,Address is: Delhi
  
  