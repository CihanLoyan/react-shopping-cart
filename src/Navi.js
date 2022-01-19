import React from 'react'
import { Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, NavbarText, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'
import CartSummary from './CartSummary'

export default class Navi extends React.Component {
    constructor(props) {
        super(props)

        this.toggle = this.toggle.bind(this)
        this.state = {
            isOpen: false
        }
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
    render() {
        return (
            <div>
                <Navbar color="info" light expand="md">
                    <NavbarBrand href="/">React Cart App</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar className="position-absolute top-10 end-0">
                        <Nav className="ml-auto" navbar>
                            <CartSummary removeFromCart={this.props.removeFromCart} cart={this.props.cart} />
                            <NavItem>
                                <NavLink href="/components/">Components</NavLink>
                            </NavItem>
                            {/* <NavItem>
                                <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
                            </NavItem> */}
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        )
    }
}