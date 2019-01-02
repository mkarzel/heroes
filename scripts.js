
window.onload = function () {
    // Get the modal
    const modal = document.getElementById('myModal');

    // Get the hero that opens the modal
    const hero = document.getElementById("myHero");

    // Get the <span> element that closes the modal
    const span = document.getElementsByClassName("close")[0];

    let buttonModal = document.getElementById("buttonModal");

    // When the user clicks the button, open the modal 
    hero.onclick = function () {
        modal.style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
    span.onclick = function () {
        modal.style.display = "none";
    }

    // When the user clicks on the button, close the modal
    buttonModal.onclick = function () {
        modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    
};