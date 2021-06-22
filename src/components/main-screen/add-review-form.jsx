import React from 'react';

const RATINGS_COUNT = 5;

const AddReviewForm = () => {

  const ratingValues = Array.from({length: RATINGS_COUNT}, (_, i) => i + 1);

  return (
    <React.Fragment>
      <form className="add-review-form" action="#" method="post">
        <h2 className="add-review-form__title">Оставить отзыв</h2>
        <p className="add-review-form__text">Пожалуйста, заполните поле</p>
        <div className="add-review-form__section">
          <div className="add-review-form__field">
            <input className="add-review-form__input" type="text" placeholder="Имя" name="user-name" id="user-name"required autoFocus/>
            <label className="add-review-form__label visually-hidden" htmlFor="user-name" >Имя</label>
          </div>
          <div className="add-review-form__field">
            <input className="add-review-form__input" type="text" placeholder="Достоинства" name="advantages" id="advantages"/>
            <label className="add-review-form__label visually-hidden" htmlFor="advantages" >Достоинства</label>
          </div>
          <div className="add-review-form__field">
            <input className="add-review-form__input" type="text" placeholder="Недостатки" name="disadvantages" id="disadvantages"/>
            <label className="add-review-form__label visually-hidden" htmlFor="disadvantages" >Недостатки</label>
          </div>
        </div>

        <div className="add-review-form__section">
          <div className="add-review-form__rating-stars">
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
            <textarea className="add-review-form__textarea" name="review-text" id="review-text" placeholder="Комментарий" required/>
          </div>
        </div>

        <div className="add-review-form__submit">
          <button className="add-review-form__btn" type="submit">Оставить отзыв</button>
        </div>
      </form>
    </React.Fragment>
  );
};

export default AddReviewForm;
