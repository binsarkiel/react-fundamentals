import { Button } from "@nextui-org/react";
import { SignUpContext } from "../context/SignUpContext";
import React, { useContext } from "react";

// const Heading = (props) => {
//     const signUpContext = useContext(SignUpContext)
//     return <h1>{signUpContext.title}</h1>
// }

class Heading extends React.Component {
    static contextType = SignUpContext;

    render() {
        return (
            <>
                <h1>{this.context.title}</h1>
                <Button
                    color="primary"
                    onClick={() => { this.context.setTitle("Context Changed") }}
                >Change Title</Button>
            </>
        )
    }
}

export default Heading;
