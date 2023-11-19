import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { data } from './data';

const ImgMediaContent = () => {
  const [showMore, setShowMore] = useState({});

  const toggleShowMore = (index) => {
    setShowMore((prevShowMore) => ({
      ...prevShowMore,
      [index]: !prevShowMore[index],
    }));
  };

  return (
    <div style={{ 
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-evenly',
      marginBottom: '50px'
    }}>
      {data.map((card, index) => (
        <Card key={index} 
          sx={{ 
            maxWidth: '500px', 
            marginBottom: '20px',
            backgroundColor: '#cfb87c', 
            border: '1px solid #c09a46'
          }}>
          <CardMedia 
            component="img" 
            alt="Hogwarts Faculties" 
            width="400"
            height="450" 
            image={card.imgUrl} 
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div" 
              sx={{ 
                color: '#000', 
                fontFamily: 'Montecarlo', 
                fontSize: '35px', 
                fontWeight: 'bolder' 
              }}>
              {card.name}
            </Typography>
        
            <Typography gutterBottom variant="h6" component="div" 
              sx={{ 
                color: '#000', 
                fontFamily: 'Open Sans',
                fontWeight: 'bolder'
              }}>
              House Values: {card.houseValues}
            </Typography>
        
            <Typography gutterBottom variant="h6" component="div" 
              sx={{ 
                color: '#000', 
                fontFamily: 'Open Sans',
                fontWeight: 'bolder'
              }}>
              Head of House: {card.headHouse}
            </Typography>
            <Typography variant="body2" 
              color="#000" 
              fontFamily={'Open Sans'}
              fontWeight={'bolder'}>
                    {showMore[index]
                ? card.description
                : `${card.description.substring(0, 101)}...`}
              <button className="show-button" onClick={() => toggleShowMore(index)}>
                {showMore[index] ? 'show less' : 'show more'}
              </button>
            </Typography>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default ImgMediaContent;

