import Image from 'next/image';
import Card from '@/components/Card';
import accout from "../../../public/image/accout.jpeg";

export default function page() {
    const students = [
        { id: 1, name: "حسين عدنان بلفقيه", img: accout },
        { id: 1, name: "حسين عدنان بلفقيه", img: accout },
        { id: 1, name: "حسين عدنان بلفقيه", img: accout },
        { id: 1, name: "حسين عدنان بلفقيه", img: accout },
        { id: 1, name: "حسين عدنان بلفقيه", img: accout },
        { id: 1, name: "حسين عدنان بلفقيه", img: accout },
      ];
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

<div className='container '>
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
    {
  students.map((item)=>(
    <Card key={item.id} name={item.name} img={item.img}/>
  ))
}
    </div>

</div>
    </div>
  )
}
