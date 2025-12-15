import React from "react";
import { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {

	const [text, setText] = useState("")
	const [array, setArray] = useState([])

    const crearLista = () =>{
		if (text.trim() === "") return;
		setArray(prev => [...prev, text])
		setText("");
	}
		
	return (
		<div className="container text-center  width=14rem height=14rem ">
			<h1>Crear Tareas</h1>
			<input
			type="text"
			value={text}
			onChange={(e) => setText(e.target.value)}
			/>	

			<button onClick={() => crearLista()}>Agregar</button>

				{array.map((item, index)=>{
					return(
						<div key={index}>
							<span>{index +1}. {item}</span>
						</div>
					)
				})
			}
		</div>
	);
};

export default Home;