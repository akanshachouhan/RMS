import React from 'react'
// import AvailableJobs from '../../common-component/AvailableJobs';

const ListCard = (props) => {
    return (
        <div>
            <table>
                {/* <tr>
                    <th>s. no.</th>
                    <th>name</th>
                    <th>Post Applied</th>
                    <th>Email</th>
                    <th>Contact</th>
                    <th>All Details</th>
                </tr> */}
                <tr>
                <td>{props.s_no}</td>
                <td>{props.name}</td>
                <td>{props.post_applied}</td>
                <td>{props.email}</td>
                <td>{props.contact}</td>
                <td>{props.all_details}</td>
                </tr>
            </table>
        </div>
    )
}

export default ListCard
