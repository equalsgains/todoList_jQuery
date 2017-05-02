// check off specific todos by clicking on the todo
$("ul").on("click", "li", function() {
    $(this).toggleClass("completed");
});

// click on x to delete todo
$("ul").on("click", "span", function (e) {
    $(this).parent().fadeOut(500, function () {
        $(this).remove();
    });
    e.stopPropagation();
});

$("input[type='text']").keypress(function (e) {
    if (e.which === 13 && $(this).val() !== "") {
        // grabbing new todo text from input
        var todoText = $(this).val();
        $(this).val("");
        // create a new li and add to ul
        $("ul").append("<li><span>X</span> " + todoText + "</li>");
    } else if (e.which === 13 && $(this).val() === "") {
        alert("type something first");
    }
});