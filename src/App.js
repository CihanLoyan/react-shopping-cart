import CategoryList from './CategoryList';
import Navi from './Navi';
import ProductList from './ProductList';
import { Container, Row, Col } from 'reactstrap';
import { Component } from 'react/cjs/react.production.min';
import './App.css'
import alertify from 'alertifyjs';
import { Switch, Router, Route } from 'react-router-dom'
import NotFound from './NotFound'
import CartList from './CartList'

export default class App extends Component {

  state = { currentCategory: "", products: [], cart: [] }

  changeCategory = (category) => {
    this.setState({ currentCategory: category.name })
    this.getProducts(category.categoryID)
  }

  componentDidMount() {
    this.getProducts()
  }

  getProducts = (categoryID) => {

    let url = 'http://localhost:3000/products'
    if (categoryID) {
      url += "?categoryID=" + categoryID
    }
    fetch(url)
      .then(response => response.json())
      .then(data => this.setState({ products: data }))
  }

  addToCart = (product) => {
    let newCart = this.state.cart
    var addedItem = newCart.find(c => c.product.productID === product.productID)
    if (addedItem) {
      addedItem.quantity += 1
    } else {
      newCart.push({ product: product, quantity: 1 })
    }
    this.setState({ cart: newCart })
    alertify.success(`${product.name} added to cart `, 3)
  }

  removeFromCart = (product) => {
    let newCart = this.state.cart.filter(c => c.product.productID !== product.productID)
    this.setState({ cart: newCart })
    alertify.error(`${product.name} removed from cart`, 3)
  }

  render() {
    let productInfo = { title: "Product List" }
    let categoryInfo = { title: "Category List" }
    return (
      <div>
        <Container>
          <Navi cart={this.state.cart} removeFromCart={this.removeFromCart} />
          <Row>
            <Col xs="3">
              <CategoryList currentCategory={this.state.currentCategory} changeCategory={this.changeCategory} info={categoryInfo} />
            </Col>

            <Col xs="9">
              <Switch>
                <Route exact path="/" render={props => (
                  <ProductList
                    {...props}
                    products={this.state.products}
                    addToCart={this.addToCart}
                    currentCategory={this.state.currentCategory}
                    info={productInfo} />
                )}
                />
                <Route exact path="/cart" render={props => (
                  <CartList
                    {...props}
                    cart={this.state.cart}
                    removeFromCart={this.removeFromCart}
                  />
                )} 
                />
              </Switch>
            </Col>
          </Row>
        </Container>

      </div>
    );
  }
}