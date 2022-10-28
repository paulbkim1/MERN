import React from 'react'

export class PersonCard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            count: this.props.age
        }
    }

    render() {
        return (
            <div>
                <h1>{this.props.lastName}, {this.props.firstName}</h1>
                <p>Age: {this.state.count}</p>
                <p>Hair Color: {this.props.hairColor}</p>
                <button onClick = {() => {
                    this.setState({
                        count: this.state.count + 1
                    })
                }}>Birthday for {this.props.firstName} {this.props.lastName}</button>
            </div>
        );
    }
}