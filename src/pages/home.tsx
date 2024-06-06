import CarroselEstrutura from "../components/carrosel/carroselEstrutura";
import Menu from "../components/menu";

function Home() {
  return (
    <div className="bg-standard-white w-full h-screen">
      <Menu/>
      Home
      <CarroselEstrutura/>
    </div>
  )
}

export default Home;