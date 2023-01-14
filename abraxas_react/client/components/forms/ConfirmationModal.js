import React from 'react'

const ConfirmationModal = (props)=> {
    let client = props.client
    let employee = props.employee
    let date = props.date
    let description = props.description
    let type = props.type
    let setModal = props.setModal

  return (
    <div className='confimation-modal-window' onClick={(e)=>{if(e.target.className == 'confimation-modal-window') setModal(false)}}>
        <div className='confimation-modal'>
            <div className='confimation-modal__title'> Packung Info</div>
            {/* <!-- Wählen eingang oder ausgang --> */}
            <div className="d-flex confimation-modal__item space-between">
                <p className="confimation-modal__text">Type:</p>
                <div className="confimation-modal__fun">
                    {type}
                </div>
            </div>

            {/* Client */}
            <div className="d-flex confimation-modal__item space-between">
                <p className="confimation-modal__text">An:</p>
                <div className="confimation-modal__fun">
                    {client}
                </div>
            </div>

            {/* <!-- Mitarbeiter --> */}
            <div className="d-flex confimation-modal__item space-between">
                <p className="confimation-modal__text">Von:</p>
                <div className="confimation-modal__fun">
                    {employee}
                </div>
            </div>

            {/* <!-- Date --> */}
            <div className="d-flex confimation-modal__item space-between">
                <p className="confimation-modal__text">Am:</p>
                <div className="confimation-modal__fun">
                    {date}
                </div>
            </div>

            {/* <!-- Files --> */}
            <div className="d-flex confimation-modal__item space-between">
                <p className="confimation-modal__text">Foto:</p>
                <div className="confimation-modal__fun">
                    File.jpg
                </div>
            </div>

            {/* <!-- Description --> */}
            <div className="confimation-modal__item">
                <p className="confimation-modal__text">Beschreibung:</p>
                <div className="confimation-modal__fun confimation-modal__description">
                    {description}
                </div>
            </div>

            {/* <!-- Button absenden --> */}
            <div className="d-flex confimation-modal__item space-between">
                <button className="confimation-modal__btn" id='btn-change' onClick={(e)=>{
                    e.preventDefault();
                    setModal(false);
                }}>Ändern</button>
                <button className="confimation-modal__btn" id='btn-send' type="submit">Absenden</button>
            </div>
        </div>
    </div>
  )
}

export default ConfirmationModal;
