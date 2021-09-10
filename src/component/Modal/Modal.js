import React from 'react'
import { FaTimes } from 'react-icons/fa'
import { AnimatedView } from '../AnimatedView/AnimatedView'
import { ModalWrapper } from './styles'
import { Container, RowIconTimes } from './styles'

export const Modal = ({ isOpen, show, children, width }) => {

  if (show) {
    return (
      <ModalWrapper >
        <AnimatedView>
          <Container width={width}>
            <div className="row">
              <RowIconTimes className="col-md-12 col-sm-12">
                <FaTimes cursor="pointer" onClick={isOpen} />
              </RowIconTimes>
            </div>
            <div>
              {children}
            </div>
          </Container>
        </AnimatedView>
      </ModalWrapper>

    )

  }
  else {
    return (
      null
    )
  }
}