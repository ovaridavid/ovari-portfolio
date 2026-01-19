export const siteConfig = {
  name: "Dávid Óvári /ˈoːvaːri/",
  title: "I build applications for a living, delivering ideas right into your pocket",
  description: "Portfolio website of Dávid Óvári",
  accentColor: "#4F93FF",
  social: {
    email: "ovari.david.od@gmail.com",
    linkedin: "https://www.linkedin.com/in/ovaridavid/",
    twitter: "https://x.com/DavidOvari",
    github: "https://github.com/ovaridavid",
  },
  aboutMe:
    "iOS Developer with hands-on experience building scalable applications used by millions. I specialize in writing clean, testable Swift code—leveraging UIKit & SwiftUI, RxSwift and Combine within modern architectures to ensure long-term maintainability. I enjoy working in collaborative teams to build high-quality features that balance performance and a great user experience!",
  skills: ["Swift", "SwiftUI", "UIKit", "RxSwift", "Combine"],
  projects: [
    {
      name: "DrinkSpot: Daily Drink Tracker",
      description:
        "DrinkSpot is a stylish and intuitive iOS app designed to simplify daily hydration tracking, allowing users to monitor water and various beverages with just a tap while setting personalized goals and receiving timely reminders. It offers comprehensive features like nutrition monitoring for calories, carbs, and proteins, a progress calendar to visualize achievements, and alerts for recommended caffeine or sugar intake to promote healthier habits. With seamless Apple Health integration, interactive charts, widgets, and a clean user interface, DrinkSpot helps users stay hydrated effortlessly and has been featured on App Hackers and Product Hunt.",
      link: "https://apps.apple.com/us/app/drinkspot-daily-drink-tracker/id1545770917",
      skills: ["Swift", "SwiftUI", "Apple Health", "Widgets"],
    },
    {
      name: "Ribbitrail",
      description:
        "Coming soon...",
      link: "ribbitrail.com",
      skills: ["iOS", "Swift"],
    }
  ],
  experience: [
    {
      company: "OTP Bank Magyarország",
      title: "Medior iOS Developer",
      dateRange: "Apr 2023 - Dec 2025",
      bullets: [
        "Drove digital transformation for Hungary’s largest retail bank serving 1M+ users",
        "Built native iOS flows for personal loans and credit account applications",
        "Developed overdraft management and Fizz voucher integration",
        "Engineered fully digital account opening for both adult and junior users",
        "Implemented advanced KYC features, including Video ID and NFC passport reading",
        "Optimized user onboarding with A/B testing capabilities",
        "Enhanced UX via biometric authentication, push notifications, and deep linking",
      ],
    },
    {
      company: "CodeYard Kft.",
      title: "Junior iOS Developer",
      dateRange: "Jul 2021 - Mar 2023",
      bullets: [
        "Contributed to the Xeropan language learning app",
        "Implemented secure integrations with the KRÉTA school system for Xeropan Classroom",
        "Enhanced core wallet functionalities, transaction handling, and secure data storage for BlockBen",
        "Supported onboarding processes, KYC integration, dashboard improvements, and modular UI components in Benker, a blockchain-based banking app",
      ],
    }
  ],
  education: [
    {
      school: "University of Szeged",
      degree: "Bachelor of Science in Computer Science",
      dateRange: "2019 -",
      achievements: [
        "Pursued Computer Science studies before transitioning to full-time iOS development",
      ],
    }
  ],
};
