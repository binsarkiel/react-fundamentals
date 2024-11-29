import { Button, Card, CardBody, CardFooter, CardHeader, Divider } from "@nextui-org/react";
import PropTypes from "prop-types";
import { withAlert } from "../hoc/withAlert";
import { withBackground } from "../hoc/withBackground";

const TodoCard = (props) => {
    return (
        <div className="p-4 flex flex-col items-center">
        <Card className="w-[400px]">
            <CardHeader className="font-bold text-lg">
                {props.day} ({props.items})
            </CardHeader>
                <Divider/>
                <CardBody>
                    <ul className="list-decimal list-inside">
                        <li>Mandi</li>
                        <li>Sarapan</li>
                        <li>Coding</li>
                    </ul>
                </CardBody>
                <Divider/>
                <CardFooter>
                    <Button>Finish</Button>
                    <p className="ms-4">{props.propsTambahan}</p>
                </CardFooter>
        </Card>
        </div>
    )
}

TodoCard.propTypes = {
    day: PropTypes.string,
    items: PropTypes.number,
}

export default withBackground(withAlert(TodoCard));
