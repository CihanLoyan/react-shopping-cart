import React, { Component } from 'react'
import { ListGroup, ListGroupItem } from 'reactstrap';

export default class CategoryList extends Component {
    state = {
        categories: []
    }

    componentDidMount() {
        this.getCategories()
    }

    getCategories = () => {
        fetch('http://localhost:3000/categories')
            .then(response => response.json())
            .then(data => this.setState({categories: data}))
    }

    render() {
        return (
            <div>
                <h1>{this.props.info.title}</h1>
                <ListGroup>
                    {
                        this.state.categories.map(category => (
                            <ListGroupItem active={category.name===this.props.currentCategory?true:false} onClick={() => this.props.changeCategory(category)} key={category.categoryID}>{category.name}</ListGroupItem>
                        ))
                    }
                </ListGroup>
            </div>
        )
    }
}
