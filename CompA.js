import React from "react";
//import Navbar from './Navbar/Navbar'
/* import CompA from './props/CompA' */
import CompB from './CompB'
class CompA extends React.Component{
    eid= 101;
    ename= "karthik"
    render(){
        return <div>
            <h1>Component</h1> {/* <Navbar/> */}
            <CompB one={"gm"} two={"ge"}/>

        </div>
    }
}
export default CompA