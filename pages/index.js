import { Inter } from '@next/font/google'
import Navbar from '../components/Navbar/Navbar'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <Navbar></Navbar>
    </div>
  )
}
