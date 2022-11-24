let firstName = "James";
let lastName = "Smith";
let age = 34;
let isMarried = true;
let city = "San Jose";
let state = "California";
let postalCode = "CA";

// Provide solution code here for Validating FirstName
if(firstName!=null){
                        if(typeof(firstName)!='string'){
                            console.log("Frist Name value must be type of String");
                        }else{
                            console.log("Frist Name is valid");
                        }
                    }
                        else{
                                console.log("Frist Name Value Must not be Undefined");
    
                            }

// Provide solution code here for Validating LastName
if(lastName!=null){
if(typeof(lastName)!='string'){
    console.log("last name Should be String");
}else{
    console.log("last name is valid");
}
}else{
    console.log("last Name value must be of type String value");
}

// Provide solution code here for Validating Age
if(age!=null){
        
    if(typeof(age)!='number'){
        console.log("Age value Should be Number");
    }else{
        if(age>=18 && age<=60){
            console.log("Age is valid");
        }
        else{
            console.log("Age value should be between 18 and 60");
        }
    }
}else{
    console.log("Age Value must not be undefined");
}


// Provide solution code here for Validating isMarried
if(isMarried!=null){
    if(typeof(isMarried)!='boolean'){
        console.log("Type Should be a boolean");
    }else{
        console.log(" Ismarried is valid");
    }
}else{
    console.log("is Married value must be type of boolean");
}

// Provide solution code here for Validating City

if(city!=null){
    if(typeof(city)!='string'){
        console.log("Type Should be a String");
    }else{
        console.log("city name  is valid");
    }
}else{
    console.log("City value must be type of String");
}
// Provide solution code here for Validating State
if(state!=null){
    if(typeof(state)!='string'){
        console.log("Type Should be a String");
    }else{
        console.log("state is valid");
    }
}else{
    console.log("State value must be type String");
}
 
// Provide solution code here for Validating Postal Code
if(postalCode!=null){
    if(typeof(postalCode)!='string'){
        console.log("Postal Code value must be type of String");
    }else{
        console.log("postalCode is valid" );
    }
}else{

console.log("Postal code value must not be undefined");
}
 