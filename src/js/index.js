function burgerOpenClose(){
  if ($("#menu").hasClass("absolute")){
      $("#menu").removeClass("absolute");
      $("#menu").addClass("hidden");
  }else{
      $("#menu").removeClass("hidden");
      $("#menu").addClass("absolute");
  }
}