import React, { useContext } from 'react'
import { Button } from '../../element'
import { Modal } from '../Modal'
import { Context } from '../../../config/Context'

export const ModalQuestion = () => {
  const { midDispatch, show, dispatch, passing } = useContext(Context)


  return (
    <Modal width={25} show={show} isOpen={() => midDispatch({ type: 'CLOSE_MODAL' })}>
      <div className="row">
        <div className="col-sm-12">
          <strong>Apakah anda yakin ?</strong>
        </div>
        <div className="col-sm-6 mt-4">
          <Button danger onClick={() => midDispatch({ type: 'CLOSE_MODAL' })}>Tidak</Button>
        </div>
        <div className="col-sm-6 mt-4">
          <Button primary boxShadow
            onClick={() => { dispatch({ type: 'PASSING', passing: 'ya' }); midDispatch({ type: 'CLOSE_MODAL' }) }}
          >Ya</Button>
        </div>
      </div>
    </Modal>
  )
}
