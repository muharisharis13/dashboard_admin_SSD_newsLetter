import styled from 'styled-components'

const primary = '#022B52'

export const Navbar2 = styled.nav`
height: 80px;
  display: flex;
  justify-content: start;
  align-items: center;
  width: 100%;
  position:fixed;
  background-color:#fff;
  z-index:2;
  padding:10px 10px;

  @media (max-width: 768px) {
    padding:0px 0px;
    padding-right:20px;
  }
`

export const MenuBars = styled.div`
display:none;
@media (max-width:768px){
display:unset;
}
`

export const NavMenu = styled.nav`
background-color: ${primary};
  width: 300px;
  height: 100%;
  display:inline-block;
  
  justify-content: center;
  position: fixed;
  top: 0;
  transition: 850ms;
  z-index: 2;
  left: 0;
  box-shadow: 11px 0px 21px -9px rgba(0, 0, 0, 0.24);
 
  color:white;

  @media (max-width: 768px) {
    left:${({ active }) => (active ? '0px' : '-100%')};
  }
`

export const ImgProfil = styled.img`
object-fit:cover;
width:150px;
height:150px;
border-radius:100%;
`

export const Strong = styled.strong`
font-size:1.5rem;
`

export const WrapImage = styled.div`
display:flex;
justify-content:center;
align-items:center;
text-align:center;
padding-top:50px;
transition:800ms;

@media (max-width: 768px) {
  padding-top:0px;
}
`

export const WrapperSideMenu = styled.div`
display:inline-block;
margin-top:10%;
text-align:center;
justify-content:center;
align-items:center;
width:100%;
height:350px;
background:#fff;
  overflow-y: scroll;
`

export const IconClose = styled.div`
display:none;
color: #fff;
transition:800ms;
justify-content:flex-end;
text-align:right;
padding:0px;

@media (max-width: 768px) {
  display:unset;
}
`

export const TextOperator = styled.strong`
margin-left:45%;

@media (max-width: 768px){
  margin-left:30%;
}
`