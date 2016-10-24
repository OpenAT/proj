function addBookmark(title, url){
  if(window.sidebar){ // Firefox
    window.sidebar.addPanel(title, url,'');
  }else if(window.opera){ //Opera
    var a = document.createElement("A");
    a.rel = "sidebar";
    a.target = "_search";
    a.title = title;
    a.href = url;
    a.click();
  } else if(document.all){ //IE
    window.external.AddFavorite(url, title);
  }
}
window.onload=function() {

  // initialize the eventhandlers
  linkopener();
}