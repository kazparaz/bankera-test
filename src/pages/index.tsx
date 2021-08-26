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
        }
      `}</style>
    </>
  )
}

export default PageHome
