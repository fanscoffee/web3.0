import { useEffect } from 'react'
import Building from '../Building/Building'

function Bakery() {
  useEffect(() => {
    window.scroll(0, 0)
  }, [])

  return <Building />
}

export default Bakery
