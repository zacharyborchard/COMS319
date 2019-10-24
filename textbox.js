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
function startValid(){
    var sentence = document.getElementById("demoBox").innerHTML;
    var split = sentence.split(" ");
    document.getElementById("demoBox").innerHTML = split;
   



}
//The quick brown fox jumped over the lazy dog; then, the dog got mad and jumped over the fox.
function valid(){
   
    

    
    //var text = ["The ","quick ", "brown ", "fox ", "jumped " , "over ", "the " ,"lazy ", "dog; " ,"then, ", "the ", "dog ", "got ","mad ", and jumped over the fox. ];
    
    for(var i =0; i< split.length; i++){
        document.getElementById("demoBox").innerHTML = split[i];
    }
    
    
    




}