import CategoryList from './CategoryList';
import Navbar from './Navbar';
import ProductList from './ProductList';
import { Container, Row, Col } from 'reactstrap';
import { Component } from 'react/cjs/react.production.min';
import './App.css'

export default class App extends Component {

  state = { currentCategory: "", products: [] }

  changeCategory = (category) => {
    this.setState({ currentCategory: category.name })
    this.getProducts(category.categoryID)
  }

  componentDidMount() {
    this.getProducts()
  }

  getProducts = (categoryID) => {

    let url = 'http://localhost:3000/products'
    if(categoryID) {
      url += "?categoryID=" + categoryID
    }
    fetch(url)
      .then(response => response.json())
      .then(data => this.setState({ products: data }))
  }

  render() {
    let productInfo = { title: "Product List" }
    let categoryInfo = { title: "Category List" }
    return (
      <div>
        <Container>
          <Navbar />
          <Row>
            <Col xs="3">
              <CategoryList currentCategory={this.state.currentCategory} changeCategory={this.changeCategory} info={categoryInfo} />
            </Col>

            <Col xs="9">
              <ProductList products={this.state.products} currentCategory={this.state.currentCategory} info={productInfo} />
            </Col>
          </Row>
        </Container>

      </div>
    );
  }
}