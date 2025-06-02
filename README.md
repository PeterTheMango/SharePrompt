# SharePrompt - AI Prompt Sharing Platform

SharePrompt is an innovative open-source platform that empowers users to discover, create, and share AI prompts with the ChatGPT community. Built with Next.js 13, this modern web application facilitates the exchange of ideas by enabling prompt creation, tagging, and collaboration.

## 🌟 Features

- **User Authentication**: Secure Google authentication using NextAuth.js
- **Create and Share Prompts**: Users can create, edit, and delete their AI prompts
- **Discovery Feed**: Browse through a collection of user-submitted prompts
- **Profile Management**: Personal dashboard to manage your prompts
- **Tagging System**: Organize and find prompts by tags
- **Copy to Clipboard**: One-click copy functionality for prompts
- **Responsive Design**: Beautiful, modern UI that works on all devices
- **Real-time Updates**: Instant updates when creating or editing prompts

## 🛠️ Tech Stack

- **Frontend**: Next.js 13, React, TailwindCSS
- **Backend**: Next.js API Routes, MongoDB
- **Authentication**: NextAuth.js with Google Provider
- **Database**: MongoDB with Mongoose ODM
- **Styling**: TailwindCSS with custom UI components
- **Deployment**: Vercel (recommended)

## 🚀 Getting Started

First, clone the repository and install the dependencies:

```bash
git clone <your-repo-url>
cd shareprompt
npm install
```

Create a `.env` file in the root directory with the following variables:

```env
GOOGLE_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
MONGODB_URI=your_mongodb_connection_string
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_URL_INTERNAL=http://localhost:3000
NEXTAUTH_SECRET=your_nextauth_secret
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📝 Project Structure

- `/app` - Next.js 13 app directory containing routes and API endpoints
- `/components` - Reusable React components
- `/models` - MongoDB schema models
- `/styles` - Global styles and Tailwind configurations
- `/utils` - Utility functions and database connection
- `/public` - Static assets and images

## 🤝 Contributing

Contributions are welcome! Feel free to submit issues and pull requests.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- Vercel for the deployment platform
- MongoDB for the database service
- Google Cloud Platform for authentication services
