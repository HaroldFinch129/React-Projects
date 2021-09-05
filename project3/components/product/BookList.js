import React, { Component } from 'react'

export default class BookList extends Component {
    render() {
        return (
            <div>
                {console.log(this.props.books)}
            </div>
        )
    }
}
