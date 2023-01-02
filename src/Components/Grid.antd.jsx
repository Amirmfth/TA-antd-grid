import { Row, Col } from "antd/es/grid";

export function Grid() {
  return (
    <Row gutter={{sm: 24 , md: 16 , lg:16}}>
      <Col sm={{order:3 , span:6 , offset:2}} md={{order: 1, span:4}} style={{"backgroundColor": "red"}}> 1 </Col>
      <Col sm={{order:4 , span:9}} md={{order:2, span:6 , offset:4}} style={{"backgroundColor": "blue"}}> 2 </Col>
      <Col sm={{order:1 , span:12}} md={{order:3, span:2 , offset:6}} style={{"backgroundColor": "black"}}> 3 </Col>
      <Col sm={{order:5 , span:18}} md={{order:4, span:6 , offset:4}} style={{"backgroundColor": "yellow"}}> 4 </Col>
      <Col sm={{order:2 , span:6 , offset:6}} md={{order:5, span:8 , offset:4}} style={{"backgroundColor": "green"}}> 5 </Col>
      <Col sm={{order:6 , span:12 , offset:12}} md={{order:6, span:4 , offset:10}}  style={{"backgroundColor": "red"}}> 6 </Col>
    </Row>
  );
}
