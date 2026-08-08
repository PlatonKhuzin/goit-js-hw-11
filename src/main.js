import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import { getImagesByQuery } from "./js/pixabay-api.js";

import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from "./js/render-functions.js";

const form = document.querySelector(".form");
const input = form.elements["search-text"];

form.addEventListener("submit", event => {
  event.preventDefault();

  const query = input.value.trim();

  if (query === "") {
    return;
  }

  clearGallery();
  showLoader();

  getImagesByQuery(query)
    .then(response => {
      const images = response.data.hits;

      if (images.length === 0) {
        iziToast.error({
          message:
            "Sorry, there are no images matching your search query. Please try again!",
          position: "topRight",
        });

        return;
      }

      createGallery(images);
    })
    .catch(error => {
      console.log(error);

      iziToast.error({
        message: "Something went wrong. Please try again later.",
        position: "topRight",
      });
    })
    .finally(() => {
      hideLoader();
    });

  form.reset();
});