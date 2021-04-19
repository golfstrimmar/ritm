import $ from "jquery";









// // независимые табы-------------------------
// $(document).ready(function () {
// let titleTab=  $(".tabs-title-js");

// titleTab.on("click", function () {

// let dropTab = $(this).siblings(".tabs-drop-js");
// let imgTab = $(this).find(".tabs-img-js");

// if ($(this).hasClass("act")) {
//   setTimeout(function () {
//     dropTab.removeClass("act");
//   }, 200);
//   $(this).removeClass("act");
//   dropTab.slideUp(200);
//   imgTab.css("transform", " translateY(-50%) rotate(0deg)");
// }


// else {
//   $(this).addClass("act");
//   imgTab.css("transform", "translateY(-50%) rotate(180deg)");
//   dropTab.addClass("act").slideDown(200);
// }	

// });
// })



// // аккордеон --------
$(document).ready(function (e) {
  let titleTab = $(".akr-title-js");

  titleTab.on("click", function () {

    let dropTab = $(this).siblings(".akr-drop-js");
    let imgTab = $(this).find(".akr-item-img-js");
    let parent = $(this).parent(".akr__item");

    if ($(this).hasClass("act")) {


      $(this).removeClass("act");
      dropTab.slideUp(200).removeClass("act");
      imgTab.css("transform", "translateY(-50%) rotate(0deg)");
      
    } else {

$(this).addClass("act");
imgTab.css("transform", "translateY(-50%) rotate(180deg)");
dropTab.addClass("act").slideDown(200);
    $(".akr__item").not(parent).find(".akr-drop-js").slideUp(200);
    $(".akr__item").not(parent).find(".akr-title-js").removeClass("act");
    $(".akr__item")
      .not(parent)
      .find(".akr-item-img-js")
      .css("transform", "translateY(-50%) rotate(0deg)");
    }
  });
});
// ----------------------------



