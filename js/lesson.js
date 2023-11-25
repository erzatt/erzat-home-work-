const phoneInput = document.querySelector("#phone_input");
const phoneButton = document.querySelector("#phone_button");
const phoneSpan = document.querySelector("#phone_result");

const regExp = /^\+996 [2579]\d{2} \d{2}_\d{2}_\d{2}$/;

phoneButton.addEventListener("click", () => {
  if (regExp.test(phoneInput.value)) {
    phoneSpan.innerHTML = "OK";
    phoneSpan.style.color = "green";
  } else {
    phoneSpan.innerHTML = "Not oK";
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

const somInput = document.querySelector(".som");
const usdInput = document.querySelector(".usd");
const eurInput = document.querySelector(".eur");

const era = (element, target, target2) => {
  element.addEventListener("input", () => {
    const request = new XMLHttpRequest();
    request.open("GET",'../data/converter.json')
    request.setRequestHeader("Content-Type", "application/json")
    request.send();
    request.addEventListener("load", () => {
   const response = JSON.parse(request.response) 
   if (element == som) {
    target.value = (element.value / response.usd).toFixed(2)
    target2.value = (element.value / response.eur).toFixed(2)
   }else if (element == usd) { 
      target.value = (element.value * response.usd).toFixed(2)
      target2.value = (element.value * response.eur / response.usd).toFixed(2)
   }else if (element == eur) { 
    target.value = (element.value * response.eur).toFixed(2)
    target2.value = (element.value * response.usd / response.eur).toFixed(2)
 }
 if (element.value  === '' || target.value == '0') {
  target.value = ''
  target2.value = ''
 }
  });
})}
era(som,usd,eur);
era(usd,som,eur);
era(eur,som,usd);


const card = document.querySelector(".card");
const nextBtn = document.querySelector("#btn-next");
const prevBtn = document.querySelector("#btn-prev");

const cardElement = document.getElementById("card");
let count = 1;

const fetchTodo = async (number) => {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${number}`);
    const data = await response.json();
    updateCard(data);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

const updateCard = (data) => {
  const { title, completed, id } = data;
  const color = completed ? 'GREEN' : 'RED';
  card.innerHTML = `
    <p>${title}</p>
    <p style="color:${color}">${completed}</p>
    <span>${id}</span>
  `;
};

fetchTodo(count);

nextBtn.addEventListener('click', () => {
  count = count >= 200 ? 1 : count + 1;
  fetchTodo(count);
});

prevBtn.addEventListener('click', () => {
  count = count <= 1 ? 200 : count - 1;
  fetchTodo(count);
});

fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => {
        console.log(data);

        const object = {
            isOpen: false,
            name: "Modal",
            number: 42,
            id: 'ID123'
        };

        const { name, isOpen, number, id } = object;

        console.log(name);
    })
    .catch(error => {
        console.error('Произошла ошибка при запросе к серверной части:', error);
    });