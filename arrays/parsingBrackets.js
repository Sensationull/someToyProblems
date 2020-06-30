// Parsing Brackets ACTUAL INTERVIEW QUESTION
// Implement an algorithm that returns a boolean indicating whether a string of brackets is well-formed. Keep in mind that we'd like to be able to configure which characters can be pairs and add new pairs in the future.

// Well formed examples:

// () 
  // check if it's opened (
  // 
// {}
// []
// (){}[]
// ((){}[])
// ([{}])
// the empty string
// Malformed:

// )
// {
// ][
// {)
// )(
// {})
// ([]
// ({)}
// {([)]}

/**
 * I: string
 * O: boolean
 * C: none
 * E: non bracket characters
 * 
 * if the string is an odd number, return false
 *  we make a stack to put the brackets in for reference
 *  check if the first char is an opening bracket
 * 
 *  we'll need to iterate through the string
 *    is the current character and opening bracket
 *      if so, place into the stack
 *      if not, does this item match the last item in the stack
 *        if it does then pop that item off of the stack
 *        if it does not then return false
 */

 const parseBrackets = string => { // [{]} //  ((){}[])
   if (string.length % 2 !== 0) {
     return false;
   }
   let stack = [];
   for (let i = 0; i < string.length; i++) {
     let current = string[i];
     if (current === '(' || current === '{' || current === '[' ) {
       stack.push(current); // ((
     } else {
       if (current === ']' && stack[stack.length - 1] === '[') {
         stack.pop();
       }  else if (current === '}' && stack[stack.length - 1] === '{') {
        stack.pop();
       }  else if (current === ')' && stack[stack.length - 1] === '(') {
        stack.pop(); // (
       } else {
          return false;
       }
     }
   }
   return true;
 }

 console.log(parseBrackets('(){}[]'));
 console.log(parseBrackets('((){}[])'));
 console.log(parseBrackets('[{]}'));
 console.log(parseBrackets('([]'));


/**
 * Tag Parsing
Implement an algorithm that validates XML tags and returns a boolean indicating if they're valid.

Here are the features we'd like to implement (in order of importance):

support open (<x>) and close (</x>)
support self-closing tags (<x/>)
support "boolean" attributes (<x special></x>)
support "valued" attributes (<x number="10"></x>)
Feel free to scale this back depending on time available.

Well-formed examples:

<foo/>
<strong>foo</strong>
<foo bar="10"></foo>
<foo bar="10"/>
<foo><bar></bar></foo><quux />
Malformed examples:

<foo></bar>

foo is unclosed

<foo><bar></foo></bar>

foo is closed before it's children

<x<y/>/>

<foo>></foo>

nesting tags inside the tag itself or tag chars in the body of a tag are not allowed

<foo></foo y="bobby">

<foo></foo bar>

attributes not supported on closing tags

What is not allowed?:

regular expressions
any equivalent of XML.parse
Ignore special cases involving:

the trivialities of trimming input (<foo> vs < foo >)
the names of attributes
the characters used in tag names or attribute names (e.g <() {}="test" /> is valid)
 * 
 * 
 * support open (<x>) and close (</x>)
 * <x>Hello <foo>World</foo></x>
 * 
 * multiple stack or holding variables
 * let opening tag = ''
 * iterate through the string
 * 
 */