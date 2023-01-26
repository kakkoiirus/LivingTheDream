import { BLOG_NAME } from "../shared/constants";
import Header from "./header";
import Meta from "./meta";

const Layout = ({ children}) => {
  return (
    <>
      <Meta />
      <Header />
      <section>
        {children}
      </section>
    </>
    )
}

export default Layout;
