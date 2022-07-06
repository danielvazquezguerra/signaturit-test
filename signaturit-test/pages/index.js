import React, {useEffect, useState} from 'react';
import GeneralLayout from '../layout/GeneralLayout';
import axios from 'axios';
import FileCard from '../components/FileCard';
import AddFileModal from '../components/AddFileModal';



export default function Home() {

  const [showModal, setShowModal] = useState(false);
  const [files, setFiles] = useState(null);
  const [response, setResponse] = useState(null)


  // let files = null;


  useEffect(() => {
   
    ( async ()=> {
  
      try {
          
          let response = await axios.get('http://localhost:3002/all');
          setFiles(response.data);
          console.log(response.data);
        
  
      } catch (error) {
  
          console.error(error)
          
      }

  
  })()
    
  }, [])


  //Función solo para hacer el REQUEST cuando tenga que actualizar la tabla de documentos.
  const callFiles = async () => {

    try {
          
      const response = await axios.get('http://localhost:3002/all');
      console.log(response.data);


      setFiles(response.data);
    

  } catch (error) {

      console.error(error)
      
  }

  };

  // Al pulsar el botón de AÑADIR DOCUMENTO renderiza el modal de formulario.
  const addFile = () => {

    setShowModal(true);
    console.log(showModal)

  }

  // Apaga el formulario para incluir documentos.
  // No quiero que cierre automáticamente al incluir uno nuevo porque puede que el usuario quiera incluir varios.
  const closeButton = () => {

    setShowModal(false);
  }
  


  return (

    <GeneralLayout>

      <div className='PrincipalContent'>

        {
          showModal === true &&

          <AddFileModal closeButton={closeButton} callFiles={callFiles}/>

        }


        <section className='homHea aic'>

          <p className='nomUsu'><span>Hola Daniel,</span> aquí están tus documentos.</p>

          <div className='butBox'>

            <button onClick={addFile}>

              <img src="/assets/img/add_icon.svg" alt="add icon" />

              <p> Añadir documento </p>
        
            </button>

          </div>

       

        </section>

        <section className='docConWra'>

          {

            files?.length === 0 ? 
            
            <div className="emptyBox">

              <img src="/assets/img/empty_icon_1.svg" alt="empty icon" />

              <div className="texBox">

                <p className='titTex'>La vida sin amigos ni documentos es triste.</p>
                <p className='subTex'>Intenta <span>añadir documentos</span>.</p>

              </div>


            </div>


            :

            files?.map((_files, key) => {

              return <FileCard 
                        data={_files} 
                        key={key} 
                        idFile={_files._id}
                        callFiles={callFiles}
                      />

            })
          }

        </section>


      </div>


    </GeneralLayout>

  
  )

}
