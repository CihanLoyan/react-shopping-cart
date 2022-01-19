import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Button ,Badge, Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, NavbarText, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'

export default class CartSummary extends Component {
    render() {
        return (
            <div>
                <UncontrolledDropdown inNavbar nav >
                    <DropdownToggle caret nav>
                        Cart  ({this.props.cart.length})
                    </DropdownToggle>
                    <DropdownMenu end>
                        {
                            this.props.cart.map(cartItem => (
                                <DropdownItem key={cartItem.product.productID}>
                                    <Badge color='danger' onClick={() => this.props.removeFromCart(cartItem.product)}>x</Badge>
                                    {cartItem.product.name}
                                    <Badge color='success'>{cartItem.quantity}</Badge>
                                </DropdownItem>
                            ))
                        }
                        <DropdownItem divider />
                        <DropdownItem>
                            <Link to="/cart"><Button color="success">Go to Cart</Button></Link>
                        </DropdownItem>
                    </DropdownMenu>
                </UncontrolledDropdown>
            </div>
        )
    }
}
