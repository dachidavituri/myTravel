import Header from "&/base/header";
import Footer from "&/base/footer";
import PageOutlet from "&/base/page-outlet";
const Layout: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col w-full">
      <Header />
      <PageOutlet>
        <div>hello</div>
      </PageOutlet>
      <Footer />
    </div>
  );
};
export default Layout;
