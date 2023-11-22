// Content script
console.log("aiop sado fauiops fuipas fipas");
let a = false;
let b = false;
function handleDynamicElement(element) {
    if (document.visibilityState === "visible") {
        element ? window.open(element.href) : console.log("href not found");
        var activity = document.querySelector(
            'a#activityTab__item[data-tab-value="activityTab"]'
        );
        const caseNumElement = document.querySelector(
            'lightning-formatted-text[slot="outputField"]'
        );

        if (caseNumElement) {
            const caseNumber = caseNumElement.textContent.trim();
            let buttonsWithTitle = document.querySelectorAll(
                `button[title="Close ${caseNumber} | Case"]`
            );
            buttonsWithTitle = [...buttonsWithTitle][0];
            document.addEventListener("keydown", (event) => {
                if (event.code == "KeyW") {
                    a = false;
                    b = false;
                    buttonsWithTitle.click();
                }
            });
        }
        activity.click();
        const pop = setInterval(() => {
            const post = document.querySelector(
                'a[data-tab-name="FeedItem.TextPost"][aria-selected="false"]'
            );
            if (post) {
                post.click();
                clearInterval(pop);
            }
        }, 100);
        if (!a) {
            a = true;
            const foo = setInterval(() => {
                const targetButton = document.querySelector(
                    'button[tabindex="-1"][type="button"][title="Image"].slds-button.image.slds-button_icon-border-filled'
                );
                if (targetButton) {
                    targetButton.click();
                    clearInterval(foo);
                }
            }, 100);
        }
        if (!b) {
            b = true;
            const bar = setInterval(() => {
                const targetBtn = document.querySelector(
                    'button[type="button"].slds-button.slds-button--neutral.attachButton.slds-button.slds-button-neutral.slds-truncate.uiButton[aria-label=""]'
                );
                if (targetBtn) {
                    targetBtn.click();
                    clearInterval(bar);
                }
            }, 100);
        }
    }
}
console.log("aiop sado fauiops fuipas fipas");

function observeDynamicElements() {
    var observer = new MutationObserver(function (mutationsList) {
        for (var mutation of mutationsList) {
            if (mutation.type === "childList") {
                var addedNodes = mutation.addedNodes;
                for (var i = 0; i < addedNodes.length; i++) {
                    var addedNode = addedNodes[i];
                    if (
                        addedNode.tagName === "LIGHTNING-FORMATTED-URL" &&
                        addedNode.getAttribute("data-output-element-id") ===
                            "output-field"
                    ) {
                        handleDynamicElement(addedNode.querySelector("a"));
                    }
                }
            }
        }
    });

    observer.observe(document.body, { childList: true, subtree: true });
}

// Start observing the DOM for changes and target dynamically generated elements
observeDynamicElements();
