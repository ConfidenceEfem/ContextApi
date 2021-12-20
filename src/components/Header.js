import React from "react"
import styled from 'styled-components'
import logo from "./logo.png"
const Header = ()=>{
    return(
        <Container>
            <Wrapper>
                <LogoHolder>
                <Logo src={logo}/>
                </LogoHolder>
                <RightItems>
                    <Avatar/>
                    <Register>Register</Register>
                </RightItems>
            </Wrapper>
        </Container>
    )
}
export default Header
const Register = styled.div`
width: 100px;
height: 30px;
display: flex;
justify-content: center;
align-items: center;
background-color: red;
border-radius: 4px;
color: white;
transform: scale(1);
transition: all 350ms;
:hover{
    transform: scale(1.02);
    cursor: pointer;
    background-color: lightgray;
}
`
const Avatar = styled.img`
width: 40px;
height: 40px;
display: flex;
border-radius: 50%;
object-fit: cover;
margin: 0 10px;
`
const RightItems = styled.div`
display: flex;
align-items: center;
`
const Logo = styled.img`
width: 150px;
height: 35px;
object-fit: cover;

`
const LogoHolder = styled.div`
display: flex;
flex: 1;
`
const Wrapper = styled.div`
width: 90%;
display: flex;
align-items: center;
`
const Container = styled.div`
width: 100%;
height: 70px;
display: flex;
justify-content: center;
background-color: black;

`