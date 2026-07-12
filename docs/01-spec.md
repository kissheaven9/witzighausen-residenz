# 01. Спецификация — WITZIGHAUSEN RESIDENZ (ЧЕРНОВИК, ждёт «ок»)

> Подпроект портфолио Ольги. Отдельный дизайн-код и свой `assets/css/styles.css`.
> Источник контента — Figma-экспозе `Expose-HARMONY-25` (13 фреймов). Формат сайта — как **donau-hoefe** (промо-лендинг объекта).

## Что за объект
**WITZIGHAUSEN RESIDENZ** — новостройка: **22 жилых апартамента + 3 коммерческих** в Senden, Stadtteil Witzighausen (Landkreis Neu-Ulm, Schwaben, Bayern), рядом с Ulm. Целевая аудитория — **Kapitalanleger** (инвесторы под сдачу).
Концепция: архитектура «как линии рояля»; у каждой квартиры **музыкальное имя** (Crescendo, Vibrato, Largo, Klangraum, Intermezzo, Elysium…).
- Адрес: Illerberger Straße, 89250 Senden/Witzighausen
- Домен: `witzighausen-residenz.de`
- E-mail: `witzighausen.residenz@gmail.com`
- Телефон: **нет в макете — открытый пункт** (см. ниже).

## Решения Ольги (2026-07-12)
1. Цены — **«Preis auf Anfrage» везде** (пошту́чных цен нет; ничего не выдумываем).
2. Контакт — **блок контактов без формы** (e-mail / адрес / домен, кнопка «E-Mail schreiben»).
3. Объём — **лендинг + отдельная страница Exposé + legal** (impressum/datenschutz).

## Структура страниц
- `index.html` — лендинг (секции ниже).
- `expose.html` — расширенное экспозе (полные тексты + все планировки + таблицы).
- `impressum.html`, `datenschutz.html` — правовые.

## Секции лендинга (порядок)
1. **Header** — лого «Witzighausen Residenz» (монограмма WR) + nav (Projekt · Appartements · Preise · Lage · Gewerbe · Investment · Kontakt) + CTA «Exposé». Sticky, моб-меню.
2. **Hero** — рендер здания + kicker `Exposé` + H1 + подзаголовок + CTA. Локация подписью.
3. **Konzept / Das Projekt** — рояльная концепция, музыкальные имена, 22 стильных апартамента для инвесторов (текст из экспозе).
4. **Kennzahlen (KPI)** — `22 Wohneinheiten` · `20,44–59,59 m²` · `KfW-40 Effizienzhaus` · `32 + 11 Stellplätze`.
5. **Appartements** — галерея интерьеров + **6 featured квартир с планировками**: Klangraum 58,63 · Elysium 48,36 · Largo 31,33 · Intermezzo 20,46 · Mosaik 46,17 · Duett 53,66 m² (карточки с площадью + Grundriss).
6. **Preisübersicht** — таблица 22 квартир: `Nr · Residenz (имя) · Fläche · Preis`. В колонке цены — «auf Anfrage». Сноска: «Tiefgaragen- und oberirdische Stellplätze auf Anfrage verfügbar».
7. **Gewerbeeinheiten** — 3 шт: Aria Atrium 89,57 · Virtuoso 128,21 · Maestro 203,96 m². «Preise auf Anfrage».
8. **Baubeschreibung** — 13 пунктов с иконками (KfW-40, barrierefrei, Hybridbauweise, Luft-Wärmepumpe, Fußbodenheizung, Aufzug, 3-fach-Verglasung, Tiefgarage…).
9. **Lage / Anbindung** — карта + расстояния (Senden 5 km · Ulm 15 km · Neu-Ulm 13 km · A7/Nersingen 6 km · Flughafen Memmingen 45 km · Donauauen 3 km) + B28/A7 + Uni Ulm (studentische Vermietung).
10. **Witzighausen** — 3 плитки: NATURNAH · BESTENS ANGEBUNDEN · LEBENSWERT + стат-тайлы (15 min Ulm · 5 min Senden · direkte Nähe zur Natur).
11. **Investment / Fazit** — питч для Kapitalanleger (стабильность, Wertzuwachs, Rendite).
12. **Kontakt** — блок контактов (e-mail, адрес, домен), кнопка «E-Mail schreiben». Без формы.
13. **Footer** — Impressum-строка, ссылки Impressum/Datenschutz, © год.

## Данные (канон — из экспозе)
**22 квартиры (Preisübersicht):**
1 Crescendo 59,59 · 2 Vibrato 33,25 · 3 Mosaik 46,17 · 4 Improvisio 31,15 · 5 Allegretto 20,44 · 6 Seraphina 53,66 · 7 Klangraum 58,63 · 8 Oktave 37,47 · 9 Largo 31,33 · 10 Resonanz 52,28 · 11 Chorale 48,51 · 12 Dolce 51,82 · 13 Klangblick 33,25 · 14 Refugium 46,15 · 15 Intermezzo 35,15* · 16 Duett 20,46* · 17 Symphonie 53,66 · 18 Piano Alto 56,4 · 19 Legato 37,47 · 20 Elysium 31,33* · 21 Coda 52,28 · 22 Harmonie 48,36 m².
> \*Прим.: в таблице №15/16/20 площади частично разъехались с детальными страницами (Intermezzo 20,46 / Duett 53,66 / Elysium 48,36 на детальных). **Открытый пункт — сверить с Ольгой актуальные площади** (детальные страницы vs таблица). Пока в featured беру числа с детальных Grundriss-страниц (они совпадают с именами квартир 1:1).

## Дизайн-система — см. `02-design-system.md`
Фон `#F1EDE9`, акцент-тауп `#A99581`, тёмный текст `#111`, синие дорожные бейджи `#56B4D3`, светлая панель `#E3DDD7`. Шрифт — Roboto Flex (дисплей + текст). Материальная палитра-акценты: `#E5D9CB → #CEBAA3 → #B98F63 → #5D3D26 → #1C1B17`.

## Правки копирайта (нужно «ок» — новые/изменённые тексты)
Тексты секций 3/8/9/10/11 — **дословно из экспозе** (уже утверждённый источник), только чиню опечатки: `Universität Ulm Ulm` → `Universität Ulm`; `20,44 bis 59,59 m²  m²` → один `m²`; лишние двойные пробелы.
**Новый копирайт (даю на утверждение):**
- Hero H1 (нем.): `Witzighausen Residenz` + подзаголовок — рус.: «22 апартамента в ритме рояля — инвестиция под сдачу рядом с Ульмом».
- Hero kicker: `Exposé · Senden / Witzighausen`.
- CTA-кнопки: `Exposé ansehen`, `E-Mail schreiben`.
- Meta title/description, OG — составлю по объекту (нем.), покажу в сборке.

## Открытые пункты (нужны ответы)
- **Телефон** для контактов/Impressum — есть? Если нет — оставляю только e-mail.
- **Impressum-реквизиты** (юрлицо/владелец/адрес для правовой строки) — как в donau-hoefe (GU-FI GmbH) или другое?
- **Площади №15/16/20** — сверить таблицу и детальные страницы.
- Логотип «WR» — рисуем монограмму как в макете, или текстовый логотип?

## Проверки перед «готово»
Десктоп/планшет/телефон без перекрытий и обрезаний; единые кнопки; таблица 22 строк читаема на мобилке (карточный fallback); карта не вылезает; anti-cache `?v=N`; alt у картинок; Esc/клик-вне для моб-меню; контраст ≥ AA.
