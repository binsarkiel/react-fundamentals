import { useRef, useState, useEffect } from "react";
import { Image, Input, Button } from "@nextui-org/react";
import { axiosInstance } from "../lib/axios";
import { toast } from "sonner";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Wishlist() {
    const counterSelector = useSelector((store) => store.counter)
    const messageSelector = useSelector((store) => store.message)

    const inputRef = useRef()

    const [wishlistInput, setWishlistInput] = useState("");
    const [wishlistItems, setWishlistItem] = useState([])

    const fetchWistlistItems = async () => {
        try {
            const response = await axiosInstance.get("/wishlist-items")
            // console.log(response.data)
            setWishlistItem(response.data)
        } catch (error) {
            toast.error("ERROR: Failed to load data from the server.")
        }
    }

    const addWishlist = async () => {
        try {
            await axiosInstance.post("/wishlist-items", {
                name: wishlistInput
            }),
                fetchWistlistItems();
            setWishlistInput("");
            toast.success("Data submitted!")
        } catch (error) {
            toast.error("ERROR: Failed to send data to the server!")
        }
    };

    useEffect(() => {
        fetchWistlistItems();
    }, [])

    useEffect(() => {
        const handleKeyPress = (event) => {
            if (event.key === "Enter") {
                addWishlist();
            }
        };

        const inputElement = inputRef.current;
        if (inputElement) {
            inputElement.addEventListener("keydown", handleKeyPress);
        }

        return () => {
            if (inputElement) {
                inputElement.removeEventListener("keydown", handleKeyPress);

            }
        };
    }, [wishlistInput]); // Dependency array ensures effect runs on input change


    return (
        <div className="h-screen flex flex-col">
            <div className="flex justify-between p-4">
                <Link to="/">Back to Home</Link>
                <Link to="/register">Register</Link>
            </div>
            <div className="flex-grow flex flex-col justify-center items-center bg-gradient-to-r from-blue-500 to-cyan-500">
                <div>
                    <h1 className="text-center text-3xl font-semibold">Global Message: {messageSelector}</h1>
                    <h1 className="text-center text-3xl font-semibold">Global Count: {counterSelector.count}</h1>
                </div>
                <div className="flex items-center pt-10 gap-4 w-[400px]">
                    <Input
                        value={wishlistInput}
                        onChange={(event) => setWishlistInput(event.target.value)}
                        color="secondary" label="Wishlist Item" ref={inputRef} />
                    <Button onClick={addWishlist} color="primary">Submit</Button>
                </div>
                {/* <p className="text-center font-semibold text-2xl">{wishlistItems}</p> */}
                <div className="text-center">
                    <div className="list-decimal list-inside mt-10">
                        {wishlistItems.map((item) => {
                            return <li key={item.id}>{item.name}</li>
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}
