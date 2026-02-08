
function  searchByPrefix(phonebook, prefix){
    const search =[];

    for (const item in phonebook){
        if(item.startsWith(prefix)){
            search.push(item)
        }
    }

    return search;
}

const phonebook = { rahim: "0181", karim: "0172", rafi: "0193" };
const prefix = "ra";
console.log(searchByPrefix(phonebook,prefix))
