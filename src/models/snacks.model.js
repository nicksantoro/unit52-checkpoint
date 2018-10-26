const snacks = [
    {id: 1, name: "chocolate"},
    {id: 2, name: "cake"},
    {id: 3, name: "fruit rollup"}
]

const fetchSnacks = () => {
    return snacks;
}

const findSnack = (id) => {
    // console.log(id)
    for(let i = 0; i < snacks.length; i++) {
        console.log(snacks[i].id)
        if(snacks[i].id == id) {
            console.log(snacks[i].id)
            return snacks[i];
        }
    }
}



module.exports = {
    fetchSnacks,
    findSnack
}