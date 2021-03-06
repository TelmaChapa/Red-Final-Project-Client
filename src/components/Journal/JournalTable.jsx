import React from 'react';
import { Table, Button } from 'reactstrap';
import JournalEdit from "./JournalEdit";
import APIURL from "../../helpers/environment";

class JournalTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  deleteExtract = (vanilla) => {
    let token = localStorage.getItem("token");
    fetch(`${APIURL}/extract/delete/${vanilla.id}`, {
      method: "DELETE",
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: token,
      }),
    }).then(() => this.props.fetchExtracts());
  };
  extractMapper = () => {
    return this.props.extracts.map((vanilla, index) => {
      return (
        <tr key={index}>
          <th scope="row">{vanilla.id}</th>
          <td>{vanilla.beantype}</td>
          <td>{vanilla.beanamount}</td>
          <td>{vanilla.alcoholtype}</td>
          <td>{vanilla.proof}</td>
          <td>{vanilla.alcoholamount}</td>
          <td>{vanilla.container}</td>
          <td>{vanilla.startdate}</td>
          <td>{vanilla.enddate}</td>
          <td>{vanilla.overallresult}</td>
          <td>
            <JournalEdit
              vanilla={vanilla}
              fetchExtracts={this.props.fetchExtracts}
            />
            <Button
              // color="danger"
              style={{backgroundColor:"#D72323",
              padding:"1px",
              }}
              onClick={() => {
                this.deleteExtract(vanilla);
              }}
            >
              Delete
            </Button>
          </td>
        </tr>
      );
    });
  };

  render() {
    return (
      <div>
        <>
          <h3
            style={{
              fontFamily: "Shadows Into Light, cursive",
              color: "#301B3F",
              textAlign: "center",
            }}
          >
            My Vanilla Extracts
          </h3>
          <hr />
          <Table hoverable striped>
            <thead>
              <tr
                style={{
                  fontFamily: "Shadows Into Light, cursive",
                  color: "#301B3F",
                }}
              >
                <th>#</th>
                <th>Bean Type</th>
                <th>Bean Amount(oz)</th>
                <th>Alcohol Type</th>
                <th>Proof</th>
                <th>Alcohol Amount(oz)</th>
                <th>Container</th>
                <th>Start Date</th>
                <th>End Date</th>
                <th>Overall Result</th>
              </tr>
            </thead>
            <tbody>{this.extractMapper()}</tbody>
          </Table>
        </>
      </div>
    );
  }
}
 
export default JournalTable;