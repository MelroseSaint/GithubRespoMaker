# RespoGen - All-in-One Repository Generator

[User Guide (docs/UserGuide.md)](docs/UserGuide.md)

🚀 **The ultimate repository generator for developers** - Create production-ready project structures with modern templates, advanced configurations, and best practices built-in.

## ✨ Features

### 🎯 **7 Professional Templates**
- **React App** - Modern React with hooks, routing, and styling
- **Vue.js App** - Vue 3 with Composition API and modern tooling
- **Next.js App** - Full-stack React framework with SSR/SSG
- **Node.js API** - Express-based REST API with middleware
- **Python Flask** - Lightweight Python web framework
- **Full-Stack** - Complete MERN/PERN stack application
- **Dockerized Node.js** - Container-ready Node.js application

### ⚙️ **Advanced Configuration Options**
- **🔧 Git Hooks** - Pre-commit and commit-msg hooks for code quality
- **🚀 CI/CD Workflows** - GitHub Actions for automated testing and deployment
- **🐳 Docker Configuration** - Dockerfile and docker-compose.yml
- **🧪 Testing Setup** - Jest, Pytest, and testing configurations
- **📏 Code Quality** - ESLint, Prettier, Flake8, Black configurations
- **💻 VS Code Integration** - Settings, extensions, and debug configurations

### 🛠️ **Developer Experience**
- **Web UI** - Intuitive interface for project generation
- **File Upload** - Support for ZIP files and individual files
- **Code Snippets** - Include custom code in generated projects
- **Instant Download** - Get your project as a ready-to-use ZIP
- **API Endpoints** - Programmatic access for automation

## 🚀 Quick Start

```bash
# Clone the repository
git clone https://github.com/MelroseSaint/RespoGen.git
cd RespoGen

# Install dependencies
npm install

# Start the server
npm start
# or
node server.js

# Open in browser
# http://localhost:3000
```

## 📋 Requirements

- **Node.js** >= 18.0.0
- **npm** >= 9.0.0
- **Git** (for version control features)

## 🎮 Usage

### Web Interface

1. **Open** `http://localhost:3000` in your browser
2. **Enter** your project name
3. **Select** a template from 7 professional options
4. **Choose** advanced configuration options:
   - ✅ Git Hooks for code quality
   - ✅ CI/CD workflows for automation
   - ✅ Docker for containerization
   - ✅ Testing setup for reliability
   - ✅ Linting for code consistency
   - ✅ VS Code configuration for better DX
5. **Upload** files or ZIP (optional)
6. **Add** code snippets (optional)
7. **Generate** and download your project!

### API Usage

#### Generate Repository (ZIP Download)
```bash
curl -X POST http://localhost:3000/generate \
  -F "repoName=my-awesome-project" \
  -F "template=react-app" \
  -F "description=My awesome React application" \
  -F "advancedConfig={\"gitHooks\":true,\"cicd\":true,\"docker\":true}" \
  -F "zip=@existing-project.zip" \
  -o my-awesome-project.zip
```

#### JSON Response
```bash
curl -X POST http://localhost:3000/api/generate \
  -F "repoName=my-project" \
  -F "template=vue-app" \
  -F "advancedConfig={\"testing\":true,\"linting\":true}"
```

## 📁 Project Templates

### Frontend Frameworks

#### React App
- ⚛️ React 18 with hooks
- 🎨 Modern CSS and styling
- 📱 Responsive design ready
- 🔧 Development tools configured

#### Vue.js App
- 🖖 Vue 3 with Composition API
- 🎯 TypeScript support ready
- 🎨 Scoped styling
- 🛠️ Vue CLI compatible

#### Next.js App
- ⚡ Server-side rendering
- 🎯 API routes included
- 📱 Mobile-first approach
- 🚀 Production optimized

### Backend APIs

#### Node.js API
- 🚀 Express.js framework
- 🔐 Authentication middleware ready
- 📊 Logging and monitoring
- 🧪 Testing setup included

#### Python Flask
- 🐍 Flask web framework
- 🔧 Blueprint architecture
- 📊 SQLAlchemy ready
- 🧪 Pytest configuration

### Full-Stack Applications

#### Full-Stack Template
- 🎯 Frontend + Backend integrated
- 🗄️ Database configuration
- 🔐 Authentication flow
- 🚀 Deployment ready

### DevOps & Containerization

#### Dockerized Node.js
- 🐳 Multi-stage Docker build
- 📦 Docker Compose setup
- 🔧 Environment configuration
- 🚀 Production optimized

## ⚙️ Advanced Configuration

### Git Hooks
- **Pre-commit**: Runs linting and formatting
- **Commit-msg**: Validates commit message format
- **Husky integration**: Easy hook management

### CI/CD Workflows
- **GitHub Actions**: Automated testing and deployment
- **Multi-environment**: Development, staging, production
- **Security scanning**: Dependency and code analysis
- **Automated releases**: Version bumping and changelog

### Docker Configuration
- **Dockerfile**: Optimized multi-stage builds
- **docker-compose.yml**: Development and production setups
- **Environment variables**: Secure configuration management
- **Health checks**: Container monitoring

### Testing Setup
- **Jest** (JavaScript/TypeScript): Unit and integration tests
- **Pytest** (Python): Comprehensive testing framework
- **Coverage reports**: Code coverage tracking
- **CI integration**: Automated test execution

### Code Quality
- **ESLint**: JavaScript/TypeScript linting
- **Prettier**: Code formatting
- **Flake8**: Python linting
- **Black**: Python code formatting

### VS Code Integration
- **Settings**: Optimized editor configuration
- **Extensions**: Recommended extensions list
- **Debug config**: Ready-to-use debug setups
- **Tasks**: Build and test automation

## 🛠️ Development Scripts

```bash
# Development
npm run dev          # Start with nodemon
npm run dev:debug    # Start with debugging

# Code Quality
npm run lint         # Run ESLint
npm run format       # Format with Prettier

# Docker
npm run docker:build # Build Docker image
npm run docker:run   # Run Docker container
npm run docker:dev   # Development with Docker

# Utilities
npm run clean        # Clean temporary files
npm run health       # Health check
```

## 🏗️ Project Structure

```
RespoGen/
├── 📁 public/           # Web interface
│   ├── index.html       # Main UI
│   ├── app.js          # Frontend logic
│   └── styles.css      # Styling
├── 📄 server.js        # Main server
├── 📄 package.json     # Dependencies & scripts
├── 📄 README.md        # This file
└── 📁 output/          # Generated projects (gitignored)
```

## 🔧 Configuration

### Environment Variables
```bash
PORT=3000              # Server port (default: 3000)
NODE_ENV=development   # Environment mode
```

### Customization
- **Templates**: Modify `projectTemplates` in `server.js`
- **UI**: Update files in `public/` directory
- **Advanced configs**: Extend generator functions

## 🐛 Troubleshooting

### Common Issues

**Server won't start**
```bash
# Check if port is in use
netstat -ano | findstr :3000

# Kill existing Node processes
taskkill /f /im node.exe
```

**Template not generating**
- Verify template name matches exactly
- Check server logs for errors
- Ensure all dependencies are installed

**Advanced config not working**
- Validate JSON format in `advancedConfig`
- Check browser console for errors
- Verify server-side parsing

### Debug Mode
```bash
npm run dev:debug
# Then attach debugger to port 9229
```

## 🤝 Contributing

1. **Fork** the repository
2. **Create** a feature branch: `git checkout -b feature/amazing-feature`
3. **Commit** changes: `git commit -m 'Add amazing feature'`
4. **Push** to branch: `git push origin feature/amazing-feature`
5. **Open** a Pull Request

### Development Guidelines
- Follow existing code style
- Add tests for new features
- Update documentation
- Use conventional commits

## 📄 License

MIT License - see [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built with ❤️ for the developer community
- Inspired by modern development workflows
- Powered by Node.js and Express

---

**Made with 💻 by developers, for developers**

🌟 **Star this repo if it helped you create awesome projects!**