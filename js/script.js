/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination

Psuedo code written based on Treehouse Study guide and Instructions
******************************************/
   
// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing

/**
 * I will be starting this project with a list of 54 student 
 * names, photos and email address.
 * Create something that will only show 10 students at a time.
 * Create a navigation system, a series of links at the bottom 
 * of the page.
 * Make sure that this will work with JavaScript turned off.
 * Make sure that this project will work with any number of 
 * students.
 */
//Global variables:

// variable to get and store the list of students:
const listOfStudents = document.querySelectorAll('.student-item');

//variable to store the max number of students that can be shown per page (10)
const numberOfStudentsPerPage = 10;

//variable for figuring out what page the user is on
let currentPageNumber = 1;

//create a variable to get and store the '.page' div
var pageDiv = document.querySelector('.page');

//create a div and store it for no match found message
const noMatchesFoundDiv = document.createElement('div');

//create a search bar using lines 16 - 19 from examples/example-exceeds.html as a template
//create a variable to get and store 'page-header'
var pageHeaderDiv = document.querySelector('.page-header');

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
   search(userSearchInput.value);
});

//add input eventListener for up key:
userSearchInput.addEventListener('keyup', (e) => {
   search(e.target.value);
});

//function for search button
const search = (userInputValue) =>{
   //variable to store information for searching students
   let searchList = [];
   //get all the names in the list
   var allNames = document.querySelectorAll('.student-details h3');
   //create a loop to compare user input to each student
   for(let i = 0; i < listOfStudents.length; i++){
      listOfStudents[i].style.display = 'none';
      //create a variable to store a name one name at a time
      var name = allNames[i];
      //compare user input to list of students:
      if(name.textContent.toLowerCase().includes(userSearchInput.value.toLowerCase())){
         //put the person onto searchList
         searchList.push(listOfStudents[i]);
      }
   }
   showPage(searchList, 1);
   appendPageLinks(searchList);
}

//DISPLAYING A PAGE:
//Create a function showPage, that has two parameters (list, page) 
const showPage = (anyList, page) => {
   //create 2 variables startIndex and endIndex so that this will work for any length list of students (variables and list provided by Treehouse)
   const startIndex = (page * numberOfStudentsPerPage) - numberOfStudentsPerPage;
   const endIndex = (page * numberOfStudentsPerPage);
   if(anyList.length === 0){
      noMatchesFoundDiv.style.display = '';
      noMatchesFoundDiv.textContent = "Sorry. There are no matches found. Please try again."
      //add this to pageDiv
      pageDiv.appendChild(noMatchesFoundDiv);
   } else{
      //hide the error message
      noMatchesFoundDiv.style.display = 'none';
   }

   //create a loop that will loop over the list
   for (let i = 0; i < anyList.length; i++){
      //create an if statement to check to see where we are in the loop so we can display 10 students and hide the rest
      if ( i >= startIndex && i < endIndex){
         //display these students
         anyList[i].style.display = '';
      } else{
         //hide the students beyound the 10 that's being displayed
         anyList[i].style.display = 'none';
      }
   }
}

const appendPageLinks = (listOfStudents) => {
  //hide pagination
  var clearPagination = document.querySelector('.pagination');
  if (clearPagination){
     clearPagination.remove();
  }

   //create a variable to store the total number of pages needed
   const numberOfPages = Math.ceil(listOfStudents.length / numberOfStudentsPerPage);
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
   for(let i  = 1; i <= numberOfPages; i++)
   {
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

   //create a loop(i) to add eventListeners for those a tags (suggested by @Juan L)
   for(let i = 0; i < aLinks.length; i++){
      // When a tag is clicked (suggested by @Juan L)
      aLinks[i].addEventListener('click', (e) =>{
         //create a variable to store the the 'a'
         const activePage = document.querySelector('.active');
            
         //remove the 'active' by changing it to ''(suggested by @Juan L)
         activePage.className = ('');
         
         //create a variable to get and store which button was clicked
         const buttonClicked = e.target;

         //update current page number to pass into the showPage function
         currentPageNumber = buttonClicked.textContent;
         
         //add 'active' class onto the button clicked
         buttonClicked.className = 'active';
        
         //display the students based on the page number in currentPageNumber
         showPage(listOfStudents, currentPageNumber);
      });
   }
}
//call for showPage function
showPage(listOfStudents, 1);
//call appendPageLinks function
appendPageLinks(listOfStudents); 