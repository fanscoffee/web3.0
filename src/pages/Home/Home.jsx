import { useEffect } from 'react'
import BigBackground from '../../components/BigBackground/BigBackground'
import ContainerCards from '../../components/ContainerCards/ContainerCards'
import Carousel from '../../components/Carousel/Carousel'

function Home() {
  useEffect(() => {
    window.scroll(0, 0)
  }, [])
  return (
    <>
      <BigBackground />
      <ContainerCards />
      {/* <Carousel /> */}
    </>
  )
}

export default Home
