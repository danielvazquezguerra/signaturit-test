import GeneralLayout from '../layout/GeneralLayout';
import DocumentCard from '../components/DocumentCard';


export default function Home() {

  const documentItems = [

    {
      name_document: 'Contrato_001',
      date: '18/04/21',
      status: 'Leído',
      type: 'pdf_icon.svg',
    },
    {
      name_document: 'Contrato_002',
      date: '03/02/21',
      status: 'Leído',
      type: 'pdf_icon.svg',
    },
    {
      name_document: 'Contrato_003',
      date: '08/05/21',
      status: 'Leído',
      type: 'pdf_icon.svg',
    },

  ]

  return (

    <GeneralLayout>

      <div className='PrincipalContent'>

        <section className='homHea'>

          <p className='nomUsu'><span>Hola Daniel,</span> aquí están tus documentos.</p>

        </section>

        <section className='docConWra'>

          {
            documentItems.map((item, key) => {

              return <DocumentCard
            
                        key={key}
                        name={item.name_document}
                        date={item.date}
                        status={item.status}
                        type={item.type}
                
                    />


            })
          }


        </section>


      </div>


    </GeneralLayout>

  
  )

}
