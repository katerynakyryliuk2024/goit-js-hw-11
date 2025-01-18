import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

fetch('https://pixabay.com/api/')
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

