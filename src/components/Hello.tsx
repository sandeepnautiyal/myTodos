import React, { useState } from 'react'

function Hello (){
  let level: any= 10;

  level = "iLevel" + 125; 
  
  level = false;
  
  let stringLevel:unknown=level;
  console.log(typeof(stringLevel));
  // stringLevel.replace('false','true');
  console.log(stringLevel);
  
  
  return (
    <>

    </>
  )
}

export default Hello

