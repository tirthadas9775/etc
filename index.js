var div = document.querySelector("#firstDiv"); //we have defined the first-div here

function clickMe() {
    /*when we click the Click Me button, first-div's display's value changes and it shows you what's in the
    first-div. You can add animation in your css file and on scroll animation on your html file from the 
    aos library.*/

    div.style.display = "block";
}

function clickOK() {
    //As this line of code runs the first-div's display will be blocked
    div.style.display = "none";
    /*(Here is the code to scroll over. Here you have to put the top value according to the size of the screen)*/
    window.scrollTo({ top: 600, behavior: "smooth" });
}