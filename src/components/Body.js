import React from 'react';
import Sidebar from './SideMenu';
import DataTable from './DataTable';

const Body = () => {
    return (
        <div className="dashboard-container">
            <div className="data-table">
                <DataTable />
            </div>
            <div className="sidebar">
                <Sidebar />
            </div>
        </div>
    )
}

export default Body