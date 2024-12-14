# IMDb Clone

A modern, responsive IMDb clone built with React, TypeScript, and Tailwind CSS. This project demonstrates best practices in React development including component composition, custom hooks, context management, and responsive design.

![IMDb Clone Screenshot](https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=1200&auto=format&fit=crop&q=80)

## 🚀 Features

- 🎬 Movie search and details
- 👤 User authentication
- 🎯 Personalized recommendations
- 📱 Fully responsive design
- 🎨 Modern UI with Tailwind CSS
- 🔍 Real-time search
- 📊 Movie ratings and reviews

## 🛠️ Technologies

- React 18
- TypeScript
- Tailwind CSS
- Vite
- OMDB API
- Lucide Icons

## 📦 Project Structure

```
src/
├── api/              # API integration
├── components/       # Reusable UI components
│   ├── auth/        # Authentication related components
│   ├── common/      # Common UI elements
│   ├── movies/      # Movie-related components
│   └── welcome/     # Welcome page components
├── context/         # React Context providers
├── hooks/           # Custom React hooks
├── pages/           # Page components
├── types/           # TypeScript type definitions
└── utils/           # Utility functions
```

## 🚀 Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/imdb-clone.git
   ```

2. Install dependencies:
   ```bash
   cd imdb-clone
   npm install
   ```

3. Create a `.env` file:
   ```env
   VITE_OMDB_API_KEY=your_api_key
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

## 🔧 Environment Variables

- `VITE_OMDB_API_KEY`: Your OMDB API key

## 📝 Code Style

This project follows strict coding standards:

- ESLint for code linting
- Prettier for code formatting
- TypeScript strict mode enabled
- Component-first architecture
- Custom hooks for business logic
- Context for state management

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.