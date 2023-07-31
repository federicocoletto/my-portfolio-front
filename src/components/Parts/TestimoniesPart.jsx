import { useEffect } from "react";
import { useForm } from "react-hook-form";
import '../styles/Parts/TestimoniesPart.css'
import { useDispatch, useSelector } from "react-redux";
import { createTestimonyThunk, deleteTestimonyThunk, getAllTestimoniesThunk } from "../../store/slices/testimonies.slice";

const TestimoniesPart = () => {
	const { handleSubmit, register, reset } = useForm();
	const dispatch = useDispatch()
	const testimonies = useSelector(states => states.testimonies)

	useEffect(() => {
		dispatch(getAllTestimoniesThunk())
	}, []);

	console.log(testimonies)

	const submit = (data) => {
		dispatch(createTestimonyThunk(data))
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
					<a className='part__subtitle testimonies' href="https://documenter.getpostman.com/view/28658126/2s9XxtzGEo">Documentación en Postman</a>
				</div>
				<form className="testimonies__form" onSubmit={handleSubmit(submit)} >
					<div className="form__input name">
						<input type="text" {...register('name')} id='name' placeholder="Name" />
					</div>
					<div className="form__input comment">
						<input type="text" {...register('comment')} id='comment' placeholder="Comment" />
					</div>
					<div className="form__button">
						<button>Añadir testimonio</button>
					</div>
				</form>
				<footer className='part__footer testimonies__cards'>
					{
						testimonies?.map((testimony, index) => (
							<div key={index} className="testimony__card">
								<h2 className="testimony__name">{testimony.name}</h2>
								<p className="testimony__comment part__text">{testimony.comment}</p>
								<button className="testimony__button delete"  onClick={() => dispatch(deleteTestimonyThunk(testimony))}><i className="fa-solid fa-trash"></i></button>
							</div>
						))
					}
				</footer>
			</div>
		</div>
	)
};

export default TestimoniesPart;
