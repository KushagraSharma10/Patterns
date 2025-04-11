export default function printStars(index, border = 1) {

    if (index < 5) {
        return "Please enter a positive integer greater than or equal to 5.";
    }

    let middle;
    if (index % 2 === 0) {
        middle = Math.floor(index / 2);
    } else {
        middle = Math.floor((index - 1) / 2) + 1;
    }

    let result = "";
    for (let i = 1; i <= index; i++) {
        let str = "";
        for (let j = 1; j <= index; j++) {
            if (
                j === 1 ||
                (i <= middle && j === index - (2 * i) + 2) ||
                (i > middle && j === (2 * i) - index)
            ) {
                str += "* ".repeat(border);
            } else {
                str += " ".repeat(border * 2);
            }
        }
        result += str + "\n";
        // console.log(str)
    }
    
    return result;
}

