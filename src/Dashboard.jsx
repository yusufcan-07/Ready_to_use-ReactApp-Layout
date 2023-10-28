import React from "react";
import Card from "./Card";

const Dashboard = () => {
  return (
    <>
      <div className="h-screen grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 grid-rows-8 md:grid-rows-7 xl:grid-rows-5 auto-rows-fr gap-6 p-10">
        <div className="col-span-1 md:col-span-2 xl:col-span-3 row-span-1">
          <Card>My Portfolio</Card>
        </div>

        <div className="md:col-span-2 row-span-4 xl: col-span-3">
          <Card>Chart</Card>
        </div>
        <div className="md: col-span-2 xl:col-span-1 row-span-2 xl:row-span-4">
          <Card>Watchlist</Card>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
