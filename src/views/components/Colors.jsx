import React from "react";
import { Card, CardHeader, CardBody, CardTitle, Row, Col } from "reactstrap";

class Colors extends React.Component {
  render() {
    return (
      <>
        <div className="content">
          <Row>
            <Col md={12}>
              <Card classname="color-boxes">
                <CardHeader>
                  <CardTitle>Foundation</CardTitle>
                  <h1 className="amsurg-blue">Colors</h1>
                  <h2 classname="slate-grey">Web Colors</h2>
                  <p>These are the primary colors used on the website</p>
                </CardHeader>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default Colors;
