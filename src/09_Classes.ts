class Person {
  // Properties
  private name: string;
  protected age: number;
  public gender: string;
}

//  CONSTRUCTOR

constructor(name: string, age: number, gender: string) {
  this.name = name;
  this.age = age;
  this.gender = gender;
}

// METHODS
public introduce(): void {
  console.log(`Hi, I'm ${this.name}, a ${this.age}-year-old ${this.gender}.`);
}

// GETTERS AND SETTERS
public getName(): string {
  return this.name;
}

public setName(name: string): void {
  this.name = name;
}   

export {};  