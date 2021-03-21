/* console.log('hello');
console.log("he"); 
alt + shift + A + enter
*/

//service

var slideindex= 0;// it will fix the slide index to zero
slide();//calling the slide function

//function for automatic slider....
function slide(){

    var container = document.getElementsByClassName("container"); //selecting the container 

    //'for loop' to not display the other content when the one content is running
    for (var i=0; i < container.length; i++){

        container[i].style.display= "none"; //it hides (display="none") all elements with the class name "container"
    }

    slideindex++; //increasing the content by 1.
    if (slideindex > container.length){  //If the slideIndex is higher than the number of elements (container.length), the slideIndex is set to 1.
        slideindex=1;
    }

    container[slideindex-1].style.display="block"; //it display (display="block") the element with the given slideIndex.
    setTimeout(slide,2000); ///setting the time of 2sec to display the content.OR Change image every 2 seconds
}



//for mobile menue

function showmenu(){
    var bar = document.getElementById('bar');
    var cross = document.getElementById('cross');
    var mob = document.getElementById('nav-mob');

    bar.style.display = "none";
    cross.style.display = "block";
    mob.style.display = "block";
}

function closemenu(){
    var bar = document.getElementById('bar');
    var cross = document.getElementById('cross');
    var mob = document.getElementById('nav-mob');

    bar.style.display = "block";
    cross.style.display = "none";
    mob.style.display = "none"
}
