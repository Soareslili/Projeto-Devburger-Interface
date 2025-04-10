import styled from "styled-components";
import BannerHamburger from '../../assets/BannerHamburger.svg'
import Background from '../../assets/Background.png'
import { Link } from "react-router-dom";

export const Container = styled.div`
    background: linear-gradient(
        rgba(255, 255, 255, 0.5),
        rgba(255, 255, 255, 0.5)
    ), 
    url('${Background}');
    


`

export const  Banner = styled.div`

    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 480px;


    background: url('${BannerHamburger}') no-repeat;
    background-position: center;
    background-size: cover;
    background-color: #1f1f1f;
    position: relative;

    h1 {
        font-family: "Road Rage", sans-serif;
        font-size: 80px;
        line-height: 65px;
       color: #fff;
        position: absolute;

        right: 20%;
        top: 30%;

        span {
            
            display: block;
            color: #fff;
            font-size: 20px;
          
        }
    }

`

export const CategoryMenu = styled.div`
    display: flex;
    justify-content: center;
    gap: 50px;
    margin-top: 30px;

`

export const CategoryButton = styled(Link)`
    text-decoration: none;
    cursor: pointer;
    background: none;
    color: ${props => props.$isActiveCategory ?' #9758a6': '#696969'};
    font-size: 24px;
    font-weight: 500;
    padding-bottom: 5px;
    line-height: 20px;
    border: none;
    border-bottom: ${ (props) => props.$isActiveCategory && '3px solid #9758a6'};

`

export const ProductsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    padding: 40px;
    justify-content: center;
    max-width: 1280px;
    gap:60px;
    margin: 50px auto 0;

`

export const ButtonBack = styled.button`

    background-color: #9758a6;
    color: #fff;
    border: none;
    padding: 8px 16px;
    margin: 16px;
    border-radius: 8px;
    cursor: pointer;
    font-weight: bold;
    transition: background 0.3s;

    &:hover {
        background-color:rgb(45, 22, 51);
    }
`;

