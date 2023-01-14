import React, { useState } from 'react'
import CardInfoModal from './CardInfoModal';

export default function PackageCardInfo(props) {
    const [descriptionCard, setDescriptionCard] = useState(false);
    let data = props.data;
    document.body.style.overflow = descriptionCard === true ? 'hidden' : '';

  return (
    <div className={"package-item"+(descriptionCard ? ' package-item_active' :'')} onClick={(e)=>{setDescriptionCard(!descriptionCard)}}>
        <div className="d-flex">
            <div className="package-photo"></div>
            <div className="package-info">
                <p>Packet an {data.type == 'send' ? data.client : data.employee}</p>
                <div className="d-flex space-between">
                    <p className='package-info__data'>{data.date}</p>
                    <p>{data.type == 'receive' ? data.client : data.employee}</p>
                </div>
                {(descriptionCard) &&
                    <CardInfoModal data={data}
                    descriptionCard={descriptionCard}
                    setDescriptionCard={setDescriptionCard}/>
                }
            </div>
        </div>
    </div>
  )
}
