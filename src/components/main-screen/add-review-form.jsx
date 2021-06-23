import React, {useRef, useEffect, useState} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {ActionCreator} from '../../store/action';
import {Rating} from '../../const';

const MOUSE_DOWN = `mousedown`;

const RATINGS_COUNT = 5;

function useOnClick(ref, handler) {
  useEffect(() => {
    const listener = (event) => {
      // Do nothing if clicking ref's element or descendent elements
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }

      handler(event);
    };

    document.addEventListener(MOUSE_DOWN, listener);

    return () => {
      document.removeEventListener(MOUSE_DOWN, listener);
    };
  }, []); // Empty array ensures that effect is only run on mount and unmount
}

const AddReviewForm = (props) => {

  const {isVisible, handleClose, onReviewSubmit} = props;

  const [review, setReview] = useState({
    name: ``,
    pros: ``,
    cons: ``,
    rating: Rating.FIVE,
    comment: ``,
  });

  const setName = (evt) => {
    setReview({...review, name: evt.target.value});
    localStorage.setItem(`name`, evt.target.value);
  };
  const setPros = (evt) => {
    setReview({...review, pros: evt.target.value});
    localStorage.setItem(`pros`, evt.target.value);
  };
  const setCons = (evt) => {
    setReview({...review, cons: evt.target.value});
    localStorage.setItem(`cons`, evt.target.value);
  };
  const setRating = (evt) => {
    setReview({...review, rating: evt.target.value});
    localStorage.setItem(`rating`, evt.target.value);
  };
  const setComment = (evt) => {
    setReview({...review, comment: evt.target.value});
    localStorage.setItem(`comment`, evt.target.value);
  };

  const ref = useRef();

  const inputEl = useRef(null);

  useOnClick(ref, () => handleClose(false));

  useEffect(() => {
    inputEl.current.focus();
    const reviewName = localStorage.getItem(`name`);
    const pros = localStorage.getItem(`pros`);
    const cons = localStorage.getItem(`cons`);
    const rating = localStorage.getItem(`rating`);
    const comment = localStorage.getItem(`comment`);
    setReview({
      ...review,
      name: reviewName,
      pros,
      cons,
      rating,
      comment
    });
  }, []);

  const hiddenClassName = isVisible ? `reviews__form-wrapper--display-block` : `reviews__form-wrapper--display-none`;

  const ratingValues = Array.from({length: RATINGS_COUNT}, (_, i) => i + 1);

  const handleFormSubmit = (evt) => {
    evt.preventDefault();
    onReviewSubmit(review);
    handleClose();
  };

  return (
    <React.Fragment>
      <div className={`reviews__form-wrapper ${hiddenClassName}`}>
        <form ref={ref} className="reviews__form add-review-form" action="#" method="post" onSubmit={handleFormSubmit}>
          <button className="add-review-form__btn-close" type="button" aria-label="Закрыть попап" onClick={handleClose}>
            <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M13.6399 15.0096L7.50482 8.86495L1.36977 15.0096L0 13.6399L6.14469 7.50482L0 1.36978L1.36977 0L7.50482 6.14469L13.6399 0.00964652L15 1.36978L8.86495 7.50482L15 13.6399L13.6399 15.0096Z" fill="#9F9E9E"/>
            </svg>
          </button>
          <h2 className="add-review-form__title">Оставить отзыв</h2>
          <p className="add-review-form__text">Пожалуйста, заполните поле</p>
          <div className="add-review-form__fields-wrapper">
            <div className="add-review-form__section add-review-form__section--first">
              <div className="add-review-form__field">
                <input className="add-review-form__input add-review-form__input--required" type="text" placeholder="Имя" name="user-name" id="user-name"required autoFocus={true} ref={inputEl} onChange={setName} value={review.name}/>
                <label className="add-review-form__label visually-hidden" htmlFor="user-name" >Имя</label>
              </div>
              <div className="add-review-form__field">
                <input className="add-review-form__input" type="text" placeholder="Достоинства" name="advantages" id="advantages" onChange={setPros} value={review.pros}/>
                <label className="add-review-form__label visually-hidden" htmlFor="advantages" >Достоинства</label>
              </div>
              <div className="add-review-form__field">
                <input className="add-review-form__input" type="text" placeholder="Недостатки" name="disadvantages" id="disadvantages" onChange={setCons} value={review.cons}/>
                <label className="add-review-form__label visually-hidden" htmlFor="disadvantages" >Недостатки</label>
              </div>
            </div>

            <div className="add-review-form__section">
              <div className="add-review-form__rating-stars" onChange={setRating}>
                <p className="add-review-form__rating-text">Оцените товар:</p>
                {
                  ratingValues.map((value) => (
                    <React.Fragment key={`star-${value}`}>
                      <input className="add-review-form__rating-input" id={`star-${value}`} type="radio" name="rating" value={value}/>
                      <label className="add-review-form__rating-label" htmlFor={`star-${value}`}>Rating {value}</label>
                    </React.Fragment>
                  ))
                }
              </div>
              <div className="add-review-form__comment">
                <textarea className="add-review-form__textarea add-review-form__input--required" name="review-text" id="review-text" placeholder="Комментарий" required onChange={setComment} value={review.comment}/>
              </div>
            </div>
          </div>

          <button className="add-review-form__btn-submit" type="submit">Оставить отзыв</button>
        </form>
      </div>
    </React.Fragment>
  );
};

AddReviewForm.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  onReviewSubmit: PropTypes.func.isRequired,
};


const mapDispatchToProps = (dispatch) => ({
  onReviewSubmit(review) {
    dispatch(ActionCreator.addReview(review));
  },
});

export {AddReviewForm};
export default connect(null, mapDispatchToProps)(AddReviewForm);
