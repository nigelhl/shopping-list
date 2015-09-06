$(document).ready(function(){

	$('.button').click(function(){
		$('.list').append('<li>' + $('.textbox').val() + '<input type="button" class="delete" value="Delete"/></li>')
		$('.delete').css({"margin-left" : "30px"})
		$('.textbox').val("")
	})

	  $(document).on('click', '.delete', function() {
        $(this).parent().remove();
    });
});

/*Known bugs
- add an entry without any textbox
- refresh will clear the screen
- Max character limit is 20
- where should delete button be - it's all wonky*/