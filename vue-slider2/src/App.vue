<template>
  <div class="app">
    <carousel 
    className="carouselBox"
    @next="next"
    @prev="prev"
    >
    <!-- slides 배열의 각 요소를 순회하면서 carousel-slide 컴포넌트를 생성. -->
    <!-- slide 변수를 key 값으로 사용하여 각 슬라이드를 고유하게 식별한다. -->
    <!-- index라는 prop을 전달해서 각 슬라이드의 index를 해당 컴포넌트 내에서 사용할 수 있다. -->
    <!-- 해당 컴포넌트에서 외부에서 전달된 visibleSlide와 direction 값을 사용할 수 있다. -->
      <carousel-slide v-for="(slide,index) in slides" 
      :key="slide" 
      :index="index"
      :visibleSlide = "visibleSlide"
      :direction = "direction" 
      >
      <!-- slide 변수에 저장된 이미지 경로를 src 속성으로 설정하여 해당 슬라이드의 이미지를 표시한다. -->
        <img className="img-size" :src="slide"/>
      </carousel-slide>
    </carousel>
  </div>
</template>

<script>
//Carousel 이라고 파일 이름을 저장해놓으니 에러가 생겨서 CarouselC로 파일명을 변경하게 되었습니다.
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
    height:100dvh;
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
