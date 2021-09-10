
import { Navbar } from "./component/navbar/navbar";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Dashboard } from "./page/Admin/dashboard/dashboard";
import styled from 'styled-components'
import background from './image/CEONESIA1.png'
import { PushNotification } from "./page/Admin/pushNotification/PushNotification";
import { EditNotification } from "./page/Admin/editNotification/EditNotification";
import { PageEdit } from './page/Admin/editNotification/component/PageEdit'

import { DashboardOperator } from './page/Operator/dashboard/Dashboard'
import { EditOperator } from "./page/Operator/editOperator/EditOperator";
import { EditOperatorDetails } from "./page/Operator/editOperatorDetails/EditOperatorDetails";
import { TambahOperator } from "./page/Operator/tambahOperator/TambahOperator";
import { Login } from "./page/Login/Login";
import React, { useRef, useContext, useEffect } from 'react'
import { ViewComplain } from "./page/Admin/viewComplain/ViewComplain";
import { DaftarUser } from "./page/Admin/daftarUser/DaftarUser";
import { InputDataUser } from "./page/Admin/daftarUser/InputDataUser";
import { Context } from './config/Context';
import { Loading } from "./component/Loading/Loading";
import { RequestUser } from "./page/Admin/requestUser/RequestUser";
import { Delete } from "./component/Modal/component/Delete";
import { ModalUploadthumnail } from "./component/Modal/component/ModalUploadthumnail";
import { ModalQuestion } from "./component/Modal/component/ModalQuestion";
import { ModalReply } from "./component/Modal/component/ModalReply";
import { cookiesGet } from "./config/Cookies";
import { decrypt } from "./config/Enkripsi/Enkripsi";

const WrapperRoute = styled.div`
background-image: url(${background});
background-size:45%, cover;
background-repeat:no-repeat;
background-attachment: fixed;
background-position:center;
width:100%;
background-position-x : 70%;
background-position-y : 40vh;

padding-left : ${({ main }) => (main ? '300px' : '0xp')};
transition:320ms;

@media (max-width: 768px){
 padding-left:0px;
 background-size:100%, cover;
}
`



function App() {
  const { show, functionModal, midDispatch } = useContext(Context)
  const role = decrypt(cookiesGet({ key: 'role' }))

  return (
    <>

      <WrapperRoute main>
        <div className="header">
          <Navbar />
        </div>
        <Switch>

        </Switch>
        <Switch>
          {
            role === "ADMIN" ?
              <Route exact path="/" component={DashboardOperator} />
              :
              <Route exact path="/" component={Dashboard} />
          }
          <Route path="/ViewComplain" component={ViewComplain} />
          <Route path="/PushNotification" component={PushNotification} />
          <Route path="/EditNotification" component={EditNotification} />
          <Route path="/EditNotifications/Edit" component={PageEdit} />
          <Route path="/DaftarUser" component={DaftarUser} />
          <Route path="/DaftarUsers/Input" component={InputDataUser} />
          <Route path="/RequestUser" component={RequestUser} />



          <Route path="/EditOperator" component={EditOperator} />
          <Route path="/EditOperators/Details" component={EditOperatorDetails} />
          <Route path="/EditOperators/Add" component={TambahOperator} />
        </Switch>
      </WrapperRoute>

      {/* <Delete isOpen={() => midDispatch({ type: 'SHOW_MODAL' })} show={show} /> */}
      <ModalUploadthumnail />
      <ModalQuestion />
      <ModalReply />
    </>
  );
}

export default App;
