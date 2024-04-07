import throttle from "lodash.throttle";

const feedbackForm = document.querySelector(".feedback-form");

const storedDataString = localStorage.getItem("feedback-form-state");
if (storedDataString) {
    const storedData = JSON.parse(storedDataString);
    feedbackForm.elements.email.value = storedData.email;
    feedbackForm.elements.message.value = storedData.message;
};

const localStorageUpdate = throttle ((inputData) => {
    localStorage.setItem("feedback-form-state", JSON.stringify(inputData));
},500);

feedbackForm.addEventListener("input", () => {
    const inputData = {
        email: feedbackForm.elements.email.value,
        message: feedbackForm.elements.message.value,
    };
    localStorageUpdate(inputData);
});

feedbackForm.addEventListener("submit", (evt) => {
    evt.preventDefault();
    const submittedData = {
        email: evt.target.elements.email.value,
        message: evt.target.elements.message.value
    };
        console.log(submittedData);

    localStorage.removeItem("feedback-form-state");
    feedbackForm.reset();
    });
