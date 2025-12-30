import React from "react";
import { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {

	const [text, setText] = useState("")
	const [array, setArray] = useState([])

	const crearLista = () => {
		if (text.trim() === "") return;
		setArray(prev => [...prev, text])
		setText("");
	}
	const añadirEnter = (e) => {
		if (e.key === "Enter") {
			crearLista();
		}
	};

	const borrarTexto = (index) => {
		setArray((prev) => prev.filter((_, i) => i !== index));
	};

	return (
		<div className="container text-center" style={{ width: "14rem", height: "14rem" }}>
			<div className="titulo">
				<h1>Crear Tareas</h1>

				<div>
					<input
						type="text"
						value={text}
						onChange={(e) => setText(e.target.value)}
						onKeyUp={añadirEnter} />

				</div>
				<button onClick={() => crearLista()}>Agregar</button>
				{array.length === 0 ? (<p><strong>No hay tareas pendientes</strong></p>) : (
					array.map((item, index) => (
						<div key={index} className="task-item">
							<span>{index + 1}. {item}</span>
							<button
								className="delete-btn"
								onClick={() => borrarTexto(index)}>×</button>
						</div>
					))
				)}
			</div>
		</div>
	);
};

export default Home;
