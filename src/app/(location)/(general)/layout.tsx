
import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import { ReactElement } from 'react';

export default function GeneralLayout({  children }: 
    {  children: ReactElement }) {
  return (
    <div className=' h-screen flex flex-col justify-between'>
        <div className='container mx-auto px-24'>
          <Header/>
          {children}
        </div>
        <div>
          <Footer/>
        </div>
    </div>
  )
}