//problem statment : https://www.hackerrank.com/challenges/breaking-best-and-worst-records/problem

'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the breakingRecords function below.
function breakingRecords(scores) {
     const scoreLength = scores.length;

                let mostScore = scores[0];
                let worstScore = scores[0];
                let mostScoreIncreased = 0;
                let worstScoreDecreased = 0;

                for(let i = 0; i < scoreLength; i++){
                    const curScore = scores[i];

                    if(mostScore < curScore){
                        mostScore = curScore;
                        mostScoreIncreased++;
                    }
                    if(worstScore > curScore){
                        worstScore = curScore;
                        worstScoreDecreased++;
                    }
                }
                return [mostScoreIncreased, worstScoreDecreased];
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const scores = readLine().split(' ').map(scoresTemp => parseInt(scoresTemp, 10));

    const result = breakingRecords(scores);

    ws.write(result.join(' ') + '\n');

    ws.end();
}
