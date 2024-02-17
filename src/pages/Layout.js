import { Header } from "../components/Header";

export const Layout = ({ children }) => {
  return (
    <>
      <div className="page theme-light">
        <Header />
        <main>
          <div className="page-layout container">{children}</div>
        </main>
      </div>
    </>
  );
};
