//Optional Parameter is denoted by "?" in Typescript

//We cannot have first parameter as Optional and second as required
/*function CreateCustomer(username?: string, password:number, email:string="deepa@gmail.com") 
{}*/

/*function CreateCustomer(username: string, password?: number, email: string = "dp@gmail.com") {
    //First Parameter is required
    //Second Parameter is Optional
    //Third Parameter is default

    console.log(`User name is : ${username}`);

}*/

//CreateCustomer("Deepa", --, "hello@gmail");

function CreateCustomer(username: string, email: string = "dp@gmail.com", password?: number) : void {
    //First Parameter is required
    //Second Parameter is default
    //Third Parameter is optional
    if(username){
    console.log(`User name is : ${username}`);
    }
    if(email){
    console.log(`Email is : ${email}`);
    }
    if(password){
    console.log(`Password is : ${password}`);
    }
}

CreateCustomer("Deepa", "", 89); //Empty string is overridden in email, not a solution
CreateCustomer("Deepa", "Check", 89);

//Best practise is to always keep Optional in the end

//Rest Parameter- Always in the last
function FetchBooks()
{
    let Books = [
        {
            id : 1, 
            name : "The Alchemist", 
            Author : "Paulo Coelho", 
            available : true
        },
        { 
            id : 2, 
            name : "Many Lives Many Masters", 
            Author : "Brain Weiss", 
            available : true
        },
        { 
            id : 3, 
            name : "Vistas", 
            Author : "Deepa Prakash", 
            available : true
        }
    ];

    return Books;
}

function FindBookById(id : number) {
    let books = FetchBooks();

    return books.filter(item => item.id === id)[0];  //if we give indexing here, it will give only one value, not object
}

function GetBookDetails(name : string, ...bookIds:number[]): Array<string>
{
    console.log(`username : ${name}`);
    let bookStore : string[] = [];

    for(let book of bookIds)
    {
        const BookDetailsId = FindBookById(book);
        if(BookDetailsId.available)
        {
            bookStore.push(BookDetailsId.Author, BookDetailsId.name);
        }
    }
    console.log(bookStore);
    return bookStore;
}

GetBookDetails("Deepa", 2, 2);

console.log("--------------------------------------------------------------");

function GetTitle(bookName : string) : Array<string>; //Throws error- Function implementation is missing.
function GetTitle(bookName : boolean) : Array<string>;

function GetTitle(bookName : any) : Array<string>{
    let storeBook : string[] = [];
    let items = FetchBooks();

    if(typeof bookName === "boolean")
    {
        for(let i of items)
        {
            if(i.available)
            {
                storeBook.push(i.Author);
                break;
            }
        }
    }
    else if(typeof bookName === "string")
    {
        for(let h of items)
        {
            if(h.available)
            {
                storeBook.push(h.name);
                break;
            }
        }
    }
    else
    {
        console.log("not such item present");
    }

    console.log(storeBook);
    return storeBook;
}

GetTitle(true);
GetTitle("Deepa");