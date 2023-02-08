if (window.jQuery) {
} else {
    console.error('warning!jQuery is not conecting');
  }
  $(document).ready(function(){
    //Скрыть PopUp при загрузке страницы    
    PopUpHide();
});

function PopUpShow(){
    $("#popup1").show();
}
function PopUpHide(){
    $("#popup1").hide();
}