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
function CreateCustomer(username, email, password) {
    if (email === void 0) { email = "dp@gmail.com"; }
    //First Parameter is required
    //Second Parameter is default
    //Third Parameter is optional
    if (username) {
        console.log("User name is : " + username);
    }
    if (email) {
        console.log("Email is : " + email);
    }
    if (password) {
        console.log("Password is : " + password);
    }
}
CreateCustomer("Deepa", "", 89); //Empty string is overridden in email, not a solution
CreateCustomer("Deepa", "Check", 89);
//Best practise is to always keep Optional in the end
//Rest Parameter- Always in the last
function FetchBooks() {
    var Books = [
        {
            id: 1,
            name: "The Alchemist",
            Author: "Paulo Coelho",
            available: true
        },
        {
            id: 2,
            name: "Many Lives Many Masters",
            Author: "Brain Weiss",
            available: true
        },
        {
            id: 3,
            name: "Vistas",
            Author: "Deepa Prakash",
            available: true
        }
    ];
    return Books;
}
function FindBookById(id) {
    var books = FetchBooks();
    return books.filter(function (item) { return item.id === id; })[0]; //if we give indexing here, it will give only one value, not object
}
function GetBookDetails(name) {
    var bookIds = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        bookIds[_i - 1] = arguments[_i];
    }
    console.log("username : " + name);
    var bookStore = [];
    for (var _a = 0, bookIds_1 = bookIds; _a < bookIds_1.length; _a++) {
        var book = bookIds_1[_a];
        var BookDetailsId = FindBookById(book);
        if (BookDetailsId.available) {
            bookStore.push(BookDetailsId.Author, BookDetailsId.name);
        }
    }
    console.log(bookStore);
    return bookStore;
}
GetBookDetails("Deepa", 2, 2);
console.log("--------------------------------------------------------------");
function GetTitle(bookName) {
    var storeBook = [];
    var items = FetchBooks();
    if (typeof bookName === "boolean") {
        for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
            var i = items_1[_i];
            if (i.available) {
                storeBook.push(i.Author);
                break;
            }
        }
    }
    else if (typeof bookName === "string") {
        for (var _a = 0, items_2 = items; _a < items_2.length; _a++) {
            var h = items_2[_a];
            if (h.available) {
                storeBook.push(h.name);
                break;
            }
        }
    }
    else {
        console.log("not such item present");
    }
    console.log(storeBook);
    return storeBook;
}
GetTitle(true);
GetTitle("Deepa");
