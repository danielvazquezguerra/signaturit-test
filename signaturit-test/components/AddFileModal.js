import React, {useState, useEffect} from 'react';
import axios from 'axios';

const AddFileModal = ({closeButton}) => {

    const [title, setTitle] = useState(null);
    const [description, setDescription] = useState(null);
    const [showModalAddFile, setShowModalAddFile] = useState(true);

    const addFileButton = async () => {

        console.log('boton pulsado')

        let bodyFile = {

            title: title,
            description: description

        }

        console.log(bodyFile);

        try {
            
           let response = await axios.post(`http://localhost:3002/add?title=${title}&description=${description}`);

           console.log(response.status)

            if ( response.status === 200 ) {

                setShowModal(false);
                
              }
             

        } catch (error) {

            console.error(error);
            
        }

    }

  return (
      
        <>

                <div className='overMask'/> 
                
                <div className="formAddFile">

                    <div className="barButHea">

                        <p>
                            Introduce un nuevo documento
                        </p>

                        <button
                            onClick={closeButton}
                        >
                            <img src="/assets/img/cancel_icon.svg" alt="cancel icon" />
                        </button>

                    </div>

                    <div className="inpBox">

                        <label htmlFor="name">Title</label>

                        <input type="text" onChange={(e)=>setTitle(e.target.value)}/>

                    </div>

                    <div className="inpBox">

                        <label htmlFor="name">Description</label>

                        <input type="text" onChange={(e)=>setDescription(e.target.value)}/>

                    </div>

                    <div className="inpBoxFile">

                        <label htmlFor="name">Adjuntar documento</label>

                        <input type="file" />

                    </div>

                    <div className="butBoxWra">

                        <button className='canBut'>
                            Cancel
                        </button>

                        <button 

                            className='addFilBut'
                            onClick={addFileButton}

                        >
                            Add file

                        </button>



                    </div>

                </div>
            
            
            </>

            
    )
            
}

export default AddFileModal;