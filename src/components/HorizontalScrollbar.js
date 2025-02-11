import React, { useContext } from 'react'
import { Box, Typography } from '@mui/material';
import BodyPart from './BodyPart';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import RightArrowIcon from '../assets/icons/right-arrow.png';
import LeftArrowIcon from '../assets/icons/left-arrow.png';
import ExerciseCard from './ExerciseCard';

const LeftArrow = () => {
  const { scrollPrev, isFirstItemVisible } = useContext(VisibilityContext);

  return (
    <Typography 
      onClick={() => scrollPrev()} 
      className="left-arrow"
      sx={{ opacity: isFirstItemVisible ? '0' : '1' }}
    > 
      <img src={LeftArrowIcon} alt="left-arrow" />                  
    </Typography>
  );
};

const RightArrow = () => {
  const { scrollNext, isLastItemVisible } = useContext(VisibilityContext);

  return (
    <Typography 
      onClick={() => scrollNext()} 
      className="right-arrow"
      sx={{ opacity: isLastItemVisible ? '0' : '1' }}
    > 
      <img src={RightArrowIcon} alt="right-arrow" />
    </Typography>
  );
};

const HorizontalScrollbar = ({ data, bodyPart, setBodyPart, isBodyParts }) => {
  return (
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
      {data.map((item) => (
        <Box
          key={item.id || item}
          itemId={item.id || item}
          title={item.id || item}
          m="0 20px"
        >
          {isBodyParts ? (
            <BodyPart 
              item={item} 
              bodyPart={bodyPart}
              setBodyPart={setBodyPart}
            />
          ) : (
            <ExerciseCard exercise={item} /> 
          )}         
        </Box>
      ))}
    </ScrollMenu>
  );
};

export default HorizontalScrollbar;