import $ from "jquery";

// селект профиль
$(document).ready(function () {
  $(".select").each(function () {
    const _this = $(this),
      selectOption = _this.find("option"),
      selectOptionLength = selectOption.length,
      selectedOption = selectOption.filter(":selected"),
      duration = 200; // длительность анимации

    _this.hide();
    _this.wrap('<div class="select"></div>');
    
    
    $("<div>", {
      class: "new-select",
      text: _this.children("option:disabled").text(),
    }).insertAfter(_this);

    const selectHead = _this.next(".new-select");

    $("<div>", {
      class: "new-select__list",
    }).insertAfter(selectHead);

    const selectList = selectHead.next(".new-select__list");

    for (let i = 0; i < selectOptionLength; i++) {
      $("<div>", {
        class: "new-select__item",
        html: $("<span>", {
          text: selectOption.eq(i).text(),
        }),
      })
        .attr("data-value", selectOption.eq(i).val())
        .appendTo(selectList);
        
    }

$(".new-select__item:first-child").fadeOut(1);

    // $(".new-select__item:first-child").addClass("choosen");


    const selectItem = selectList.find(".new-select__item");
    selectList.slideUp(0);

    selectHead.on("click", function () {
      if (!$(this).hasClass("on")) {
        $(this).addClass("on");
        selectList.slideDown(duration);
      } else {
        $(this).removeClass("on");
        selectList.slideUp(duration);
      }
    });

    selectItem.on("click", function () {
      $(".new-select__item").removeClass("choosen");
      let chooseItem = $(this).addClass("choosen").data("value");
      $("select").val(chooseItem).attr("selected", "selected");
      selectHead.text($(this).find("span").text());
      selectList.slideUp(duration);
      selectHead.removeClass("on");
    });
  });
});

$(document).ready(function () {
  $(".select").on("click", function () {
    let selectImg = $(this).siblings(".block__icon");
    selectImg.toggleClass("img-active");
  });
});

// ---------------------------------------
$(document).mouseup(function (e) {
  var div = $(".select");
  if (!div.is(e.target) && div.has(e.target).length === 0) {
    $(".new-select").removeClass("on");
    $(".new-select__list").slideUp(300);
  }
});
