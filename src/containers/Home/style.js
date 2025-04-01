import styled from "styled-components";

import BannerHome from '../../assets/background-home.svg'
import Background from '../../assets/Background.png'

export const Banner = styled.div`
    background: url('${BannerHome}');
    background-size: cover;
    background-position: center;
    height: 480px;

    h1 {
    font-family: 'Road Rage', sans-serif;
    font-size: 80px;
    color: #f4f4f4;
    position: absolute;
    right: 20%;
    top: 10%;

    }
`

export const Container = styled.section`
    background: linear-gradient(
        rgba(255, 255, 255, 0.5),
        rgba(255, 255, 255, 0.5)
    ), 
    url('${Background}');
    height: 500px;
    background-size: cover;
    background-repeat: no-repeat;
`;



export const Content = styled.div``