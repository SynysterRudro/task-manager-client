import { Inter } from '@next/font/google'
import Head from 'next/head'
import Banner from '../components/Banner/Banner'
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Navbar/Navbar'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <Head>
        <title>Task Manager</title>
      </Head>
      <Navbar></Navbar>
      <Banner></Banner>
      <Footer></Footer>
    </div>
  )
}
