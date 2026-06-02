
import { useReducer, useState } from 'react';

const initialState = { nombre: '', email: '', mensaje: '' };

function reducer(state, action) {
	switch (action.type) {
		case 'ACTUALIZAR_CAMPO':
			return { ...state, [action.campo]: action.valor };
		case 'RESET':
			return initialState;
		default:
			return state;
	}
}

export default function ContactPage() {
	const [form, dispatch] = useReducer(reducer, initialState);
	const [errores, setErrores] = useState({});
	const [enviado, setEnviado] = useState(false);

	const validarCampo = (name, value) => {
		switch (name) {
			case 'nombre':
				if (!value.trim()) return 'El nombre es requerido';
				return '';
			case 'email':
				if (!value.trim()) return 'El email es requerido';
				if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(value)) return 'Email inválido';
				return '';
			case 'mensaje':
				if (!value.trim()) return 'El mensaje es requerido';
				if (value.trim().length < 10) return 'Mensaje demasiado corto';
				return '';
			default:
				return '';
		}
	};

	const handleChange = (e) => {
		const { name, value } = e.target;
		dispatch({ type: 'ACTUALIZAR_CAMPO', campo: name, valor: value });
	};

	const handleBlur = (e) => {
		const { name, value } = e.target;
		setErrores((prev) => ({ ...prev, [name]: validarCampo(name, value) }));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const nuevosErrores = {};
		Object.keys(form).forEach((k) => {
			const err = validarCampo(k, form[k]);
			if (err) nuevosErrores[k] = err;
		});

		setErrores(nuevosErrores);
		if (Object.keys(nuevosErrores).length === 0) {
			setEnviado(true);
			setTimeout(() => {
				setEnviado(false);
				dispatch({ type: 'RESET' });
			}, 2000);
		}
	};

	return (
		<div className="container mt-5">
			<h2>Contacto</h2>

			<div className="mb-3">
				<h5>Correo</h5>
				<p>ymilagroscordoba@gmail.com</p>
			</div>

			<div className="mb-3">
				<h5>GitHub</h5>
				<p>ymilagroscordoba-sys</p>
			</div>

			<form onSubmit={handleSubmit} noValidate>
				<div className="mb-3">
					<label className="form-label">Nombre</label>
					<input
						name="nombre"
						value={form.nombre}
						onChange={handleChange}
						onBlur={handleBlur}
						className={`form-control ${errores.nombre ? 'is-invalid' : form.nombre ? 'is-valid' : ''}`}
					/>
					{errores.nombre && <div className="invalid-feedback">{errores.nombre}</div>}
				</div>

				<div className="mb-3">
					<label className="form-label">Email</label>
					<input
						name="email"
						value={form.email}
						onChange={handleChange}
						onBlur={handleBlur}
						className={`form-control ${errores.email ? 'is-invalid' : form.email ? 'is-valid' : ''}`}
					/>
					{errores.email && <div className="invalid-feedback">{errores.email}</div>}
				</div>

				<div className="mb-3">
					<label className="form-label">Mensaje</label>
					<textarea
						name="mensaje"
						value={form.mensaje}
						onChange={handleChange}
						onBlur={handleBlur}
						className={`form-control ${errores.mensaje ? 'is-invalid' : form.mensaje ? 'is-valid' : ''}`}
						rows={4}
					/>
					{errores.mensaje && <div className="invalid-feedback">{errores.mensaje}</div>}
				</div>

				<div>
					<button className="btn btn-primary me-2" type="submit">Enviar</button>
				</div>
			</form>

			{enviado && <div className="alert alert-success mt-3">Mensaje enviado correctamente (simulado)</div>}
		</div>
	);
}
