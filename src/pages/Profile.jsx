import React from "react";
import { useParams } from "react-router-dom"
import { withParams } from "../hoc/withParams";

// export default function Profile() {
//     const params = useParams();

//     return (
//         <>
//             <div className="h-screen flex flex-col items-center justify-center">
//                 <h1 className="text-3xl font-bold">Profile Page</h1>
//                 <p className="text-red-400 text-xl font-semibold">{params.username}</p>
//             </div>
//         </>
//     )
// }

class Profile extends React.Component {
    render() {
        return (
            <>
                <div className="h-screen flex flex-col items-center justify-center">
                    <h1 className="text-3xl font-bold">Profile Page</h1>
                    <p className="text-red-400 text-xl font-semibold">{this.props.params.username}</p>
                </div>
            </>
        )
    }
}

export default withParams(Profile);
