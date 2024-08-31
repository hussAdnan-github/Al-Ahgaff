 
import React from 'react'
import accout from "../../public/image/accout.jpeg";
import Image from 'next/image';


export default function page() {
 
  return (
    <div>
    <div className='flex flex-col items-center justify-center'>
    <Image className='main-img' src={accout} width={300}
     height={300} alt='sdad'/>
    
    <div>
    <h1 className='text-3xl'>
        adjosjdoasd
        asdoasjdp[asojdaa
        asjdasjdpsad
        ajdpsajdsad
        asdkps]
    </h1>
    </div>
    
    </div>
    
    
        </div>
  )
}
