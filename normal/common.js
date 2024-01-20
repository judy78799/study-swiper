//슬라이드 박스 변수 선언
const carouselSlide = document.querySelector('.carousel-slide');
const carouselImages = document.querySelectorAll('.carousel-slide img');

//Buttons
const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

//Counter 변수 선언: 두번째 이미지 부터 시작하기 때문에 1로 지정.
let counter = 1;
//단일 이미지의 가로 값을 가져옵니다.
const size = carouselImages[0].clientWidth;

//carouselSlide.style.transform = 'translateX(' + (-size * counter ) + 'px)';

//Button Listeners


nextBtn.addEventListener('click', () => {
    //counter 변수가 carouselImages 배열의 길이에서 1을 뺀 값보다 크거나 같으면 함수를 종료합니다.
    if(counter >= carouselImages.length -1) return;
    carouselSlide.style.transition = "transform 0.4s ease-in-out"; 
    //counter를 1씩 올립니다.
    counter++;
    //단일 이미지의 가로값 만큼 움직입니다.
    carouselSlide.style.transform = 'translateX(' + ( -size * counter ) + 'px)';
});

prevBtn.addEventListener('click', () => { 
    if(counter <= 0) return;
    carouselSlide.style.transition = "transform 0.4s ease-in-out"; 
    //counter를 1씩 내립니다.
    counter--;
    //단일 이미지의 가로값 만큼 움직입니다.
    carouselSlide.style.transform = 'translateX(' + ( -size * counter ) + 'px)';
});

carouselSlide.addEventListener('transitionend', () => {
    console.log('Fired'); //이미지 길이보다 넘어갔을 때 출력된다.
    if(carouselImages[counter].id === 'lastClone'){
        //transform으로 하게 되면 원래 자리로 다시 돌아오는 애니메이션이 실행됨.계속 부드럽게 실행되는 것이 아니라 
        carouselSlide.style.transition = 'none';
        counter = carouselImages.length -2;
        //이전버튼 눌렀을 때 마지막 사진으로 복사가 됨..
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

    }
    if(carouselImages[counter].id === 'firstClone'){
        carouselSlide.style.transition = 'none';
        counter = carouselImages.length - counter;
        //이전버튼 눌렀을 때 마지막 사진으로 복사가 됨..
        carouselSlide.style.transform = 'translateX(' + (-size * counter ) + 'px)';

    }
});