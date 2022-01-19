import React, { Component } from 'react'
import { Table, Button } from 'reactstrap'

export default class CartList extends Component {
    renderCart() {
        return(
            <Table striped>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Product Name</th>
                        <th>Category Id</th>
                        <th>Unit Price</th>
                        <th>Units In Stock</th>
                        <th>Quantity</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        this.props.cart.map(cartItem => (
                            <tr key={cartItem.product.productID}>
                                <td>{cartItem.product.productID}</td>
                                <td>{cartItem.product.name}</td>
                                <td>{cartItem.product.categoryID}</td>
                                <td>{cartItem.product.unitPrice}</td>
                                <td>{cartItem.product.unitsInStock}</td>
                                <td>{cartItem.quantity}</td>
                                <td>
                                    <Button color='danger' onClick={() => this.props.removeFromCart(cartItem.product)}>
                                        Remove
                                    </Button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
        )
    }
    render() {
        return (
            <div>
                {this.renderCart()}
            </div>
        )
    }
}
