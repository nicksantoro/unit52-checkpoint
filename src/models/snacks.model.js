// model is like the kitchen
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
    for(let i = 0; i < snacks.length; i++) {
        if(snacks[i].id == id) {
            return snacks[i];
        } 
    }
    return {error: "user not found", status:404};
}

const createSnack = (newSnack) => {
    let exists = snacks.find(snack => {
        return snack.name === newSnack.name
    });
    if(exists) return {error: "snack already exists", status: 400};
    newSnack.id = snacks.length + 1;
    snacks.push(newSnack)
    return newSnack;
}

const updateSnack = (newInfo, snackId) => {
    snacks.forEach(function(element) {
        if(element.id == snackId){
            element.name = newInfo.name;
        }
    })
    return snacks;
}

const deleteSnack = (snackId) => {
    snacks.splice(snacks.findIndex(item => item.id == snackId), 1);
    return snacks;
}

module.exports = {
    fetchSnacks,
    findSnack,
    createSnack,
    updateSnack,
    deleteSnack 
}