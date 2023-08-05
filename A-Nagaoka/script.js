$(".btn-move").on("click", function() {
    $(this).closest(".container").hide();
    id = $(this).attr("href");
    $(id).fadeIn();
  })