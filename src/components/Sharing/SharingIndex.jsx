import React from "react";
import SharingTable from "./SharingTable";

class SharingIndex extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            images:[]
          };
          this.fetchImages = this.fetchImages.bind(this)
    }
    fetchImages = (event) => {
        console.log(localStorage.getItem("token"))
        let token = localStorage.getItem("token");
        var myHeaders = new Headers();
        myHeaders.append("Authorization", token);
                
        var requestOptions = {
          method: 'GET',
          headers: myHeaders,
          redirect: 'follow'
        };
        
        fetch("http://localhost:3000/image/mine", requestOptions)
          .then(response => response.json())
          .then(result =>{
            this.setState({images: result})
            console.log(result)})
          .catch(error => console.log('error', error));
    }

    componentDidMount() {
        this.fetchImages()
    }
    render() { 
        return (
            <div>
             <SharingTable images = {this.state.images}fetchImages= {this.fetchImages}/>  
            </div>
          );
    }
}
 
export default SharingIndex;