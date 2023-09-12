import { useEffect } from 'react'
import BigBackground from '../../components/BigBackground/BigBackground'
import ContainerCards from '../../components/ContainerCards/ContainerCards'

function Home() {
  useEffect(() => {
    window.scroll(0, 0)
  }, [])
  return (
    <>
      <BigBackground />
      <ContainerCards />
    </>
  )
}

export default Home
