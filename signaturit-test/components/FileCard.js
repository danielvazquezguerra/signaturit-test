import React from 'react';
import axios from 'axios';
import base64url from 'base64url';
import { Buffer } from 'buffer';
import { parse } from 'querystring';

const FileCard = ({data, idFile, callFiles }) => {

    console.log(base64url);

    const deleteItem = async (id) => {

        try {
            
            axios.get(`http://localhost:3002/delete/${id}`)
            callFiles();

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

                <a 
                href={`data:application/pdf;base64,${base64url}`}
                >

                    <img src="/assets/img/pdf_icon.svg" alt="pdf icon" />

                </a>


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