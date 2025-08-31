import Nav from "@/components/nav";
import Header from "@/components/header";
import  Services from "@/components/Services";
import Infos from "@/components/infos";
import Contact from "@/components/Contact";
import Footer from "@/components/footer";


export default function Home() {
  return (
  
      <>
      
        <Nav />
        <Header />
        <Services/>
        <Infos surface={0} Wi-Fi={true} Bathrooms={10} Bedrooms={15} hasPool={true} hasKitchen={true} />
        <Contact />
        <Footer />
          
      </>

  );
}
