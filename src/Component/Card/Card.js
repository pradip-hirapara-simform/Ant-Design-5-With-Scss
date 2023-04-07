
import Card from "antd/es/card/Card";
import  "./Card.scss";


export function CustomeCard(props) {
  const {children, ...cardprop} = props
  return (
  <Card className="card" {...cardprop}> 
      {children}
  </Card>
  );
}
  