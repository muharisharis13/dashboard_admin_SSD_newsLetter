export const MethodPost = ({ token, data }) => {
  return {
    method: 'POST',
    headers: {
      "Authorization": `Bearer ${token}`,
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data)
  }
}
export const MethodPut = ({ token, data }) => {
  return {
    method: 'PUT',
    headers: {
      "Authorization": `Bearer ${token}`,
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data)
  }
}

export const MethodPostImage = ({ token, data }) => {
  return {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      enctype: 'multipart/form-data',
      Accept: 'multipart/form-data',
    },
    body: data
  }
}

export const MethodGet = ({ token }) => {
  return {
    headers: {
      "Authorization": `Bearer ${token}`,
    }
  }
}