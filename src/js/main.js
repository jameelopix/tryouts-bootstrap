$(document).ready(function () {
  console.log("ready!");

  $(".flexdemo .item").hover(onHover, onHoverOut);

  $(window).scroll(function () {
    if ($(document).scrollTop() > 50) {
      $(HEADER_NAVBAR).addClass("sticky");
    } else {
      $(HEADER_NAVBAR).removeClass("sticky");
    }
  });
});

let EXPAND_ITEM = "expand-item";
let SHRUNK_ITEM = "shrunk-item";

let HEADER_NAVBAR = "#header-navbar";

var onHover = function () {
  $(this).addClass(EXPAND_ITEM);

  getSiblings(this).addClass(SHRUNK_ITEM);
};

var onHoverOut = function () {
  $(this).removeClass(EXPAND_ITEM);

  getSiblings(this).removeClass(SHRUNK_ITEM);
};

var getSiblings = function (element) {
  return $(element).siblings();
};