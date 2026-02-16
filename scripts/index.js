const EditProfileBtn = document.querySelector(".profile__edit-btn");
const EditProfileModal = document.querySelector("#edit-profile-modal");
const EditProfileCloseBtn = document.querySelector(".modal__close-btn");

const NewPostBtn = document.querySelector(".profile__add-btn");
const NewPostModal = document.querySelector("#new-post-modal");
const NewPostCloseBtn = document.querySelector(".modal__close-btn");

EditProfileBtn.addEventListener("click", function () {
  EditProfileModal.classList.add("modal_is-opened");
});

EditProfileCloseBtn.addEventListener("click", function () {
  EditProfileModal.classList.remove("modal_is-opened");
});

NewPostBtn.addEventListener("click", function () {
  NewPostModal.classList.add("modal_is-opened");
});

NewPostCloseBtn.addEventListener("click", function () {
  NewPostModal.classList.remove("modal_is-opened");
});
