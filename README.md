# Zib-Zib sinth

Веб-синтезатор по макету Figma «alien», Page 3 (Desktop 8, 7, 19, 22, 20, 21, 16).
HTML, CSS, JavaScript и Tone.js, без React.

## Запуск

Модули JavaScript работают только через локальный сервер: расширение Live Server в VS Code или `npx serve .` в этой папке.

## Файлы

```
index.html          разметка экранов
css/reset.css       сброс стилей браузера из бойлерплейта курса
css/style.css       все размеры, цвета и эффекты из макета (1 пиксель макета = var(--u))
fonts/              Desyatiy Regular, Desyatiy Light, TOYZ
images/alien.webp   пришелец (анимация с прозрачным фоном)
sounds/zibzib.mp3   бип-бип Zib-Zib, играет вперёд и назад по кругу
js/settings.js      тексты и словарь из макета, музыкальные пресеты
js/bars.js          координаты падающих ступенек из Desktop 19
js/audio.js         Tone.js: голос Zib-Zib и три синта, у каждого своя цепочка и канал
js/synths.js        колонки Synth1, Synth2, Synth3: Volume, Filter, Shine / Space / Squelch, Type
js/screens.js       сценарий экранов и анимации
js/main.js          точка входа
```
