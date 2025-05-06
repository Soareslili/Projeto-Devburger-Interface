import { Controller, useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { Image } from "@phosphor-icons/react"
import { Container, Input, InputGroup, Label, LabelUpload, Select, SubmitButton, Form, ErrorMessage } from "./styles"
import { useEffect, useState } from "react"
import {api} from '../../../services/api'
import { data } from "react-router-dom"
import { toast } from "react-toastify"




const schema = yup
    .object({
        name: yup.string().required('Digite o nome do produto'),
        price: yup.number().positive().required('Digite o preço do produto'). typeError('Digite o preço do produto'),
        category: yup.object().required('Escolha uma categoria'),
        file: yup.mixed().test('required', 'Escolha um arquivo para continuar', value =>{
            return value && value.length > 0;
        })
        .test('fileSize', 'Carregue arquivos até 3mb', value => {
            return value && value.length > 0 && value[0].size <= 30000
        }).
        test('type', 'Carregue apenas imagens PNG ou JPEG', value => {
            return value && value.length > 0 && (value[0].type === 'image/jpeg' || value[0].type === 'imagem/png');
    }),
    
});


export function NewProducts() {
    const [fileName, setFileName] = useState(null);
    const [categories, setCategories] = useState([]);
   
   useEffect(() => {
        async function loadCategories(){
            const {data} = await api. get('/categories')
}

    setCategories(data);

   }, [])
   
   
   
   
    const {
        register,
        control,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    })
    const onSubmit = async (data) => {
       const productFormData = new FormData();

       productFormData.append('name', data.name)
       productFormData.append('price', data.price * 100)
       productFormData.append('category_id', data.category_id)
       productFormData.append('file', data.file[0])

       await toast.promise( api.post('/products'), productFormData), {
        pending:'Adicionando  o prod...',
        success: 'Produto criando com sucesso',
        error: 'Falha ao adicionar o produto, tente novamente',
       }

    }


    return (
        <Container>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <InputGroup>
                    <Label>Nome</Label>
                    <Input type="text" {...register("firstName")}/>
                    <ErrorMessage>{errors?.name?.message}</ErrorMessage>
                </InputGroup>

                <InputGroup>
                    <Label>Preço</Label>
                    <Input type="number" {...register("price")}/>
                    <ErrorMessage>{errors?.price?.message}</ErrorMessage>
                </InputGroup>

                <InputGroup>
                    <LabelUpload>
                        <Image />
                        <input type="file" 
                        {...register("price")}
                        accept="image/png, image/jpeg"
                        onChange={(value) => {
                            setFileName(value.target.files[0]?.name)
                            register('file').onChange(value);
                        }}
                        />

                        {fileName || 'Upload do Produto'}
                    </LabelUpload>
                    <Input />

                    <ErrorMessage>{errors?.file?.message}</ErrorMessage>

                </InputGroup>

                <InputGroup>
                    <Label>Categorias</Label>

                    <Controller
                        name="category"
                        control={control}
                        render={({field}) => (

                    <Select 
                        {...field}
                        options={categories}
                        getOptionLabel={(category) => category.name}
                        getOptionValue={(category) => category.id}
                        placeholder='Categorias'
                        menuPortalTarget={document.body}
                    
                        
                    />
                    
                )}
                />
                <ErrorMessage>{errors?.category?.message}</ErrorMessage>
                </InputGroup>

                <SubmitButton>Adicionar Produto</SubmitButton>
            </Form>
        </Container>
    )
}