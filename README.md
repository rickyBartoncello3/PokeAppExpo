# Pokédex App

Mobile Pokédex application built with **React Native**, **Expo**, **React Navigation**, **TanStack Query**, **Axios**, **SQLite**, and **i18next**.

The app allows users to browse Pokémon with infinite scroll, view Pokémon details, search locally within the loaded list, save favorites offline, and persist the last loaded data locally.

---

## Features

- Pokémon list with two-column card layout.
- Infinite scroll pagination.
- Pokémon detail screen.
- Favorite / unfavorite Pokémon.
- Local search by Pokémon name.
- Offline persistence using SQLite.
- Last loaded Pokémon list stored locally.
- Dark mode and light mode support.
- Internationalization with English and Spanish.
- Reusable UI components.
- Compound Pattern implementation for Pokémon cards and Pokémon detail.
- Custom loading state.
- Empty state component.
- Error handling and cached fallback.

---

## Tech Stack

- React Native
- Expo
- TypeScript
- React Navigation
- TanStack Query
- Axios
- Expo SQLite
- i18next
- React Native Paper
- React Native Reanimated
- React Native Gesture Handler

---

## Project Structure

```txt
src
├── assets
│   └── fonts
├── components
│   ├── Button
│   ├── Card
│   ├── CustomIcon
│   ├── CustomView
│   ├── EmptyState
│   ├── Header
│   ├── Loading
│   ├── PokemonCard
│   ├── PokemonDetail
│   ├── Text
│   └── TypeChip
├── constants
├── hooks
├── i18n
├── navigation
├── providers
├── repositories
├── screens
│   ├── PokemonDetailScreen
│   └── PokemonListScreen
├── services
├── storage
│   └── database
├── theme
├── types
└── utils
```
