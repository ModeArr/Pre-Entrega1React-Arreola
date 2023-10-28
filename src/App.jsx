import NavBar from "./components/NavBar"
import ItemListContainer from "./components/ItemListContainer";

export const App = () => {
  return (
    <div className="">
      <NavBar />
      <div className="bg-gradient-to-r from-red-500 to-yellow-400 w-full h-screen">
      <ItemListContainer titulo={"Proximamente"} subtitulo={"Suscribete con tu correo y se el primero en enterarte"}/>
      </div>
    </div>
  )
}

export default App