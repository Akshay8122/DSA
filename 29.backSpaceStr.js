 
//  Given two strings s and t, return true if they are equal when both are typed into empty text editors. '#' means a backspace character.

//  Note that after backspacing an empty text, the text will continue empty.
 
  
 
//  Example 1:
 
//  Input: s = "ab#c", t = "ad#c"
//  Output: true
//  Explanation: Both s and t become "ac".
//  Example 2:
 
//  Input: s = "ab##", t = "c#d#"
//  Output: true
//  Explanation: Both s and t become "".
//  Example 3:
 
//  Input: s = "a#c", t = "b"
//  Output: false
//  Explanation: s becomes "c" while t becomes "b".
 
  
 function backSpaceCompare(s,t) {
    function buildFinalStr(str) {
        let stack = [];
        for(let char of str) {
          if(char === '#'){
            if(stack.length > 0) {
                stack.pop();
            }else {
                stack.push(char);
            }
          }
        }
      return stack.join('');
    }
    return buildFinalStr(s) === buildFinalStr(t);
 }

  let s = "ab#c";
  let t = "ad#c";


  console.log(backSpaceCompare(s,t));
  console.log(backSpaceCompare("ab##", "c#d#"));
  console.log(backSpaceCompare("a#c", "b"));
