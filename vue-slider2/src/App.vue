<template>
  <div class="app">
    <carousel 
    className="carouselBox"
    @next="next"
    @prev="prev"
    >
      <carousel-slide v-for="(slide,index) in slides" 
      :key="slide" 
      :index="index"
      :visibleSlide = "visibleSlide"
      :direction = "direction" 
      >
        <img className="img-size" :src="slide"/>
      </carousel-slide>
    </carousel>
  </div>
</template>

<script>
import Carousel from './components/CarouselC';
import CarouselSlide from './components/CarouselSlide';
export default {
  data() {
    return {
      slides: [
          './img_src/p1.jpg',
          './img_src/p2.jpg',
          './img_src/p3.jpg',
          './img_src/p4.jpg',
          './img_src/p5.jpg',
      ],
      visibleSlide : 0,
      direction: 'left',
    }
  },
    computed: {
        slidesLen() {
          return this.slides.length
        }
    },
    methods : {
      next() {
        if(this.visibleSlide >= this.slidesLen -1) {
            this.visibleSlide = 0;
        }else{
            this.visibleSlide++;
        }
        this.direction = "left"

      },
      prev() {
        if(this.visibleSlide <= 0) {
          this.visibleSlide = 4;
        }else{
          this.visibleSlide--;
        }
        this.direction = "right"
      }
    },
  components : {
      Carousel,
      CarouselSlide,
  }
}
</script>

<style>
*{
  margin:0;
  padding:0;
  box-sizing: border-box;
}
  .app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    display: flex;
    justify-content: center;
    width:100vw;
    height:100vh;
    margin: 2vw auto;
  }
  .carouselBox{
    width:100%;
    height:100%;
    background: rgb(255, 239, 239);
    background-size: cover;
  }
  .img-size{
    display: flex;
    width:fit-content;
    height:100vh;
    margin:2vw auto;
  }
</style>
