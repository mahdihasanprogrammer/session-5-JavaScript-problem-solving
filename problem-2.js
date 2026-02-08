
function analyzeMarks(marksObj){

    let total = 0;
    let highestMark = -Infinity;
    let lowestMark = Infinity;
    let highestSubject = null;
    let lowestSubject = null;

    for(const subject in marksObj){
        const mark = marksObj[subject];
        total += mark;

        if(mark > highestMark){
            highestMark = mark;
            highestSubject = subject;
        }
        if(mark < lowestMark){
            lowestMark = mark;
            lowestSubject = subject;
        }
    }


    const avg = total/Object.keys(marksObj).length;
    const NumAvg = +avg.toFixed(2)
    return {
        total,
        NumAvg,
        highestSubject,
        lowestSubject,
    }
}


console.log(analyzeMarks({ math: 78, english: 65, physics: 88, bangla: 55}));
console.log(analyzeMarks( { ict: 90, biology: 90, chemistry: 70 }))
