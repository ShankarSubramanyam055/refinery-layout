// JavaScript Document

let faqs = $(".faq_details");
$(".faq_title").click(function () {
  faqs.slideUp();
  faqs.prev().removeClass("active");
  $(this).next().slideDown();
  $(this).addClass("active");
  return false;
});
