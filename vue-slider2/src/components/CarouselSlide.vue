<template>
  <transition :name="direction" mode="in-out">
    <!-- visibleSlide === index가 참이라면 화면에 표시된다. -->
    <!-- v-show 실제로 제거되는 것이 아니라 Css의 display 속성만 표시된다. -->
      <div v-show="visibleSlide === index" class="carousel-slide">
          <slot></slot>
      </div>
    </transition>
</template>

<script>
export default {
  props: ['visibleSlide','index', 'direction'],
  data() {
    return{
        
    }
  }
}
</script>

<style>
.carousel-slide{
  position: absolute;
  top:0;
  left:0;
  right:0;
  bottom:0;
}
/* 동작원리 */
  /* 사진이 들어옴(왼 -> 오) / 사진이 나감(오 -> 왼)*/
  .left-enter-active {
    animation: leftInAnimation 0.4s ease-in-out; 
  }
  .left-leave-active{
    animation: leftOutAnimation 0.4s ease-in-out; 
  }
  @keyframes leftInAnimation {
    from { transform : translateX(100%); }
    to { transform: translateX(0); }
  }
  @keyframes leftOutAnimation {
    from { transform : translateX(0%); }
    to { transform: translateX(100%); }
  }
 /* 동작원리 */
  /* 사진이 들어옴(오 -> 왼) / 사진이 나감(왼 -> 오)*/
  .right-enter-active {
    animation: leftInAnimation 0.4s ease-in-out; 
  }
  .right-leave-active{
    animation: leftOutAnimation 0.4s ease-in-out; 
  }
  @keyframes rightInAnimation {
    from { transform : translateX(0%); }
    to { transform: translateX(100%); }
  }
  @keyframes rightOutAnimation {
    from { transform : translateX(0%); }
    to { transform: translateX(100%); }
  }
</style>
