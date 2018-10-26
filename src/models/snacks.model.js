// model is the kitchen
// model says we dont have cheesburger and sends error
// or it has cheeseburger, gets ingredients from query
// most important - smartest

const snacks = [
    {id: 1, name: "chocolate"},
    {id: 2, name: "cake"},
    {id: 3, name: "fruit rollup"}
]



const fetchSnacks = () => {
    return snacks;
}

const findSnack = (id) => {
    id = Number(id);
    // console.log(typeof id)
    for(let i = 0; i < snacks.length; i++) {
        // console.log(snacks[i].id, "in the loop")
        // console.log(snacks)

        if(snacks[i].id == id) {
            // console.log(snacks[i].id, "in the if statement")
            return snacks[i];
        } 
    }
    return {error: "user not found", status:404};
}

const createSnack = (newSnack) => {
    snacks.push(newSnack)
    const snack = snacks.find( element => element.name == newSnack.name)
    if ( snack.name == newSnack.name) return snack;  
    return {error: "snack not found", status:404};
}





module.exports = {
    fetchSnacks,
    findSnack,
    createSnack
}