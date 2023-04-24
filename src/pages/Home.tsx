import { Header, Product } from "@components"
import { useProduct } from "@hooks"
import { StoreContext } from "@store";
import { useContext } from 'react';

export const Home = (): JSX.Element => {
    const [result, error, loading] = useProduct();
    console.log(result);
    const { state } = useContext(StoreContext);
    if (!["user", ""].includes(state.role)) throw new Error("")
    return (
        <>
            <Header />
            <section className="mt-32 grid  grid-cols-5 gap-8">
                {
                    result && result.length > 0 &&
                    result.map((items, index) => {
                        return <Product {...items} key={index} />
                    })
                }
            </section>
        </>
    )
}