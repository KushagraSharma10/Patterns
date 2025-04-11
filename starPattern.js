export default function printStars(index) {
  if (index <= 0) {
    return "Please enter a positive integer greater than 0."
  }

  let result = ""
  for (let i = 1; i <= index; i++) {
    let str = "";
    for (let j = 1; j <= i; j++) {
      str += "* ";
    }
    // console.log(str);
    result += str + "\n";
  }
  return result
}

