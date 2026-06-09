import React from 'react'
import { getImageUrl } from './Uitility'

function Gallary({nameImage}) {
  return (
      <>
      <img
      src={getImageUrl(nameImage)}
      alt={nameImage.alternativeName}
      width={nameImage.size}
      />
   
      </>
      
      
 
   
  )
}
export default function imagepath(){
  return(
   
      <Gallary
      nameImage={{ImageId:'shop',alternativeName:'Spparow',size:'50%'}}
      />
    
  );


}
