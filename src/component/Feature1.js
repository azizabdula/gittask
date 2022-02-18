import {Card,Button} from "react-bootstrap"

function Feature1(){
    return (<div>
<Card className="text-center mx-auto mt-5" style={{width:"18rem"}}>
  <Card.Header>Cognizant</Card.Header>
  <Card.Body className="bg-warning">
    <Card.Title>ID Card</Card.Title>
    <Card.Text>
      Name : Naveen M
    </Card.Text>
    <Card.Text>
      Designation : PAT
    </Card.Text>
    <Card.Text>
      Location : Chennai
    </Card.Text>
    <Button variant="primary">More About</Button>
  </Card.Body>
 
</Card>
    </div>)
}

export default Feature1