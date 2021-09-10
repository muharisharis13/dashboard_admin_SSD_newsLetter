import { MakeGet, MakePost, MakePostImage, MakePut } from "../FunctionAPI";

export const MiddleWare = dispatch => action => {

  switch (action.type) {

    case "SHOW_MODAL":
      dispatch({
        type: 'SHOW',
        show: true
      })
      break;
    case "CLOSE_MODAL":
      dispatch({
        type: 'SHOW',
        show: false
      })
      break;
    case "OPEN_M_UPD":
      dispatch({
        type: 'UPLOAD_IMAGE',
        modal_upload: true
      })
      break;
    case "CLOSE_M_UPD":
      dispatch({
        type: 'UPLOAD_IMAGE',
        modal_upload: false
      })
      break;

    case "GET_DATA_BERITA":
      dispatch({ type: 'LOADING', loading: true })

      MakeGet({ url: '/posts/admin/all' })
        .then(res => {
          console.log(res)
          if (res.message === 'SUCCESS') {
            dispatch({ type: 'GET_DATA_BERITA', dataAdmin: res.data })
          }
          dispatch({ type: 'LOADING', loading: false })
        })
      break;

    case "API_GET_DATA_OPERATOR":
      dispatch({ type: 'LOADING', loading: true })

      MakeGet({ url: '/operators/all' })
        .then(res => {
          console.log(res)
          if (res.message === 'SUCCESS') {
            dispatch({ type: 'GET_DATA_BERITA', dataAdmin: res.data })
          }
          dispatch({ type: 'LOADING', loading: false })
        })
      break;

    case "API_GET_DATA_OPERATOR_DETAIL":
      dispatch({ type: 'LOADING', loading: true })

      MakeGet({ url: `/operators/single?id=${action.id}` })
        .then(res => {
          // console.log(res)
          if (res.message === 'SUCCESS') {
            dispatch({ type: 'GET_DATA_BERITA', dataAdmin: res.data })
          }
          dispatch({ type: 'LOADING', loading: false })
        })
      break;

    case "GET_DATA_BERITA_DETAIL":
      dispatch({ type: 'LOADING', loading: true })
      MakeGet({ url: `/posts/admin/detail?id=${action.id}` })
        .then(res => {
          // console.log(res)
          if (res.message === 'SUCCESS') {
            dispatch({ type: 'GET_DATA_BERITA', dataAdmin: res.data })
          }
          dispatch({ type: 'LOADING', loading: false })
        })

      break;

    case "API_POST_BERITA":
      dispatch({ type: 'LOADING', loading: true })
      MakePost({ url: `/posts/create`, data: action.data })
        .then(res => {
          console.log(res)
          dispatch({ type: 'LOADING', loading: false })
          if (res) {
            alert(`Post Berhasil Di Buat : ${res.title}`)
            window.location.href = '/EditNotification'

          }
        })
      break;

    case "API_UPLOAD_IMAGE_BERITA":
      dispatch({ type: 'LOADING', loading: true })
      MakePostImage({ url: `/posts/create/addPhoto`, data: action.data })
        .then(res => {
          console.log(res)
          // alert(`Post Berhasil Di Buat : ${res.title}`)
          dispatch({ type: 'LOADING', loading: false })
          // window.location.href = '/EditNotification'
        })
      break;

    case "API_POST_ADD_OPERATOR":
      dispatch({ type: 'LOADING', loading: true })
      MakePostImage({ url: `/operators/add`, data: action.data })
        .then(res => {
          console.log(res)
          dispatch({ type: 'LOADING', loading: false })
          if (res.email) {
            alert(`Operator Berhasil Di Tambahkan : `, res.email)
            window.location.reload(false)

          }
        })
      break;

    case "API_GET_USER_PERMIUM":
      dispatch({ type: 'LOADING', loading: true })

      MakeGet({ url: `/premiums/all` })
        .then(res => {
          console.log(res)
          if (res.message === 'SUCCESS') {
            dispatch({ type: 'GET_DATA_BERITA', dataAdmin: res.data })
          }
          dispatch({ type: 'LOADING', loading: false })
        })
      break;

    case "API_GET_DATA_REQUEST_TRANSACTION":
      dispatch({ type: 'LOADING', loading: true })

      MakeGet({ url: `/transactions/all` })
        .then(res => {
          console.log(res)
          if (res.message === 'SUCCESS') {
            dispatch({ type: 'GET_DATA_BERITA', dataAdmin: res.data })
          }
          dispatch({ type: 'LOADING', loading: false })
        })
      break;

    case "API_PUT_PAID_TRANSACTION":
      dispatch({ type: 'LOADING', loading: true })

      MakePut({ url: `/transactions/admin/paid?id=${action.id}` })
        .then(res => {
          console.log(res)
          // if (res.message === 'SUCCESS') {
          //   dispatch({ type: 'GET_DATA_BERITA', dataAdmin: res.data })
          // }

          dispatch({ type: 'LOADING', loading: false })
        })
      break;

    case "API_GET_DETAIL_DAFTAR_USER":
      dispatch({ type: 'LOADING', loading: true })

      MakeGet({ url: `/transactions/admin/get?id=${action.id}` })
        .then(res => {
          console.log(res)
          if (res.message === 'SUCCESS') {
            dispatch({ type: 'GET_DATA_BERITA', dataAdmin: res.data })
          }

          dispatch({ type: 'LOADING', loading: false })
        })
      break;

    case "API_PUT_CANCEL_TRANSACTION":
      dispatch({ type: 'LOADING', loading: true })

      MakePut({ url: `/transactions/admin/cancel?id=${action.id}` })
        .then(res => {
          console.log(res)
          alert(res.message)
          // if (res.message === 'SUCCESS') {
          //   dispatch({ type: 'GET_DATA_BERITA', dataAdmin: res.data })
          // }

          dispatch({ type: 'LOADING', loading: false })
        })
      break;

    case "API_POST_RELEASE_ENABLED":
      dispatch({ type: 'LOADING', loading: true })

      MakePost({ url: `/posts/manage/release`, data: action.data })
        .then(res => {
          console.log(res)
          MakeGet({ url: '/posts/admin/all' })
            .then(res => {
              // console.log(res)
              if (res.message === 'SUCCESS') {
                dispatch({ type: 'GET_DATA_BERITA', dataAdmin: res.data })
              }
              dispatch({ type: 'LOADING', loading: false })
            })
        })
      break;

    case "API_POST_RELEASE_DISABLED":
      dispatch({ type: 'LOADING', loading: true })

      MakePost({ url: `/posts/manage/hide`, data: action.data })
        .then(res => {
          console.log(res)
          MakeGet({ url: '/posts/admin/all' })
            .then(res => {
              // console.log(res)
              if (res.message === 'SUCCESS') {
                dispatch({ type: 'GET_DATA_BERITA', dataAdmin: res.data })
              }
              dispatch({ type: 'LOADING', loading: false })
            })
        })
      break;

    case "API_POST_SEND_REPLY":
      dispatch({ type: 'LOADING', loading: true })

      MakePost({ url: `/messages/create/all`, data: action.data })
        .then(res => {
          console.log(res)
          if (res.data._id) {
            dispatch({ type: 'LOADING', loading: false })
            alert('Success send Reply')

            dispatch({ type: 'SHOW_MODAL_REPLY', modal_reply: false })
          }
          else {
            alert('Please Check Code')
          }

        })
      break;

    default:
      console.log("DEFAULT")
  }
}