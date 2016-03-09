class FeedbackPage extends React.Component {

	render() {
		return (
			<div className="main feedback-form">
				<div className="feedback feedback-form__feedback">
					<h2 className="feedback-form__title">Feedback</h2>

					<h2 className="feedback-form__title feedback-form__title-align-left">Feedback 2</h2>
				</div>

				<h2 className="feedback-form__title feedback-form__title-color-primary">Feedback 2</h2>
				<p className="feedback-form__text">If you have any questions for me or you want to order in my site please fill in the form below:</p>
				<p className="feedback-form__text feedback-form__text-bordered">If you have any questions for me or you want to order in my site please fill in the form below:</p>

				<form name="feedback" method="post">

					<input className="name" type="text" placeholder="Name" />

					<input className="e-mail" type="text" placeholder="e-mail" />

					<textarea name="comment" className="question" placeholder="Question"></textarea>

					<div className="buttons-form cf">
						<input type="submit" value="Send" className="send" />
						<input type="button" value="Clean" className="clean" />
					</div>
				</form>
			</div>
		);
	}
}

export default FeedbackPage;














