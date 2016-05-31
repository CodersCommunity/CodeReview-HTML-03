# Code Review kursu HTML#3

Film: https://www.youtube.com/watch?v=5y3Qc9Qs6TY

Temat: http://forum.pasja-informatyki.pl/146286/cr-html-%233-linkowanie-podstron-przyjazne-adresy-fontello

---

Ten branch zawiera kod z brancha [`refactor`](https://github.com/CodersCommunity/CodeReview-HTML-02/tree/refactor) przepisany na HTML5.

---

_Dokładne wyjaśnienie takich a nie innych zmian w [moim tutorialu o HTML5](http://tutorials.comandeer.pl/html5-blog.html)._


## Lista poprawek

* Nagłówek strony trafił do `header`.
* Zegar trafił do `time[datetime]`. Tym samym w skrypcie znalazła się dodatkowa instrukcja generująca ten atrybut.
* Menu strony (jak i socjalki – chociaż nad tym można się zastanowić) trafiły do `nav`. Dodatkowo dodałem im nagłówki z `.visuallyhidden`.
* Główna treść trafiłą do `main`. Można się zastanowić nad `main > article`, ale nie jest to konieczne.
* Stopka trafiła do `footer`.
