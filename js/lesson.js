const phoneInput = document.querySelector("#phone_input");
const phoneButton = document.querySelector("#phone_button");
const phoneSpan = document.querySelector("#phone_result");

const regExp = /^\+996 [2579]\d{2} \d{2}_\d{2}_\d{2}$/;

phoneButton.addEventListener("click", () => {
  if (regExp.test(phoneInput.value)) {
    phoneSpan.innerHTML = "OK";
    phoneSpan.style.color = "green";
  } else {
    phoneSpan.innerHTML = "Not oK"
    phoneSpan.style.color = "red";
  }
});

const tabContentBlocks = document.querySelectorAll(".tab_content_block");
const tabItems = document.querySelectorAll(".tab_content_item");
const parentTabs = document.querySelector(".tab_content_items");

const highTabContent = () => {
  tabContentBlocks.forEach((tabContentBlock) => {
    tabContentBlock.style.display = "none";
  });
  tabItems.forEach((tabItem) => {
    tabItem.classList.remove("tab_content_item_active");
  });
};
const showTabContent = (indexElement = 0) => {
  tabContentBlocks[indexElement].style.display = "block";
  tabItems[indexElement].classList.add("tab_content_item_active");
};

parentTabs.onclick = (event) => {
  if (event.target.classList.contains("tab_content_item")) {
    tabItems.forEach((tabItem, tabIndex) => {
      if (event.target === tabItem) {
        highTabContent();
        showTabContent(tabIndex);
      }
    });
  }
};

const autoTabContentSlide = (i = 0) => {
  setInterval(() => {
    i++;
    if (i > tabContentBlocks.length - 1) {
      i = 0;
    }
    highTabContent();
    showTabContent(i);
  }, 3000);
};
autoTabContentSlide();
highTabContent();
showTabContent();
