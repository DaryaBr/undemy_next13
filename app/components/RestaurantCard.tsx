import Link from "next/link"



export default function RestaurantCard() {
    return (
        <div className='w-64 h-72 m-3 rounded overflow-hidden border cursor-pointer'>
     <Link href="/restaurant/milestonesgrill">
       <img src="https://media-cdn.tripadvisor.com/media/photo-s/1a/8e/55/e6/variety-of-choices.jpg" alt="" className='w-full h-36'/>
       <div className='p-1'>
         <h3 className='font-bold tetx-2xl mb-2'>Milestones Grill</h3>
         <div className='flex items-start'>
           <div className='flex mb-2'>*****</div>
           <p className='ml-2'>77 reviwes</p>
         </div>
         <div className='flex text-reg font-light capitalize'>
         <p className=' mr-3 '>Mexican</p>
         <p className='mr-3'>$$</p>
         <p>Toronto</p>
       </div>
       <p className='text-sm mt-1 font-bold'>Booked 3 times today</p>
       </div>
       </Link>
     </div>
    )
}