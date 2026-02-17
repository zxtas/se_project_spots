const EditProfileBtn = document.querySelector(".profile__edit-btn");
const EditProfileModal = document.querySelector("#edit-profile-modal");
const EditProfileCloseBtn = EditProfileModal.querySelector(".modal__close-btn");
const EditProfileForm = EditProfileModal.querySelector(".modal__form");
const EditProfileNameInput = EditProfileModal.querySelector(
  "#profile-name-input",
);
const EditProfileDescriptionInput = EditProfileModal.querySelector(
  "#profile-description-input",
);

const ProfileNameEl = document.querySelector(".profile__name");
const ProfileDescriptionEl = document.querySelector(".profile__description");

const NewPostBtn = document.querySelector(".profile__add-btn");
const NewPostModal = document.querySelector("#new-post-modal");
const NewPostCloseBtn = NewPostModal.querySelector(".modal__close-btn");

const NewPostForm = NewPostModal.querySelector(".modal__form");

const NewPostImageLinkInput = NewPostModal.querySelector("#card-image-input");
const NewPostCaptionInput = NewPostModal.querySelector(
  "#profile-description-input",
);

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

function HandleEventListenerSubmit(evt) {
  evt.preventDefault();
  ProfileNameEl.textContent = EditProfileNameInput.value;
  ProfileDescriptionEl.textContent = EditProfileDescriptionInput.value;
  EditProfileModal.classList.remove("modal_is-opened");
}

EditProfileForm.addEventListener("submit", HandleEventListenerSubmit);

function HandleNewPostEventListenerSubmit(evt) {
  evt.preventDefault();
  console.log(NewPostImageLinkInput);
  console.log(NewPostCaptionInput);
  NewPostModal.classList.remove("modal_is-opened");
}

NewPostForm.addEventListener("submit", HandleNewPostEventListenerSubmit);
