import { topHeadlinesUrl } from './services/newsApi';
import './components/news-article/news-article'

window.addEventListener('load', () => {
   getNews();
});

async function getNews() {
   const res = await fetch(topHeadlinesUrl);
   const json = await res.json();

   const newsList = document.querySelector('.news-list');

   json.articles.forEach(article => {
      const el = document.createElement('news-article');
      el.article = article;
      newsList.appendChild(el);
   });
}