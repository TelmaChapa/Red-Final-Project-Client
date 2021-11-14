import React from 'react';
import JournalTable from './JournalTable';

class JournalIndex extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        extracts: [],
      };
    //    this.fetchExtracts = this.fetchExtracts.bind(this)
    }

    componentDidMount() {
        this.fetchExtracts()
    }

    fetchExtracts = (event) => {
        let token = localStorage.getItem("token");
        fetch("http://localhost:3000/extract/all", {
            method: "GET",
            headers: new Headers({
                "Content-Type": "application/json",
                'Authorization': token
            })
        })
        .then(res => res.json())
        .then(journalInfo => {
            this.setState({
                extracts: journalInfo
            })
            console.log(this.state.extracts)

        })
        // let token = localStorage.getItem("token");
        // var myHeaders = new Headers();
        // myHeaders.append("Authorization", token);
        
        // var requestOptions = {
        //   method: 'GET',
        //   headers: myHeaders,
        //   redirect: 'follow'
        // };
        
        // fetch("http://localhost:3000/extract/all", requestOptions)
        //   .then(response => response.json())
        //   .then(result =>{
        //        console.log(result)
        //        this.setState({extracts: result})
        // })
        //   .catch(error => console.log('error', error));  
    }


    render() { 
        return ( 
            <div>
                <JournalTable extracts={this.state.extracts} fetchExtracts={this.fetchExtracts.bind(this)} />
            </div>
         );
    }
}
 
export default JournalIndex;