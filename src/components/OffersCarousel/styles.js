import styled from "styled-components";

export const Container = styled.div`
    .carousel-item {
        padding-right: 40px;
    }

    overflow-x: hidden;

    .react-multi-carousel-list {
        overflow: visible;
    }

    .react-multiple-carousel__arrow--left {
        left: 15px;
        top: 10px;
    }

    .react-multiple-carousel__arrow--right {
   
        top: 10px;
    }

    


    
  

    padding-left: 40px;
    padding-bottom: 40px;
`

export const Title = styled.h2`
    font-size: 32px;
    color: ${props => props.theme.gren};
    padding-bottom: 12px;
    position: relative;
   text-align: center;
   font-weight: 800;
   margin-top: 70px;
   margin-bottom: 80px;
   
   &::after {
    content: '';
    position: absolute;
    bottom: 0;
    width: 56px;
    height: 4px;
    background-color: ${props => props.theme.gren};
    left: calc(50% - 22px);

   }

`

