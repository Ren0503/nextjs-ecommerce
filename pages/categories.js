import Head from 'next/head'
import { titleIfy, slugify } from '../helpers'
import CartLink from '../components/core/CartLink'
import DisplayMedium from '../components/common/DisplayMedium'
import { fetchInventory } from '../provider/inventoryProvider'

function Categories({ categories = [] }) {
    return (
        <>
            <div className="w-full">
                <CartLink />
                <Head>
                    <title>E Commerce - All Categories</title>
                    <meta name="description" content={`E Commerce - All categories`} />
                    <meta property="og:title" content="E Commerce - All Categories" key="title" />
                </Head>
                <div className="pt-4 sm:pt-10 pb-8">
                    <h1 className="text-5xl font-light">All Categories</h1>
                </div>
                <div className="flex flex-col items-center">
                    <div className="grid gap-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
                        {
                            categories.map((category, index) => (
                                <DisplayMedium 
                                    key={index}
                                    imageSrc={category.image}
                                    subtitle={`${category.itemCount} items`}
                                    title={titleIfy(category.name)}
                                    link={`/category/${slugify(category.name)}`}
                                />
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export async function getStaticProps() {
    const inventory = await fetchInventory()
    const inventoryCategories = inventory.reduce((acc, next) => {
        const categories = next.categories
        categories.forEach(c => {
            const index = acc.findIndex(item => item.name === c)
            if(index !== -1) {
                const item = acc[index]
                item.itemCount = item.itemCount + 1
                acc[index] = item
            } else {
                const item = {
                    name: c,
                    image: next.image,
                    itemCount: 1
                }
                acc.push(item)
            }
        })
        return acc
    }, [])

    return {
        props: {
            categories: inventoryCategories
        }
    }
}

export default Categories