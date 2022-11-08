import React, { useState } from "react";
import packagedata from "../data/package-data";
import PackageContainer from "./PackageContainer";

let MainPage = ()=> {
    const [data, setData] = useState({
        receive: [],
        send: []
    })
    packagedata.map((item) => {
        if (item.type == 'send') {
            data.send.push(item)
        } else {
            data.receive.push(item)
        }
    })

    return (
        <div className="container">
            <div className="row">
                <div className="title_h2">Warenein- und Ausgang</div>
            </div>
            <PackageContainer data={data}/>
        </div>
    )
}

export default MainPage;
