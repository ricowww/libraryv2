
/* PLANNING */

/* library */

/* output */
//book cards showing details
//book can appear and disappear with button
//form for new book with button
//read status of book can change with button

/* inputs */
/* 
myLibrary = array
myLibraryUnlisted = array
title = text
author = text
pages = number
readStatus = yes/no
inLibrary = yes/no
*/

/* END PLANNING */

/* OK - var to store all books */
/* let myLibrary = []; */


/* OK function to grab attributes of a book */
/* constructor function */
/* function NewBook(title, author, pages, readStatus){
    this.title = title
    this.author = author
    this.pages = pages
    this.readStatus = readStatus
} */ //vanilla working code

/* Added book id */
function NewBook(title, author, pages, readStatus, bookId){
    this.title = title
    this.author = author
    this.pages = pages
    this.readStatus = readStatus
    this.bookId = bookId
}


/* declare books object to hold all books */
const Books = [];


/* Book id counter */
let bookIdCounter = 0;

/*OK function to prompt details */
/// OK - user types book details using the prompt

//[DO]add helper or even a name generator, restrict input types
//[DO]synchronize id with card id
///a new book variable will be created which will take the details of the book
///the new book will be added to the lib list

function promptNewBook() {
    bookIdCounter = bookIdCounter + 1;
    Books[prompt('Shorthand Name of Book')] = new NewBook(
        prompt('Title'),
        prompt('Author'),
        prompt('Pages'),
        prompt('Reading Status'),
        bookIdCounter
    )
}


/* OK - steps */
///OK - button click will pop out prompts
const Make = document.querySelector("#make")
Make.addEventListener('click', () =>{
    promptNewBook();
    }
)


///the card creator will make a card based on the book details
    //everytime a new book is created, we add +1 to a card counter variable
    //in addition, we also create a new div whose id is based on the card counter
        //div
            //id
            //title
            //author
            //pages
            //reading status
    //we add values to the elements using queryselector (id + array selectors)

//function CreateBook(){
    //new div is stored on a constant thru document.createElement('div)
    //constant is either the book object/property or a object with id common to the book
    //another div created as a child of the parent div


    //DOM to add to parent div
    //p = title...







///the card creator will also make removeFromLibrary button, and a readAlready button
    //


///the web styler will put the new card on a///user types book details using the form
    //header>logo and title
    //sidebar>new book and remove book

