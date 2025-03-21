import { Container, InpuntContainer, LeftContainer, RightConatiner, Title, Form } from "./styles";
import Logo from '../../assets/logo.svg'
import { Button } from "../../components/Button";


export function Login(){
    return (
        <Container>
           <LeftContainer>
            <img src={Logo} alt="logo-devburger"/>
           </LeftContainer>
           
           <RightConatiner>
            <Title>
            Olá, seja bem vindo ao <span> Dev Burguer! </span>
            <br/>
            Acesse com seu <span> Login e senha. </span> 
            </Title>
            <Form>
                <InpuntContainer>
                    <label>Email</label>
                    <input type="email"/>
                </InpuntContainer>

                <InpuntContainer>
                    <label>Senha</label>
                    <input type="password"/>
                </InpuntContainer>

                <Button>Entrar</Button>

            </Form>

            <p>Não possui conta? <a>Clique aqui.</a></p>
           
           </RightConatiner>
        </Container>
    );
}