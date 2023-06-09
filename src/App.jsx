import { lazy, Suspense } from 'react';
import React from 'react'
import './index.css'
import { Link, Route, Routes } from 'react-router-dom'
import Test from './Components/Test'
// import Buy from './Components/Buy'
const Buy = lazy(() => import('./Components/Buy'));

const App = () => {
  const properties = [
    {
        id: '1',
        title: '10765 Hillshire Ave, Baton Rouge, LA 70810, USA',
        //image: 'https://hously-react.vercel.app/static/media/1.bfd273967d5b93df7a02.jpg',
        image: '/images/1.bfd273967d5b93df7a02.jpg',
        blurhash: 'MaJ8L~$%%1xYt7yGs*WDR+WVNhW=NGbHRj'
    },
    {
        id: '2',
        title: '59345 STONEWALL DR, Plaquemine, LA 70764, USA',
        //image: 'https://hously-react.vercel.app/static/media/2.e5bc3d17749573c2fd3e.jpg',
        image: '/images/2.e5bc3d17749573c2fd3e.jpg',
        blurhash: 'MRHxKWMx-oEM%1~CocrqXSjZ%hxFRjW?Rj'
    },
    {
        id: '3',
        title: '3723 SANDBAR DR, Addis, LA 70710, USA',
        //image: 'https://hously-react.vercel.app/static/media/3.c799274c67ecb7c94a70.jpg',
        image: '/images/3.c799274c67ecb7c94a70.jpg',
        blurhash: 'MoHMG.M{W=RkRj.TW?t6axazlCWBn#fkjZ'
    },
    {
        id: '4',
        title: 'Lot 21 ROYAL OAK DR, Prairieville, LA 70769, USA',
        //image: 'https://hously-react.vercel.app/static/media/4.1cefc41c08f3161f9c19.jpg',
        image: '/images/4.1cefc41c08f3161f9c19.jpg',
        blurhash: 'MFHMin005AIrKQ1-t7%gXms8O[WXZgxXwb'
    },
    {
        id: '5',
        title: '710 BOYD DR, Unit #1102, Baton Rouge, LA 70808, USA',
        //image: 'https://hously-react.vercel.app/static/media/5.289f490cebbaef2f5f58.jpg',
        image: '/images/5.289f490cebbaef2f5f58.jpg',
        blurhash: 'MOG9Z^MvIS.8s+%QRNab%NobyVM{s,t8f+'
    },
    {
        id: '6',
        title: '5133 MCLAIN WAY, Baton Rouge, LA 70809, USA',
        //image: 'https://hously-react.vercel.app/static/media/6.e926f8483d02a9e86342.jpg',
        image: '/images/6.e926f8483d02a9e86342.jpg',
        blurhash: 'M_JbX6xvt7ozbb~qxabbRjkCt7aKWCM{od'
    },
]
  return (
    <>
    <Suspense fallback={<div>Loading...</div>}>
    <Routes>
      <Route path={'/test'} element={<Test properties={properties}/>}/>
      <Route path={'/buy'} element={<Buy properties={properties}/>}/>
    </Routes>
    </Suspense>
    <div className="flex-center-center h-screen">
      <Link to={'/buy'}>
      <button className='bg-green-600 px-6 py-2 text-white text-3xl font-semibold rounded-md'>
        Buy
      </button>
      </Link>
      
    </div>
    </>

  )
}

export default App