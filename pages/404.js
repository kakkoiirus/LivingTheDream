import Layout from '../components/layout';

export default function Custom404() {

    return (
      <Layout>
          <div className="block">
            <div className="columns">
              <div className="column  is-8  is-offset-2  has-text-centered">
                <h2 className="title  mb-6">
                    ¯\_(ツ)_/¯
                </h2>
                <div className="content">
                  <p>Что-то пошло не так и мы не смогли найти эту страницу</p>
                </div>
              </div>
            </div>
          </div>
      </Layout>
    )
  }