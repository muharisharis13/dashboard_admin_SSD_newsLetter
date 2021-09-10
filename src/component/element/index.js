import styled from 'styled-components'


export const Card = styled.div`
box-shadow: 5px 5px 7px 0px rgba(0,0,0,0.23);
background-color:#fff;  
border-radius:8px;
`

export const Label = styled.label`
color: ${({ primary }) => (primary ? 'grey' : 'black')};
`

export const Button = styled.div`
background-color:${({ primary, danger, blue }) => (primary ? '#022B52' : danger ? '#FF0000' : blue ? '#3FB6E8' : 'transparent')};
color: ${({ primary, danger, blue }) => (primary || danger ? '#fff' : blue ? '#fff' : '#000')};
font-weight:650;
padding:${({ big }) => (big ? '10px 5px' : '5px 2.5px')};
font-size:${({ big }) => (big ? '20px' : '15px')};
cursor:pointer;
transition:500ms;
display:flex;
text-align:center;
align-items:center;
justify-content:center;
width: ${({ small, large, big }) => (small ? '25%' : large ? '50%' : big ? '100%' : '100%')};

text-decoration: ${({ underline }) => (underline ? 'underline' : 'none')};
border : ${({ borderList }) => (borderList ? '1px solid black' : 'none')};

border-radius :${({ border }) => (border ? '10px 10px 10px 10px' : '0px 0px 0px 0px')};

&:hover {
  box-shadow: ${({ boxShadow, danger, boxShadowMasuk }) => (boxShadow ? '0px 0px 22px 3px rgba(2,43,82,0.7)' : danger ? '0px 0px 22px 3px rgba(255,0,0,0.7)' : boxShadowMasuk ? '0px 0px 22px 3px rgba(63,182,232,1)' : 'none')};
  color:#fff;
}
`

export const Labelimage = styled.label`
background-color:${({ primary }) => (primary ? '#022B52' : 'transparent')};
background:${({ primary }) => (primary ? '#022B52' : 'transparent')};
color: ${({ primary }) => (primary ? '#fff' : '#000')};
font-weight:650;
padding:${({ big }) => (big ? '10px 5px' : '5px 2.5px')};
font-size:${({ big }) => (big ? '20px' : '15px')};
cursor:pointer;
transition:500ms;
display:flex;
text-align:center;
align-items:center;
justify-content:center;
margin-top:10px;
width: ${({ small, large, big }) => (small ? '25%' : large ? '50%' : big ? '100%' : '100%')};

border-radius :${({ border }) => (border ? '10px 10px 10px 10px' : '0px 0px 0px 0px')};

&:hover {
  box-shadow: ${({ boxShadow }) => (boxShadow ? '0px 0px 22px 3px rgba(2,43,82,0.7);' : 'none')};
}
`

export const InputImage = styled.input`
display : none;
`

export const InputTextArea = styled.textarea`
resize:none;
`