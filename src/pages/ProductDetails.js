import React, {Component} from "react";
import { styled } from "styled-components";
import products from './Products'
import Product from "../components/Product";

export default class ProductDetails extends Component{
    render(){
        const name = this.props.match.params.name;
        const toRender = products.filter((products) =>
        products.name===name)[0]
        return(
            <>
            <button onClick={() => this.props.history.replace("/products")}>Return to ProductsWrapper</button>
            <ProductsWrapper>
                {toRender ? (<Product product={toRender}></Product>) : (<p>Product not found</p>)}
        </ProductsWrapper>
        </>
        )
    }
}
const ProductsWrapper = styled.div`
text-align: center;
display: flex;`;