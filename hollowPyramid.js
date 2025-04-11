export default function hollowPyramid(index){
    
    let output = ""
    for (let i = 1; i <= index; i++) {
        let row = "";
    
        
        for (let k = index - i; k > 0; k--) {
            row += " ";
        }
    

        for (let j = 1; j <= i; j++) {
            if (j === 1 || j === i || i === index) {
                row += "* ";
            } else {
                row += "  ";
            }
        }
        output += row + "\n" 
        // console.log(row);
    }
    return output
}
