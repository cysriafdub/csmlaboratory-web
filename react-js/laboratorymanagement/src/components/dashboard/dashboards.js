import React from "react";
import InventoryOverview from "./InventoryOverview";
import InventorySummary from "./InventorySummary";
import Header from "../header/header";
import Nav from "../navbar/navbar";
import './dashboard.css';

function Dashboard() {
    return (
        <section className="content">
            <div className="titleHeader">
                <div className='titleName'>
                    <InventorySummary />
                    <InventoryOverview />
                </div>
            </div>
        </section>
        
    );
}

export default Dashboard;