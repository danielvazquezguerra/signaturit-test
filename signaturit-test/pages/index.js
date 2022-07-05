import React, {useEffect, useState} from 'react';
import GeneralLayout from '../layout/GeneralLayout';
import axios from 'axios';
import FileCard from '../components/FileCard';
import AddFileModal from '../components/AddFileModal';



export default function Home() {

  const [showModal, setShowModal] = useState(false);

  let filesStandard = [
    {
      title: 'Documento 01',
      description: 'Esta es la descripción del documento 01',
      status: true
    },
    {
      title: 'Documento 02',
      description: 'Esta es la descripción del documento 02',
      status: false
    },
    {
      title: 'Documento 03',
      description: 'Esta es la descripción del documento 03',
      status: true
    }
  ];

  const [files, setFiles] = useState(null);

  

  useEffect(() => {
   
    ( async ()=> {
  
      try {
          
          const response = await axios.get('http://localhost:3002/all');
          setFiles(response.data);
  
      } catch (error) {
  
          console.error(error)
          
      }
  
  
  })()
    
  }, [files])


  const addFile = () => {

    setShowModal(true);
    console.log(showModal)

  }

  const closeButton = () => {

    setShowModal(false);
  }
  


  return (

    <GeneralLayout>

      <div className='PrincipalContent'>

        {
          showModal === true &&

          <AddFileModal closeButton={closeButton}/>

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
            files?.map((_files, key) =>{

              return <FileCard data={_files} key={key}/>

            })
          }

        </section>


      </div>


    </GeneralLayout>

  
  )

}
