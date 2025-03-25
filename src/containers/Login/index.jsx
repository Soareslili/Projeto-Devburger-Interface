import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"


import { Container, InpuntContainer, LeftContainer, RightConatiner, Title, Form } from "./styles";
import Logo from '../../assets/logo.svg'
import { Button } from "../../components/Button";


export function Login() {

    const schema = yup
        .object({
            email: yup.string().email('Digite um e-mail válido').required('O e-mail é obrigatório'),
            password: yup.string().min(6, 'A senha deve ter pelo menos 6 caracteres').required('Digite uma senha'),
        })
        .required()

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    })
    const onSubmit = (data) => console.log(data)

    console.log(errors)


    return (
        <Container>
            <LeftContainer>
                <img src={Logo} alt="logo-devburger" />
            </LeftContainer>

            <RightConatiner>
                <Title>
                    Olá, seja bem vindo ao <span> Dev Burguer! </span>
                    <br />
                    Acesse com seu <span> Login e senha. </span>
                </Title>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <InpuntContainer>
                        <label>Email</label>
                        <input type="email" {...register("email")}/>
                        <p>{errors?.email?.message}</p>
                    </InpuntContainer>

                    <InpuntContainer>
                        <label>Senha</label>
                        <input type="password" {...register("password")}/>
                        <p>{errors?.password?.message}</p>
                    </InpuntContainer>

                    <Button type="submit">Entrar</Button>

                </Form>

                <p>Não possui conta? <a>Clique aqui.</a></p>

            </RightConatiner>
        </Container>
    );
}