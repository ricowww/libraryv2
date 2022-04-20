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
/* function promptNewBook() {
    bookIdCounter = bookIdCounter + 1;
    Books[prompt('Shorthand Name of Book')] = new NewBook(
        prompt('Title'),
        prompt('Author'),
        prompt('Pages'),
        prompt('Reading Status'),
        bookIdCounter
    )
} 
*/

/* define variables outside the functions to make them accessible via scope */
let shortName = "";
let bookTitle = "";
let bookAuthor ="";
let bookPages = "";
let readStatus ="";

/* version with intermediate variables for sharing between the constructor and the book card functions */
function promptNewBook() {//get inputs via prompt for easy UI
    bookIdCounter = bookIdCounter + 1;
    shortName = prompt('Shorthand Name of Book');
    bookTitle = prompt('Title');
    bookAuthor = prompt('Author');
    bookPages = prompt('Pages');
    readStatus = prompt('Reading Status');
    //call the NewBook constructor//
    Books[shortName] = new NewBook(
        bookTitle,
        bookAuthor,
        bookPages,
        readStatus,
        bookIdCounter
    )
    //call the card maker
    newBookCard();
}//Tested-Working up to NewBook and newBookCard

/* trigger create new book with button */
const Make = document.querySelector("#make")
Make.addEventListener('click', () =>{
    promptNewBook();

    }
)

///LATER - User types book details
/* 
    helper for the following, if input is invalid, pop-up again the prompt
        title = any
        author = any
        pages = nonzero positive integers only 
        status = yes/no (read?) - dropdown or y/n
        in library = yes/no (put in library?) dropdown or y/n
 */

///DONE - Computer counts nth number of book created - see "pressing button..."

///DONE - Book is created - see "pressing button...."

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

/* create attachment point thru #container */
const Container = document.querySelector('#container');

/* Create book cards in html using DOM */
 function newBookCard(){
    let newDivInMem = document.createElement('div');//book card is a new div in memory, variable is recyclable
    newDivInMem.classList.add('bookCard');//book card class for formatting purposes
    newDivInMem.id = bookIdCounter; //book card id equal to book ID
    /* Title child for the book card */
    let titleInMem = document.createElement('h1');//book card child is a new h1 in memory, variable is recyclable
    titleInMem.classList.add('bookCardChild');//book card child class for formatting purposes
    titleInMem.textContent = bookTitle; //add content
    /* Author child for the book card */
    let authorInMem = document.createElement('p');//book card child is a new p in memory, variable is recyclable
    authorInMem.classList.add('bookCardChild');//book card child class for formatting purposes
    authorInMem.textContent = bookAuthor; //add content
    /* Pages child for the book card */
    let pagesInMem = document.createElement('p');//book card child is a new p in memory, variable is recyclable
    pagesInMem.classList.add('bookCardChild');//book card child class for formatting purposes
    pagesInMem.textContent = `${bookPages} pages`; //add content
    /* Status child for the book card */
    let readStatusInMem = document.createElement('p');//book card child is a new p in memory, variable is recyclable
    readStatusInMem.classList.add('bookCardChild');//book card child class for formatting purposes
    readStatusInMem.textContent = `Read: ${readStatus}`; //add content
    /* Append a delete button */
    let deleteButton = document.createElement('button');//deleteButton child is a new button in memory, variable is recyclable
    deleteButton.id = bookIdCounter; //book card id equal to book ID
    deleteButton.classList.add('delete');//delete child class for formatting purposes
        //declare button as an object in DOM
        //id-based event listener
        //function to delete book DOM object and book array element

    /* Append a read/unread button */
        //declare button
        //give an id
        //id-based event listener
        //function to change book read/unread status
    /* Append childs to book card */
    newDivInMem.appendChild(titleInMem); //attach child to div parent
    newDivInMem.appendChild(authorInMem); //attach child to div parent
    newDivInMem.appendChild(pagesInMem); //attach child to div parent
    newDivInMem.appendChild(readStatusInMem); //attach child to div parent
        //attach delete button to div parent
        //attach read button to div parent

    /* Append book card to container */
    Container.appendChild(newDivInMem); //attach child to div parent
    
}//code is working but was manually added to the call function 

///Delete book element, accessed when book card is in existence
function deleteBook(idForDeletion) {
    
    /* Delete the data WORKS! */
    let bookiDList = Books.map(element => {
        return element.bookId;
    }); //get list of IDs of each element 
    let delBookIndex = bookiDList.indexOf(idForDeletion);//get array index of book for deletion
    Books.splice(delBookIndex, 1)//delete element by the index
    
    /* Delete the card */
    let cardiDList = Container.map(element => {
        return element.id;
    }); //get list of IDs of each element 
    let delCardIndex = cardiDList.indexOf(idForDeletion);//get array index of card for deletion
    Container.splice(delCardIndex, 1)//delete element by the index
};

///Read button will be attached to card- see "Card will be created..."
///Card will be attached to a card container- see "Card will be created..."
///Card container will have classes which have linked styling
/* 
    structure is as follows: 
        div#container> div.bookCard>
            h1
            p
    div#container is a grid with at least 1 column,
        infinite rows
    bookCards have at least 200rem?px? width plus the extra space
*/
