const characterCard = document.querySelector(".personagensBox");
 
 function characterCardCreator(character){
    characterCard.innerHTML = "";
    character.forEach(character =>{
        characterCard.innerHTML += 
        ` <div class="personagens-card-box" data-id="${character.id}">
        <img src="${character.image}" alt="">
        <span class="firstAndLastName">${character.name}</span>
        <span class="vivo"><svg width="14" height="12" viewBox="0 0 14 12" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M14 6.00013C14 6.13274 13.9473 6.25992 13.8536 6.35368C13.7598 6.44745 13.6326 6.50013 13.5 6.50013H11.8088L9.4475 11.2239C9.40593 11.307 9.34204 11.3768 9.263 11.4256C9.18396 11.4744 9.09289 11.5002 9 11.5001H8.975C8.87801 11.4953 8.78452 11.4624 8.70594 11.4054C8.62736 11.3483 8.5671 11.2696 8.5325 11.1789L4.95937 1.79763L2.955 6.20701C2.91529 6.29438 2.85127 6.36848 2.77059 6.42046C2.68991 6.47243 2.59597 6.50009 2.5 6.50013H0.5C0.367392 6.50013 0.240215 6.44745 0.146447 6.35368C0.0526784 6.25992 0 6.13274 0 6.00013C0 5.86752 0.0526784 5.74035 0.146447 5.64658C0.240215 5.55281 0.367392 5.50013 0.5 5.50013H2.17812L4.545 0.293256C4.5858 0.203403 4.65229 0.127635 4.73607 0.0754931C4.81985 0.0233515 4.91719 -0.0028313 5.01583 0.000242722C5.11447 0.00331675 5.20999 0.03551 5.29036 0.0927677C5.37074 0.150025 5.43237 0.229787 5.4675 0.322006L9.06188 9.75951L11.0525 5.77763C11.0939 5.69433 11.1577 5.62422 11.2368 5.5752C11.3158 5.52618 11.407 5.50018 11.5 5.50013H13.5C13.6326 5.50013 13.7598 5.55281 13.8536 5.64658C13.9473 5.74035 14 5.86752 14 6.00013Z" fill="#BFDE42"/>
              </svg>${character.status}</span>
              <span class="type"><svg width="12" height="14" viewBox="0 0 12 14" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 0C4.40926 0.0018196 2.88419 0.634545 1.75937 1.75937C0.634545 2.88419 0.0018196 4.40926 0 6C0 7.5 0.785 9.44125 2.10063 11.1875C3.42438 12.9469 4.88188 14 6 14C7.11812 14 8.57562 12.9494 9.89937 11.1875C11.215 9.4375 12 7.5 12 6C11.9982 4.40926 11.3655 2.88419 10.2406 1.75937C9.11581 0.634545 7.59074 0.0018196 6 0ZM9.10063 10.5887C8.015 12.0306 6.76937 13 6 13C5.23063 13 3.985 12.0306 2.89937 10.5887C1.72812 9.03125 1 7.27313 1 6C1 4.67392 1.52678 3.40215 2.46447 2.46447C3.40215 1.52678 4.67392 1 6 1C7.32608 1 8.59785 1.52678 9.53553 2.46447C10.4732 3.40215 11 4.67392 11 6C11 7.27313 10.2719 9.03125 9.10063 10.5887ZM5.5 7.5C5.5 6.83696 5.23661 6.20107 4.76777 5.73223C4.29893 5.26339 3.66304 5 3 5C2.73478 5 2.48043 5.10536 2.29289 5.29289C2.10536 5.48043 2 5.73478 2 6C2 6.66304 2.26339 7.29893 2.73223 7.76777C3.20107 8.23661 3.83696 8.5 4.5 8.5C4.76522 8.5 5.01957 8.39464 5.20711 8.20711C5.39464 8.01957 5.5 7.76522 5.5 7.5ZM3 6C3.39782 6 3.77936 6.15804 4.06066 6.43934C4.34196 6.72064 4.5 7.10218 4.5 7.5C4.10218 7.5 3.72064 7.34196 3.43934 7.06066C3.15804 6.77936 3 6.39782 3 6ZM9 5C8.33696 5 7.70107 5.26339 7.23223 5.73223C6.76339 6.20107 6.5 6.83696 6.5 7.5C6.5 7.76522 6.60536 8.01957 6.79289 8.20711C6.98043 8.39464 7.23478 8.5 7.5 8.5C7.8283 8.5 8.15339 8.43534 8.45671 8.3097C8.76002 8.18406 9.03562 7.99991 9.26777 7.76777C9.49991 7.53562 9.68406 7.26002 9.8097 6.95671C9.93534 6.65339 10 6.3283 10 6C10 5.73478 9.89464 5.48043 9.70711 5.29289C9.51957 5.10536 9.26522 5 9 5ZM7.5 7.5C7.5 7.10218 7.65804 6.72064 7.93934 6.43934C8.22064 6.15804 8.60218 6 9 6C9 6.39782 8.84196 6.77936 8.56066 7.06066C8.27936 7.34196 7.89782 7.5 7.5 7.5ZM7.5 10.5C7.5 10.6326 7.44732 10.7598 7.35355 10.8536C7.25979 10.9473 7.13261 11 7 11H5C4.86739 11 4.74021 10.9473 4.64645 10.8536C4.55268 10.7598 4.5 10.6326 4.5 10.5C4.5 10.3674 4.55268 10.2402 4.64645 10.1464C4.74021 10.0527 4.86739 10 5 10H7C7.13261 10 7.25979 10.0527 7.35355 10.1464C7.44732 10.2402 7.5 10.3674 7.5 10.5Z"/>
                    </svg>${character.species}</span>
        <span class="planet"><svg width="15" height="12" viewBox="0 0 15 12" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M14.8194 1.79378C14.3412 0.969409 13.0794 0.783784 11.1631 1.25253C10.276 0.56656 9.2142 0.143144 8.09845 0.0303873C6.98271 -0.0823694 5.8577 0.120053 4.85124 0.614659C3.84478 1.10927 2.9972 1.87623 2.4048 2.82842C1.81241 3.78061 1.49893 4.87986 1.49999 6.00128C1.50007 6.25851 1.51635 6.51548 1.54874 6.77066C-0.181888 8.56378 -0.156888 9.62628 0.181237 10.2088C0.499987 10.7613 1.16499 11.0013 2.03999 11.0013C2.6475 10.9887 3.25143 10.9048 3.83936 10.7513C4.72662 11.4366 5.78825 11.8594 6.90371 11.9717C8.01917 12.084 9.14378 11.8813 10.1498 11.3867C11.1559 10.892 12.0031 10.1252 12.5953 9.17323C13.1875 8.22129 13.5009 7.12239 13.5 6.00128C13.5001 5.74532 13.484 5.4896 13.4519 5.23566C14.2331 4.42316 14.7531 3.65128 14.93 2.99066C15.0519 2.53316 15.015 2.13066 14.8194 1.79378ZM7.49999 1.00128C8.63245 1.00245 9.73107 1.38749 10.6165 2.09355C11.5019 2.79961 12.1218 3.78498 12.375 4.88878C11.3087 5.89253 9.86561 6.92191 8.49561 7.70941C6.77374 8.69753 5.27999 9.31378 4.08874 9.65128C3.35503 8.96698 2.84434 8.07764 2.62315 7.09904C2.40196 6.12044 2.48051 5.09791 2.84859 4.16458C3.21666 3.23124 3.8572 2.43034 4.68682 1.86614C5.51644 1.30194 6.4967 1.00058 7.49999 1.00128ZM1.04624 9.70691C0.954987 9.55003 1.00561 9.25441 1.18499 8.89441C1.36237 8.55711 1.57818 8.24147 1.82811 7.95378C2.07586 8.6716 2.45762 9.33585 2.95311 9.91128C1.87499 10.0925 1.20249 9.97691 1.04624 9.70691ZM7.49999 11.0013C6.65694 11.0021 5.82756 10.7883 5.08999 10.38C6.44379 9.90123 7.75006 9.29738 8.99186 8.57628C10.3406 7.80191 11.5344 6.96253 12.4962 6.13378C12.4606 7.43576 11.9188 8.67254 10.9859 9.58142C10.053 10.4903 8.80245 10.9997 7.49999 11.0013ZM13.9637 2.73191C13.8575 3.12628 13.5769 3.57753 13.1744 4.05253C12.9273 3.33386 12.5454 2.66887 12.0494 2.09316C12.9375 1.94628 13.76 1.95753 13.9556 2.29566C14.0119 2.39378 14.015 2.54066 13.9637 2.73191Z"/>
              </svg>${character.origin.name}</span>
        <button class="saibaMais"><svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M9.75 0C7.82164 0 5.93657 0.571828 4.33319 1.64317C2.72982 2.71451 1.48013 4.23726 0.742179 6.01884C0.00422452 7.80042 -0.188858 9.76082 0.187348 11.6521C0.563554 13.5434 1.49215 15.2807 2.85571 16.6443C4.21928 18.0079 5.95656 18.9365 7.84787 19.3127C9.73919 19.6889 11.6996 19.4958 13.4812 18.7578C15.2627 18.0199 16.7855 16.7702 17.8568 15.1668C18.9282 13.5634 19.5 11.6784 19.5 9.75C19.4973 7.16498 18.4692 4.68661 16.6413 2.85872C14.8134 1.03084 12.335 0.00272983 9.75 0ZM9.75 18C8.11831 18 6.52326 17.5161 5.16655 16.6096C3.80984 15.7031 2.75242 14.4146 2.128 12.9071C1.50358 11.3996 1.3402 9.74085 1.65853 8.1405C1.97685 6.54016 2.76259 5.07015 3.91637 3.91637C5.07016 2.76259 6.54017 1.97685 8.14051 1.65852C9.74085 1.34019 11.3997 1.50357 12.9071 2.12799C14.4146 2.75242 15.7031 3.80984 16.6096 5.16655C17.5161 6.52325 18 8.1183 18 9.75C17.9975 11.9373 17.1275 14.0343 15.5809 15.5809C14.0343 17.1275 11.9373 17.9975 9.75 18ZM11.25 14.25C11.25 14.4489 11.171 14.6397 11.0303 14.7803C10.8897 14.921 10.6989 15 10.5 15C10.1022 15 9.72065 14.842 9.43934 14.5607C9.15804 14.2794 9 13.8978 9 13.5V9.75C8.80109 9.75 8.61033 9.67098 8.46967 9.53033C8.32902 9.38968 8.25 9.19891 8.25 9C8.25 8.80109 8.32902 8.61032 8.46967 8.46967C8.61033 8.32902 8.80109 8.25 9 8.25C9.39783 8.25 9.77936 8.40804 10.0607 8.68934C10.342 8.97064 10.5 9.35218 10.5 9.75V13.5C10.6989 13.5 10.8897 13.579 11.0303 13.7197C11.171 13.8603 11.25 14.0511 11.25 14.25ZM8.25 5.625C8.25 5.4025 8.31598 5.18499 8.4396 4.99998C8.56322 4.81498 8.73892 4.67078 8.94449 4.58564C9.15005 4.50049 9.37625 4.47821 9.59448 4.52162C9.81271 4.56502 10.0132 4.67217 10.1705 4.8295C10.3278 4.98684 10.435 5.18729 10.4784 5.40552C10.5218 5.62375 10.4995 5.84995 10.4144 6.05552C10.3292 6.26109 10.185 6.43679 10 6.5604C9.81501 6.68402 9.59751 6.75 9.375 6.75C9.07664 6.75 8.79049 6.63147 8.57951 6.4205C8.36853 6.20952 8.25 5.92337 8.25 5.625Z"/>
                                  </svg>Saiba mais</button>
    </div>`
    });
 };
 async function getCharacters(page, name){
    const response = await fetch(`https://rickandmortyapi.com/api/character?page=${page}&name=${name}`);
    const characterList = await response.json();
    characterCardCreator(characterList.results);
    getCountOfCharacters(characterList.info.count);
    onClickPaginationButtonCharacter(characterList.info.pages, page, name)

};
getCharacters(1, '');
searchCharacter();
filter();
onClickCard();
function getCountOfCharacters(count){
    const topic = document.querySelector('.topic-personagens');
    topic.innerText = `Personagens ${count}`
};


function searchCharacter() {
    document.querySelector('#search').addEventListener('input',function(event){
        getCharacters(1, event.target.value);
    })
}

function filter() {
  document.querySelector('.filterBox').addEventListener('click', function(event) {

    const button = event.target.closest('.filtrarButton');
    if (!button) return;

    document.querySelectorAll('.filtrarButton')
      .forEach(btn => btn.classList.remove('active'));

    button.classList.add('active');

    document.querySelectorAll(
      '.personagensContainer, .locationContainer, .episodeContainer'
    ).forEach(item => item.classList.remove('hidden'));

    if (button.id === 'person') {
      document.querySelectorAll('.locationContainer, .episodeContainer')
        .forEach(item => item.classList.add('hidden'));
    }

    if (button.id === 'local') {
      document.querySelectorAll('.personagensContainer, .episodeContainer')
        .forEach(item => item.classList.add('hidden'));
    }

    if (button.id === 'episode') {
      document.querySelectorAll('.personagensContainer, .locationContainer')
        .forEach(item => item.classList.add('hidden'));
    }
  });
}
function onClickCard() {
  characterCard.addEventListener("click", (event) => {
    const button = event.target.closest(".saibaMais");
    if (!button) return;
    const card = button.closest(".personagens-card-box");
    if (!card) return;

    const id = card.dataset.id;
    window.location.href = `../character/index-character-single.html?id=${id}`;
  });
}
function onClickPaginationButtonCharacter(totalPages, actualPage, currentSearch = '') {
  const buttonBox = document.querySelector('.paginationCharacter');
  const prev = document.querySelector('.prev');
  const next = document.querySelector('.next');
  let currentPage = actualPage;

  function renderPagination() {
    buttonBox.innerHTML = "";

    let startPage = Math.max(1, currentPage - 1);
    let endPage = Math.min(totalPages, startPage + 3);

    for (let i = startPage; i <= endPage; i++) {
      buttonBox.innerHTML += `<button class="paginationButtonCharacter ${i === currentPage ? 'active' : ''}">${i}</button>`;
    }
  };
  renderPagination();

  buttonBox.addEventListener("click", function(event) {
    const btn = event.target.closest(".paginationButtonCharacter");
    if (!btn) return;
    currentPage = +btn.innerText;
    getCharacters(currentPage, currentSearch);
    renderPagination();
  });

  prev.addEventListener("click", () => {
    if (currentPage > 1) {
      currentPage--;
      getCharacters(currentPage, currentSearch);
      renderPagination();
    }
  });

  next.addEventListener("click", () => {
    if (currentPage < totalPages) {
      currentPage++;
      getCharacters(currentPage, currentSearch);
      renderPagination();
    }
  });
}
