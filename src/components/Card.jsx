 
import Image from "next/image";

export default function Card({name , img}) {
  return (
    <div className = 'container__me'>
    <div className = 'card bg-primary__color'>
      <div className = 'image'>
        <Image className="w-full h-full" src={img} alt="" width={100} height={100}/>
      </div>
      <div className = 'content'>
        <h3 className="text-white text-xl ">الخريج</h3>
        <h3 className="text-white text-2xl ">{name}</h3>
      </div>
    </div>    
  </div>
  )
}
