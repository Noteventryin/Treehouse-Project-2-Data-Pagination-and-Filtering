/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/



/*
For assistance:
   Check out the "Project Resources" section of the Instructions tab: https://teamtreehouse.com/projects/data-pagination-and-filtering#instructions
   Reach out in your Slack community: https://treehouse-fsjs-102.slack.com/app_redirect?channel=unit-2
*/



/*
Create the `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students
*/
//use getElementsByClassName method to select the class('student-list')[0]
function showPage(list ,page){
   const startIndex = (page * 9) - 9;
   const endIndex = page * 9;
   const studentlist = document.getElementsByClassName('student-list')[0];
   studentlist.innerHTML = '';
for (let i = 0; i < list.length; i++){
      if (i >= startIndex && i < endIndex){
         studentlist.insertAdjacentHTML(
         'beforeend', 
      `<li class="student-item cf">
         <div class="student-details">
            <img class="avatar" src="${data[i].picture.large}" alt="Profile Picture">
            <h3>${data[i].name.first} ${data[i].name.last}</h3>
            <span class="email">${data[i].email}</span>
         </div>
         <div class="joined-details">
            <span class="date">Joined ${data[i].registered.date}</span>
         </div>   
      </li>`);
  }
 }
}
showPage(data, 1);
//Called the function use the data variable and page number: 1  as arguments
//used console.log() to test code and check all variables

/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/
function createbutton(list){
   let pagenumber = Math.ceil(list.length/9);
   let linklist = document.getElementsByClassName('link-list')[0];
   linklist.innerHTML = '';
// Math.ceil always rounds a number up to the next largest integer. 
for(let i = 1; i <= pagenumber; i++){
linklist.insertAdjacentHTML('beforeend',
   `<li>
      <button type="button">${i}</button>
   </li>`);
} 
   const firstbutton = document.querySelector('button');
   firstbutton.setAttribute("class","active");   
 //setAttribute() method adds the specified attribute to an element, and gives it the specified value.
linklist.addEventListener('click',(e) =>{
   if(e.target.tagName === 'BUTTON'){
      const addbutton = e.target;
      addbutton.className = 'active';
      const removebutton = document.querySelector('.active');
      removebutton.className = '';
      const display = addbutton.textContent;
      showPage(list,display);
   } //call the showPage function passing 2 arguments 

 })
}
// Call functions
showPage(data,1);
createbutton(data);

 
  


