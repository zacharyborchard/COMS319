function validate() {
    var input = document.forms["input"]["typetest"].value;
    var testString = "The quick brown fox jumped over the lazy dog";
    
    var length=input.length;

    for (var i=0 ; i<length ; i++)
    {
        if (input[i] !== testString[i])
        {
            alert("you fucked up and typed '" + input[i] +"'");
        }
    }

}