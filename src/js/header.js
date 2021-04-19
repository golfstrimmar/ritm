
import $ from "jquery";
// ------------------------------------------------



$(document).ready(function (e) {

  $(".header__burger").on("click", function () {
    
    $(".menu")
      .addClass("menu-active")
     
      
      setTimeout(function () {
        $(".info").addClass("info-active");
      }, 200);

    $("body").addClass("lock");
  }); 







$(".header__close").on("click", function () {
$(".menu")
  .removeClass("menu-active")
  .find(".header__info")
  .remove();
  $(".info").removeClass("info-active");
$("body").removeClass("lock");
  });

});

 

  // ----- header меняется в размерах и цвете
  //  window.addEventListener("scroll", function (event) {
  //    if (window.pageYOffset > 100) {
  //      document.querySelector(
  //        ".header"
  //      ).classList.add("responciveHeader");

  //    } else {
  //      document.querySelector(".header").classList.remove("responciveHeader");
  //    }
  //  });


//--- сворачивается открытый header при увеличении окна 768

window.onresize = function () {
  if (window.innerWidth >= 1500) {
    $(".menu").removeClass("menu-active").find(".header__info").remove();
    $(".info").removeClass("info-active");
    $("body").removeClass("lock");
// alert("");
  }
};







