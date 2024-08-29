// 1. The Magical Sorting Hat:
//    Imagine you are creating a magical sorting hat for a wizard school. Implement a JavaScript function that takes an array of student names and assigns them to one of the four houses (Gryffindor (length less than 6), Hufflepuff(length less than 8), Ravenclaw(length less than 12), or Slytherin(length greater than or equal to 12)) based on the length of their names.
const studentNames = [
    "Harry",
    "Hermione",
    "Ron",
    "Draco",
    "Luna",
    "Cedric",
    "Neville",
    "Cho",
    "Pansy",
    "Vincent",
    "Gregory",
    "Bellatrix",
    "Sirius",
    "Remus",
    "Minerva",
    "Albus",
    "Severus",
    "Fleur",
    "Gabrielle",
    "Molly"
  ];

  function assignHouse(element){
    let length=element.length;
    if (length<6) {
        return "Gryffindor"
    } else if (length<8) {
        return "Hufflepuff"
    }else if(length<12){
        return "Ravenclaw"
    }else{
        return "Slytherin"
    }
  }
const sortedStudents = studentNames.map(name => {
    return { name: name, house: assignHouse(name) };
});

sortedStudents.forEach(element => {
    console.log(element)
});