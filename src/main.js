'use strict';
import {createUserProfile} from './components/profile.js';
import {createSiteMenuTemplate} from './components/site-menu.js';
import {createSortFilterTemplate} from './components/filter.js';
import {createFilmCardsContainerTemplate} from './components/films.js';
import {createSectionAllFilmsTemplate} from './components/films-all.js';
import {createFilmListContainerTemplate} from './components/films-list.js';
import {createFilmCardTemplate} from './components/film-card.js';
import {createLoadMoreButtonTemplate} from './components/load-more-button.js';
import {createTitleTopRatedFilmsTemplate} from './components/films-top-rated-title.js';
import {createTitleMostCommentedFilmsTemplate} from './components/films-most-commented-title.js';
import {createTopRatedFilmsTemplate} from './components/films-extra.js';
import {createFilmDetailsTemplate} from './components/popup.js';

const COUNT_CARDS = 5;
const COUNT_SECTION_EXTRA = 2;
const COUNT_CARS_EXTRA = 2;

const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

const siteHeaderElement = document.querySelector(`.header`);
const siteMainElement = document.querySelector(`.main`);

render(siteHeaderElement, createUserProfile(), `beforeend`);
render(siteMainElement, createSiteMenuTemplate(), `beforeend`);
render(siteMainElement, createSortFilterTemplate(), `beforeend`);
render(siteMainElement, createFilmCardsContainerTemplate(), `beforeend`);

const siteFilmCardsContainer = siteMainElement.querySelector(`.films`);
render(siteFilmCardsContainer, createSectionAllFilmsTemplate(), `beforeend`);

const siteFilmList = siteFilmCardsContainer.querySelector(`.films-list`);
render(siteFilmList, createFilmListContainerTemplate(), `beforeend`);

const siteFilmListContainer = siteFilmList.querySelector(`.films-list__container`);
new Array(COUNT_CARDS).fill(``).forEach(() => render(siteFilmListContainer, createFilmCardTemplate(), `beforeend`));
render(siteFilmList, createLoadMoreButtonTemplate(), `beforeend`);

new Array(COUNT_SECTION_EXTRA).fill(``).forEach(() => render(siteFilmCardsContainer, createTopRatedFilmsTemplate(), `beforeend`));

const siteFilmListExtra = document.querySelectorAll(`.films-list--extra`);

render(siteFilmListExtra[0], createTitleTopRatedFilmsTemplate(), `afterbegin`);
render(siteFilmListExtra[1], createTitleMostCommentedFilmsTemplate(), `afterbegin`);

for (const elementList of siteFilmListExtra) {
  new Array(COUNT_CARS_EXTRA).fill(``).forEach(() => render(elementList.querySelector(`.films-list__container`), createFilmCardTemplate(), `beforeend`));
}

const siteBodyElement = document.querySelector(`body`);
render(siteBodyElement, createFilmDetailsTemplate(), `beforeend`);
