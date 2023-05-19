function editTheImage()
{
    var  allInput=document.querySelectorAll("input")
    var  blurVal=allInput[0].value
    var  brightnessVal=allInput[1].value
    var  contrastVal=allInput[2].value
    var  grayscaleVal=allInput[3].value
    var  huerotateVal=allInput[4].value
    var  invertVal=allInput[5].value
    var  opacityVal=allInput[6].value
   var  saturateVal=allInput[7].value
   var  sepiaVal=allInput[8].value
   
   
     document.getElementById("image").style.filter=`blur(${blurVal}px) brightness(${ brightnessVal}%) 
     contrast(${ contrastVal}%) grayscale(${ grayscaleVal}%) hue-rotate(${ huerotateVal}deg) invert(${invertVal}%)
     opacity(${ opacityVal}%) saturate(${ saturateVal}%) sepia(${sepiaVal}%)`

     var  allInput=document.querySelectorAll("input")
    var  rotZVal=allInput[9].value
    var  rotXVal=allInput[10].value
    var  rotYVal=allInput[11].value
    var  scaVal=allInput[12].value
    var  scaXVal=allInput[13].value
    var  scaYVal=allInput[14].value
    var  skwVal=allInput[15].value
   var  skwXVal=allInput[16].value
   var  skwYVal=allInput[17].value

   document.getElementById("image").style.transform=`rotateZ(${rotZVal}deg) rotateX(${ rotXVal}deg) 
   rotateY(${ rotYVal}deg) scale(${scaVal}) scaleX(${scaXVal}) scaleY(${scaYVal})
   skew(${ skwVal}deg) skewX(${ skwXVal}deg) skewY(${skwYVal}deg)`

}