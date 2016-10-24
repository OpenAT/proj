//Pixelating Image slideshow
//Copyright Dynamic Drive 2001
//Visit http://www.dynamicdrive.com for this script

//specify interval between slide (in mili seconds)
var slidespeed=5000
//specify images
var slideimages=new Array("img/00.png","img/01.png","img/02.png")

var imageholder=new Array()
var ie55=window.createPopup
for (i=0;i<slideimages.length;i++){
imageholder[i]=new Image()
imageholder[i].src=slideimages[i]
}

function gotoshow(){
window.location=slidelinks[whichlink]
}

//-->