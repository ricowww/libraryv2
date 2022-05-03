# library
TOP

All of your book objects are going to be stored in a simple array, so add a function to the script (not the constructor) that can take user’s input and store the new book objects into an array. Your code should look something like this:

let myLibrary = [];

function Book() {
  // the constructor...
}

function addBookToLibrary() {
  // do stuff here
}

Write a function that loops through the array and displays each book on the page. You can display them in some sort of table, or each on their own “card”. It might help for now to manually add a few books to your array so you can see the display.
Add a “NEW BOOK” button that brings up a form allowing users to input the details for the new book: author, title, number of pages, whether it’s been read and anything else you might want.


Add a button on each book’s display to remove the book from the library.
You will need to associate your DOM elements with the actual book objects in some way. One easy solution is giving them a data-attribute that corresponds to the index of the library array.


Add a button on each book’s display to change its read status.
To facilitate this you will want to create the function that toggles a book’s read status on your Book prototype instance.


CODE NOTES

/* CHAPTER */
//PLANNING
//CODE
//PRODUCTION

/* PLANNING */
//OUTPUTS
/* 
    Cards showing book details
    Button inside cards to toggle read and unread
    Cards can appear and disappear with button
    Form to input new book 
*/

//INPUTS
/* 
    Book container = array
    title = text
    author = text
    pages = number
    status = yes/no
    in library = yes/no 
*/

//STEPS
/* 
    Pressing button will show the form
    User types book details
    Computer counts nth number of book created
    Book is created
    Card will be created based on details
    Read button will be attached to card
    Remove button will be attached to card
    Card will be attached to a card container
    Card container will have classes which have linked styling
 */

///Pressing button will show the form
/* 
   DONE - Html button for the interface -
   DONE - Js button object for the event listener
   DONE - Event listener to trigger prompts, book ID number counter, and object constructor
   DONE - Object constructor to create an book element inside books
   DONE - Books object to collect all book elements
*/