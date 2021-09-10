import styled from 'styled-components'


export const Container = styled.div`
width:${({ width }) => (`${width}vw`)};

/* height:90vh; */
background:#ffff;
overflow:scroll;
padding:10px 10px;
border-radius:10px;
margin-top:-150px !important;
@media (max-width: 768px){
  width:90vw;
  height:50vh;
  padding:10px 10px;
  align-items:flex-start;
  justify-content:flex-start !important;
  margin-left:-27px !important;
}
`

export const Image = styled.img`

@media (max-width: 768px){
  width:300px;
}
`

export const RowIconTimes = styled.div`
display:flex;
align-items:flex-end;
justify-content:flex-end;
font-size:1.2em;
/* position:fixed; */
`

export const Ul = styled.ul`
list-style-type: "-  ";
`

export const ColImage = styled.div`

`


export const ModalWrapper = styled.div`
width:100%;
height:100vh;
position:fixed;
display:flex;
flex-direction:row;
align-items:center;
justify-content:center;
background-color: rgba(0, 0, 0, 0.5);
top:0;
right:0;
z-index:99999999;
color:black;
overflow:hidden;
@media (max-width: 768px){
  height:110vh;
}
`