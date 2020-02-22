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
    let Books = [{ id : 1, name : "The Alchemist", Author : "Paulo Coelho", available : true},
    { id : 2, name : "Many Lives Many Masters", Author : "Brain Weiss", available : false},
    { id : 3, name : "Vistas", Author : "Deepa Prakash", available : false}];

    return Books;
}

function GetBookDetails(name : string, ...bookIds:number[]): Array<string>
{
    console.log(`username : ${name}`);
    let bookStore : string[] = [];

    for(let book of bookIds)
    {
        
    }
}
