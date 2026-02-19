const localCard = document.querySelector(".localBox");

 function localCardCreator(location){
    localCard.innerHTML = "";
    location.forEach(local =>{
        localCard.innerHTML += 
        `<div class="local" data-id="${local.id}">
    <span class="svg-planet"><svg width="45" height="36" viewBox="0 0 45 36" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M44.4581 5.38135C43.0237 2.90823 39.2381 2.35135 33.4893 3.7576C30.8279 1.69968 27.6426 0.429432 24.2954 0.091162C20.9481 -0.247108 17.5731 0.360159 14.5537 1.84398C11.5343 3.3278 8.99161 5.62868 7.21441 8.48525C5.43722 11.3418 4.49679 14.6396 4.49996 18.0039C4.5002 18.7755 4.54904 19.5464 4.64621 20.312C-0.545664 25.6914 -0.470664 28.8789 0.543711 30.6264C1.49996 32.2839 3.49496 33.0039 6.11996 33.0039C7.9425 32.9661 9.7543 32.7144 11.5181 32.2539C14.1799 34.3098 17.3647 35.5782 20.7111 35.9152C24.0575 36.2521 27.4313 35.6441 30.4495 34.16C33.4677 32.676 36.0094 30.3755 37.7859 27.5197C39.5625 24.6639 40.5028 21.3672 40.5 18.0039C40.5003 17.2359 40.4521 16.4688 40.3556 15.707C42.6993 13.2695 44.2593 10.9539 44.79 8.97198C45.1556 7.59948 45.045 6.39198 44.4581 5.38135ZM22.5 3.00385C25.8974 3.00734 29.1932 4.16247 31.8495 6.28066C34.5057 8.39884 36.3654 11.3549 37.125 14.6664C33.9262 17.6776 29.5968 20.7657 25.4868 23.1282C20.3212 26.0926 15.84 27.9413 12.2662 28.9538C10.0651 26.9009 8.53303 24.2329 7.86945 21.2971C7.20588 18.3613 7.44154 15.2937 8.54576 12.4937C9.64998 9.69373 11.5716 7.29103 14.0605 5.59842C16.5493 3.90582 19.4901 3.00173 22.5 3.00385ZM3.13871 29.1207C2.86496 28.6501 3.01684 27.7632 3.55496 26.6832C4.0871 25.6713 4.73453 24.7244 5.48434 23.8614C6.22759 26.0148 7.37286 28.0076 8.85934 29.7339C5.62496 30.2776 3.60746 29.9307 3.13871 29.1207ZM22.5 33.0039C19.9708 33.0064 17.4827 32.365 15.27 31.1401C19.3314 29.7037 23.2502 27.8921 26.9756 25.7289C31.0218 23.4057 34.6031 20.8876 37.4887 18.4014C37.3818 22.3073 35.7564 26.0176 32.9576 28.7443C30.1589 31.4709 26.4073 32.999 22.5 33.0039ZM41.8912 8.19573C41.5725 9.37885 40.7306 10.7326 39.5231 12.1576C38.7818 10.0016 37.6363 8.00662 36.1481 6.27948C38.8125 5.83885 41.28 5.8726 41.8668 6.88698C42.0356 7.18135 42.045 7.62198 41.8912 8.19573Z"/>
 </svg></span>
 <span class="planetxt">Planet</span>
 <span class="planetName">${local.name}</span>
 <button class="planetSaibaMais"><svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M9.75 0C7.82164 0 5.93657 0.571828 4.33319 1.64317C2.72982 2.71451 1.48013 4.23726 0.742179 6.01884C0.00422452 7.80042 -0.188858 9.76082 0.187348 11.6521C0.563554 13.5434 1.49215 15.2807 2.85571 16.6443C4.21928 18.0079 5.95656 18.9365 7.84787 19.3127C9.73919 19.6889 11.6996 19.4958 13.4812 18.7578C15.2627 18.0199 16.7855 16.7702 17.8568 15.1668C18.9282 13.5634 19.5 11.6784 19.5 9.75C19.4973 7.16498 18.4692 4.68661 16.6413 2.85872C14.8134 1.03084 12.335 0.00272983 9.75 0ZM9.75 18C8.11831 18 6.52326 17.5161 5.16655 16.6096C3.80984 15.7031 2.75242 14.4146 2.128 12.9071C1.50358 11.3996 1.3402 9.74085 1.65853 8.1405C1.97685 6.54016 2.76259 5.07015 3.91637 3.91637C5.07016 2.76259 6.54017 1.97685 8.14051 1.65852C9.74085 1.34019 11.3997 1.50357 12.9071 2.12799C14.4146 2.75242 15.7031 3.80984 16.6096 5.16655C17.5161 6.52325 18 8.1183 18 9.75C17.9975 11.9373 17.1275 14.0343 15.5809 15.5809C14.0343 17.1275 11.9373 17.9975 9.75 18ZM11.25 14.25C11.25 14.4489 11.171 14.6397 11.0303 14.7803C10.8897 14.921 10.6989 15 10.5 15C10.1022 15 9.72065 14.842 9.43934 14.5607C9.15804 14.2794 9 13.8978 9 13.5V9.75C8.80109 9.75 8.61033 9.67098 8.46967 9.53033C8.32902 9.38968 8.25 9.19891 8.25 9C8.25 8.80109 8.32902 8.61032 8.46967 8.46967C8.61033 8.32902 8.80109 8.25 9 8.25C9.39783 8.25 9.77936 8.40804 10.0607 8.68934C10.342 8.97064 10.5 9.35218 10.5 9.75V13.5C10.6989 13.5 10.8897 13.579 11.0303 13.7197C11.171 13.8603 11.25 14.0511 11.25 14.25ZM8.25 5.625C8.25 5.4025 8.31598 5.18499 8.4396 4.99998C8.56322 4.81498 8.73892 4.67078 8.94449 4.58564C9.15005 4.50049 9.37625 4.47821 9.59448 4.52162C9.81271 4.56502 10.0132 4.67217 10.1705 4.8295C10.3278 4.98684 10.435 5.18729 10.4784 5.40552C10.5218 5.62375 10.4995 5.84995 10.4144 6.05552C10.3292 6.26109 10.185 6.43679 10 6.5604C9.81501 6.68402 9.59751 6.75 9.375 6.75C9.07664 6.75 8.79049 6.63147 8.57951 6.4205C8.36853 6.20952 8.25 5.92337 8.25 5.625Z" />
                                  </svg>Saiba mais</button>
 </div>`
    });
 };

async function getLocalPlace(page, name){
   const response = await fetch(`https://rickandmortyapi.com/api/location?page=${page}&name=${name}`);
   const locationList = await response.json();
   localCardCreator(locationList.results);
   getCountOfLocations(locationList.info.count);
   onClickPaginationButtonLocation(locationList.info.pages, page,name);
};
getLocalPlace(1, '');
searchLocation();
onClickSaibaMais();
function searchLocation(){
   document.querySelector('#search').addEventListener('input', function(event){
      getLocalPlace(1, event.target.value);
   })
};
function getCountOfLocations(count){
   const topic = document.querySelector('.topic-local');
   topic.innerText = `Localizações ${count}`
};
function onClickSaibaMais() {
  localCard.addEventListener('click', function(event){
   const button = event.target.closest('.planetSaibaMais');
   if(!button) return;
   const card = button.closest('.local');
   if(!card) return;
   const id = card.dataset.id;
   window.location.href = `../location/index-location-single.html?id=${id}`
  }) 
};
function onClickPaginationButtonLocation(totalPages, actualPage, currentSearch = '') {
   const buttonBox = document.querySelector('.paginationLocal');
   const prev = document.querySelector('.prevLocal');
   const next = document.querySelector('.nextLocal');
   let currentPage = actualPage;

   function renderPagination() {
      buttonBox.innerHTML = "";
      let startPage = Math.max(1, currentPage - 1);
      let endPage = Math.min(totalPages, startPage + 3)
      for(let i = startPage; i <= endPage; i++){
         buttonBox.innerHTML += `<button class="paginationButtonLocal ${i === currentPage ? 'active' : ''}">${i}</button>`;
      }
   };
   renderPagination();

    buttonBox.addEventListener("click", function(event){
    const btn = event.target.closest(".paginationButtonLocal");
    if(!btn) return;
    currentPage = +btn.innerText;
    getLocalPlace(currentPage, currentSearch);
    renderPagination();
   })
       prev.addEventListener("click", () => {
      if (currentPage > 1){
         currentPage--;
          getLocalPlace(currentPage, currentSearch);
          renderPagination();
      };
    });

    next.addEventListener("click", () => {
      if(currentPage < totalPages){
         currentPage++;
         getLocalPlace(currentPage, currentSearch);
        renderPagination();
      }
    })
}
