import React,{useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import BootstrapTable from 'react-bootstrap-table-next';  
import { useDispatch, useSelector } from 'react-redux';
import paginationFactory from 'react-bootstrap-table2-paginator';

import { userActions } from '../../_actions';

function UserAudit() {

    const user = useSelector(state => state.authentication.user);
    const useAuditDetails = useSelector(state => state.users.items);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(userActions.getUserAuditDetails());
       
    }, []);
     
    const columns = [
        {  
            dataField: 'firstName',  
            text: 'First Name'  
        },
        {  
            dataField: 'username',  
            text: 'User Name'  
        },
        {  
            dataField: 'role',  
            text: 'Role'  
        },
        {  
            dataField: 'ipAddress',  
            text: 'IP Address'  
        },
        {  
            dataField: 'loginTime',  
            text: 'LoggedIn Time'  
        },
        {  
            dataField: 'logoutTime',  
            text: 'LoggedOut Time'  
        }
    ];

    const handleLogout=()=>{
        dispatch(userActions.userLogOut(user.id));
    }

    return (
       
        <div>
            <h2>Audit History</h2>
            <p className="text-right">
                <Link to="/">Dashboard</Link>
                <Link to="/login"  className="pl-3" onClick={handleLogout}>Logout</Link>
            </p>
            <BootstrapTable   
                striped  
                hover  
                keyField='id'   
                data={(useAuditDetails)?useAuditDetails:[]}   
                columns={columns}  
                pagination={ paginationFactory() } 
            />  
        </div>
    );
}

export { UserAudit };