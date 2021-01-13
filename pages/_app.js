import '../styles/globals.css'
import Layout from '../layout/mainLayout'
import fetchCategories from '../provider/categoryProvider'

function Ecommerce({ Component, pageProps, categories}) {
    return (
        <Layout categories={categories}>
            <Component {...pageProps} />
        </Layout>
    )
}

Ecommerce.getInitialProps = async () => {
    const categories = await fetchCategories()
    return {
        categories
    }
}

export default Ecommerce
