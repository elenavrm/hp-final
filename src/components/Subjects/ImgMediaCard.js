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
        justifyContent: 'space-around', 
        gap: '20px', 
        flexWrap: 'wrap',
        marginBottom: '50px' }}>
      {data.map((card, index) => (
        <Card key={index} 
        sx={{ 
        maxWidth: 345, 
        backgroundColor: '#cfb87c', 
        border: '1px solid #c09a46'}}>
          <CardMedia 
          component="img" 
          alt="Hogwarts subject" 
          height="145" 
          image={card.imageUrl} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div" 
            sx={{ 
              color: '#000', 
              fontFamily: 'Montecarlo', 
              fontSize: '37px', 
              fontWeight: 'bolder' }}>
              {card.title}
            </Typography>
            <Typography gutterBottom variant="h6" component="div" 
              sx={{ 
                color: '#000', 
                fontFamily: 'Open Sans',
                fontSize: '25px',
                fontWeight: 'bold'
                }}>
              {card.professor}
            </Typography>
            <Typography variant="body2" 
                color="#000" 
                fontFamily={'Open Sans'}
                fontSize={'20px'}
                fontWeight={'bold'}
                textAlign={'justify'}
              >
              {showMore[index]
                ? card.description
                : `${card.description.substring(0, 107) + '...'}`}
              <button className="showBtn" onClick={() => toggleShowMore(index)}>
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
