import GeneralLayout from '../layout/GeneralLayout';


export default function Home() {

  return (

    <GeneralLayout>

      <div className='PrincipalContent'>

        <section className='homHea'>

          <p className='nomUsu'><span>Hola Daniel,</span> aquí están tus documentos.</p>

       

        </section>

        <section className='docConWra'>

          <div className='iteDocBox'>

            <div className="infBox">

              <p className='docNom'>Contrato TEST_001</p>

              <p className='fecDoc'>26/05/2022</p>

              <p className='staDoc'>Leído</p>
              
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
                
                <button>
                  <img src="/assets/img/delete_icon.svg" alt="shared icon" />
                </button>


              </div>



            </div>

          </div>


        </section>


      </div>


    </GeneralLayout>

  
  )

}
