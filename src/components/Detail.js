import React from 'react'
import { Typography, Stack, Button } from '@mui/material';

import BodyPartImage from '../assets/icons/body-part.png';
import TargetImage from '../assets/icons/target.png';
import EquipmentImage from '../assets/icons/equipment.png';


const Detail = ({exerciseDetail}) => {
    const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail;
    // console.log(gifUrl);

    const extraDetail = [
        {
            id: 'body-part',
            icon: BodyPartImage,
            name: bodyPart,
        },
        {
            id: 'target',
            icon: TargetImage,
            name: target,
        },
        {
            id: 'equipment',
            icon: EquipmentImage,
            name: equipment,
        }
    ]
  return (
    <Stack gap="60px" sx={{ flexDirection: { lg:'row' }, p:'20px',alignItems:'center' }} >
        <img src={gifUrl} alt={name} loading='lazy' className='detail-image' />
        <Stack sx={{ gap:{ lg:'35px', xs:'20px' }}} >
            <Typography variant='h3'>
                {name}
            </Typography>
            <Typography variant='h5'>
                Exercise keep you strong. {name} { `  ` }
                is one of the best exercise to target your {target}. It will help you
                improve you mood and  gain energy.
            </Typography>
            {extraDetail.map((item)=>(
                <Stack key={item.id} direction="row" gap='24px' alignItems='center' >
                    <Button sx={{ background:"#fff2db", borderRadius:'100%', width:'100px', height:'100px' }} >
                        <img src={item.icon} alt={item.name} />
                    </Button>
                    <Typography textTransform='capitalize' variant='h6'>
                        {item.name}
                    </Typography>
                </Stack>
            ))

            }
        </Stack>
    </Stack>
  )
}

export default Detail