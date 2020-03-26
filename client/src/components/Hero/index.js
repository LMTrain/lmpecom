import React, {useState} from "react";
import "./style.css";
import {Carousel, CarouselItem, CarouselControl, CarouselIndicators } from 'reactstrap';
import { Card} from 'reactstrap';



const items = [
                {
                  src: "https://i5.walmartimages.com/asr/3e11141d-5fad-4a66-a37b-94cfa6243d46_1.a3bfaba9533f2cf74678b9b1e35520df.jpeg?odnHeight=450&odnWidth=450&odnBg=FFFFFF",    
                },
                {
                  src: "https://i5.walmartimages.com/asr/b1a88e71-4814-4abb-aafb-045068defb74_1.184b5ae58b8829ba158b83a858733c8f.jpeg?odnHeight=450&odnWidth=450&odnBg=FFFFFF",                  
                },
                {
                  src: "https://i5.walmartimages.com/asr/2a6c7b24-e81b-40f1-b2bf-56117d4af91e_1.c3eaa1408560625fe9693d8a80066a85.jpeg?odnHeight=450&odnWidth=450&odnBg=FFFFFF",                  
                },
                {
                  src: "https://i5.walmartimages.com/asr/5745729f-5bca-4cb9-8c9f-ac9d4eb8d1d3_1.2737f851dcf47febc361a5bc59ffc387.jpeg?odnHeight=450&odnWidth=450&odnBg=ffffff",                 
                },
                {
                  src: "https://i5.walmartimages.com/asr/907eb33d-f080-4653-ae6b-01c898f2bd23_1.f4ec7e54dd870069f6811d9f37f9641d.jpeg?odnHeight=450&odnWidth=450&odnBg=FFFFFF",                  
                },
                {
                  src: "https://i5.walmartimages.com/asr/9e1d8d0b-7b20-4aba-b0a6-ec1c64c7ba4e_1.d83819b6605d770e8405b0aeafe0643d.jpeg?odnHeight=450&odnWidth=450&odnBg=FFFFFF",
                },
                {
                  src: "https://i5.walmartimages.com/asr/9b2f601c-d21d-4c6d-b2b0-87f8a28b842d_1.74d73eec73b8dd3bf5521137199f30bb.jpeg?odnHeight=450&odnWidth=450&odnBg=FFFFFF",
                },
                {
                  src: "https://i5.walmartimages.com/asr/979c5c03-6e99-4242-8ad4-35f34370df9a_1.55a60e51ea0ba411fd6f17a43dc6c634.jpeg?odnHeight=450&odnWidth=450&odnBg=FFFFFF",
                },
                {
                  src: "https://i5.walmartimages.com/asr/76b26154-43c0-4713-b1bd-7e5bfa5cd9a0_1.4e4b42b8449edf79575d945e326871c5.jpeg?odnHeight=450&odnWidth=450&odnBg=FFFFFF",
                },
                {
                  src: "https://i5.walmartimages.com/asr/b70f2ab2-a4cb-4919-8ea8-a54f32b80c0a_1.515686849ef312c07b773903176fc5fa.jpeg?odnHeight=450&odnWidth=450&odnBg=FFFFFF",
                },
                {
                  src: "https://i5.walmartimages.com/asr/27a4ca81-8d8b-4082-afb9-e6b13cec551f_1.37e4ec8aa7f075503137c2a808ab944a.jpeg?odnHeight=450&odnWidth=450&odnBg=FFFFFF",
                },
            ];

const Hero = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = items.map((item) => {
    return (
      <CarouselItem 
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <div className="carousel-img">
          <img src={item.src} alt={item.altText} />
          {/* <CarouselCaption captionText={item.caption} captionHeader={item.altText} /> */}
        </div>
      </CarouselItem>
    );
  });

  return (
    <Card className="carousel-card">
      <Carousel 
        activeIndex={activeIndex}
        next={next}
        previous={previous}
      >
        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
        {slides}
        <CarouselControl className="carousel-left-indicator" direction="prev" directionText="Previous" onClickHandler={previous} />
        <CarouselControl className="carousel-right-indicator" direction="next" directionText="Next" onClickHandler={next} />
      </Carousel>
      {/* {props.children} */}
    </Card>
  );
}

// function Hero(props) {
//   console.log("THIS IS PROPS FROM HERO", props)
//   return (
//     <div className="hero text-center" style={{ items: `url(${props.items})` }}>      
//       {props.children}
//     </div>
//   );
// }

export default Hero;
