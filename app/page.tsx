import Nav from "@/app/components/nav";
import Header from "@/app/components/header";
import  Gallery from "@/app/components/gallery";
import Infos from "@/app/components/infos";
import Reservation from "@/app/components/reservation";
import Footer from "@/app/components/footer";


export default function Home() {
  return (
  
      <>
      
        <Nav />
        <Header />
        <Gallery/>
        <Infos surface={0} Wi-Fi={true} Bathrooms={10} Bedrooms={15} hasPool={true} hasKitchen={true} />
        <Reservation />
        <Footer />
          
      </>

  );
}
