# 📞 Call Center - System Zgłoszeń

Nowoczesna aplikacja webowa do zarządzania zgłoszeniami klientów w call center, zbudowana z Vue 3, Pinia i Sass.

## ✨ Funkcjonalności

### 📋 Lista zgłoszeń
- Wyświetlanie wszystkich zgłoszeń w przejrzystej formie kart
- Filtrowanie po statusie (Wszystkie, Nowe, W trakcie, Zamknięte)
- Statystyki zgłoszeń w czasie rzeczywistym
- Responsywny design - karty na mobile, siatka na desktop
- Animacje i płynne przejścia

### 🔍 Szczegóły zgłoszenia
- Pełne informacje o zgłoszeniu
- Możliwość zmiany statusu
- Historia zmian (timeline)
- Powrót do listy

### 🎨 Design
- Nowoczesny, kolorowy interfejs
- Używa unikalnych fontów (Outfit, JetBrains Mono)
- Gradient różowo-fioletowy jako motyw przewodni
- Różne kolory dla statusów i priorytetów
- Pełna responsywność

## 🛠️ Stack technologiczny

- **Vue 3** (Composition API)
- **Pinia** (zarządzanie stanem)
- **Vue Router** (nawigacja)
- **Sass** (stylowanie)
- **Vite** (build tool)

## 🚀 Instalacja i uruchomienie

### Wymagania
- Node.js (wersja 16 lub nowsza)
- npm lub yarn

### Kroki instalacji

1. **Zainstaluj zależności:**
```bash
npm install
```

2. **Uruchom serwer deweloperski:**
```bash
npm run dev
```

3. **Otwórz w przeglądarce:**
```
http://localhost:5173
```

### Inne komendy

- **Build produkcyjny:**
```bash
npm run build
```

- **Preview buildu:**
```bash
npm run preview
```

## 📁 Struktura projektu

```
call-center-tickets/
├── src/
│   ├── views/
│   │   ├── TicketList.vue      # Widok listy zgłoszeń
│   │   └── TicketDetails.vue   # Widok szczegółów zgłoszenia
│   ├── stores/
│   │   └── tickets.js          # Store Pinia z logiką
│   ├── router/
│   │   └── index.js            # Konfiguracja routera
│   ├── styles/
│   │   ├── main.scss           # Główny plik stylów
│   │   └── components/
│   │       ├── _ticket-list.scss
│   │       └── _ticket-details.scss
│   ├── App.vue                 # Główny komponent
│   └── main.js                 # Entry point
├── index.html
├── vite.config.js
└── package.json
```

## 🎯 Kluczowe funkcje

### Store (Pinia)
Store `useTicketsStore` zawiera:
- **State**: `tickets`, `loading`, `currentFilter`
- **Actions**: 
  - `fetchTickets()` - symulacja pobierania danych z API
  - `updateTicketStatus()` - aktualizacja statusu zgłoszenia
  - `setFilter()` - ustawienie aktywnego filtra
- **Getters**:
  - `filteredTickets` - zgłoszenia według aktywnego filtra
  - `getTicketById` - pojedyncze zgłoszenie po ID
  - `ticketStats` - statystyki zgłoszeń

### Routing
- `/` - Lista zgłoszeń
- `/ticket/:id` - Szczegóły zgłoszenia

### Sass Features
- Zmienne dla kolorów, spacing, cieni
- Zagnieżdżanie selektorów
- Mixiny i funkcje
- Responsywność z breakpointami
- Animacje i przejścia

## 🎨 Kolory statusów

- **Nowe** - Niebieski (#3B82F6)
- **W trakcie** - Pomarańczowy (#F59E0B)
- **Zamknięte** - Zielony (#10B981)

## 🎨 Kolory priorytetów

- **Niski** - Szary (#6B7280)
- **Średni** - Pomarańczowy (#F59E0B)
- **Wysoki** - Czerwony (#EF4444)

## 📱 Responsywność

Aplikacja jest w pełni responsywna z trzema breakpointami:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 💡 Przykładowe dane

Aplikacja zawiera 10 przykładowych zgłoszeń z różnymi statusami i priorytetami.

## 🔧 Możliwe rozszerzenia

- Integracja z prawdziwym API
- Dodawanie nowych zgłoszeń
- Komentarze do zgłoszeń
- Przypisywanie operatorów
- Eksport do CSV/PDF
- Powiadomienia
- Wyszukiwanie
- Sortowanie

## 📄 Licencja

MIT

## 👨‍💻 Autor

Aplikacja stworzona jako demo systemu zgłoszeń call center.
