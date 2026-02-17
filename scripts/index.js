const EditProfileBtn = document.querySelector(".profile__edit-btn");
const EditProfileModal = document.querySelector("#edit-profile-modal");
const EditProfileCloseBtn = EditProfileModal.querySelector(".modal__close-btn");
const EditProfileNameInput = EditProfileModal.querySelector(
  "#profile-name-input",
);
const EditProfileDescriptionInput = EditProfileModal.querySelector(
  "#profile-description-input",
);

const NewPostBtn = document.querySelector(".profile__add-btn");
const NewPostModal = document.querySelector("#new-post-modal");
const NewPostCloseBtn = NewPostModal.querySelector(".modal__close-btn");

const ProfileNameEl = document.querySelector(".profile__name");
const ProfileDescriptionEl = document.querySelector(".profile__description");

EditProfileBtn.addEventListener("click", function () {
  EditProfileNameInput.value = ProfileNameEl.textContent;
  EditProfileDescriptionInput.value = ProfileDescriptionEl.textContent;
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
