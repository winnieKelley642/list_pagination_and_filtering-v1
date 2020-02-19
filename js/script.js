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

//variable for figuring out what page the user is on
let currentPageNumber = 1;

//variable to store information for searching students
let searchList = [];

//create a search bar using lines 16 - 19 from examples/example-exceeds.html as a template
//create a variable to get and store 'page-header'
var pageHeaderDiv = document.querySelector('.page-header');
console.log(pageHeaderDiv);

//create and store search bar div as a 'student-search' class
var studentSearchDiv = document.createElement('div');
studentSearchDiv.setAttribute('class', 'student-search');
pageHeaderDiv.appendChild(studentSearchDiv);

//create and store input element with placeholder: 'Search for students'
var userSearchInput = document.createElement('input');
userSearchInput.setAttribute('placeholder', 'Search for students');
studentSearchDiv.appendChild(userSearchInput);

//create and store a search button
const searchButton = document.createElement('button');
searchButton.textContent = 'Search';
studentSearchDiv.appendChild(searchButton);

//add searchButton eventListener for click:
searchButton.addEventListener('click', (e)=>{
   console.log(`in search button event listener`);
   search(searchList);
   console.log(`completed search`)
});

//add input eventListener for up key:
userSearchInput.addEventListener('keyup', (e) => {
	console.log(`in keyup event listener`);
});

//function for search button
const search = (searchList) =>{
   console.log (`in search`);
   //create a loop to compare user input to each student
   for(let i = 0; i < listOfStudents.length; i++){
      console.log(`in i loop for search`);
      //get all the names in the list
      var allNames = document.querySelectorAll('.student-details h3');
      //create a variable to store a name one name at a time
      var name = allNames[i];
      console.log(`name is: ${name.textContent}`);
      
      console.log(`user input is ${userSearchInput.value}`);
      //compare user input to list of students:
      if(name.textContent.toLowerCase().includes(userSearchInput.value.toLowerCase())){
         console.log(`comparing userInput to list`);
         console.log(`there's a match`);
         searchList.push(name);
         console.log(`search list is now: ${searchList.length}`);
         showPage(searchList, 1);
      } else{
         console.log(`does not match`);
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

 const appendPageLinks = (listOfStudents) => {
    //Testing
    console.log(`appendPageLinksFunction working`);
    console.log(`in the appendPageLinks function`);
    console.log(`length of list of students: ${listOfStudents.length} students`);
    console.log(`number of students per page allowed: ${numberOfStudentsPerPage} students`);

    //create a variable to store the total number of pages needed
    const numberOfPages = Math.ceil(listOfStudents.length / numberOfStudentsPerPage);
    //testing:
    console.log(`number of pages needed for this list: ${numberOfPages} pages`);
    
    //Using lines 119 - 137 in examples/example-meets.html as a template:
    //create a variable to get and store the '.page' div
    var pageDiv = document.querySelector('.page');
    //create a variable and create a div in it and call it "pagination"
    var paginationDiv = document.createElement('div');
    paginationDiv.setAttribute('class', 'pagination');
    pageDiv.appendChild(paginationDiv);

    //create variable to create a 'ul' in paginationDiv and give it a class of 'pagination-ul'
    var ulDiv = document.createElement('ul');
    ulDiv.setAttribute('class', 'pagination-ul');
    paginationDiv.appendChild(ulDiv);

    //create a loop to create 'li' and 'a' for each student
    //testing
    console.log(`number of pages: ${numberOfPages}`);
    for(let i  = 1; i <= numberOfPages; i++)
    {
      console.log(`in the loop for creating 'li' and 'a' for each student`);

      //create a variable to create and store 'li' in 'ulDiv' and give it class 'pagiation-li'
      var liPagination = document.createElement('li');
      liPagination.setAttribute('class', 'pagination-li');
      ulDiv.appendChild(liPagination);

      //create a variable to create and store 'a' in 'li' and give it class 'pagination-a'
      var aPagination = document.createElement('a');
      aPagination.setAttribute('class', 'pagination-a');
      //add page number
      aPagination.textContent = (i);
      liPagination.appendChild(aPagination);

      //when the page initially loads, it should always start on page 1, so the active page should always start on page 1
      //testing
      console.log(`current page number = ${currentPageNumber}`);

      //make sure that active page is 1 and set the colour to it for being the active page
      if(currentPageNumber === 1){
         aPagination.classList.add('active');
         //change currentPageNumber value so only page 1 is active
         currentPageNumber++;
      }
    }

    //So this is to make sure that the active is cleared out of all buttons and assigned to the one that's pressed, but I was having a lot of trouble. After getting help on Slack, @Juan L, helped by giving me a little bit of a psuedo code for this part to fix my issues

    //Gather all the 'a' tags and store in a variable (suggested by @Juan L)
    const aLinks = document.querySelectorAll('a');
    //testing
    console.log(aLinks);

    //create a loop(i) to add eventListeners for those a tags (suggested by @Juan L)
    for(let i = 0; i < aLinks.length; i++){
       console.log(`in the i loop`)
       // When a tag is clicked (suggested by @Juan L)
       aLinks[i].addEventListener('click', (e) =>{
          //Add an inner loop (j) to loop through all the 'a' tags to remove the classes (suggested by @Juan L)

          //had to take out the for loop (j) suggestion, because after trying out a bunch of different variations of the for loop (j) it didn't work, but works without it.
          //for(let j = 0; j < aLinks.length; j++){
             //console.log(`in the j loop`);
             
             //create a variable to store the the 'a'
             const activePage = document.querySelector('.active');
             //testing
             console.log(activePage);
             
             //remove the 'active' by changing it to ''(suggested by @Juan L)
             activePage.className = ('');
             //testing
             //console.log(`leaving the j loop`);
          //}

          //Back in the outer loop add back the class of active to whatever link was clicked and call showPage (suggseted by @Juan L)

          //create a variable to get and store which button was clicked
          const buttonClicked = e.target;

          //update current page number to pass into the showPage function
          currentPageNumber = buttonClicked.textContent;
          //testing
          console.log(`page number is: ${currentPageNumber}`);

          //add 'active' class onto the button clicked
          buttonClicked.className = 'active';
         
          //display the students based on the page number in currentPageNumber
          showPage(listOfStudents, currentPageNumber);
       });
    }

 }
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

//call for showPage function
showPage(listOfStudents, 1);

//call appendPageLinks function
appendPageLinks(listOfStudents); 
/**
  * Program needs to work with any number of list. test using 44.students.html and 64students.html
  */

 /**
  * Add Exceed expectation here after I complete meet 
  * expectations
  */

// Remember to delete the comments that came with this file, and replace them with your own code comments.