import { BLOG_NAME } from "../shared/constants";
import Header from "./header";
import Meta from "./meta";

const Layout = ({ children}) => {
  return (
    <>
      <Meta />
      <Header />
      <section className="section">
        <div className="container">
          <div className="columns  is-centered">
            <div className="column  is-8">
              {children}
            </div>
          </div>
        </div>
      </section>
    </>
    )
}

export default Layout;
