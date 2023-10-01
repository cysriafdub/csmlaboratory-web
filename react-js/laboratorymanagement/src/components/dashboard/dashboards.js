import React from "react";
import InventoryOverview from "./InventoryOverview";
import InventorySummary from "./InventorySummary";
import './dashboard.css';

function Dashboard() {
    return (
        <section className="content">
            <InventorySummary />
            <InventoryOverview />
        </section>
        
    );
}

export default Dashboard;