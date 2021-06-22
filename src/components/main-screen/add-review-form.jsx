import React, {useRef, useEffect, useState} from 'react';
import PropTypes from 'prop-types';

const MOUSE_DOWN = `mousedown`;

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

const RATINGS_COUNT = 5;

const AddReviewForm = (props) => {

  const {isVisible, handleClose} = props;

  const [name, setName] = useState(``);
  const [pros, setPros] = useState(``);
  const [cons, setCons] = useState(``);
  const [rating, setRating] = useState(RATINGS_COUNT);
  const [comment, setComment] = useState(``);

  const onNameChange = (evt) => setName(evt.target.value);
  const onProsChange = (evt) => setPros(evt.target.value);
  const onConsChange = (evt) => setCons(evt.target.value);
  const onRatingChange = (evt) => setRating(evt.target.value);
  const onCommentChange = (evt) => setComment(evt.target.value);

  const ref = useRef();

  const inputEl = useRef(null);

  useOnClick(ref, () => handleClose(false));

  useEffect(() => {
    inputEl.current.focus();
  }, []);

  const hiddenClassName = isVisible ? `reviews__form-wrapper--display-block` : `reviews__form-wrapper--display-none`;

  const ratingValues = Array.from({length: RATINGS_COUNT}, (_, i) => i + 1);

  const handleFormSubmit = (evt) => {
    evt.preventDefault();
    localStorage.setItem(`name`, name);
    localStorage.setItem(`pros`, pros);
    localStorage.setItem(`cons`, cons);
    localStorage.setItem(`rating`, rating);
    localStorage.setItem(`comment`, comment);
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
                <input className="add-review-form__input add-review-form__input--required" type="text" placeholder="Имя" name="user-name" id="user-name"required autoFocus={true} ref={inputEl} onChange={onNameChange}/>
                <label className="add-review-form__label visually-hidden" htmlFor="user-name" >Имя</label>
              </div>
              <div className="add-review-form__field">
                <input className="add-review-form__input" type="text" placeholder="Достоинства" name="advantages" id="advantages" onChange={onProsChange}/>
                <label className="add-review-form__label visually-hidden" htmlFor="advantages" >Достоинства</label>
              </div>
              <div className="add-review-form__field">
                <input className="add-review-form__input" type="text" placeholder="Недостатки" name="disadvantages" id="disadvantages" onChange={onConsChange}/>
                <label className="add-review-form__label visually-hidden" htmlFor="disadvantages" >Недостатки</label>
              </div>
            </div>

            <div className="add-review-form__section">
              <div className="add-review-form__rating-stars" onChange={onRatingChange}>
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
                <textarea className="add-review-form__textarea add-review-form__input--required" name="review-text" id="review-text" placeholder="Комментарий" required onChange={onCommentChange}/>
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
};

export default AddReviewForm;
