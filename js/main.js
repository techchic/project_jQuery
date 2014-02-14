alert("yay javascript!");
console.log("i'm in the console");
function myFunct()
{
  alert("you clicked!");
}
var myVar=document.getElementsByTagName('h1');
console.log(myVar);
myVar.onclick=function(){
  alert("You clicked an h1")};
$(function()
{
  $('h1').on('click', function()
    {
    alert("you clicked an h1");
   });
});
