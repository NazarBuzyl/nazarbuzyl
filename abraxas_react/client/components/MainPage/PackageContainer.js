import React, {useState, useEffect,} from 'react';
import PackageRegestrationForm from "../forms/PackageRegestrationForm";
import PackageList from "../common/PackageList";

export default function PackageContainer(props) {
    let data = props.data
    const [listType, setListType] = useState("eingang");
    const ChangeDataPackage = (newData)=> {
        if (newData.type == 'send') {
            data.send.unshift(newData)
        } else {
            data.receive.unshift(newData)
        }
        console.log(data)
    }
  return (
    <div className="row package-block">
        <div className="col-6">

            {/* <!-- Regisrationform fur Packungen --> */}
            <PackageRegestrationForm
            ChangeDataPackage={ChangeDataPackage}/>
        </div>
        <div className="col-6">
            {/* Container fur Packungen */}
            <div className="package-container">
                <div className="d-flex space-between">
                    <div className="package-block__radio">
                        <input type="radio" id="eingang" name="packagelist" value={'eingang'} defaultChecked onChange={(e)=>{setListType(e.target.id)}}/>
                        <label htmlFor="eingang">Eingang</label>
                    </div>

                    <div className="package-block__radio">
                        <input type="radio" id="ausgang" name="packagelist" value={'ausgang'} onChange={(e)=>{setListType(e.target.id)}}/>
                        <label htmlFor="ausgang">Ausgang</label>
                    </div>
                </div>

                {/* <!-- Sectors eingang oder ausgang --> */}
                {listType == 'eingang' && 
                    <PackageList data={data.receive}/>
                }
                {listType == 'ausgang' && 
                    <PackageList data={data.send}/>
                }
            </div>
        </div>
    </div>
    
  )
}
