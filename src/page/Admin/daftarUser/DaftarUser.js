import React, { useContext, useEffect } from 'react'
import { AnimatedView } from '../../../component/AnimatedView/AnimatedView'
import { Search } from '../../Operator/editOperator/component/Search'
import { TableData } from './component/TableData'
import Data from '../../../json/dataUser.json'
import { Context } from '../../../config/Context'
import { Loading } from '../../../component/Loading/Loading'

export const DaftarUser = () => {
  const { loading, dataAdmin, midDispatch, dispatch } = useContext(Context)

  useEffect(() => {
    midDispatch({ type: 'API_GET_DATA_REQUEST_TRANSACTION' })
  }, [])


  if (loading) {
    return <Loading />
  }

  return (
    <AnimatedView>
      <div className="container-fluid">
        <div className="row mt-4">
          <div className="col-md-12 col-sm-12">
            <Search />
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-md-12 col-sm-12">
            <TableData
              data={dataAdmin}
            />
          </div>
        </div>
        <small>
          - api delete user belum ada <br />
          - api untuk update user belum ada
        </small>
      </div>
    </AnimatedView>
  )
}
