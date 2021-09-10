import React, { useContext, useState } from 'react'
import { Modal } from '../Modal'
import { Context } from '../../../config/Context'
import { Button } from '../../element'

export const ModalReply = () => {
  const { modal_reply, dispatch, passing, midDispatch, loading } = useContext(Context)
  const [input, setInput] = useState({
    title: '',
    message: ''
  })

  const handleOnchange = ({ e, v }) => {
    const value = e.target.value

    switch (v) {
      case 'title':
        setInput({ ...input, title: value }); break;
      case 'message':
        setInput({ ...input, message: value }); break;
      default:
        alert('please input data')

    }
  }

  const handleBtnReply = async () => {
    const data = {
      "title": `${input.title}`,
      "message": `${input.message}`,
      "user_id": `${passing}`
    }
    await midDispatch({ type: 'API_POST_SEND_REPLY', data: data })
  }
  return (
    <Modal width={40} show={modal_reply} isOpen={() => dispatch({ type: 'SHOW_MODAL_REPLY', modal_reply: !modal_reply })}>
      {JSON.stringify(passing)}
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-sm-12">
            <input type="text" placeholder="Tittle..." className="form-control"
              value={input.title} onChange={(e) => handleOnchange({ e: e, v: 'title' })}
            />
          </div>
          <div className="col-md-12 col-sm-12 mt-2">
            <textarea style={{ resize: 'none' }} name="message" placeholder="Message" id="" cols="30" rows="5" className="form-control" value={input.message} onChange={(e) => handleOnchange({ e: e, v: 'message' })}
            ></textarea>
          </div>
        </div>

        <div className="row mt-4 pb-3">
          <div className="col-md-12 col-sm-12">
            <Button className="btn" disabled={loading ? true : false} primary boxShadow onClick={handleBtnReply}>
              {
                loading ? 'Loading. . . '
                  : 'Send Reply'
              }
            </Button>
          </div>
        </div>
      </div>
    </Modal>
  )
}
