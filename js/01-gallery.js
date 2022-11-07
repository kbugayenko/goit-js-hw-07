import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector(".gallery");

galleryEl.addEventListener("click", onClickGallery);

const markup = galleryItems
  .map(
    ({ original, preview, description }) =>
      `
    <div class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img
              class="gallery__image"
              src="${preview}"
              data-source="${original}"
              alt="${description}"
            />
        </a>
    </div>
    `
  )
  .join("");

galleryEl.insertAdjacentHTML("beforeend", markup);

function onClickGallery(evt) {
  evt.preventDefault();

  if (evt.target.className == "gallery__image") {
    basicLightbox
      .create(
        `
        <img src="${evt.target.dataset.source}" width="800" height="600">
        `
      )
      .show();
  }
}
