class FeedbackPage extends React.Component {

	render() {
		return (
			<div className="content-news">
				<div className="main feedback-form">
					<h2 className="feedback-form__title">Feedback</h2>

					<p className="feedback-form__text">If you have any questions for me or you
						want to order in my site please fill in the form below:</p>

					<form name="feedback" method="post">
						{ /* We have 3 fields with the same styles. Such as: name, email, question
						 	 But we have 3 different elements for this form fields.

						 	 The second problem:
						 	 WHat mean feedback-form__input-color modificator for feedback-form__name element?
						 */ }
						<input className="feedback-form__input feedback-form__name feedback-form__input-color" type="text" placeholder="Name"/>

						<input className="feedback-form__input feedback-form__e-mail feedback-form__input-color" type="text"
							   placeholder="e-mail"/>

						<textarea name="comment" className="feedback-form__input feedback-form__input--textarea feedback-form__question" placeholder="Question"></textarea>

						<div className="cf">
							<input type="button" value="Send" className="feedback-form__input-send feedback-form__input"/>
							<input type="button" value="Clean" className="feedback-form__input-clean feedback-form__input"/>
						</div>
					</form>
				</div>
			</div>
		);
	}
}

export default FeedbackPage;














