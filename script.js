
//NAVBAR



let lastScrollTop = 0,
navbar = document.getElementById('navbar');

window.addEventListener('scroll', function() {
	const scrollTop = window.pageYOffset || 
	this.document.documentElement.scrollTop;

	if(scrollTop > lastScrollTop) {
		navbar.style.top='-50px';
	} else {
		navbar.top='0';
	}
	lastScrollTop = scrollTop;
})



// TYPED




  var typed = new Typed('.typed', {
    strings: ["Optez pour le meilleur developpement front, Optimiser l'expérience utilisateur pour vos clients et profitez du stack  front que nous vous offrons"],
    typeSpeed: 20,
    smartBackspace: true, // this is a default
  });




  // COMPTEUR LIVE



  let compteur = 0;

  $(window).scroll(function(){

  	const top = $(".counter").offset().top - window.innerHeight;

  	if (compteur == 0 && $(window).scrollTop() > top){
  		$("counter-value").each(function() {
  			let $this = $(this),
  			  countTo = $this.attr("data-count");

  			$({
               countNum: $this.text()
  			}).animate({
  				contNum: countTo
  			},
  			{
  				duration: 10000,
  				easing: 'swing',
  				step: function(){
  					$this.text(Math.floor(this.countNum));
  				},
  				complete: function(){
  					$this.text(this.countNum);
  				}
  			});

  		});
  		compteur = 1;
  	}
  });



  // AOS


  <script>
  AOS.init();
</script>