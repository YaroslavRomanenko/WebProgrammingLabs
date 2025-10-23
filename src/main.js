import '@/styles/tw.css';
import '@/styles/main.scss';

import { initThemeToggle } from '/src/js/common/theme.js';
import { initAbout } from '/src/js/app/aboutPage.js';

initThemeToggle();

let cleanupFunction = () => {};
const page = document.body.dataset.page;

const routes = {
    about:    () => import('./js/app/aboutPage.js').then(m => m.initAbout()
        .then(abortFn => {
            cleanupFunction = abortFn;
            console.log('Ініціалізація About Page завершена. Функція скасування збережена.');
        })),
};

if (routes[page]) {
    routes[page]().catch(err => {
        console.error('Помилка ініціалізації сторінки:', err);
    });
}