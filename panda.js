console.log("Panda.JS Is Running");
var clicked = false;
var openPopup = setInterval(() => {
    console.log("Panda.JS Is Running");
    const btn = document.querySelector(
        '[data-testid="vendor-info-more-info-btn"]'
    );
    console.log(btn);
    if (btn) {
        btn.click();
        clicked = true;
        console.log("Clicked");
    }
    if (clicked === true) {
        clearInterval(openPopup);
    }
}, 500);

document.addEventListener("keydown", (event) => {
    if (event.key === "Alt") {
        window.close();
    }
});
