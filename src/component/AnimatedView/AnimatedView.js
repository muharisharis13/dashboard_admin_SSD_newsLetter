import React, { useRef, useEffect } from 'react'
import styled from 'styled-components'
import { TweenMax, Power3 } from 'gsap'

const Container = styled.div`
opacity:0;
margin-top:75px;
`


export const AnimatedView = ({ children }) => {
  let container = useRef(null)

  useEffect(() => {
    TweenMax.to(
      container,
      1.2,
      {
        opacity: 1,
        y: -50,
        ease: Power3.easeOut
      }
    )
  }, [])

  return (
    <Container ref={ref => container = ref}>
      {children}
    </Container>
  )
}