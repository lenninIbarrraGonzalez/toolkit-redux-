# Toolkit Redux Pokémon App

Este proyecto es una aplicación React que utiliza Redux Toolkit para manejar el estado global y Axios para consumir la API pública de Pokémon ([PokeAPI](https://pokeapi.co/)). Permite visualizar una lista paginada de pokemones y navegar entre páginas.

## Estructura del proyecto

```
src/
│
├── api/
│   └── pokemonApi.js         # Configuración de Axios para la API de Pokémon
│
├── store/
│   ├── store.js              # Configuración del store de Redux
│   ├── index.js              # Exporta el store
│   └── slices/
│       ├── counter/          # Slice de ejemplo para contador
│       └── pokemon/
│           ├── pokemonSlice.js # Slice para manejar pokemones
│           ├── thunks.js       # Thunks asíncronos para pokemones
│           └── index.js
│
├── App.jsx                   # Componente principal de ejemplo (no usado por defecto)
├── PokemonApp.jsx            # Componente principal de la app de Pokémon
├── main.jsx                  # Punto de entrada de la app
└── ...
```

## Principales archivos y su función

- **`pokemonApi.js`**: Instancia de Axios con la base URL de la PokeAPI.
- **`pokemonSlice.js`**: Define el estado, reducers y acciones para los pokemones.
- **`thunks.js`**: Funciones asíncronas para obtener los pokemones desde la API.
- **`PokemonApp.jsx`**: Componente que muestra la lista de pokemones y permite paginar.
- **`store.js`**: Configura el store de Redux e integra los slices.

## ¿Cómo funciona el flujo de datos?

1. **Al montar el componente `PokemonApp`**, se despacha la acción asíncrona `getPokemons`.
2. **El thunk `getPokemons`** hace una petición a la API y, cuando recibe los datos, los guarda en el estado global usando el reducer `setPokemons`.
3. **El componente lee el estado** (`pokemons`, `isLoading`, `page`) usando `useSelector` y renderiza la lista.
4. **El botón "siguiente"** permite cargar la siguiente página de pokemones.

## Instalación

```bash
yarn install
yarn dev
```

## Scripts

- `yarn dev` — Inicia el servidor de desarrollo con Vite.
- `yarn build` — Genera la build de producción.
- `yarn lint` — Ejecuta ESLint.
- `yarn preview` — Previsualiza la build de producción.

## Requisitos

- Node.js 18+
- npm

## Créditos

- [PokeAPI](https://pokeapi.co/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)

---
