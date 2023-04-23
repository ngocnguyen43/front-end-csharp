import { Header, Product } from "@components"
import { useProduct } from "@hooks"

export const Home = (): JSX.Element => {
    const [result, error, loading] = useProduct();
    console.log(result);

    return (
        <>
            <Header />
            <section className="mt-32 grid  grid-cols-3 gap-8">
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