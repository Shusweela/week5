    //Changes each element in first list of items. 
    document.getElementById("cat").style.color = "green";

    //changing text value in last item in list1
    document.getElementById("fish").nextElementSibling.innerHTML = "goldfish";

    //changing class name via child to 2nd item in list 1
    document.getElementByclassName("dog").innerHTML = "canine";



    //event listener listening for event button and changing one value in embedded list as hidden
    function myBtn (){
        document.getElementById("bronze").style.visibility = "hidden";
}