import Header from "./Header";
import { Footer } from "./Footer";

const Layout = ({ children, background }) => {
  return (
    <div className={background}>
      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export { Layout };