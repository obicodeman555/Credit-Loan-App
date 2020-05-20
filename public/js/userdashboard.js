function dropDown()
{
  const dropDownBtn = document.getElementById('dropdown');
  const dropDownContent = document.querySelector('.dropdown-content');
  dropDownBtn.onclick = event => {
      event.preventDefault();
      if (dropDownContent.style.display === 'none'){
        dropDownContent.style.display = 'block';      
      }else{ dropDownContent.style.display = 'none'}

  }
}

(function repaymentHistoryDropDown(){
  let dropDownBtn = document.querySelectorAll('.history-dropdown');
  dropDownBtn = [...dropDownBtn];
  for(let i = 0; i < dropDownBtn.length; i++)
  {
    dropDownBtn[i].onclick = event => {
        event.preventDefault();
        const dropDownBtnParent = dropDownBtn[i].parentElement;
        //console.log(dropDownBtnParent);
        const parentContainer = dropDownBtnParent.parentElement;
        const dropdownAndContentConnector = dropDownBtn[i].dataset.forDropdown;
        //console.log(dropdownAndContentConnector)
        const dropdownContentToActivate = parentContainer.querySelector(`div.table-dropdown[data-dropdown = "${dropdownAndContentConnector}"]`);
        //console.log(dropdownContentToActivate);
        switch(dropdownContentToActivate.style.display)
        {
          case "none":
            dropdownContentToActivate.style.display = 'block'
            dropDownBtn[i].classList.add('table-dropdown-active');
            break;
          case 'block':
            dropdownContentToActivate.style.display = 'none'
            dropDownBtn[i].classList.remove('table-dropdown-active');
            break;
        }

    }
  }

  
})();

function initializeSecondHeaderTabs() {
  const tabBtns = document.querySelectorAll(".tablinks");
  for (let i = 0; i < tabBtns.length; i++) {
    let tabBtn = tabBtns[i];
    tabBtn.addEventListener("click", (event) => {
      if (event.target.className === "tablinks") {
        //items need for trigger when btn is clicked
        const tabBtnContainer = event.target.parentElement;
        const tabsContainer = tabBtnContainer.parentElement;
        const tabNumber = event.target.dataset.forTab;
        const activateTab = tabsContainer.querySelector(
          `.tab-content[data-tab = "${tabNumber}"]`
        );

        const activeTabBtn = tabBtnContainer.querySelectorAll(".tablinks");
        const activeContent = tabsContainer.querySelectorAll(".tab-content");

        for (let i = 0; i < activeTabBtn.length; i++) {
          let button = activeTabBtn[i];
          button.classList.remove("btn-active");
        }

        for (let i = 0; i < activeContent.length; i++) {
          let activeContents = activeContent[i];
          activeContents.classList.remove("content_active");
        }

        tabBtn.classList.add("btn-active");
        activateTab.classList.add("content_active");
      }
    });
  }
}

function initializeSideBarTabs() {
  const secondHeaderTabs = document.querySelector(".tab-layout-container");
  const sidebarTabs = document.querySelectorAll(".sidebar_content li");
  const sideBarContents = document.querySelectorAll(".tab-content-sidebar");
  for (let i = 0; i < sidebarTabs.length; i++) {
    //console.log(sidebarTab)
    sidebarTabs[i].addEventListener("click", (event) => {
      event.preventDefault();
      for (let i = 0; i < sidebarTabs.length; i++) {
        sidebarTabs[i].classList.remove("sidebar-active");

        if (!(event.currentTarget.className === "dashboard")) {
          secondHeaderTabs.classList.add("disable");
        } else if (event.currentTarget.className === "dashboard") { secondHeaderTabs.classList.remove("disable");
        sideBarContents.forEach(content => {
          content.style.display = 'none'
        })
          
        }
      }
      event.currentTarget.classList.add("sidebar-active");

      var liTab = sidebarTabs[i].getAttribute('data-li');

      //needs refactoring
      switch(liTab)
      {
        case 'request':
          sideBarContents[0].style.display = 'block'
           sideBarContents[1].style.display = 'none'
          sideBarContents[2].style.display = 'none'
          sideBarContents[3].style.display = 'none'
          break;

        case 'settings':
        sideBarContents[0].style.display = 'none'
        sideBarContents[1].style.display = 'none'
        sideBarContents[2].style.display = 'none'
        sideBarContents[3].style.display = 'block'
        break;

        case 'profile':
          sideBarContents[0].style.display = 'none'
          sideBarContents[1].style.display = 'none'
          sideBarContents[2].style.display = 'block'
          sideBarContents[3].style.display = 'none'
          break;
        
        case 'transactions':
          sideBarContents[0].style.display = 'none'
          sideBarContents[1].style.display = 'block'
          sideBarContents[2].style.display = 'none'
          sideBarContents[3].style.display = 'none'
          break;

      }

      
    });
  }
 for(let i = 0; i < sideBarContents.length; i++)
         {
            sideBarContents[i].style.display = "none";
            
         }
  //console.log(sideBarContents)
         
}

document.addEventListener("DOMContentLoaded", () => {
  dropDown();
  initializeSecondHeaderTabs();
  initializeSideBarTabs();
  document.querySelectorAll('.table-dropdown').forEach(content =>{
      content.style.display = 'none';
  })
});

