import React from "react"

function Card({name, btnText="Visit me"}){
    console.log(name);
    
    return(
        <>
            <div
            className="bg-white shadow-[0_4px_12px_-5px_rgba(0,0,0,0.4)] w-full max-w-sm rounded-lg overflow-hidden mx-auto mt-4">
            <div className="aspect-[3/2]">
                <img src="https://readymadeui.com/Imagination.webp" className="w-full h-full object-cover" alt="Card image" />
            </div>

            <div className="p-6">
                <h3 className="text-slate-900 text-xl font-semibold">{name}</h3>
                <p className="mt-3 text-sm text-slate-500 leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor auctor
                arcu,
                at fermentum dui. Maecenas Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor auctor arcu,
                at fermentum dui. Maecenas.
                </p>
                <button type="button"
                className="mt-6 px-5 py-2.5 rounded-lg text-white text-sm font-medium tracking-wider border-none outline-none bg-blue-600 hover:bg-blue-700 active:bg-blue-600">{btnText}</button>
            </div>
            </div>
        </>
    )
}

export default Card;