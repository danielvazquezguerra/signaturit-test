import React from 'react';

const DocumentCard = ({
    name,
    date,
    type,
    status
}) => {

  return (

      <div className='iteDocBox'>

          <div className="infBox">

              <p className='docNom'>{name}</p>

              <p className='fecDoc'>{date}</p>

              <p className='staDoc'>{status}</p>

          </div>

          <div className='tooIcoBox'>

              <div className="imgBox">

                  <img src={`/assets/img/${type}`} alt="pdf icon" />

              </div>

              <div className="butBoxWra">

                  <button>

                      <img src="/assets/img/shared_icon.svg" alt="shared icon" />

                  </button>

                  <button>

                      <img src="/assets/img/download_icon.svg" alt="shared icon" />

                  </button>

                  <button>

                      <img src="/assets/img/delete_icon.svg" alt="shared icon" />

                  </button>

              </div>

          </div>

      </div>

  )

}

export default DocumentCard;