<?php
error_reporting(0);
session_start();
$varsesion = $_SESSION['nombre'];

	
?>
<!DOCTYPE html>

<!--

-->

<html lang="en">
<head>

  <!-- Basic Page Needs
  ================================================== -->
  <meta charset="utf-8">
	<title>Dudas/Consultas/Aportar Ideas</title>

  <!-- Mobile Specific Metas
  ================================================== -->
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="description" content="Comentarios - SoftCodEPM">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0">
  <meta name="author" content="Comentarios - SoftCodEPM">
  <meta name="generator" content="Comentarios - SoftCodEPM">
  <!-- Favicon -->
  <link rel="shortcut icon" type="image/x-icon" href="../images/favicon.ico" />


	<!-- CSS
		================================================== -->
		<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">


<!-- JavaScript Bundle with Popper -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4" crossorigin="anonymous"></script>
    <link href="../vendor/emoji-picker/lib/css/emoji.css" rel="stylesheet">
	<link href="..//css/styles.css" rel="stylesheet">
    <script src="../vendor/jquery/jquery-3.2.1.min.js"></script>
    <script src="../vendor/emoji-picker/lib/js/config.js"></script>
    <script src="../vendor/emoji-picker/lib/js/util.js"></script>
    <script src="../vendor/emoji-picker/lib/js/jquery.emojiarea.js"></script>
    <script src="../vendor/emoji-picker/lib/js/emoji-picker.js"></script>
	





<section id="jjjd" class="section">
	<div class="container">
		<div class="row">

			<div class="col-12">
				<!-- section title -->
				
			
			<br>
			<br>

				<h3>Dudas/Consultas/Aportar Ideas</h3>
				<p>Cuentanos tu opinion, inquietudes o ideas acerca de nuestro sitio</p>
					<br>	

			<!-- Contact Details -->
			<div class="contact-info col-lg-6 wow fadeInUp" data-wow-duration="500ms">
			
	

<form id="frm-comment">
<div class="input-row">
    <input type="hidden" name="comment_id" id="post" placeholder="Nombre" />
	<label for="nombre" class="form-label">Usuario:</label> 
    <input class="form-control" type="text" name="nombre" id="nombre" readonly value="<?php echo $_SESSION['nombre']; ?>" required/>
</div>

<div class="input-row">
<label for="comme" class="form-label">Comentario:</label>
    <p class="emoji-picker-container">
      <textarea rows="6" class="form-control" 
	  type="text" name="comentario" id="comentario" placeholder="Agregue su comentario" required></textarea>
    </p>
</div>

<div>
    <input type="button" class="btn btn-primary " id="submitButton" value="Agregar Comentario" />

</div>
<br>
<div id="comment-message">¡Tu comentario se agrego!</div>

</form>
</div><div id="output"></div>

</div>

				</form>
			</div>
			</div>
			
					
			<!-- / End Contact Details -->

			<!-- Contact Form -->
		
<script>

function postReply(post) {
	$('#post').val(post);
	$("#nombre").focus();
}

$("#submitButton").click(function () {
	$("#comment-message").css('display', 'none');
	var str = $("#frm-comment").serialize();

	$.ajax({
		url: "AgregarComentario.php",
		data: str,
		type: 'post',
		success: function (response)
		{
			$("#comment-message").css('display', 'inline-block');
			$("#nombre").val("");
			$("#comentario").val("");
			$("#post").val("");
			listComment();
		}
		
	});
});

$(document).ready(function () {
	listComment();
});

$(function () {
	// Initializes and creates emoji set from sprite sheet
	window.emojiPicker = new EmojiPicker({
		emojiable_selector: '[data-emojiable=true]',
		assetsPath: '../vendor/emoji-picker/lib/img/',
		popupButtonClasses: 'icon-smile'
	});

	window.emojiPicker.discover();
	
});


function listComment() {
$.post("ListaComentario.php",
function (data) {
	var data = JSON.parse(data);

	var comments = "";
	var replies = "";
	var item = "";
	var parent = -1;
	var results = new Array();

	var list = $("<ul class='outer-comment'>");
	var item = $("<li>").html(comments);

	for (var i = 0; (i < data.length); i++)
	{
		var post = data[i]['id'];
		parent = data[i]['respuesta'];

		if (parent == "0")
		{
			comments =  "<div class='comment-row'>"+
			"<div class='comment-info'><img src='user.png' width='50px'><span class='posted-by'>" + data[i]['nombre'].toUpperCase() + "</span></div>" + 
			"<div class='comment-text'>" + data[i]['comentarios'] + "</div>"+
			"<div><a class='btn-reply' onClick='postReply(" + post + ")'>Responder</a></div>"+
			"<div class='comment-text'>" + data[i]['fecha'] + "</div>"+"</div>";
			var item = $("<li>").html(comments);
			list.append(item);
			var reply_list = $('<ul>');
			item.append(reply_list);
			listReplies(post, data, reply_list);
		}
	}
	$("#output").html(list);
	
});
}

function listReplies(post, data, list) {

	for (var i = 0; (i < data.length); i++)
	{
		if (post == data[i].respuesta)
		{
			var comments = "<div class='comment-row'>"+
			" <div class='comment-info'><img src='user.png' width='50px'><span class='posted-by'>" + data[i]['nombre'].toUpperCase() + " </span></div>" + 
			"<div class='comment-text'>" + data[i]['comentarios'] + 
			"<div class='comment-text'>" + data[i]['fecha'] + "</div>"+
			"<div><a class='btn-reply' onClick='postReply(" + data[i]['id'] + ")'>Responder</a></div>"+
			"</div>";
			var item = $("<li>").html(comments);
			var reply_list = $('<ul>');
			list.append(item);
			item.append(reply_list);
			listReplies(data[i].id, data, reply_list);

		}
	}  
}
</script>

			<!-- ./End Contact Form -->

		</div> <!-- end row -->
	</div> <!-- end container -->

</section> <!-- end section -->


