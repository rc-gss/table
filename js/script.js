$(document).ready(function () {
	$(".search__field").attr("maxlength", 20);

	$(".fa-search").click(function () {
		if ($('.search').css('display') == 'none') {
			$('.search').css('display', 'block');
		}
	})

	$(".fa-times").click(function () {
		$('.search').css('display', 'none');

	})

	var audio = document.getElementById("audioID");

	function playAudio() {
		audio.play();
	}

	var promise = document.querySelector('audio').play();

	if (promise !== undefined) {
		promise.then(_ => {

		}).catch(error => {
		});
	}



})