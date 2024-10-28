<template>
    <!--about----------------------->
    <section id="about">
        <!--text---------------------->
        <div class="about-text">
            <h1>About Us</h1>
            <h2>FreeLancing FrontEnd Developer</h2>
            <p>Enjoy the ultimate web design editor. Divi is like Photoshop or Sketch for the web. It brings an advanced
                design interface to WordPress that both beginners and experts will fall in love with. It's incredibly
                smart, super flexible, amazingly powerful and visual by nature. This is how designing for the web is
                meant to be done.</p>
            <button>View More Details</button>
        </div>
        <!--about-model----------------->
        <div class="about-model">
            <img alt="model" src="/src/assets/Picsart_23-04-07_20-07-57-249%20[problembo.com]%20(1)%20(1).png" />
        </div>
    </section>
</template>

<style scoped>
#about {
    width: 100%;
    height: 100vh;

    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 50px 5% 0px 5%;
    position: relative;
}

.about-text {
    font-family: calibri;
    width: 50%;
}

.about-text h1 {
    font-size: 5rem;
    color: #17d1ac;
}

.about-text h2 {
    font-size: 3rem;
    color: #000000;
    font-weight: 400;
}

.about-text h1,
h2 {
    margin: 0px;
    padding: 0px;
}

.about-text p {
    font-size: 1.2rem;
    color: rgba(0, 0, 0, 0.9);

}

.about-text button {
    width: 180px;
    height: 40px;
    border-radius: 20px;
    border: none;
    outline: none;
    background-color: #17d1ac;
}

.about-text button:hover {
    background-color: #FFFFFF;
    transition: all ease 0.3s;
}

@media(max-width:1190px){
	.about-model img{
		height:400px;
	}
}

@media(max-width:970px){
	.about-model{
		display: none;
	}
	#about{
		justify-content: center;
		padding-top: 0px;
	}
	.about-text{
		width: 90%;
	}
	.about-text h1{
		font-size:4rem;
	}	
}
</style>