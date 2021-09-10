import React, { useEffect, useRef } from 'react'
import lottie from 'lottie-web'

export const Loading = () => {
  const container = useRef(null)
  // console.log('ini loading : ', loading)


  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: require('../../utl/dataAnimation/9629-loading.json'),
      rendererSetting: {
        clearCanvas: true,
        hideOnTransparent: false
      }
    })
  }, [])
  return (
    <div style={{ width: '100vw', height: '80vh' }}>
      <div ref={container} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center', width: '100px', height: '100px', position: 'absolute', top: '50%', left: '55%', background: 'transparent' }}>

      </div>
    </div>
  )
}
