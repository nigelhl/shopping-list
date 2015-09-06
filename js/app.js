$(document).ready(function(){

	$('.button').click(function(){
		$('.list').append('<li>' + $('.textbox').val() + '<input type="button" class="delete" value="Delete"/></li>')
		/*$('.list li').append( $('<button />').addClass('deleteButton').text('Delete'))*/
		$('.delete').css({"margin-left" : "30px"})
		$('.textbox').val("")
	})
	  $(document).on('click', '.delete', function() {
        $(this).parent().remove();
    });
});