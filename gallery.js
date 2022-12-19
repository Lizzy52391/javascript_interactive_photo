function upDate(previewPic){
   document.getElementById("image").style.backgroundImage="url("+previewPic.src+")";

document.getElementById('image').innerHTML= previewPic.alt;
}
 
     
  
function unDo(reverse){
    document.getElementById("image").innerHTML = "Hover over an image below to display here.";   
    x=document.getElementById('image');
    x.style.backgroundImage = "url('')";
   }
