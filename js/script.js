/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination

Psuedo code written based on Treehouse Study guide and Instructions
******************************************/
   
// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing

/**
 * I will be starting this project with a list of 54 student 
 * names, photos and email address.
 * 
 * Create something that will only show 10 students at a time.
 * 
 * Create a navigation system, a series of links at the bottom 
 * of the page.
 * 
 * Make sure that this will work with JavaScript turned off.
 * 
 * Make sure that this project will work with any number of 
 * students.
 */

/*** 
   Add your global variables that store the DOM elements you will 
   need to reference and/or manipulate. 
   
   But be mindful of which variables should be global and which 
   should be locally scoped to one of the two main functions you're 
   going to create. A good general rule of thumb is if the variable 
   will only be used inside of a function, then it can be locally 
   scoped to that function.
***/
//Global variables:

// variable to get and store the list of students:
const listOfStudents = document.querySelectorAll('.student-item');

//testing purpose only
console.log(`list of students = ${listOfStudents}`);

//variable to store the max number of students that can be shown per page (10)
const numberOfStudentsPerPage = 10;

/*** 
   Create the `showPage` function to hide all of the items in the 
   list except for the ten you want to show.

   Pro Tips: 
     - Keep in mind that with a list of 54 students, the last page 
       will only display four.
     - Remember that the first student has an index of 0.
     - Remember that a function `parameter` goes in the parens when 
       you initially define the function, and it acts as a variable 
       or a placeholder to represent the actual function `argument` 
       that will be passed into the parens later when you call or 
       "invoke" the function 
***/

/**
 * DISPLAYING A PAGE
 * (Using console to test the function in the earlier stages)
 * 1. Create a function that:
 *    1a. function hidides all the students other than the 10 
 *        students that are being displayed.
 *    1b. function should have two parameter:
 *       - list : the list of students that's being passed in 
 *                as an argument when calling the function.
 *       - page : the page number that's being passed in as an 
 *                argument when calling the function.
 * 
 * 2. Create two variables (This is so it works with any 
 *    length list).
 *    2a. Start Index = (page parameter * items per page) - 
 *       items per page.
 *    2b. End Index = page parameter * items per page
 * 
 * 3. Create a loop that loops over the list
 *    3a. display items that are:
 *       - greater than or equal to start index
 *       AND
 *       - less than the end index.
 *    3b. hide items that doesn't fit above parameters
 */

//DISPLAYING A PAGE:
//Create a function showPage, that has two parameters (list, page) 
const showPage = (listOfStudents, page) => {
   //create 2 variables startIndex and endIndex so that this will work for any length list of students (variables and list provided by Treehouse)
   const startIndex = (page * numberOfStudentsPerPage) - numberOfStudentsPerPage;
   const endIndex = (page * numberOfStudentsPerPage);

   console.log(`Succeffully called the function`);
   console.log(`Before going into the loop:`);
   console.log(`# of students in listOfStudents: ${listOfStudents.length}`)
   console.log(`page: ${page}`);
   console.log(`numberOfStudentsPerPage: ${numberOfStudentsPerPage}`);
   console.log(`startIndex: ${startIndex}`);

   //create a loop that will loop over the list
   for (let i = 0; i < listOfStudents.length; i++){
      console.log(`in the first loop of the showPage function`);
     // consolee.log (`i is: ${i}`);
      //create an if statement to check to see where we are in the loop so we can display 10 students and hide the rest
      if ( i >= startIndex && i < endIndex){
         console.log(`the loop is within the start and end index.`);
         //display these students
         listOfStudents[i].style.display = '';
         console.log(`i is now ${i}`);
      } else{
         console.log(`This is outside the number of students display on each page`);
         //hide the students beyound the 10 that's being displayed
         listOfStudents[i].style.display = 'none';
      }
   }
}

/*** 
   Create the `appendPageLinks function` to generate, append, and add 
   functionality to the pagination buttons.
***/

/**
 * ADDING PAGINATION LINKS
 * 1. Create a function that:
 *    1a. function that creates and appends functioning
 *        pagination links.
 *    1b. accepts a single "list" parameter to represent the 
 *        actual list of students.
 *    1c. Inside the function:
 *       - Create and append DOM elements for pagination links;
 *       - use lines 119 - 137 in examples/example-meets.thml 
 *         as template.
 *       - watch out for:
 *          - how elements are nested.
 *          - necessary class names.
 *          - other elements attributes.
 *          - where additions should be append.
 * 
 * 2. Add active class to the first pagination link initially.
 * 3. Add a "click" event listneer to each A element. A loop 
 *    can be helpful here.
 *    3a. When the pagination link is clicked:
 *       - active class name should be removed from all 
 *         pagination links (use a loop).
 *       - active calss name should be added to the link that 
 *         was just clicked. (use target property of the 
 *         event object).
 *       - showPage function should be called passing in 
 *         arguments
 * 
 * RESULTS:
 * - container div element with class name "pagination"
 *    - append to div element with class name of page.
 * - nested UL element containing one LI element for every 10 
 *    students in the list.
 * 
 * TIP:
 * Divide the list.length by the max number of items per page 
 * to figure out how many pages are needed, and can use a loop 
 * that iterates that many times to create the correct number 
 * of LI elements.
 * 
 * - Each LI element should contain an A element with an href 
 * attribute of # and text set to the page number each link 
 * will show. First link is 1. Second link is 2. And so on.
 * 
 * - Loop index can be helpful in setting the text of the 
 * pagination links.
 * 
 */

 /**
  * Program needs to work with any number of list. test using 44.students.html and 64students.html
  */

  //Temporarily call showPage functino here just for testing purposes:
  showPage(listOfStudents, 1);
 /**
  * Add Exceed expectation here after I complete meet 
  * expectations
  */

// Remember to delete the comments that came with this file, and replace them with your own code comments.