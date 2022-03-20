// get tabs div (to search inside instead of entire document) buttons and panels
const tabs = document.querySelector('.tabs');
const tabButtons = tabs.querySelectorAll('[role="tab"]');

// const tabPanels = tabs.querySelectorAll('[role="tabpanel"]');
// instead get tabPanels nodelist as an array:
const tabPanels = Array.from(tabs.querySelectorAll('[role="tabpanel"]'));

function handleTabClick(event) {

    // ON TAB CLICK:

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

    // METHOD 1
    // const id = event.currentTarget.id;
    // const tabPanel = tabs.querySelector(`[aria-labelledby="${id}"]`);
    // tabPanel.hidden = false;

    // METHOD 2 – find in the array of tabPanels

    // tabPanels.find(panel => {
    //     if(panel.getAttribute('aria-labelledby') === id) {
    //         return true;
    //     }
    // });

    const tabPanel = tabPanels.find(panel => panel.getAttribute('aria-labelledby') === id);

    tabPanel.hidden = false;
}

tabButtons.forEach(button => button.addEventListener('click', handleTabClick));