![Async AI Tool Logo](./assets/image/marketing-image-1_1-1759839662302-removebg-preview.png)

# 🤖 Asyncdev AI

An AI-powered marketing visual generator that creates stunning, brand-tailored images through an interactive onboarding process. Built with modern web technologies and powered by multiple AI image generation APIs.

![Async AI Tool](https://img.shields.io/badge/React-18.3.1-blue) ![TypeScript](https://img.shields.io/badge/TypeScript-5.8.3-blue) ![Vite](https://img.shields.io/badge/Vite-5.4.19-yellow) ![Supabase](https://img.shields.io/badge/Supabase-2.58.0-green) ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat&logo=tailwind-css&logoColor=white) ![ShadCN UI](https://img.shields.io/badge/ShadCN_UI-000000?style=flat&logo=shadcnui&logoColor=white) ![Radix UI](https://img.shields.io/badge/Radix_UI-161618?style=flat&logo=radix-ui&logoColor=white) ![TanStack Query](https://img.shields.io/badge/TanStack_Query-FF4154?style=flat&logo=react-query&logoColor=white)

## ✨ Features

- **Interactive Onboarding**: Step-by-step process to collect your brand preferences (industry, niche, goals, style, format, profile)
- **AI-Powered Generation**: Leverages multiple AI APIs for high-quality image creation (Pollinations.ai, Google Imagen, Stability AI)
- **Smart Prompt Building**: Automatically constructs detailed prompts based on your onboarding data
- **Customizable Prompts**: Edit generated prompts before image creation
- **Image Gallery**: View and manage all generated images
- **Download Options**: Save images in various formats
- **Responsive Design**: Works seamlessly across desktop and mobile devices
- **Modern UI**: Built with ShadCN UI components and Tailwind CSS

## 🛠️ Tech Stack

### Frontend

- **React 18** - Modern React with hooks and concurrent features
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool and development server
- **ShadCN UI** - Beautiful, accessible UI components
- **Tailwind CSS** - Utility-first CSS framework
- **Radix UI** - Low-level UI primitives
- **React Router** - Client-side routing
- **TanStack Query** - Powerful data synchronization

### Backend

- **Supabase Functions** - Serverless functions powered by Deno API
- **Firebase Functions** - Additional serverless functions for AI integration
- **Supabase** - Backend-as-a-Service for database and auth

### AI Integration

- **Pollinations.ai** - Primary free AI image generation API (currently active)
- **Google Imagen** - Advanced multimodal AI model via Firebase Functions
- **Stability AI** - Stable Diffusion XL via Firebase Functions

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm, yarn, or bun package manager
- Supabase CLI (for local development)
- Firebase CLI (optional, for Firebase Functions deployment)

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd asyncdev-ai
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   bun install
   ```

3. **Set up Supabase**

   ```bash
   # Install Supabase CLI if not already installed
   npm install -g supabase

   # Initialize Supabase (if not already done)
   supabase init

   # Start Supabase locally
   supabase start
   ```

4. **Environment Variables**

   Create a `.env` file in the root directory. For basic functionality (using Pollinations.ai), no API keys are required. For production deployment with Firebase Functions:

   ```env
   # Firebase Functions API Keys (optional, for production deployment)
   # GOOGLE_AI_API_KEY=your_google_ai_api_key_here
   # STABILITY_API_KEY=your_stability_api_key_here

   # Supabase configuration (if using custom Supabase instance)
   VITE_SUPABASE_URL=your_supabase_url
   VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

5. **Deploy Functions (optional, for production)**

   For Firebase Functions:
   ```bash
   # Install Firebase CLI
   npm install -g firebase-tools

   # Deploy functions
   firebase deploy --only functions
   ```

   For Supabase Functions:
   ```bash
   supabase functions deploy generate-image
   ```

### Running the Application

1. **Start the development server**

   ```bash
   npm run dev
   # or
   bun run dev
   ```

2. **Open your browser**

   Navigate to `http://localhost:5173` (or the port shown in your terminal).

## 📖 Usage

### Onboarding Process

1. **Welcome**: Introduction to Asyncdev AI
2. **Industry**: Select your business industry
3. **Niche**: Define your specific market niche
4. **Goals**: Choose your marketing objectives
5. **Style**: Pick your preferred visual style
6. **Format**: Select image format and dimensions
7. **Profile**: Provide brand details and preferences

### Generating Images

1. After completing onboarding, you'll see the main dashboard
2. Review the auto-generated prompt based on your preferences
3. Customize the prompt if needed using the prompt input
4. Click "Generate Image" to create your visual
5. View generated images in the gallery
6. Download images in your preferred format

## 📁 Project Structure

```
asyncdev-ai/
├── public/                 # Static assets
├── src/
│   ├── components/         # Reusable UI components
│   │   ├── steps/         # Onboarding step components
│   │   └── ui/            # ShadCN UI components
│   ├── hooks/             # Custom React hooks
│   ├── integrations/      # External service integrations
│   │   └── supabase/      # Supabase client and types
│   ├── lib/               # Utility libraries
│   ├── pages/             # Page components
│   ├── types/             # TypeScript type definitions
│   ├── utils/             # Utility functions
│   └── ...
├── supabase/
│   ├── functions/         # Serverless functions
│   │   └── generate-image/# Image generation function
│   └── config.toml        # Supabase configuration
├── functions/             # Firebase Functions
│   ├── src/               # Function source code
│   └── ...
├── package.json
├── vite.config.ts
├── tailwind.config.ts
└── README.md
```

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines

- Use TypeScript for all new code
- Follow the existing code style and conventions
- Write meaningful commit messages
- Test your changes thoroughly
- Update documentation as needed

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [ShadCN UI](https://ui.shadcn.com/) for the beautiful component library
- [Pollinations.ai](https://pollinations.ai/) for the free AI image generation
- [Google Imagen](https://ai.google.dev/) for advanced AI capabilities
- [Stability AI](https://stability.ai/) for Stable Diffusion models
- [Supabase](https://supabase.com/) for the backend infrastructure
- [Firebase](https://firebase.google.com/) for serverless functions
- Harmon Javier for developing this project

## 📞 Support

If you have any questions or need help, please:

https://github.com/HarmonJavier01/Async_ai_gen.git

- Open an issue on GitHub
- Check the documentation
- Reach out to the maintainers

---

**Made with ❤️ using modern web technologies**
