import React, { useContext, useEffect } from 'react'
import { Search } from './component/Search'
import { Button } from '../../../component/element/index'
import { TableData } from './component/TableData'
import { AnimatedView } from '../../../component/AnimatedView/AnimatedView'
import { Context } from '../../../config/Context'
import { Loading } from '../../../component/Loading/Loading'

export const EditOperator = () => {
  const { loading, dataAdmin, midDispatch } = useContext(Context)


  const getData = () => {
    midDispatch({ type: 'API_GET_DATA_OPERATOR' })
  }

  useEffect(() => {
    getData()
  }, [])

  if (loading) {
    return <Loading />
  }

  return (
    <AnimatedView>

      <div className="container-fluid">
        <div className="row mt-5">
          <div className="col-md-10 col-sm-10  pb-4">
            <Search />
          </div>
          <div className="col-md-2 col-sm-2">
            <Button primary border boxShadow>
              Cari
            </Button>
          </div>
        </div>

        <div className="row mt-4">
          <div className="col-md-12 col-sm-12">
            <TableData
              data={dataAdmin}
            />
          </div>
        </div>
        <small>
          - update / edit data operator belum ada api <br />
          - merubah status true false belum ada api <br />
          - hapus data operator belum ada api
      </small>
      </div>
    </AnimatedView>
  )
}
