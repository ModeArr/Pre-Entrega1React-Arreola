import { useState } from "react";

const ItemCount = () => {
    const [contador, setContador] = useState(1)

    const addToCart = () => {
        console.log("Se agrego inventrio")
    }

    return(
        <div className="mt-4 flex justify-center im sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
            <div className="flex items-center border-gray-100 justify-center">
                <span className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50" onClick={() => contador > 1 ? setContador(contador - 1) : console.log("No puedes tener articulos negativos")}>-</span>
                <input value={contador} max={5} type="number" className="h-8 w-8 border bg-white text-center text-xs outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none" />
                <span className="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50" onClick={() => setContador(contador + 1)}>+</span>
            </div>
            <div className="flex items-center space-x-1.5 rounded-lg bg-blue-500 px-4 py-1.5 text-white duration-100 hover:bg-blue-600 justify-center">
                    <button className="text-sm" onClick={addToCart}>Agregar al carrito</button>
            </div>
        </div>
    )
}

export default ItemCount