$(document).on("scroll", function () {
  var pixels = $(document).scrollTop()

  var font = pixels  / 32 + 10
  var email = "hi@colemantharp.design"

  $("div").css("font-size", font)
  $("a").html(email)

})
