//function to export fish database
export const exportFishOne = () => {
    return database.fishOne.map(fish => ({...fish}))
}
export const exportFishTwo = () => {
    return database.fishTwo.map(fish => ({...fish}))
}


// create a object with two fish 
// each fish has a name,species,location,color, image
// make it so there is a function that exports the object to FishList

let database = {
    fishOne : [
        {
        name: "One Fish",
        species: "bass",
        length: 10,
        location: "Bahamas",
        color: "black",
        image: "https://upload.wikimedia.org/wikipedia/commons/9/92/Sacramento_blackfish.jpg"


        }
    ],
    fishTwo : [
        {
            name: "Two Fish",
            species: "swordfish",
            length: 30,
            location: "Alabama",
            color: "blue",
            image: "https://indie88.com/wp-content/uploads/2022/06/Screen-Shot-2022-06-03-at-7.21.11-PM.png"
        }
    ]
}