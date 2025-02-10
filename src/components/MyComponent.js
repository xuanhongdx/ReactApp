import React from "react";

class MyComponent extends React.Component {

    state = {
        name: "Hong",
        age: 42
    }

    render() {
        let name = "Hong";
        return (
            <div>
                {console.log("my name is :", name)}
                I'm {this.state.name}, Age = {this.state.age}
            </div>
        )
    }
}

export default MyComponent;