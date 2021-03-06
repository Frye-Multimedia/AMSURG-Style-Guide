import React from "react";
import dashboardHeader from "assets/img/dashboardHeader.svg";

// reactstrap components
import {
  Badge,
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Label,
  FormGroup,
  Input,
  Table,
  Row,
  Col,
  UncontrolledTooltip
} from "reactstrap";

class Dashboard extends React.Component {
  render() {
    return (
      <>
        <div className="content">
          <Row>
            <Col md="12">
              <Card>
                <img className="img-fluid mx-auto w-100"src={dashboardHeader} alt="Header" />
                <h1>What do you call a fake noodle ? An Impasta!</h1>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default Dashboard;
