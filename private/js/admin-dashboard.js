
function initializeSideBarTab(){
  let tabs = document.querySelectorAll('.tab');
  tabs = [...tabs];
  tabs.forEach(tab => {
    //adding click event listener
      tab.onclick = (event) => {
          event.preventDefault();
         const sideBar = tab.parentElement;
        const tabContentContainer = sideBar.parentElement.nextElementSibling;
        const tabIndicator = tab.dataset.forTab;
        const tabContentToActivate = tabContentContainer.querySelector(`.sidebar-tab-content[data-tab="${tabIndicator}"]`);
        const nameTobeChanged = document.querySelector('.header-content span');
        const dynamicName = tab.getAttribute('data-for-tab').toUpperCase();
        
        sideBar.querySelectorAll('.tab').forEach(tab => {
          tab.classList.remove('sidebar-active');
        });

        tabContentContainer.querySelectorAll('.sidebar-tab-content').forEach(content => {
          content.classList.remove('sidebar-tab-content-active');
        });

        tab.classList.add('sidebar-active');

        tabContentToActivate.classList.add('sidebar-tab-content-active');

        if(event.currentTarget.id !== "dashboard")
        {
          document.querySelectorAll('.card').forEach(card => {
              card.classList.add('disable')
          })
        }else{
          document.querySelectorAll('.card').forEach(card => {
            card.classList.remove('disable')
        })
        } 
        nameTobeChanged.textContent = dynamicName; 
      } 
   
  });
 
}

/* Tab Navigation (content of loan-application sidebar) */
(function intializeLoanApplicationContentTabs()
{
  let tabs = document.querySelectorAll('.tablist');
  tabs = [...tabs];
  tabs.forEach(tab => {
      tab.onclick = event => {
        event.preventDefault();
        const ul = tab.parentElement;
        const tabAndContentContainer = ul.parentElement;
        const tabAndContentConnector = tab.dataset.forTab;
        const tabContentToActivate = tabAndContentContainer.querySelector(`.container-loan-request-contents[data-tab="${tabAndContentConnector}"]`);
        
        //adding and removing active class
        ul.querySelectorAll('.tablist').forEach(tab => {
          tab.classList.remove('tablist-active');
        });

        tabAndContentContainer.querySelectorAll('.container-loan-request-contents').forEach(tabContent => {
          tabContent.classList.remove('container-loan-request-contents-active')
        });

        tab.classList.add('tablist-active');
        tabContentToActivate.classList.add('container-loan-request-contents-active');
      }
  })
})();


document.addEventListener('DOMContentLoaded', (event) => {
  event.preventDefault();
  initializeSideBarTab();
  document.querySelectorAll('.main-container').forEach(mainContainer => {
    mainContainer.querySelector('.sidebar_content .tab').click(); 
  });
});

document.addEventListener('DOMContentLoaded', (event) => {
  event.preventDefault();
  document.querySelectorAll('.main-container').forEach(mainContainer => {
    mainContainer.querySelector('ul .tablist').click(); 
  });
}); 


