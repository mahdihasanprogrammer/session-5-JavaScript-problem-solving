

function  textStats(text){

    const textToArr = text.split(' ');

    let words = 0;
    let characters =0;
    let vowelsArr =['a','e','i','o','u'];
    let vowels=0;
    let consonants =0;


    for(let i =0; i <textToArr.length; i++){
        words++;
    }


    // -----------------------option 1;-------------------------------

    // let arrToText = textToArr.join('');

    // for(let i =0; i < arrToText.length; i++){
    //     const letter = arrToText[i];
    //     characters++;

    //     if(vowelsArr.includes(letter)){
    //         vowels++;
    //     }
    //     else{
    //         consonants++
    //     }
    // }

    // ---------------------option-2;----------------------------
    for(const letter of text){

        if(letter===' '){
            continue;
        }
        characters++;

        if(vowelsArr.includes(letter.toLowerCase())){
            vowels++;
        }
        else{
            consonants++
        }
    }

    return {
        characters,
        words,
        vowels,
        consonants
    }
}

console.log(textStats("JavaScript is fun to learn"));
console.log(textStats( " I am OK "));
