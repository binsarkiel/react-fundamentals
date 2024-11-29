import { useEffect, useState } from "react";
import Heading from "./Heading";
import { Button } from "@nextui-org/react";

const Header = (props) => {
    const [message, setMessage] = useState("Hello, World")

    // useEffect(() => {
    //     // ComponentDidMount
    //     alertUser();
    //     // ComponentWillUnmount
    //     return () => {
    //         alert("WILL UNMOUNT");
    //     }
    // }, [] /* Array Harus Kosong */)

    const changeMessage = () => {
        setMessage("State Changed")
    }

    // useEffect(() => {
    //     alert("DID UPDATE")
    // }, [message])

    const alertUser = () => {
        alert("DID MOUNT")
    }

    return (
        <header style={{
            backgroundColor: 'darkgray',
            padding: '8px',
            textAlign: 'center',
            fontFamily: 'sans-serif'
        }}>
            <Heading title={props.title} />
        </header>
    )
}

export default Header;
