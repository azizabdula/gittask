import {Card,Button} from "react-bootstrap"

function Feature4(){
    return(<div>
        <Card className="text-center mx-auto mt-5"  style={{width:"18rem"}}>
            <Card.Header>Cognizant</Card.Header>
            <Card.Body className="bg-light">
                <Card.Title>
                    ID Card
                </Card.Title>
                <Card.Text>
                    Name : Vishnuprian DP
                </Card.Text>
                <Card.Text>
                    Designation : PAT
                </Card.Text>
                <Card.Text>
                    Location : Chennai 
                </Card.Text>
              <Button variant="primary">More about</Button>
            </Card.Body>
        </Card>

    </div>)
}

export default Feature4;