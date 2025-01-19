import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import { createGalleryCardTemplate } from "./js/render-functions";
import { fetchByQuery } from "./js/pixabay-api";


const searchFormEl = document.querySelector('.search-form');

const galleryEl = document.querySelector('.gallery');

const loader = document.querySelector('.loader');
console.dir(loader);

  loader.style.display = 'inline-block';




const onSearchFormSubmit = event => {
    event.preventDefault();
    
    
    const searchedQuery = event.currentTarget.elements.search_input.value.trim();
    if (searchedQuery==='') {
       iziToast.warning({
    title: 'Caution',
    message: 'You forgot to full fill searching area',
       }); 
        return;
    };

    

   fetchByQuery(searchedQuery)
        .then(data => {
            if (data.hits.length===0) {
                 iziToast.error({
    title: 'Error',
    message: "Sorry, there are no images matching your search query. Please try again!",
                 });
                
                loader.style.display = 'inline-block';
                
                galleryEl.innerHTML = '';
                searchFormEl.reset();
                return;
            }
        
            const galleryTemplate = data.hits.map(el => createGalleryCardTemplate(el)).join('');
            galleryEl.innerHTML = galleryTemplate;

            loader.style.display = 'none';

            const gallerySLB = new SimpleLightbox('.gallery a', {captionsData: 'alt',
        captions: true,
            captionDelay: 250,
            });
           
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