import React, { Component } from 'react'

export default class Book extends Component {

    componentDidMount() {
        document.getElementById("card__img").innerHTML = `<img src="./${this.props.ali.imageLink}" alt="Card" />`
    }

    render() {
        return (

            <div className="book card">

                <div id="card__img" className="card__img">
                    <img className="" src='https://picsum.photos/200/50' alt="Card" />
                </div>

                <div className="card-body">
                    <h5 className="card-title">{this.props.ali.title}</h5>
                    <p>{this.props.ali.imageLink}</p>
                    <p className="card-text">{this.props.ali.author}</p>
                    <a href="#" className="btn btn-primary">{this.props.ali.year}</a>
                </div>
                
            </div>

        )
    }
}

// https://github.com/benoitvallon/100-best-books/blob/master/static/images/a-Dolls-house.jpg

//  "imageLink": "images/things-fall-apart.jpg",