import React from "react"
import P5 from "p5"
import Everett from '../fonts/EverettTrial-Regular.otf'


class MySketch extends React.Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef();
    }
    
    Sketch = (p) => {
        let everett;
        

        p.preload = () => {
            everett = p.loadFont(Everett);
        };
        
        p.setup = () => {
            p.createCanvas(300, 300, p.WEBGL);
            p.textFont(everett);
            p.textSize(p.width / 10);
            p.textAlign(p.CENTER, p.CENTER);
        };

        p.draw = () => {
            p.background('#F0F0F0');
            let time = p.millis();
            p.rotateX(time / 1000);
            p.rotateZ(time / 1234);
            p.fill('#000000')
            p.text('Unity in diversity', 0, 0);
        };

    };

    componentDidMount() {  
        this.myP5 = new P5(this.Sketch, this.myRef.current);
    }
  
    render() {
        return < div ref ={this.myRef}></ div >;
    }

  }
  
  
  export default MySketch