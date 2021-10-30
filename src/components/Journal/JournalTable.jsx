import React from 'react';
import { Table, Button } from 'reactstrap';

class JournalTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
        
         }
    }

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
                        Buttons
                        {/* <Button color="warning" onClick={() => { this.props.editUpdateWorkout(workout); this.props.updateOn() }}>Update</Button>
                        <Button color="danger" onClick={() => { deleteWorkout(workout) }}>Delete</Button> */}
                    </td>
                </tr>
            )
        })
    }

    render() { 
        return ( 
            <div>
<>
            <h3>My Vanilla Extracts</h3>
            <hr />
            <Table striped>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Bean Type</th>
                        <th>Bean Amount</th>
                        <th>Alcohol Type</th>
                        <th>Proof</th>
                        <th>Alcohol Amount</th>
                        <th>Container</th>
                        <th>Start Date</th>
                        <th>End Date</th>
                        <th>Overall Result</th>
                    </tr>
                </thead>
                <tbody>
                    {this.extractMapper()}
                </tbody>
            </Table>
        </>
            </div>
         );
    }
}
 
export default JournalTable;