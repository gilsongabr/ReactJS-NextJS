import styled from 'styled-components'
import db from '../db.json';
import Local from '../src/components/Local'
import NavBar from '../src/components/NavBar'
import Image from 'next/image'
import HomePage from '../src/components/HomePage'

export default function Home() {
  return (
    <Local>
      <HomePage/>
    </Local>
  )
}
