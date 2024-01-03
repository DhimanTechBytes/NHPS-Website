function showAlert() {
    alert("Google Form Link can be added later");
}

// Function to open the modal on page load
function openModalOnLoad() {
    var modal = document.getElementById("myModal");
    modal.style.display = "flex";
}

// Function to close the modal
function closeModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
}

// Close the modal if the user clicks outside of it
window.onclick = function (event) {
    var modal = document.getElementById("myModal");
    if (event.target == modal) {
        closeModal();
    }
}

// Call openModalOnLoad when the page is fully loaded
window.onload = function () {
    openModalOnLoad();
}