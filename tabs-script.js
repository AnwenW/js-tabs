// get tabs div (to search inside instead of entire document) buttons and panels
const tabs = document.querySelector('.tabs');
const tabButtons = tabs.querySelectorAll('[role="tab"]');

// get tabPanels (nodelist) as an array:
const tabPanels = Array.from(tabs.querySelectorAll('[role="tabpanel"]'));

function handleTabClick(event) {

    // hide all tab panels
    tabPanels.forEach(panel => {
        panel.hidden = true;
    })

    // mark all tabs as unselected
    tabButtons.forEach(tab => {
        tab.setAttribute('aria-selected', false);
    })

    // mark the clicked tab as selected
    event.currentTarget.setAttribute('aria-selected', true);

    // find the associated tabPanel and show it!
    const id = event.currentTarget.id;
    const tabPanel = tabPanels.find(panel => panel.getAttribute('aria-labelledby') === id);
    tabPanel.hidden = false;
}

tabButtons.forEach(button => button.addEventListener('click', handleTabClick));