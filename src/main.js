import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";


const searchFormEl = document.querySelector('.search-form');

const galleryEl = document.querySelector('.gallery');

const loader = document.querySelector('.loader');
console.dir(loader);

  loader.style.display = 'none';

const createGalleryCardTemplate = imgİnfo => {
    return `
    <li class='gallery-card'>
    <a class='gallery-link' href='${imgİnfo.largeImageURL}'>
    <img class='galley-img' src='${imgİnfo.webformatURL}' alt='${imgİnfo.tags}' width='360'  '/>
    </a>
    <div class='description'>
    <p>Likes: ${imgİnfo.likes}</p>
    <p>Views: ${imgİnfo.views}</p> 
    <p>Comments: ${imgİnfo.comments}</p>
    <p> Downloads: ${imgİnfo.downloads}</p>
    </div>
    </li>
    `;
};



const onSearchFormSubmit = event => {
    event.preventDefault();
    
    loader.style.display = 'inline-block';
    
    const searchedQuery = event.currentTarget.elements.search_input.value.trim();
    if (searchedQuery==='') {
       iziToast.warning({
    title: 'Caution',
    message: 'You forgot to full fill searching area',
       }); 
        return;
    }

    

    fetch(`https://pixabay.com/api/?key=48282241-c94e9d668c7a92092d53abf55&q=${searchedQuery}&per_page=9&image_type=photo&orientation=horizontal&safesearch=true`) 
    .then(response => {
  
        console.log(response);

        if (!response.ok) {
            throw new Error(response.status);
        }
      

        return response.json();
    })
        .then(data => {
            if (data.hits.length===0) {
                 iziToast.error({
    title: 'Error',
    message: "Sorry, there are no images matching your search query. Please try again!",
                 });
                galleryEl.innerHTML = '';
                searchFormEl.reset();
                return;
            }
        
            const galleryTemplate = data.hits.map(el => createGalleryCardTemplate(el)).join('');
            galleryEl.innerHTML = galleryTemplate;

            const gallerySLB = new SimpleLightbox('.gallery a', {captionsData: 'alt',
        captions: true,
        captionDelay: 250,});
            gallerySLB.refresh();
       
    })
    .catch(err => {
        if (err.message === '404') {
              iziToast.error({
    title: 'Error',
    message: "Sorry, there are no images matching your search query. Please try again!",
});
        }
        console.log(err);
    });

    console.dir(searchedQuery);

}

searchFormEl.addEventListener('submit', onSearchFormSubmit);