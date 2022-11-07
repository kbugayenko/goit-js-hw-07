import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector(".gallery");

galleryEl.addEventListener("click", onClickGallery);

const markup = galleryItems
  .map(
    ({ original, preview, description }) =>
      `
    <a class="gallery__item" style="display: block" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" />
    </a>
`
  )
  .join("");

galleryEl.insertAdjacentHTML("beforeend", markup);

let gallery = new SimpleLightbox(".gallery a", {
  captions: true,
  captionSelector: "img",
  captionsData: "alt",
  captionDelay: 250,
  captionPosition: "bottom",
});

function onClickGallery(evt) {
  evt.preventDefault();
  gallery.on("show.simplelightbox", function () {});
}
