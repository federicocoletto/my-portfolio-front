import { useState } from "react";
import { useForm } from "react-hook-form";
import '../styles/Parts/TestimoniesPart.css'

const TestimoniesPart = () => {
	const { handleSubmit, register, reset } = useForm();
	const [testimonies, setTestimonies] = useState([]);

	const addTestimonies = (name, comment) => {
		const newTestimony = { name, comment, zIndex: 0 }
		setTestimonies([...testimonies, newTestimony])
	}

	const submit = (data) => {
		const newName = data.name
		const newComment = data.comment
		addTestimonies(newName, newComment)
		reset({
			name: '',
			comment: ''
		})
	}
	
	return (
		<div id="testimonies" className="part testimonies">
			<div className="part__container testimonies">
				<div className="part__header testimonies">
					<h2 className='part__title testimonies'>Testomonios</h2>
				</div>
				<form className="testimonies__form" onSubmit={handleSubmit(submit)} >
					<div className="form__input name">
						<input type="text" {...register('name')} id='name' placeholder="Name" />
					</div>
					<div className="form__input comment">
						<input type="text" {...register('comment')} id='comment' placeholder="Comment" />
					</div>
					<div className="form__button">
						<button>Agregar testimonio</button>
					</div>
				</form>
				<footer className='part__footer testimonies__cards'>
						{
							testimonies.map((testimony, index) => (
								<div key={index} className="testimony__card">
									<h2 className="testimony__name">{testimony.name}</h2>
									<p className="testimony__comment part__text">{testimony.comment}</p>
								</div>
							))
						}
				</footer>
			</div>
		</div>
	)
};

export default TestimoniesPart;
