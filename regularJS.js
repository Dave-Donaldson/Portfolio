
$(function () {

  var clssCheck = false;

  $(".info-box").addClass("displayInfo");

  $('.menu-icon').on('click', function () {

    function check() {
      if ($(".info-box").hasClass("displayInfo")) {
        clssCheck = true;
      } else {
        clssCheck = false;
      }
    }

    check();

    if (clssCheck) {
      $(".info-box").removeClass("displayInfo");
      $(".menu").addClass("displayMenu");
    } else {
      $(".menu").removeClass("displayMenu");
      $(".info-box").addClass("displayInfo");
    }
  });
});
