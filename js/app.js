document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');

  const comicForm = document.querySelector('#new-comic-form');

  const deleteButton = document.querySelector('#delete-all-button');

  const handelDeleteButton = function(event){
    const comicBookList = document.querySelector('#comic-list');
    comicBookList.innerHTML = '';
  }

  deleteButton.addEventListener('click', handelDeleteButton);

  const handelFormSubmit = (event) => {
    event.preventDefault()
    const comicName = event.target.comicName.value;
    const issue = event.target.issue.value;
    const publisher = event.target.publisher.value;
    const price = event.target.price.value;
    const rating = event.target.rating.value;
    const opinion = event.target.opinion.value

    const comicBookList = document.querySelector('#comic-list');

    const comicBookDetails = document.createElement('div');
    const comicNamePara = document.createElement('p');
    const issuePara = document.createElement('p');
    const publisherPara = document.createElement('p');
    const pricePara = document.createElement('p');
    const ratingPara = document.createElement('p');
    const opinionPara = document.createElement('p');

    comicNamePara.textContent = `Comic name: ${comicName}`;
    issuePara.textContent = `Issue/Volume Number: ${issue}`;
    publisherPara.textContent = `Publisher: ${publisher}`;
    pricePara.textContent = `Price: £${price}`;
    ratingPara.textContent = `Rating: ${rating}`;
    opinionPara.textContent = `Opinion: ${opinion}`;

    comicBookDetails.appendChild(comicNamePara);
    comicBookDetails.appendChild(issuePara);
    comicBookDetails.appendChild(publisherPara);
    comicBookDetails.appendChild(pricePara);
    comicBookDetails.appendChild(ratingPara);
    comicBookDetails.appendChild(opinionPara);

    comicBookList.appendChild(comicBookDetails);

    comicForm.reset();
  }

  comicForm.addEventListener('submit', handelFormSubmit);




})
