import React, { useState } from 'react';
import employeedata from '../data/employee-data';
import ConfirmationModal from './ConfirmationModal';

export default function PackageRegestrationForm(props) {
    const ChangeDataPackage = props.ChangeDataPackage
    
    const [client, setClient] = useState(``);
    const [employee, setEmployee] = useState(``)
    const [date, setDate] = useState(``);
    const [description, setDescription] = useState(``);
    const [type, setType] = useState(`receive`);
    const [modal, setModal] = useState(false);
    
    // Function Date
    const TodayDate = ()=> {
        let d = new Date();
        let day = (d.getDate() < 10) ? '0' + d.getDate() : d.getDate();
        let month = (d.getMonth() < 10) ? '0' + (d.getMonth() + 1) : d.getMonth() + 1;
        let year = d.getFullYear();
        let todaydate = year + "-" + month + "-" + day;
        return todaydate;
    }

    // DOMContentLoaded
    document.addEventListener('DOMContentLoaded', function(){
        setDate(TodayDate())
        let packageRegestration = document.getElementById('package-regestration');
        window.addEventListener('scroll', function () {
            if (window.pageYOffset > 100 && (window.innerHeight > 650 || window.pageYOffset > 600)) {
                packageRegestration.classList.add("scroll-window-regestration");
            } else {
                packageRegestration.classList.remove("scroll-window-regestration");
            }
        });
    });
    //  Clearform function
    const clearForm = () => {
        setModal(false)
        setClient(``);
        document.getElementById("employee").selectedIndex = 0;
        setDate(TodayDate());
        setDescription(``);
        setType(`receive`);
        document.getElementById('receive').checked= true;
        document.getElementById('client').classList.remove('invalid-data')
        document.getElementById('employee').classList.remove('invalid-data')
        window.scrollTo(0,0)
    };
    
    // send Data to Server from Form
    let handleUploadFile = (e) => {
        e.preventDefault();
        const data = new FormData();
        data.append("client", client);
        data.append("employee",employee);
        data.append("date", date.replace(/-/g,'.'));
        data.append("description", description);
        data.append("type", type);
        
        // createDataNews(data);

        const formDataObj = {};
        data.forEach((value, key) => (formDataObj[key] = value));
        ChangeDataPackage(formDataObj);
        clearForm();
    };

    let validDataCheck = (e)=> {
        e.preventDefault()
        document.getElementById('client').classList.remove('invalid-data')
        document.getElementById('employee').classList.remove('invalid-data')

        if(!client) document.getElementById('client').classList.add('invalid-data')
        if(!employee) document.getElementById('employee').classList.add('invalid-data')
        window.scrollTo(0,0)
        if(client && employee) {
            setModal(true)
        }
    }
    document.body.style.overflow = modal === true ? 'hidden' : '';

  return (
    <div className="package-regestration" id="package-regestration">
        <h3>Packed regestrieres</h3>
        <form onSubmit={handleUploadFile} className="form" >

            {/* <!-- Wählen eingang oder ausgang --> */}
            <div className="d-flex form-item">
                <p className="form-text">Type:</p>
                <div className="form-fun d-flex space-between">
                    <div className="form-radio">
                        <input type="radio" id="receive" name="packet" value={'eingang'} defaultChecked onChange={(e)=>setType(e.target.id)}/>
                        <label htmlFor="receive">eingang</label>
                    </div>

                    <div className="form-radio">
                        <input type="radio" id="send" name="packet" value={'ausgang'} onChange={(e)=>setType(e.target.id)}/>
                        <label htmlFor="send">ausgang</label>
                    </div>
                </div>
            </div>

            {/* <!-- An wem --> */}
            <div className="d-flex form-item ">
                <p className="form-text">{type == "send" ? 'An:' : 'Von:'}</p>
                <div className="form-fun">
                    <input 
                    id='client' 
                    type="text"
                    value={client} 
                    onChange={(e) => {setClient(e.target.value)}}/>
                </div>
            </div>

            {/* <!-- Mitarbeiter --> */}
            <div className="d-flex form-item">
                <p className="form-text">{type == "receive" ? 'An:' : 'Von:'}</p>
                <div className="form-fun">
                    <div className="select-wrapper">
                        <select
                        name="user"
                        required="required"
                        id='employee'
                        onChange={(e)=>setEmployee(e.target[e.target.selectedIndex].innerText)}>
                            <option value={""}>Auswälen...</option>
                            {
                                employeedata.map((item, key)=>{
                                    return <option key={key} value={key+1}>{item.firstname + " " + item.secondname}</option>
                                })
                            }
                        </select>
                    </div>
                </div>
            </div>

            {/* <!-- Date --> */}
            <div className="d-flex form-item">
                <p className="form-text">Am:</p>
                <div className="form-fun">
                    <input data-date-format="D-M-Y"
                    id="date"
                    type="date" value={date}
                    onChange={(e)=>setDate(e.target.value)} />
                    </div>
            </div>

            {/* <!-- Files --> */}
            <div className="d-flex form-item">
                <p className="form-text">Foto:</p>
                <div className="form-fun">
                    <input type="file" className="file-input" id='photo' onChange={(e)=>console.log(e)}/>
                </div>
            </div>

            {/* <!-- Description --> */}
            <div className="form-item input-description">
                <p className="form-text">Beschreibung:</p>
                <div className="form-fun">
                    <textarea id="description" value={description} onChange={(e)=>setDescription(e.target.value)}></textarea>
                </div>
            </div>

            {/* <!-- Button absenden --> */}
            <div className="d-flex form-item">
                <button className="form-btn" id='btn-send-modal' onClick={validDataCheck}>Absenden</button>
            </div>
            {modal &&
                <ConfirmationModal 
                client={client}
                employee={employee}
                date={date}
                description={description}
                type={type}
                setModal={setModal}/>
            }
        </form>
    </div>
  )
}
