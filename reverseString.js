export default function reverseString(string){
  let arr = string.split("");

  let reversed = arr.reverse();
  
  let newStr = reversed.join("");

  return newStr;
};

