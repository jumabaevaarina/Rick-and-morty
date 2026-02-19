const episodeCard = document.querySelector('.episodeBox')

function episodeCardCreator(episodes){
    episodeCard.innerHTML="";
    episodes.forEach(episode =>{
        episodeCard.innerHTML += `
            <div class="episode-card-box" data-id="${episode.id}">
    <span class="episodeNameNumBox"><svg width="20" height="18" viewBox="0 0 20 18" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path d="M17.25 0H2.25C1.65326 0 1.08097 0.237053 0.65901 0.65901C0.237053 1.08097 0 1.65326 0 2.25V12.75C0 13.3467 0.237053 13.919 0.65901 14.341C1.08097 14.7629 1.65326 15 2.25 15H17.25C17.8467 15 18.419 14.7629 18.841 14.341C19.2629 13.919 19.5 13.3467 19.5 12.75V2.25C19.5 1.65326 19.2629 1.08097 18.841 0.65901C18.419 0.237053 17.8467 0 17.25 0ZM18 12.75C18 12.9489 17.921 13.1397 17.7803 13.2803C17.6397 13.421 17.4489 13.5 17.25 13.5H2.25C2.05109 13.5 1.86032 13.421 1.71967 13.2803C1.57902 13.1397 1.5 12.9489 1.5 12.75V2.25C1.5 2.05109 1.57902 1.86032 1.71967 1.71967C1.86032 1.57902 2.05109 1.5 2.25 1.5H17.25C17.4489 1.5 17.6397 1.57902 17.7803 1.71967C17.921 1.86032 18 2.05109 18 2.25V12.75ZM13.5 17.25C13.5 17.4489 13.421 17.6397 13.2803 17.7803C13.1397 17.921 12.9489 18 12.75 18H6.75C6.55109 18 6.36032 17.921 6.21967 17.7803C6.07902 17.6397 6 17.4489 6 17.25C6 17.0511 6.07902 16.8603 6.21967 16.7197C6.36032 16.579 6.55109 16.5 6.75 16.5H12.75C12.9489 16.5 13.1397 16.579 13.2803 16.7197C13.421 16.8603 13.5 17.0511 13.5 17.25ZM13.1663 6.87562L8.66625 3.87562C8.55327 3.80025 8.42195 3.75696 8.28629 3.75039C8.15064 3.74382 8.01575 3.77421 7.89601 3.83831C7.77628 3.90241 7.6762 3.99782 7.60645 4.11436C7.5367 4.2309 7.49991 4.36419 7.5 4.5V10.5C7.49991 10.6358 7.5367 10.7691 7.60645 10.8856C7.6762 11.0022 7.77628 11.0976 7.89601 11.1617C8.01575 11.2258 8.15064 11.2562 8.28629 11.2496C8.42195 11.243 8.55327 11.1998 8.66625 11.1244L13.1663 8.12438C13.2691 8.05591 13.3535 7.96309 13.4118 7.85416C13.4702 7.74523 13.5007 7.62357 13.5007 7.5C13.5007 7.37643 13.4702 7.25477 13.4118 7.14584C13.3535 7.03691 13.2691 6.94409 13.1663 6.87562ZM9 9.09844V5.90625L11.3981 7.5L9 9.09844Z"/>
</svg>${episode.name} | ${episode.episode}</span>
<span class="episodeButtonsBox">
<button class="episodeSaibaMais"><svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M9.75 0C7.82164 0 5.93657 0.571828 4.33319 1.64317C2.72982 2.71451 1.48013 4.23726 0.742179 6.01884C0.00422452 7.80042 -0.188858 9.76082 0.187348 11.6521C0.563554 13.5434 1.49215 15.2807 2.85571 16.6443C4.21928 18.0079 5.95656 18.9365 7.84787 19.3127C9.73919 19.6889 11.6996 19.4958 13.4812 18.7578C15.2627 18.0199 16.7855 16.7702 17.8568 15.1668C18.9282 13.5634 19.5 11.6784 19.5 9.75C19.4973 7.16498 18.4692 4.68661 16.6413 2.85872C14.8134 1.03084 12.335 0.00272983 9.75 0ZM9.75 18C8.11831 18 6.52326 17.5161 5.16655 16.6096C3.80984 15.7031 2.75242 14.4146 2.128 12.9071C1.50358 11.3996 1.3402 9.74085 1.65853 8.1405C1.97685 6.54016 2.76259 5.07015 3.91637 3.91637C5.07016 2.76259 6.54017 1.97685 8.14051 1.65852C9.74085 1.34019 11.3997 1.50357 12.9071 2.12799C14.4146 2.75242 15.7031 3.80984 16.6096 5.16655C17.5161 6.52325 18 8.1183 18 9.75C17.9975 11.9373 17.1275 14.0343 15.5809 15.5809C14.0343 17.1275 11.9373 17.9975 9.75 18ZM11.25 14.25C11.25 14.4489 11.171 14.6397 11.0303 14.7803C10.8897 14.921 10.6989 15 10.5 15C10.1022 15 9.72065 14.842 9.43934 14.5607C9.15804 14.2794 9 13.8978 9 13.5V9.75C8.80109 9.75 8.61033 9.67098 8.46967 9.53033C8.32902 9.38968 8.25 9.19891 8.25 9C8.25 8.80109 8.32902 8.61032 8.46967 8.46967C8.61033 8.32902 8.80109 8.25 9 8.25C9.39783 8.25 9.77936 8.40804 10.0607 8.68934C10.342 8.97064 10.5 9.35218 10.5 9.75V13.5C10.6989 13.5 10.8897 13.579 11.0303 13.7197C11.171 13.8603 11.25 14.0511 11.25 14.25ZM8.25 5.625C8.25 5.4025 8.31598 5.18499 8.4396 4.99998C8.56322 4.81498 8.73892 4.67078 8.94449 4.58564C9.15005 4.50049 9.37625 4.47821 9.59448 4.52162C9.81271 4.56502 10.0132 4.67217 10.1705 4.8295C10.3278 4.98684 10.435 5.18729 10.4784 5.40552C10.5218 5.62375 10.4995 5.84995 10.4144 6.05552C10.3292 6.26109 10.185 6.43679 10 6.5604C9.81501 6.68402 9.59751 6.75 9.375 6.75C9.07664 6.75 8.79049 6.63147 8.57951 6.4205C8.36853 6.20952 8.25 5.92337 8.25 5.625Z"/>
                                  </svg>Saiba mais</button></span>
            </div> 
        `
    });
};

async function getEpisodeAPI(page, name){
 const response = await fetch(`https://rickandmortyapi.com/api/episode?name=${name}&page=${page}`);
 const episodesList = await response.json();
 getCountOfEpisodes(episodesList.info.count);
 episodeCardCreator(episodesList.results);
 getPaginationEpisode(episodesList.info.pages);
};
getEpisodeAPI(1, '');
searchEpisode();
onClickPaginationButtonEpisode();
onClickSaibaMais();
function searchEpisode(){
    document.querySelector('#search').addEventListener('input',function(event){
        getEpisodeAPI(1, event.target.value)
    });
};
function getPaginationEpisode(count){
    document.querySelector('.paginationEpisode').innerHTML = "";
    for(let i = 1; i <= count;i++){
    document.querySelector('.paginationEpisode').innerHTML += `<button class="paginationButtonEpisode">${i}</button>`
    };
};
function getCountOfEpisodes(count){
const topic = document.querySelector('.topic-episode');
topic.innerHTML = `Episódios ${count}`
};

function onClickPaginationButtonEpisode() {
    const paginationEpisode = document.querySelector('.paginationEpisode');

    paginationEpisode.addEventListener('click', function(event){
        const buttonOfPaginationEpisode = event.target.closest('.paginationButtonEpisode');
        if (!buttonOfPaginationEpisode) return;

        document.querySelectorAll('.paginationButtonEpisode')
            .forEach(btn => btn.classList.remove('active'));
        buttonOfPaginationEpisode.classList.add('active');

        const input = document.getElementById('search');
        getEpisodeAPI(buttonOfPaginationEpisode.innerText, input.value);
    });
}
 function onClickSaibaMais(){
    episodeCard.addEventListener('click', function(event){
    
    const button = event.target.closest('.episodeSaibaMais');
    if (!button) return;

    const card = button.closest('.episode-card-box')
    if(!card) return;
    const id = card.dataset.id;
    window.location.href = `../episode/index-episode-single.html?id=${id}`
    })

 }