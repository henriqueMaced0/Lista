import styled from "styled-components"

import { FcEmptyTrash, FcCheckmark } from 'react-icons/fc'

import logo from './assets/papel2.png'

export const Container = styled.div`
background-image: url('${logo}');
background-repeat: no-repeat;
background-size: cover;
background-position: center;
width: 100vw;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;

`
export const TodoList = styled.div`
background:#fff;
padding: 30px 20px;
border-radius: 5px;
@media (max-width: 570px) {
    width:70%;
  }

ul{
    padding: 0;
    margin-top: 60px;
}

`
export const Input = styled.input`
border: 2px solid rgba(209,211,212, 0.4);
border-radius: 5px;
height: 40px;
margin-right:10px ;
width:340px ;
margin-right: 40px;

@media (max-width: 570px) {
    width:250px;
    display: block;
  margin: 0 auto;
  margin-bottom: 20px;
  }
`
export const Button = styled.button`
background:#8052ec;
border-radius: 5px;
font-weight: 900;
font-size: 17px;
line-height: 2px;
height: 40px;
border: none;
color: #ffffff;
width: 130px;
cursor: pointer;

@media (max-width: 570px) {
    margin-top:30px;
    display: block;
    margin: 0 auto;
  }

&:hover{
    opacity: 0.8;
}

&:active{
    opacity: 0.6;
}
`
export const ListItem = styled.div`
background: ${props => props.isFinished ? '#e8ff8b' : '#e4e4e4'};
box-shadow: 1px 4px 10px rgba(0,0,0,0.2);
border-radius: 5px;
height: 60px;
display: flex;
align-items: center;
justify-content: space-between;
margin-bottom: 30px;
padding: 0 10px;
width: 500px;

li{
    list-style: none;

}

`


export const SemList =styled.h3`
display: flex;
align-items: center;
justify-content: center;
color: #ff0000;

`
export const Trash = styled(FcEmptyTrash)`
cursor: pointer;
`


export const Check = styled(FcCheckmark)`
cursor: pointer;
`



