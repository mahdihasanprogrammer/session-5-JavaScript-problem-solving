function wordFrequency(sentence){
    let obj = {};
    const strToArr = sentence.split(' ');
    for(const word of strToArr){
        const wordIgnoreCase = word.toLowerCase();
        
        if(obj.hasOwnProperty(wordIgnoreCase)){
            obj[wordIgnoreCase] = obj[wordIgnoreCase]+1;
        }
        else{
            obj[wordIgnoreCase]=1;
        }
    }
    return obj
}
console.log(wordFrequency("I love JS and I love coding and JS is fun"))
