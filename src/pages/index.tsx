import type { NextPage } from 'next'
import { BitcoinConverter } from '../components/BitcoinConverter'
import { DocumentHead } from '../components/DocumentHead'

const PageHome: NextPage = () => {
  return (
    <>
      <DocumentHead pageTitle='Bitcoin converter' />
      <main>
        <div className='content'>
          <BitcoinConverter />
        </div>
      </main>

      <style jsx>{`
        main {
          display: flex;
          align-items: center;
          justify-content: center;
          background: #dbf2f2;
        }

        .content {
          margin: 20px;
          padding: 50px;
          background: #fff;
          box-shadow: 0 0 50px 0 rgb(0 0 0 / 10%);
          border-radius: 8px;
        }
      `}</style>
    </>
  )
}

export default PageHome
