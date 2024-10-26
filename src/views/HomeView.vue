<template>
  <main>
    <div class="name">
      <p>Hello</p>
      <h1>I'm <font color="#17d1ac">James</font> Kamerun</h1>
      <p class="details">In this Video I am gonna show you how to create a personal website with all pages.After
        Watching this tutorial you will be able to craete website like this</p>
    </div>
    <div class="about-model">
            <img alt="model" src="https://scontent.fcgy2-1.fna.fbcdn.net/v/t39.30808-6/459456357_1967072953794201_5954716566750958856_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeHsfKf5kt8HpTeryxI1xAZCxX1yQWgCew_FfXJBaAJ7D7iaoVDs2-F-IV7WQR93hxVvyM7Zv_IxBuudQujVLKh3&_nc_ohc=vre9sM-IAyMQ7kNvgGgNfmb&_nc_zt=23&_nc_ht=scontent.fcgy2-1.fna&_nc_gid=AbfADDcEJyDwHtEP2uwUxKk&oh=00_AYC3PNfl9vGc0JXD35qHPYDgYRql0BaUe4xhl7Td4HSqkA&oe=6721723D" />
        </div>
    <div class="social">
      <a href="#"><i class="fab fa-facebook-f"></i></a>
      <a href="#"><i class="fab fa-twitter"></i></a>
      <a href="#"><i class="fab fa-instagram"></i></a>
      <a href="#"><i class="fab fa-youtube"></i></a>
    </div>
  </main>
</template>

<style scoped>
.name {
  font-family: calibri;
  width: 500px;
  position: absolute;
  left: 20%;
  top: 50%;
  transform: translate(-20%, -50%);
}

.name p:nth-child(1),
.name .details {
  color: #6c707c;
  font-size: 16px;
}

.name h1 {
  font-family: Poppins;
  font-size: 40px;
  margin: 0px;
  letter-spacing: 3px;
  color: #292929;
}


.social {
  position: absolute;
  left: 50px;
  bottom: 50px;
  display: flex;

}

.social a {
  margin: 6px 12px;

}

.social i {
  color: rgba(18, 17, 17, 0.40);
  font-size: 14px;
}

.social a:hover i {
  color: #17d1ac;
  transition: all ease 0.5s;
}

@media(max-width:1190px){
	.about-model img{
		height:400px;
	}
}

@media(max-width:1190px){
	.name{
		left: 10%;
		top: 50%;
		transform: translate(-10%,-50%);
	}
}

@media(max-width:970px){
  .about-model{
		display: none;
	}
  
	.name{
		left: 50%;
		top: 50%;
		transform: translate(-50%,-50%);
	}
}

@media(max-width:600px){
	.name{
		width:60%;
	}

	.social{
		left: 30px;
		transform: translateX(-10px);
	}
}
</style>
