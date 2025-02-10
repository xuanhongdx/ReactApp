import React from "react";

class MyComponent extends React.Component {

    state = {
        name: "Hong",
        age: 42
    }

    handleOnChangeAge = (event) => {
        this.setState({
            age: event.target.value
        })
    }

    render() {
        let name = "Hong";
        return (
            <>
                <div>
                    {console.log("my name is :", name)}
                    I'm {this.state.name}
                    <input type="text" value={this.state.age} onChange={(event) => { this.handleOnChangeAge(event) }}></input>
                </div>
                <div>
                    <button>Click me</button>
                </div>
            </>
        )
    }
}

export default MyComponent;