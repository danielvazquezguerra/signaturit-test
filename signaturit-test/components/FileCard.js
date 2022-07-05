import React from 'react';
import axios from 'axios';

const FileCard = ({data, idFile}) => {

    const deleteItem = async (id) => {

        try {
            
            axios.get(`http://localhost:3002/delete/${id}`)

        } catch (error) {

            console.error(error);
            
        }

    }



  return (

      <div className='iteDocBox'>

          <div className="infBox">

              <p className='docNom'>{data.title}</p>

              <p className='fecDoc'>26/05/2022</p>

              {
                  data.status === true ?

                      <p className='bolder staDocTrue'>Leido</p>

                      :

                      <p className='staDocFalse'>No leído</p>

              }

          </div>

          <div className='tooIcoBox'>

              <div className="imgBox">

                  <img src="/assets/img/pdf_icon.svg" alt="pdf icon" />

              </div>

              <div className="butBoxWra">

                  <button>
                      <img src="/assets/img/shared_icon.svg" alt="shared icon" />
                  </button>

                  <button>
                      <img src="/assets/img/download_icon.svg" alt="shared icon" />
                  </button>

                  <button onClick={()=>deleteItem(idFile)}>
                      <img src="/assets/img/delete_icon.svg" alt="shared icon" />
                  </button>

              </div>

          </div>

      </div>
  )
}

export default FileCard;