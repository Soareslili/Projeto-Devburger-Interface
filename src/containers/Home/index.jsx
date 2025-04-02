
import { CategoriesCarousel } from "../../components/CategoriesCarousel";
import { Banner, Container } from "./style";
import {OffersCarousel} from '../../components/OffersCarousel'


export function Home() {

    return (
        <main>
            <Banner>
                <h1>Bem-vindo(a)!</h1>
            </Banner>
        <Container>
            <div>
                <CategoriesCarousel/>
               <OffersCarousel />
            </div>
        </Container>
        </main>
    )
}