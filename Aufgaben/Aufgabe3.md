# 03 - React Query

Installation: `npm i react-query`

`const queryClient = new QueryClient()` in App.tsx integrieren

API-Funktionen implementieren (mit fetch-API) => Promises als return Value

In der Komponente:
- queryClient mit useQueryClient holen
- query Erzeugen mit useQuery mit Name + API-Funktion
- mutation Erzeugen mit useMutation mit API-Funktion + Succcess-Handler

Behandle den Lade-, Fehler- und Erfolgsfall beim Lesen und ermögliche das Löschen von Datensätzen.