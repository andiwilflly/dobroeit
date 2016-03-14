class FeedbackPage extends React.Component {

	render() {
		return (
			<div className="content-news">
				<div className="main feedback-form">
					<h2 className="feedback-form__title">Feedback</h2>

					<p className="feedback-form__text">If you have any questions for me or you
						want to order in my site please fill in the form below:</p>

					<form name="feedback" method="post">

						<input className="feedback-form__input feedback-form__input--color" type="text"
							   placeholder="Name"/>

						<input className="feedback-form__input feedback-form__input--color" type="text"
							   placeholder="e-mail"/>

						<textarea name="comment"
								  className="feedback-form__input feedback-form__input--textarea feedback-form__input--color"
								  placeholder="Question">
						</textarea>

						<div className="cf">
							<input type="button" value="Send"
								   className="feedback-form__button--send feedback-form__button"/>
							<input type="button" value="Clean"
								   className="feedback-form__button--clean feedback-form__button"/>
						</div>
					</form>
				</div>
			</div>
		);
	}
}

export default FeedbackPage;














