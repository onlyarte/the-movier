# Project Requirements & Info

### Команди 
* Команда має складатися з однієї людини (для інтровертів), з двох, або навіть з трьох людей
* Придумайте назву своїй команді

### Огранізація
* Зробіть clone репозиторію (якщо ви цього досі не зробили) - `git clone https://gitlab.com/pavlozahozhenko/ruby-course-2019.git`
* Створіть нову гілку з назвою `назва_команди_project` і додайте її до репозиторію. Наприклад:
```
git checkout -b example_team_project
mkdir students/example_team
touch students/example_team/.gitkeep
git add students/example_team/
git commit --message="Added project folder"
git push origin example_team_project
```
* Працюйте над своїм проектом в цій гілці у відповідній теці (students/назва_команди), додавайте коміти
* Коли проект буде готовий - зробіть pull request в бранч master, щоб я зробив code review

### Вимоги до проекта
Проект на вільну тему, але з деякими обмеженнями, а саме:

* Будь-який Rack framework на Ruby: Ruby on Rails, Sinatra, Hanami, Roda, Cuba, Padrino, ...
* Аутентифікація користувачів
* Авторизація, мінімум 2 ролі користувачів з різними правами доступу
* Деякі елементи клієнт-серверної взаємодії зроблені за допомогою AJAX (не всі, хоча б щось). Або SPA.
* Хоча б одна задача, яка виконується в фоновому режимі (за допомогою Sidekiq або аналогів)
* Автоматизоване тестування. Бажано покриття тестами 100% функціональності. Як мінімум: деякі unit-тести і acceptance-тест для main flow
* Бажано підготовка для запуску в production середовищі, використання production-ready ruby сервера (а не Webrick), e.g. Puma, Unicorn, Passenger і production-ready СУБД, e.g. PostgreSQL

### Загальна інформація
* Тему проекта бажано узгодити зі мною; можу підказати якісь архітектурні рішення, чи варто використати якісь gems і т.д.
* Якщо у вас брак ідей щодо теми проекта - звертайтеся, щось придумаємо
