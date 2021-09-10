import styled from 'styled-components'
import BgLogin from '../../image/backgroundLogin.png'


export const BGLogin = styled.div`
background-image: url(${BgLogin});
background-size: 100%, contain;
width:50%;
height:100vh;
background-repeat: no-repeat;
background-position-y : -15vh;
display:flex;
transition:450ms;

@media (max-width: 986px){
  display:none;
}


`

export const Logo2 = styled.div`
display:flex;
justify-content:center;
align-items:center;
text-align:center;
position:relative;
`

export const WrapperInput = styled.div`
position:relative;
display:flex;
padding:0px 100px;
padding-bottom: ${({ paddingbutton, paddinginput }) => (paddingbutton ? '50px' : paddinginput ? '20px' : '0px')};
@media (max-width: 986px){
padding:0px 50px;
padding-bottom: ${({ paddingbutton, paddinginput }) => (paddingbutton ? '50px' : paddinginput ? '20px' : '0px')};
}
`

export const LogoInput = styled.div`
display:flex;
align-items:center;
text-align:center;
justify-content:center;
padding:10px 10px;
background:#3FB6E8;
color:#fff;
border-radius:10px 0px 0px 10px;
`

export const Input = styled.input`
border-left:none;
border-radius:0px 10px 10px 0px;
`

export const H4 = styled.h4`
font-weight:700;
padding:20px 10px;
`