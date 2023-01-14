import React from 'react'

const CardInfoModal = (props) => {
    const data = props.data;
    const setDescriptionCard = props.setDescriptionCard;
    
  return (
    <div className='card-info-modal-window'>
        <div className='card-info-modal' onClick={(e)=> {e.stopPropagation()}}>
            <div className='card-info-modal__item card-info-modal__item_photo'></div>
            <div className='card-info-modal__item'>
                <div className='card-info-modal__text'>An:</div>
                <div className='card-info-modal__text'>{data.type == "send" ? data.client : data.employee}</div>
            </div>
            <div className='card-info-modal__item'>
                <div className='card-info-modal__text'>Von:</div>
                <div className='card-info-modal__text'>{data.type == "send" ? data.employee : data.client}</div>
            </div>
            <div className='card-info-modal__item'>
                <div className='card-info-modal__text'>Am:</div>
                <div className='card-info-modal__text'>{data.date}</div>
            </div>
            {data.description &&
                <div className='card-info-modal__item'>
                    <div className='card-info-modal__text'>Beschreibung:</div>
                    <div className='card-info-modal__text'>{data.description}</div>
                </div>
            }
            <div className='close-btn' onClick={()=>setDescriptionCard(false)}></div>
        </div>
    </div>
  )
}
export default CardInfoModal;
