import { useEffect, useState } from "react";
import { Banner, Container, CategoryMenu, ProductsContainer, CategoryButton, ButtonBack } from "../Menu/style";
import { api } from "../../services/api";
import { formatPrice } from "../../utils/formatPrice";
import { CardProduct } from "../../components/CardProduct";
import { useLocation, useNavigate } from "react-router-dom";




export function Menu() {

    const [Categories, setCategories] = useState([]);
    const [Products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);


    const navigate = useNavigate()

    const { search } = useLocation()

    const queryParams = new URLSearchParams(search)



    const [activeCategory, setActiveCategory] = useState(() => {
        const categoryId = +queryParams.get('categoria')

        if (categoryId) {
            return categoryId
        }
        return 0
    })


    useEffect(() => {
        async function loadCategories() {
            const { data } = await api.get('/categories')

            const newCategories = [{ id: 0, name: 'Todas' }, ...data]


            setCategories(newCategories)

        }


        async function loadProducts() {
            const { data } = await api.get('/products')


            const newProducts = data.map(product =>
            ({ currencyValue: formatPrice(product.price), ...product }
            ))

            setProducts(newProducts)
        }
        loadCategories()
        loadProducts()


    }, [])

    useEffect(() => {
        if (activeCategory === 0) {
            setFilteredProducts(Products)
        } else {
            const newFilteredProducts = Products.filter(
                product => product.category_id === activeCategory,
            )

            setFilteredProducts(newFilteredProducts)
        }
    }, [Products, activeCategory])




    return (
        <Container>
            <Banner>
                <h1>O MELHOR
                    <br />
                    HAMBUGER
                    <br />
                    ESTÁ AQUI
                    <span>Esse cardápio está irresistível</span>
                </h1>



            </Banner>

            <CategoryMenu>
                {Categories.map((category) => (
                    <CategoryButton
                        key={category.id}
                        $isActiveCategory={category.id === activeCategory}
                        onClick={() => {
                            navigate(
                                {
                                    pathname: '/cardapio',
                                    search: `?categoria=${category.id}`
                                },

                                {
                                    replace: true,
                                },

                            )
                            setActiveCategory(category.id)
                        }}

                    >
                        {category.name}
                    </CategoryButton>
                ))}
            </CategoryMenu>

            <ProductsContainer>
                {filteredProducts.map(product => (
                    <CardProduct product={product} key={product.id} />
                ))}
            </ProductsContainer>

            <ButtonBack onClick={() => navigate('/')}>
                ← Voltar para Home
            </ButtonBack>

        </Container>
    )
}