# Code Review kursu HTML#3

Film: https://www.youtube.com/watch?v=5y3Qc9Qs6TY

Temat: http://forum.pasja-informatyki.pl/146286/cr-html-%233-linkowanie-podstron-przyjazne-adresy-fontello

---

Ten branch zawiera poprawki dotyczące kodu strony – bez przepisywania jej na HTML5.

---


## Lista poprawek

_Rzeczy zmienione, a oznaczone jako **preferencja** są po prostu moimi osobistymi preferencjami co do kodu HTML i nie są lepsze/gorsze od pierwotnego sposobu; są po prostu inne._

### Ogólne

* Utworzyłem katalog `js`, do którego przeniosłem `timer.js` – dobra struktura katalogów to podstawa każdego projektu (**preferencja**).
* Przeniosłem plik `style.css` do katalogu `css` (**preferencja** – chociaż na upartego rozrzucenie plików CSS wprowadza nieporządek do projektu, zatem mu szkodzi!)
* Wywaliłem plik `config.json`, bo nic sensownego nie robi.
* Wywaliłem plik `demo.html`, który tym bardziej nic sensownego nie robi…
* Usunąłem niepotrzebne arkusze stylów Fontello.
* Zmieniłem wcięcia i nowe linie w kodzie na IMO czytelniejsze (**preferencja**).
* Usunąłem zamknięcie XML-owego ze znaczników bez zamknięcia (**preferencja**).
* Zmieniłem nazwę `html` na wersję pisaną małymi literami w `DOCTYPE` (**preferencja**).
* Zmieniłem nazwę kodowania na `UTF-8` (**preferencja**, choć dawniej [walidator się tego czepiał](http://tutorials.comandeer.pl/html5-blog.html#ustawienie-kodowania)).
* Usunąłem `[type]` z arkuszy stylów, bo jest całkowicie zbędne (**preferencja**).
* Zmieniłem styl cudzysłowów w arkuszu z Google Fonts (nie, to **NIE** jest preferencja – konsekwencja stylu jest niezmiernie istotna).
* Usunąłem `div.container` i jego style przeniosłem na `body`. Bo jeśli można pozbyć się dodatkowego elementu, to dlaczego tego nie zrobić? (**preferencja**)
* Dla każdej podstrony ustawiłem unikalny tytuł (co jest ważne nie tylko ze względu na SEO, ale przede wszystkim dostępność i UX).
* Style z `:hover` przepisałem na `:focus` dla [zwiększenia użyteczności](http://outlinenone.com).

### `head`

* Przeniosłem `meta[http-equiv="X-UA-Compatible"]` tuż po `meta[charset]` i **zostawiłem** te tagi jako pierwsze w `head` – wszystko z powodu [znanych bugów](https://github.com/h5bp/html5-boilerplate/blob/b5d6e7b1613fca24d250fa8e5bc7bcc3dd6002ef/dist/doc/html.md#the-order-of-the-title-and-meta-tags).
* Usunąłem z `meta[http-equiv="X-UA-Compatible"]` fragment `,chrome=1`, gdyż Chrome Frame [nie istnieje od lat](http://blog.chromium.org/2013/06/retiring-chrome-frame.html).
* Zakodowałem fajkę (`|`) w adresie arkusza Google Fonts na wersję zakodowaną (`%7C`). Inaczej kod nie przechodził walidacji

### CSS

* Przeniosłem style do osobnego arkusza – w myśl zasady [trójpodziału warstw strony WWW](http://webroad.pl/inne/3722-progressive-enhancement-zapomniany-fundament).
* Wywaliłem stylowanie po `[id]`, gdyż [jest to powszechnie znana zła praktyka](http://forum.pasja-informatyki.pl/109776/html-class-czy-id?show=109816#a109816).
* Zmieniłem nazwę klasy `.zegar` na `.timer`. Trochę konsekwencji: skoro wszystkie inne klasy są po angielsku, ta też może.
* Usunąłem selektory elementów z arkusza, zostawiając same klasy. Nie widzę sensu w niepotrzebnym podwyższaniu [specyficzności selektorów](http://www.standardista.com/css3/css-specificity/).
* Klamerki otwierające (`{`) przeniosłem do tej samej linijki, co selektor (**preferencja**).
* Skróciłem kolory typu `#ffffff` do `#fff`.

### JS

* Przeniosłem skrypt na koniec `body`. Jest to znana od lat [dobra praktyka](https://developer.yahoo.com/performance/rules.html#js_bottom),
* Tym sposobem `[onload]` stało się zbędne i zastąpiłem je po prostu wywołaniem funkcji `odliczanie` w pliku `timer.js`.
* Zmieniłem styl kodu JS na swój (**preferencja**).
* Wszystkie zmienne poddałem [hoistingowi](https://developer.mozilla.org/en-US/docs/Glossary/Hoisting) (**preferencja**).
* Zmieniłem nazwę funkcji `odliczanie` na `timer`. Tak samo jak polskie nazwy zmiennych na ich angielskie odpowiedniki (**preferencja** – chociaż angielskie nazewnictwo to akurat standard wszędzie!).
* Samą funkcję zamieniłem na [IIFE](http://benalman.com/news/2010/11/immediately-invoked-function-expression/) (a dokładniej – [IINFE](https://kangax.github.io/nfe/)), dzięki czemu nic nie wypływa do globalnego scope.
* Dodawanie zera do godziny, minuty i sekundy przerzuciłem do osobnej funkcji. Dzięki temu kod stał się czytelniejszy.
* Do rozdzielenia poszczególnych elementów czasu dwukropkiem użyłem fajnej sztuczki z [`Array.prototype.join`](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/join).
* Wywaliłem stringa z `setTimeout`, bo to [niepotrzebne użycie `eval`](http://bonsaiden.github.io/JavaScript-Garden/#hidden-use-of-eval-). Zamiast tego podaję uchwyt do funkcji.

### `body`

* Logo zamieniłem na [odpowiedni nagłówek](http://www.webkrytyk.pl/krytyka/lexy.com.pl/#naglowki).
* Link w logo zamieniłem na `/`, bo trzymanie strony głównej pod kilkoma adresami to spory problem z punktu widzenia UX, jak i _de facto_ tworzenie [duplicate content](https://support.google.com/webmasters/answer/66359?hl=en).
* Bzdurne `div[style="clear: both;"]` zamieniłem na [clearfix](http://nicolasgallagher.com/micro-clearfix-hack/) ([inne sposoby](http://www.forumweb.pl/porady-i-tutoriale-www/css-clearowanie-czyli-problemy-z-float,47914)).
* Menu zamieniłem na listę, bo to [ogólnie uznany standard](https://css-tricks.com/wrapup-of-navigation-in-lists/). Tym samym dodałem do stylów regułkę usuwają wypunktowanie w menu i margines oraz zamieniłem `div` na `li`.
* Poprawiłem kod ikonek na [poprawny, czyli dostępny](http://fontawesome.io/accessibility/).
* Wywaliłem niepotrzebne `br`, zamieniając je na wyświetlanie blokowe ikonki.
* Kod dla cytatu zamieniłem na `blockquote > p + cite`, bo [tak się poprawnie oznacza cytaty](http://html5doctor.com/cite-and-blockquote-reloaded/).
* Zamieniłem bezsensowne `br` na odpowiednie akapity i inne tagi.
* Zamieniłem także 1. linijkę treści na odpowiedni nagłówek `h2`.
* Całkowicie niedostępne ikonki socialków zamieniłem na listę (bo to jest w końcu lista linków) wraz z dodanym odpowiednim tekstem dla czytników ekranowych przy pomocy [`.visuallyhidden`](https://github.com/h5bp/html5-boilerplate/blob/b5d6e7b1613fca24d250fa8e5bc7bcc3dd6002ef/dist/doc/css.md#visuallyhidden). Tak samo zrobiłem z linkiem do maila w stopce.
* Ach, no i dodałem [linka do maila](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Email_links) w stopce.
* Usunąłem także [niepotrzebny `[target]`](https://kornel.ski/target).
* Pozwoliłem sobie zamienić encję `&copy;` bezpośrednio na odpowiedni znaczek Unicode (`©`).

## Inne

* Zamieniłem `-` na `—`… bo tak ;)
* Usunąłem słowa kluczowe z przyjaznych adresów. W końcu mają być *przyjazne**, a nie nafaszerowane pod SEO.
