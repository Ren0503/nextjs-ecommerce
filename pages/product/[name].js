import Head from 'next/head'
import { useState } from 'react'
import { slugify } from '../../helpers'
import Image from '../../components/core/Image'
import Button from '../../components/core/Button'
import CartLink from '../../components/core/CartLink'
import QuantityPicker from '../../components/core/QuantityPicker'
import { fetchInventory } from '../../provider/inventoryProvider'
import { SiteContext, ContextProviderComponent } from '../../context/mainContext'

const ItemView = (props) => {
    const [numberOfItems, updateNumberOfItems] = useState(1)
    const { product } = props
    const { price, image, name, description } = product
    const { context: { addToCart }} = props

    function addItemToCart(product) {
        product["quantity"] = numberOfItems
        addToCart(product)
    }

    function increment() {
        updateNumberOfItems(numberOfItems + 1)
    }

    function decrement() {
        if(numberOfItems === 1)
            return
        updateNumberOfItems(numberOfItems - 1)
    }

    return(
        <>
            <CartLink />
            <Head>
                <title>E Commerce - {name}</title>
                <meta name="description" content={description} />
                <meta property="og:title" content={`E Commerce - ${name}`} key="title" />
            </Head>
            <div className="sm:py-12 md:flex-row py-4 w-full flex flex-1 flex-col my-0 mx-auto">
                <div className="w-full md:w-1/2 h-120 flex flex-1 hover:bg-light-200">
                    <div className="py-16 p10 flex flex-1 justify-center items-center">
                        <Image src={image} alt="Inventory item" className="max-h-full" />
                    </div>
                </div>
                <div className="pt-2 px-0 md:px-10 pb-8 w-full md:w-1/2">
                    <h1 className="sm:mt-0 mt-2 text-5xl font-light leading-large">
                        {name}
                    </h1>
                    <h2 className="text-2xl font-light leading-large">
                        ${price}
                    </h2>
                    <p className="text-gray-600 leading-7">
                        {description}
                    </p>
                    <div className="my-6">
                        <QuantityPicker 
                            increment={increment}
                            decrement={decrement}
                            numberOfItems={numberOfItems}
                        />
                    </div>
                    <Button 
                        full
                        title="Add to cart"
                        onClick={() => addItemToCart(product)}
                    />
                </div>
            </div>
        </>
    )
}

export async function getStaticPaths() {
    const inventory = await fetchInventory()
    const paths = inventory.map(item => {
        return { params: { name: slugify(item.name)}}
    })
    return {
        paths,
        fallback: false
    }
    
}

export async function getStaticProps({ params }) {
    const name = params.name.replace(/-/g, " ")
    const inventory = await fetchInventory()
    const product = inventory.find(item => item.name.toLowerCase() === name)

    return {
        props: {
            product,
        }
    }
    
}

function ItemViewWithContext(props) {
    return (
        <ContextProviderComponent>
            <SiteContext.Consumer>
                {
                    context => <ItemView {...props} context={context} />
                }
            </SiteContext.Consumer>
        </ContextProviderComponent>
    )   
}

export default ItemViewWithContext