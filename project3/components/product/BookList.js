import React, { Component } from 'react'
import Book from './Book'

export default class BookList extends Component {
    render() {
        return (
            <div className="product__list">
                {
                    this.props.books.map(
                        (book, index) => (
                            <Book ali={book} key={index}/>
                        )
                    )
                }
            </div>
        )
    }
}
