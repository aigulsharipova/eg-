import moment from 'moment';
import { useState } from 'react';
import Table from 'react-bootstrap/Table';
import AppModal from '../Modal/modal';

export default function TableUser (props) {

    const users = props?.users ? props?.users : [];
    const [user, setUser] = useState({});
    const [modalStatus, setModalStatus] = useState(0);

    const handleModal = (index) => {
        setUser(users[index]);
        setModalStatus(modalStatus+1);
    }

    return (
        <>
            <Table bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Date of Birthday</th>
                        <th>State</th>
                        <th>Country</th>
                    </tr>
                </thead>
                {
                    users.length > 0 &&
                    <tbody>
                        {
                            users?.map((item, index) => {
                                return (
                                    <tr key={index} className="app__item" onClick={()=>{handleModal(index)}}>
                                        <td>{index+1}</td>
                                        <td>{item?.name?.title} {item?.name?.first} {item?.name?.last}</td>
                                        <td>{moment(item?.dob?.date)?.format('DD.MM.YYYY')}</td>
                                        <td>{item?.location?.state}</td> 
                                        <td>{item?.location?.country}</td>
                                    </tr>
                                );
                            })
                        }
                    </tbody>
                }
            </Table>

            <AppModal user={user} state={modalStatus}></AppModal>
        </>
    );
}