# Code Review kursu HTML#3

Film: https://www.youtube.com/watch?v=5y3Qc9Qs6TY

Temat: http://forum.pasja-informatyki.pl/146286/cr-html-%233-linkowanie-podstron-przyjazne-adresy-fontello

---

Ten branch zawiera dodatkową poprawkę ponad [branch `apache`](https://github.com/CodersCommunity/CodeReview-HTML-03/tree/apache).

---

## Poprawka

Zgodnie z zasadą [Progressive Enhancement](http://webroad.pl/inne/3722-progressive-enhancement-zapomniany-fundament) (stopniowym ulepszaniem), elementy strony internetowej należy tworzyć w podstawowej wersji (pozwalającej wykonywać podstawowe czynności), a następnie udoskonalać do wersji bardziej zaawansowanej.

Dobrym przykładem może być wyszukiwarka. Podstawowa jej wersja pozwala użytkownikowi na wpisanie frazy do wyszukania oraz przesłanie jej na serwer i wyświetlenie wyników. Wersja zaawansowana to wersja Ajaksowa, wyszukująca "na żywo", wraz z podpowiedziami. Tym sposobem użytkownicy, u których [JS nie zadziała](http://kryogenix.org/code/browser/everyonehasjs.html) i tak będą w stanie skorzystać z wyszukiwarki, natomiast użytkownicy z JS dostaną ładne podpowiedzi + wyniki na żywo.

Na naszej stronie tak ulepszyć stopniowo można zegarek z aktualnym czasem, po prostu generując czas po stronie serwera i przesyłając go użytkownikowi i pozwalając później JS przejąć pieczę nad jego uaktualnianiem. To oczywiście pociąga za sobą konieczność zmiany rozszerzeń plików na PHP, ale nie oszukujmy się – i tak byśmy tak to robili.

Dodałem także przed timerem informację dla czytników ekranowym, że w tym miejscu znajdą aktualny czas.
