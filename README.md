<h1 align="center">Сайт "Jetro"</h1>

DEMO [Jetro](https://zena86.github.io/jetro/)

Языки    | Библиотеки |Плагины               | Сервисы                 | Инструменты   |Методология|Прочие
---------|------------|----------------------|-------------------------|---------------|-----------|-----------
HTML5    |jQuery      |Slick slider          |Google Fonts             |Brackets       |БЭМ        |CSS flexbox
CSS3/SCSS|            |Advanced Custom Fields|Font Awesome             |Adobe Photoshop|           |Wordpress
PHP      |            |Redux                 |Google Maps (Maps JS API)|Koala v2.3.0   |           |
&nbsp;   |            |Contact Form&nbsp;7   |                         |Snazzy Maps    |           |
&nbsp;   |            |Custom Twitter Feeds  |                         |               |           |
&nbsp;   |            |SVG Support           |                         |               |           |

Адаптивность реализована за счет:
* медиазапросов
* гибкости верстки
* настраиваемой структуры макета страницы

Для компиляции SCSS (переменные, миксины, вложенность, палитра цветов и размеры шрифтов) использовалось приложение Koala v2.3.0.

**1. Двойной слайдер**

![Screenshort 1](/images/imgreadme/screen-main.png)


**2. Бургер-меню**

![Screenshort 1](/images/imgreadme/screen-menu1.png)|![Screenshort 1](/images/imgreadme/screen-menu2.png)
----------------------------------------------------|----------------------------------------------------

**3. Фиксированный sidebar c настройкой верхнего уровня при скролинге, текст (в т.ч. двух- и трехколоночное размещение текста, заглавная буква, float и т.д.)**

![Screenshort 1](/images/imgreadme/screen-text.png)

**4. Видео кастомных размеров**

![Screenshort 1](/images/imgreadme/screen-video.png)


**5. Пагинация**

![Screenshort 1](/images/imgreadme/screen-pagination.png)


**6. Фильтрация контента**

![Screenshort 1](/images/imgreadme/screen-filtr.png)


**7.  Карта Google с кастомизацией(Snazzy Maps), контактная форма**

![Screenshort 1](/images/imgreadme/screen-contact.png)

**CMS Wordpress** установлена на локальном веб-сервере Open Server

1. Создание собственной темы на основе шаблона, сгенерированного https://underscores.me/
2. Регистрация меню
	* основного в header (по страницам сайта)
	* на странице с портфолио (по терминам пользовательской таксономии)
3. Применение фильтра для присвоения собственных классов элементам меню
4. Ипользование стандартных таксономий (на странице Вlog), постраничный вывод постов с использованием пагинации (query_posts, the_posts_pagination)
5. Регистрация пользовательских типов записей (Portfolio) и таксономии (Skills)
6. Вывод записей по различным критериям (определенного термина таксономии, последние по дате создания) с использованием класса WP_Query
7. Создание шаблонов постов и страниц, регистрациия форматов записей
8. Работа с текстовым редактором WP (вывод текста с сохранением форматирования, цитат, заглавной буквы обзаца, многоколоночного текста и т.д.)
9. Регистрация сайдбаров (справа на странице и в footer), использование виджетов галлерея, рубрики, текст и Custom Twitter Feeds
10. Интеграция c WP контактной формы (Contact Form 7)
11. Интеграция c WP карты Google Maps (Redux, поля Text, Multi Text)


[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)