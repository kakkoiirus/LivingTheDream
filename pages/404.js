import Layout from '../components/layout';

export default function Custom404() {

    return (
      <Layout>
          <div className="containers mx-auto text-center pt-16 px-4">
            <h2 className="text-lg md:text-2xl mb-8">
                ¯\_(ツ)_/¯
            </h2>
            <div className="text-lg  md:text-2xl">
              <p>Что-то пошло не так и мы не смогли найти эту страницу</p>
            </div>
          </div>
      </Layout>
    )
  }