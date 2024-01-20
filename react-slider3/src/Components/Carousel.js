import React,{useState} from 'react'
import "./Carousel.css";
import { images } from '../Helpers/CarouselData';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIos from '@material-ui/icons/ArrowForwardIos';

function Carousel() {

    //currImg, setCurrImg 변수 둘 다 useState를 사용합니다.
    const [currImg, setCurrImg] = useState(0);

    return (
        <div className='carousel'>
            <div className='carouselInner' 
            style={{backgroundImage: `url(${images[currImg].img})`}}
            >
                {/*이미지가 0보다 크면 setCurrImg를 호출하여 currImg 값을 1 감소시켜 이전 이미지로 돌아갑니다.*/}
                <div className='left' 
                    onClick={() => {
                        currImg > 0 && setCurrImg(currImg - 1);
                    }}
                    >
                    <ArrowBackIosIcon style={{fontsize: 30}}/>
                </div>

                <div className='center'>
                    <h1>{images[currImg].title}</h1>
                    <p>{images[currImg].subtitle}</p>
                </div>
                {/*이미지가 0보다 크면 setCurrImg를 호출하여 currImg 값을 1 증가시켜 다음 이미지로 넘어갑니다. */}
                <div className='right' 
                    onClick={() => {
                        currImg < images.length - 1 && setCurrImg(currImg + 1);
                    }}
                    >
                    <ArrowForwardIos style={{fontsize: 30}}/>
                </div>
            </div>
        </div>
        )
    }

export default Carousel