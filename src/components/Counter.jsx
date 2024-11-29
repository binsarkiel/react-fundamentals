import { Button, Divider, Input } from "@nextui-org/react";
import React, { useMemo, useState } from "react";
import { useDispatch, useSelector, connect } from "react-redux";

const slowDoubleNumber = (num) => {
    for (let i = 0; i < 5000000000; i++) {}
    return num * 2;
}

const Counter = () => {
    const selector = useSelector((store) => store.counter)
    const dispatch = useDispatch();
    const [count, setCount] = useState(0)
    const [inputCounter, setInputCounter] = useState(0);

    const incrementCount = () => {
        setCount(count + 1);
    }

    const decrementCount = () => {
        setCount(count - 1);
    }

    const incrementGlobalCounter = () => {
        dispatch({
            type: "INCREMENT"
        })
    }

    const decrementGlobalCounter = () => {
        dispatch({
            type: "DECREMENT"
        })
    }

    const setGlobalCounter = () => {
        dispatch({
            type: "SET",
            payload: inputCounter
        })
    }

    const doubleNumberResult = useMemo(() => {
        return slowDoubleNumber(count);
    }, [count])

    return (
        <div className="h-screen flex flex-col justify-center gap-16 p-12">
            <div>
                <h1 className="text-center text-2xl mb-10">Local State Version</h1>
                <div className="flex items-center justify-around">
                    <Button onClick={decrementCount} color="danger">Subtract</Button>
                    <span>{count}</span>
                    <Button onClick={incrementCount} color="primary">Add</Button>
                </div>
            </div>

            <p className="text-center text-lg font-semibold">{doubleNumberResult}</p>

            <Divider />

            <div>
                <h1 className="text-center text-2xl mb-10">Global State Version</h1>
                <div className="flex flex-col justify-center px-24 pb-12 gap-4">
                    <Input value={inputCounter} onChange={(event) => {
                        setInputCounter(event.target.value)
                    }} />
                    <Button color="secondary" onClick={setGlobalCounter}>Set</Button>
                </div>
                <div className="flex items-center justify-around">
                    <Button onClick={decrementGlobalCounter} color="danger">Subtract</Button>
                    <span>{selector.count}</span>
                    <Button onClick={incrementGlobalCounter} color="primary">Add</Button>
                </div>
                <div>
                </div>
            </div>
        </div>
    )
}

export default Counter;

// class Counter extends React.Component {
//     state = {
//         count: 0,
//     };

//     incrementCounter = () => {
//         this.setState({ count: this.state.count + 1 });
//     };

//     decrementCounter = () => {
//         this.setState({ count: this.state.count - 1 });
//     };

//     render() {
//         return (
//             <div className="flex flex-col gap-12 h-screen justify-center">
//                 <h1 className="text-center text-2xl">Local State Version</h1>
//                 <div className="flex items-center justify-around">
//                     <Button onClick={this.decrementCounter} color="danger">Subtract</Button>
//                     <span className="text-3xl font-semibold">{this.state.count}</span>
//                     <Button onClick={this.incrementCounter} color="primary">Add</Button>
//                 </div>
//                 <Divider />
//                 <div>
//                     <h1 className="text-center text-2xl mb-10">Global State Version</h1>
//                     <div className="flex flex-col justify-center px-24 pb-12 gap-4">
//                         <Input
//                             type="number"
//                             value={this.state.inputCounter}
//                             onChange={(event) => {
//                                 this.setState({ inputCounter: parseInt(event.target.value) })
//                             }}
//                         />
//                         <Button color="secondary" onClick={() => this.props.setGlobalCounter(this.state.inputCounter)}>Set</Button>
//                     </div>
//                     <div className="flex items-center justify-around">
//                         <Button color="danger" onClick={this.props.decrementGlobalCounter}>Subtract</Button>
//                         <span>{this.props.counter.count}</span>
//                         <Button color="primary" onClick={this.props.incrementGlobalCounter}>Add</Button>
//                     </div>
//                     <div>
//                     </div>
//                 </div>
//             </div>
//         )
//     }
// }

// const mapStateToProps = (store) => {
//     return {
//         counter: store.counter,
//     }
// }

// const mapDispatchToProps = (dispatch) => {
//     return {
//         incrementGlobalCounter: () => {
//             dispatch({
//                 type: "INCREMENT"
//             })
//         },
//         decrementGlobalCounter: () => {
//             dispatch({
//                 type: "DECREMENT"
//             })
//         },
//         setGlobalCounter: (inputCounter) => {
//             dispatch({
//                 type: "SET",
//                 payload: inputCounter
//             })
//         }
//     }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Counter);
