import type { NextPage } from 'next'
import { CurrencyConverter } from '../components/CurrencyConverter'
import { DocumentHead } from '../components/DocumentHead'

const PageHome: NextPage = () => {
  return (
    <>
      <DocumentHead pageTitle='Currency converter' />
      <main>
        <div className='content'>
          <CurrencyConverter />
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
