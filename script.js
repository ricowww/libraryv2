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
   Event listener to trigger prompts, book ID number counter, and object constructor
   DONE - Object constructor to create an book element inside books
   DONE - Books object to collect all book elements
 */

/* constructor function */
function NewBook(title, author, pages, readStatus, bookId){
    this.title = title
    this.author = author
    this.pages = pages
    this.readStatus = readStatus
    this.bookId = bookId
}

/* book id counter */
let bookIdCounter = 0;

/* contain book elements */
const Books = [];

/* create new book by calling constructor and id counter */
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



///User types book details
/* 
    helper for the following, if input is invalid, pop-up again the prompt
        title = any
        author = any
        pages = nonzero positive integers only 
        status = yes/no (read?) - dropdown or y/n
        in library = yes/no (put in library?) dropdown or y/n
 */


///Computer counts nth number of book created - see "pressing button..."

///Book is created - see "pressing button...."

///Card will be created based on details
/* 
    An container will hold new cards
    new cards will be created upon user input
    new card will contain 
        title
        author
        pages
        status button
        remove book button
    status button will toggle yes/no
    remove book button will delete the card
*/

///Read button will be attached to card- see "Card will be created..."
///Card will be attached to a card container- see "Card will be created..."
    
///Card container will have classes which have linked styling
/* 
    dashboard boilerplate    
    container will be a grid

*/















/*OK function to prompt details */
/// OK - user types book details using the prompt
//[DO]add helper or even a name generator, restrict input types
//[DO]synchronize id with card id
///a new book variable will be created which will take the details of the book
///the new book will be added to the lib list




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

