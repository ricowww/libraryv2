/* 
TO DO!!!!
[ ] triggers
[ ] grid format
[ ] helpers
[ ] id uniqueness
 */

/* OK - constructor function */
function NewBook(title, author, pages, readStatus, bookId){
    this.title = title
    this.author = author
    this.pages = pages
    this.readStatus = readStatus
    this.bookId = bookId
}

/* OK - book id counter */
let bookIdCounter = 0;

/* OK - contain book elements */
const Books = [];

/* OK - define variables outside the functions to make them accessible via scope; use only these variables for card creation */
let shortName = "";
let bookTitle = "";
let bookAuthor = "";
let bookPages = "";
let readStatus ="";

/* OK - create new book using constructor; also create a card */
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
}//Intermediate variables for sharing between the constructor and the book card functions


/* OK - create attachment point thru #container */
const Container = document.querySelector('#container');

/* OK - container to hold all cards */
const ButtonsContainer = [];

/* OK -  Create book cards in html using DOM */
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
    deleteButton.id = 'delete'+ bookIdCounter; //book card id equal to delete + book ID
    deleteButton.classList.add('delete');//delete child class for formatting purposes
    deleteButton.textContent = 'Delete'; //add content
    /* Append a removeread button */
    let readButton = document.createElement('button');//deleteButton child is a new button in memory, variable is recyclable
    readButton.id = bookIdCounter; //book card id equal to book ID
    readButton.classList.add('read');//read child class for formatting purposes
    readButton.textContent = 'Read'; //add content
    /* Append childs to book card */
    newDivInMem.appendChild(titleInMem); //attach child to div parent
    newDivInMem.appendChild(authorInMem); //attach child to div parent
    newDivInMem.appendChild(pagesInMem); //attach child to div parent
    newDivInMem.appendChild(readStatusInMem); //attach child to div parent
    newDivInMem.appendChild(deleteButton); //attach child to div parent
    newDivInMem.appendChild(readButton); //attach child to div parent
    /* Append book card to container */
    Container.appendChild(newDivInMem); //attach child to div parent
    /* DO - trigger create new book with button */
    ButtonsContainer['delete'+ bookIdCounter] = document.getElementById('delete'+ bookIdCounter);//declare button as DOM named as "delete[insert id]"
    ButtonsContainer['delete'+ bookIdCounter].addEventListener('click', (e) =>{
        let idTemp = (e.target).id;
        deleteBook(idTemp);
        }
    );
    
}//code is working but was manually added to the call function 

///Delete book element, accessed when book card is in existence
function deleteBook(idForDeletion) {
    /* Delete the data WORKS! */
    let bookiDList = Books.map(element => {
        return element.bookId;
    }); //get list of IDs of each element 
    let delBookIndex = bookiDList.indexOf(idForDeletion);//get array index of book for deletion
    Books.splice(delBookIndex, 1);//delete element by the index
    
    /* Delete the card */
    let childNode = document.getElementById(idForDeletion);//select and store the childnode by ID which is an object
    let parentNode = childNode.parentNode;//get and store the parent node which is an object
    let delCardIndex = Array.prototype.indexOf.call(parentNode.children, childNode);//
    Container.removeChild(Container.childNodes[delCardIndex]);//delete element by the node index - WORKS!!!
};

//OK - flip its read status; and end the loop
//otherwise, do nothing
function toggleRead(idForToggle){
    for (let key in Books){//run on all elements in Book array
        if(Books[key].bookId == idForToggle){//if the element has book id equal to the target id,
            if(Books[key].readStatus == 'yes'){ 
                Books[key].readStatus = 'no';//flip its read status WORKS!!!
            } else {
                Books[key].readStatus = 'yes';
                //flip also button text
            };
        };
    };
};



/* OK - trigger create new book with button */
const Make = document.querySelector("#make")
Make.addEventListener('click', () =>{
    promptNewBook();
    }
)

/* DO - Trigger to read button */
//declare button as an object
//one.addEventListener('click', (e) => {typeToCalcVarMem(e.target)});
//get id of target
//call the read function


/* DO - Trigger to delete button */

///DO - User types book details
/* 
    helper for the following, if input is invalid, pop-up again the prompt
        title = any
        author = any
        pages = nonzero positive integers only 
        status = yes/no (read?) - dropdown or y/n
        in library = yes/no (put in library?) dropdown or y/n
 */
