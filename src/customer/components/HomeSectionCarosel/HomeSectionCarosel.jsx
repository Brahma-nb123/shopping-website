import React from 'react';
import './HomeSectionCarosel.css'
import HomeSectionCard from '../HomeSectionCard/HomeSectionCard';
import 'react-multi-carousel/lib/styles.css';
import Carousel from 'react-multi-carousel';
// import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
// import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Button } from '@mui/material';
// import { mens_kurta } from '../../../Data/Men/mens_kurta';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5.6,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const HomeSectionCarosel = ({data,sectionName}) => {
  return (
    <>
    <div className='text-2xl font-extrabold text-gray-900'>{sectionName}</div>
    <div className="border-black">
      <div className="relative p-5 border border-black">
        <Carousel
          responsive={responsive}
          draggable={false}
          swipeable={false}
          customButtonGroup={<ButtonGroup />}
        >
          {data.slice(0, 17).map((item, index) => (
            <HomeSectionCard key={index} product={item} />
          ))}
        </Carousel>
      </div>
    </div>
    </>
  );
};

const ButtonGroup = ({ next, previous }) => {
  return (
    <div>
      <Button
        className="z-50"
        variant="contained"
        onClick={previous}
        sx={{
          position: 'absolute',
          top: '50%',
          left: '1rem',
          transform: 'translateY(-50%)',
          backgroundColor: 'none',
          color: 'white',
        }}
        aria-label="previous"
      >
        {/* <ArrowBackIosIcon /> */}
      </Button>

      <Button
        className="z-50"
        variant="contained"
        onClick={next}
        sx={{
          position: 'absolute',
          top: '50%',
          right: '1rem',
          transform: 'translateY(-50%)',
          // backgroundColor: 'gray',
          color: 'white',
        }}
        aria-label="next"
      >
        {/* <ArrowForwardIosIcon /> */}
      </Button>
    </div>
  );
};

export default HomeSectionCarosel;












// import React, { useState } from 'react';
// import HomeSectionCard from '../HomeSectionCard/HomeSectionCard';
// import AliceCarousel from 'react-alice-carousel';
// import 'react-alice-carousel/lib/alice-carousel.css';
// import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
// import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
// import { Button } from '@mui/material';
// // import { mens_kurta } from '../../../Data/Men/mens_kurta';

// const HomeSectionCarosel = ({data}) => {
//   const [activeIndex, setActiveIndex] = useState(0);

//   const responsive = {
//     0: { items: 1 },
//     568: { items: 3 },
//     1024: { items: 5.2 },
//   };

//   const slidePrev = () => {
//     setActiveIndex(activeIndex - 1);
//   };

//   const slideNext = () => {
//     setActiveIndex(activeIndex + 1);
//   };

//   const syncActiveIndex = ({ item }) => 
//     setActiveIndex(item);
  
//   const items = data.slice(0, 10).map((item) => 
//     <HomeSectionCard product={item} />
//   );

//   return (
//     <div className="border">
//       <div className="relative p-5">
//         <AliceCarousel
//           items={items}
//           disableButtonsControls
//           responsive={responsive}
//           disableDotsControls
//           onSlideChanged={syncActiveIndex}
//           activeIndex={activeIndex}
//         />

//         {activeIndex !== 0 && 
//           <Button
//             className="z-50"
//             variant="contained"
//             onClick={slidePrev}
//             sx={{
//               position: 'absolute',
//               top: '10rem',
//               left: '0rem',
//               transform: 'translateX(-5%) rotate(90deg)',
//               backgroundColor: 'gray',
//               color: 'white',
//             }}
//             aria-label="previous"
//           >
//             <ArrowBackIosIcon sx={{ transform: 'rotate(-90deg)', color: 'black' }} />
//           </Button>
//         }

//         {activeIndex !== items.length - 5 && 
//           <Button
//             className="z-50"
//             variant="contained"
//             onClick={slideNext}
//             sx={{
//               position: 'absolute',
//               top: '10rem',
//               right: '0rem',
//               transform: 'translate(1%) rotate(90deg)',
//               backgroundColor: 'gray',
//               color: 'white',
//             }}
//             aria-label="next"
//           >
//             <ArrowForwardIosIcon sx={{ transform: 'rotate(-90deg)', color: 'black' }} />
//           </Button>
//         }
//       </div>
//     </div>
//   );
// };
// export default HomeSectionCarosel;