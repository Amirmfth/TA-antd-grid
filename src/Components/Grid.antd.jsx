import { Row, Col } from "antd/es/grid";

export function Grid() {
  return (
    <Row gutter={[16,16]}>
      <Col span={4} style={{"backgroundColor": "red"}}> 1 </Col>
      <Col span={6} offset={4} style={{"backgroundColor": "blue"}}> 2 </Col>
      <Col span={2} offset={6} style={{"backgroundColor": "black"}}> 3 </Col>
      <Col span={6} offset={4} style={{"backgroundColor": "yellow"}}> 4 </Col>
      <Col span={8} offset={4}  style={{"backgroundColor": "green"}}> 5 </Col>
      <Col span={4} offset={10}  style={{"backgroundColor": "red"}}> 6 </Col>
    </Row>
  );
}
