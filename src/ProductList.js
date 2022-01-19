import React, { Component } from 'react'
import { Table, Button } from 'reactstrap'

export default class ProductList extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.info.title} / {this.props.currentCategory}</h1>
                <Table>
                    <thead>
                        <tr>
                            <th>
                                ID
                            </th>
                            <th>
                                Product Name
                            </th>
                            <th>
                                Unit Price
                            </th>
                            <th>
                                Quantity Per Unit
                            </th>
                            <th>
                                Units In Stock
                            </th>
                            <th>

                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.products.map(product => (
                                <tr key={product.productID}>
                                    <th scope="row">
                                        {product.productID}
                                    </th>
                                    <td>
                                        {product.name}
                                    </td>
                                    <td>
                                        {product.unitPrice}
                                    </td>
                                    <td>
                                        {product.quantityPerUnit}
                                    </td>
                                    <td>
                                        {product.unitsInStock}
                                    </td>
                                    <td>
                                        <Button onClick={() => this.props.addToCart(product)} color="info" outline>Add to Cart</Button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </Table>
            </div>
        )
    }
}
