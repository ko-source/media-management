# Discussion Topic Selector

An interactive Next.js application built with React and Material UI that allows users to select discussion topics, choose titles, and configure text length preferences.

## Features

- **Topic Selection**: Choose from 6 different topics (Fun, Education, Sports, News, Investment, Facts)
- **Title Selection with Search**: Searchable dropdown menu with custom title support
- **Text Length Slider**: Configure discussion length from 100 to 1000 words
- **Responsive Design**: Optimized for mobile (375px), tablet (745px), and desktop (1440px, 1728px)
- **Smooth Animations**: Fade and grow transitions for enhanced user experience
- **Material UI Components**: Modern, accessible UI components

## Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (version 18 or higher)
- npm, yarn, pnpm, or bun package manager

## Getting Started

### 1. Clone the Repository

```bash
git clone <repository-url>
cd media-management
```

### 2. Install Dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

### 3. Set Up Environment Variables

Copy the `.env.example` file to `.env`:

```bash
cp .env.example .env
```

Edit the `.env` file and add your environment variables (if needed for future API integration).

### 4. Run the Development Server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Project Structure

```
media-management/
├── app/
│   ├── data.ts          # Topic and title data structure
│   ├── layout.tsx       # Root layout with Material UI theme
│   ├── page.tsx         # Main form component
│   ├── theme.ts         # Material UI theme configuration
│   └── globals.css      # Global styles
├── public/              # Static assets
├── .env.example         # Example environment variables
├── package.json         # Project dependencies
└── README.md           # This file
```

## Usage

1. **Select a Topic**: Click on one of the topic tiles (Fun, Education, Sports, News, Investment, or Facts)
2. **Choose a Title**: Use the searchable dropdown to select or search for a discussion title
3. **Set Text Length**: Adjust the slider to set your desired word count (100-1000 words)
4. **Submit**: Click the submit button to confirm your preferences

## Available Topics and Titles

### Fun
- Board games revival, Comedy trends, Amusement parks, Escape rooms, Street performances, Online challenges, Festivals impact, Crafting movement, Social gaming, Virtual reality

### Education
- Gamified learning, Education systems, Bilingual benefits, Standardized testing, Arts in schools, Tech bootcamps, Homeschooling dynamics, Mentorship importance, Educational equity, Mobile learning

### Sports
- Sports medicine, Team sociology, Olympic economics, Gender parity, Fandom psychology, Extreme sports, Sports business, Youth athletics, Data analytics, Doping ethics

### News
- Citizen journalism, Whistleblower influence, Fake news, Print media survival, Social media news, Cybersecurity news, Democratic media, News deserts, News economics, Broadcast evolution

### Investment
- Robo-advising, Geopolitical impacts, Index funds, Real estate trends, Startup investing, Social trading, Tax strategies, Emerging markets, Financial literacy, Pension futures

### Facts
- Animal oddities, Everyday science, Historical obscurities, Science myths, Human body facts, Oceanic discoveries, Space exploration, Ancient tech, World laws, Bizarre news

## Responsive Breakpoints

- **Mobile**: 375px
- **Tablet**: 745px
- **Desktop (Default)**: 1440px
- **Large Desktop**: 1728px

## Technologies Used

- **Next.js 16**: React framework for production
- **React 19**: UI library
- **Material UI (MUI) 7**: Component library
- **TypeScript**: Type-safe JavaScript
- **Tailwind CSS**: Utility-first CSS framework

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Future Enhancements

- Backend API integration for storing user preferences
- User authentication
- Discussion history
- Export/import preferences
- Advanced filtering options

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is private and proprietary.

## Support

For support, please contact the development team.
