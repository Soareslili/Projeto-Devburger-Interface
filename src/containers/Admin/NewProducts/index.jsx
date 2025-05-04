import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { Image } from "@phosphor-icons/react"
import { Container, Input, InputGroup, Label, LabelUpload, Select, SubmitButton, Form } from "./styles"




const schema = yup
    .object({
        firstName: yup.string().required(),
        age: yup.number().positive().integer().required(),
    })
    .required()



export function NewProducts() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    })
    const onSubmit = (data) => console.log(data)

    return (
        <Container>
            <Form>
                <InputGroup>
                    <Label>Nome</Label>
                    <Input />
                </InputGroup>

                <InputGroup>
                    <Label>Preço</Label>
                    <Input />
                </InputGroup>

                <InputGroup>
                    <LabelUpload>
                        <Image />
                        <input type="file" />
                    </LabelUpload>
                    <Input />
                </InputGroup>

                <InputGroup>
                    <Label>Categorias</Label>
                    <Select />
                </InputGroup>

                <SubmitButton>Adicionar Produto</SubmitButton>
            </Form>
        </Container>
    )
}