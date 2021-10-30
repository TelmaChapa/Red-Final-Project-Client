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
        let token = localStorage.getItem("token");
        var myHeaders = new Headers();
        myHeaders.append("Authorization", token);

        var requestOptions = {
            method: 'GET',
            Headers: myHeaders,
            redirect: 'follow'
        };

        fetch("http://localhost:3000/images/all", requestOptions)
        .then(reponse => reponse,json())
        .then(result => {
            console.log(result)
            this.setState({image: result})
        })
        .catch(error => console.log('error', error));
    }

    componentDidMount() {
        this.fetchImages()
    }
    render() { 
        return (
            <div>
             <SharingTable image = {this.state.image} />  
            </div>
          );
    }
}
 
export default SharingIndex;