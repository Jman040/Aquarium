// import from database
// create function that exports as a html string
// make sure to add html before the for loop with string
// will be big function dont cry
// console.log
import { exportFishOne } from "./database";
import { exportFishTwo } from "./database";

let fishString = "";

for (fish of exportFishOne){
    fishString += `<section>List of Fish</section>
      <article>${fish.name}</article>
      <img>${fish.species}</img>
      <d1>${fish.location}</d1>
      <d2>${fish.color}</d2>
      <d3>${fish.length}</d3>
      <d4>${fish.image}</d4>
        `
    }
let fishStringTwo = ""
    for (fish of exportFishTwo){
        fishStringTwo += `<section>List of Fish</section>
      <article>${fish.name}</article>
      <img>${fish.species}</img>
      <d1>${fish.location}</d1>
      <d2>${fish.color}</d2>
      <d3>${fish.length}</d3>
      <d4>${fish.image}</d4>
        `
}
      console.log(fishString)
      console.log(fishStringTwo)
