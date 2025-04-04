import styled from "styled-components";
import BannerHamburger from '../../assets/BannerHamburger.svg'

export const Container = styled.div``

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

export const CategoryMenu = styled.div``

export const ProductsContainer = styled.div``
