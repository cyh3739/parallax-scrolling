
# Parallax Scrolling

### License
MIT license - http://opensource.org/licenses/MIT


### Set up

```html
<!--jQuery-->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>

<!--mousewheel.min.js & parallax.min.js-->
<script src="./js/mousewheel.min.js"></script>
<script src="./js/parallax.min.js"></script>
<script>
	$(document).ready(function(){
		$('.parallax').parallax({
				speed:700,
				pages:true
		});
	});
</script>
```


### Html
```html
<!-- Css -->
<style>
*{margin:0; padding:0;}

/*html, body 100%*/
html, body{height:100%; }

/*images*/
section{background-size:cover; background-repeat:no-repeat; background-position:50% 50%; background-attachment:fixed;}
section:nth-of-type(1){background-image:url('./imgs/img0.jpg'); }
section:nth-of-type(2){background-image:url('./imgs/img1.jpg'); }
section:nth-of-type(3){background-image:url('./imgs/img2.jpg'); }
section:nth-of-type(4){background-image:url('./imgs/img3.jpg'); }
section:nth-of-type(5){background-image:url('./imgs/img4.jpg'); }
section:nth-of-type(6){background-image:url('./imgs/img5.jpg'); }
section:nth-of-type(7){background-image:url('./imgs/img6.jpg'); }
section:nth-of-type(8){background-image:url('./imgs/img7.jpg'); }
</style>


<!-- Html -->    
<div class="parallax" style="height:100%;">
		<section></section>
		<section></section>
		<section></section>
		<section></section>
		<section></section>
		<section></section>
		<section></section>
		<section></section>
</div>	
```
(No Css File)

_ _ _

### Custom Style
```
/*pages*/
#parallax_pages li{width:10px!important; height:20px!important; background:#74c0fc!important;}
#parallax_pages li.active{background:#ff8787!important;}
```
