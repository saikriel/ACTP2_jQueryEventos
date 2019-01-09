$(function (){
    $(".cards").on("click", '.card', function(){
        $(this).toggleClass("card--open");
    });
    $(".card__like").on("click" , function (){
        event.stopPropagation();
        $(this).toggleClass("card__like--red");
    });
    $(".card__follow-btn ").on("click" , function(){
        event.stopPropagation();
        $(this).toggleClass("card__follow-btn--following");
    });
    
    var image = $('#image').on('change', function(){
        var src = 'assets/images/squared/' + $(this).val()
        $('.create__image .create__img').attr('src', src)
    });
    var author = $("#author").on("change" , function(){
        var auth = "assets/images/profiles/" + $(this).val()
        $(".create__profile .create__img").attr("src" , auth)
    });
    $(".create__form").on("submit" , function (event){
        var titulo = $(".create__placeholder").text();
        var name = $("#name").val();
        var followers = $("#followers").val();
        var likes = $("#likes").val();
        var following = $("#following").val();
        event.preventDefault();
   
    });
    
    
    
})