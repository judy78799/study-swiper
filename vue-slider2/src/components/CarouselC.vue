<template>
    <!-- slot은 carousel 부모에 영향을 받는다(컴포넌트의 재사용성) -->
    <div class="carousel">
      <!-- slot은 carousel 부모에 영향을 받는다(컴포넌트의 재사용성) -->
        <slot></slot>
        <button @click="next" class="next button" >Next</button>
        <button @click="prev" class="prev button" >Prev</button>
    </div>
</template>

<script>
export default {
  data() {
    return{

    }
  },

  
  // methods속성 안에 next와 prev 라는 메서드가 정의되어있음.
  //각각 내장함수 $emit을 사용하여 이벤트를 발생시킨다.
  methods: {
      next() {
          this.$emit('next')
      },
      prev() {
        this.$emit('prev')
      }
  }
}
</script>

<style>
    .carousel {
      position:relative;
      width:600px;
      height:350px;
      overflow:hidden;
    }
    .button {
      position:absolute;
      height:5vw;
      width:3vw;
      top:calc(50% - 20px);
      background-color: rgba(0,0,0,0.8);
      border:none;
      color:white;
    }
    .button:focus, .button:hover{
      outline:none;
      cursor: pointer;
    }
    .next{
      right:2vw;
    }
    .prev {
      left:2vw;
    }
</style>
