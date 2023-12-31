"use client";

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import NavBar from './components/NavBar';
import Header from './components/Header';
import RestaurantCard from './components/RestaurantCard';




export default function Home() {

const router = useRouter();
const [location, setLocation] = useState('');



  return (
    <main className='bg-gray-100 min-h-screen w-screen'>
    <main className='max-w-screen-2xl m-auto bg-white'>
    <NavBar/>
     <Header/>
     <div className='py-3 px-36 mt-10 flex flex-wrap'>
     <RestaurantCard/>
     </div>
      </main>
     </main>
     
  );
  }
   