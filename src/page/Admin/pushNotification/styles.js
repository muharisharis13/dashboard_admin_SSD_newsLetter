import styled from 'styled-components'
import DatePicker from "react-datepicker";

export const WrapperInput = styled.div`
box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.49);

border-radius: 10px 10px 10px 10px;
background:#fff;
`
export const InputTopic = styled.input`
border:none;

border-radius: 10px 10px 0px 0px;
`

export const InputPesan = styled.textarea`
border: none;
background-color:#E9E9E9;
resize:none;

&:focus{
  background-color:#E9E9E9;
}
`

export const InputPerson = styled.input`

`

export const DateTime = styled(DatePicker)`
border : ${({ border }) => (border ? 'none' : 'null')};
background : ${({ primary }) => (primary ? '#022B52' : 'null')};
color : ${({ primary }) => (primary ? '#fff' : '#000')};
display:flex;
text-align:center;
align-items:center;
cursor:pointer;

&:focus{
  background : ${({ primary }) => (primary ? '#022B52' : 'null')};
  color : ${({ primary }) => (primary ? '#fff' : '#000')};

}
`

export const Row2 = styled.div`
display:flex;
justify-content:flex-end;
align-items:center;
`