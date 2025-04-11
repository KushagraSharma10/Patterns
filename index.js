import starPattern from './starPattern.js';
import starPattern2 from './starPattern2.js';
import hollowPyramid from './hollowPyramid.js';
import printStars from './script.js';


function runSelectedPatterns(patterns = [], index = 5, border = 1) {
    patterns.forEach((pattern) => {
       
        switch (pattern) {
            case 1:
                console.log(starPattern(index));
                break;
            case 2:
                console.log(starPattern2(index));
                break;
            case 3:
                console.log(hollowPyramid(index));
                break;
            case 4:
                console.log(printStars(index, border));
                break;
            default:
                console.log(`Pattern ${pattern} not found`);
        }
    });
}

runSelectedPatterns([1, 2])
