import React, { useState } from 'react'

export default function PackageCardInfo(props) {
    const [descriptionCard, setDescriptionCard] = useState(false);
    let data = props.data;
  return (
    <div className={"package-item"+(descriptionCard ? ' package-item_active' :'')} onClick={()=>{setDescriptionCard(!descriptionCard)}}>
        <div className="d-flex">
            <div className="package-photo"></div>
            <div className="package-info">
                <p>Packet an {data.type == 'send' ? data.client : data.employee}</p>
                <div className="d-flex space-between">
                    <p className='package-info__data'>{data.date}</p>
                    <p>{data.type == 'receive' ? data.client : data.employee}</p>
                </div>
                {(descriptionCard) &&
                <div className="more-info">
                    <p className="more-info-text">{data.description ? data.description : 'I have nothing'}</p>
                </div>
                }
            </div>
        </div>
    </div>
  )
}
