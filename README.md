# 👨‍💻 My Personal Portfolio 

## 🌟 Welcome to My Digital Workspace!

### 🚀 Quick Overview

This is a modern, responsive personal portfolio built with React and Vite, showcasing my skills, projects, and professional journey.

### 🛠 Tech Stack

![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)

### 📚 Key Libraries

- 🔗 **React Router DOM**: Smooth, dynamic routing
- 📧 **EmailJS**: Seamless contact form integration
- 🎨 **Box Icons**: Stunning, scalable icons

## ✨ Project Highlights

- 🌈 Fully Responsive Design
- 🚀 Single Page Application (SPA)
- 📱 Mobile-Friendly Interface
- 🔌 Smooth Page Transitions
- 📨 Direct Contact Functionality

## 🚀 Getting Started

### Prerequisites

- Node.js (v14.0.0+)
- npm or yarn

### Quick Setup

1. Clone the repository
   ```bash
   git clone https://github.com/itz-Hiru/portfolio.git
   ```

2. Install dependencies
   ```bash
   cd portfolio
   npm install
   ```

3. Run the development server
   ```bash
   npm run dev
   ```

## 🔧 Environment Configuration

```
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

## 🌐 GitHub Pages Deployment

### Deployment Steps

1. Install `gh-pages` package
   ```bash
   npm install gh-pages --save-dev
   ```

2. Update `package.json` scripts
   ```json
   {
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     }
   }
   ```

3. Configure `vite.config.js`
   ```javascript
   export default defineConfig({
     plugins: [react()],
     base: '/portfolio/'
   })
   ```

4. Deploy to GitHub Pages
   ```bash
   npm run deploy
   ```

## 🧩 Project Structure

```
portfolio/
│
├── src/
│   ├── components/
│   └── assets/
│
├── public/
└── README.md
```

## 🤝 How to Contribute

1. Fork the Project
2. Create Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to Branch (`git push origin feature/AmazingFeature`)
5. Open Pull Request

## 📧 Connect With Me

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/hirumitha)
[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/itz-Hiru)
[![Email](https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:hirumithakuladewanew@gmail.com)

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

---

🌈 **Built with passion, powered by creativity** 🚀

![Visitor Count](https://visitor-badge.laobi.icu/badge?page_id=itz-Hiru.portfolio)
