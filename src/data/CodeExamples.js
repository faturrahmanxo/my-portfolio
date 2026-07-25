export const codeExamples = {
  "Profile.jsx": `// Habib Iqbal Faturrahman

const profile = {
  nama: "Habib Iqbal Faturrahman",
  role: "Frontend Developer",
  gpa: 3.84,
  tech: ["React", "JavaScript"],
  status: "Open to Work"
};

export default profile;
`,
  "Hero.jsx": `// Habib Iqbal Faturrahman

const profile = {
  nama: "Habib Iqbal Faturrahman",
  role: "Frontend Developer",
  gpa: 3.81,
  tech: ["React", "Tailwind CSS", "JavaScript"],
  status: "Open to Work"
};

export default profile;
}`,
  "Navbar.jsx": `import { useState } from "react";
import { CodeFlow } from "@codeflow/ai";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = async () => {
    const results = await CodeFlow.search(searchQuery);
    return results;
  };

  return (
    <nav className="navbar">
      <div className="nav-brand">
        <h2>CodeFlow AI</h2>
      </div>
      
      <div className="nav-search">
        <input 
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search code..."
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      
      <button 
        className="menu-toggle"
        onClick={() => setIsOpen(!isOpen)}
      >
        ☰
      </button>
    </nav>
  );
}`,
};

export const floatingCards = {
  "Profile.jsx": {
    bgColor: "bg-blue-500/20",
    iconColor: "text-blue-400",
    textColor: "text-blue-200",
    contentColor: "text-blue-300",
    icon: "AI",
    title: "Smart Completion",
    content: "AI-powered code suggestions in real-time",
  },
  "Hero.jsx": {
    bgColor: "bg-purple-500/20",
    iconColor: "text-purple-400",
    textColor: "text-purple-200",
    contentColor: "text-purple-300",
    icon: "⚡",
    title: "Auto Animation",
    content: "Dynamic typing effects generated automatically",
  },
  "Navbar.jsx": {
    bgColor: "bg-emerald-500/20",
    iconColor: "text-emerald-400",
    textColor: "text-emerald-200",
    contentColor: "text-emerald-300",
    icon: "🔍",
    title: "Smart Search",
    content: "Intelligent code search across your project",
  },
};
