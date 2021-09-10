import React, { useContext, useEffect } from 'react'
import { AnimatedView } from '../../../component/AnimatedView/AnimatedView'
import { Search } from '../../Operator/editOperator/component/Search'
import { TableData } from './component/TableData'
import data from '../../../json/dataUser.json'
import { Context } from '../../../config/Context'
import { Loading } from '../../../component/Loading/Loading'

export const RequestUser = () => {
  const { loading, dataAdmin, midDispatch } = useContext(Context)


  useEffect(() => {
    midDispatch({ type: 'API_GET_DATA_REQUEST_TRANSACTION' })
  }, [])

  if (loading) {
    return <Loading />
  }

  return (
    <AnimatedView>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12 col-sm-12">
            <Search />
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-md-12 col-sm-12">
            <TableData
              data={dataAdmin}
            />
          </div>
        </div>
      </div>
    </AnimatedView>
  )
}
