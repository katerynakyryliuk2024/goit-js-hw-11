import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

fetch('https://pixabay.com/api/?key=48282241-c94e9d668c7a92092d53abf55&per_page=9&image_type=photo&orientation=horizontal&safesearch=true')
    .then(response => {
  console.log(response);

        if (!response.ok) {
            throw new Error(response.status);
        }
      

        return response.json();
    })
    .then(data => {
        console.log(data);
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

