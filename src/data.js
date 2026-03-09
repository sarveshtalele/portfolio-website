export const MOCK_CMS = {
    stats: { aiProjects: 5, awards: 8, blogs: 25, researchPapers: 3 },
    journey: [
        {
            id: 1,
            year: 'July 2022 - Present',
            title: 'System Engnieer, Role: AI Engineer @ TCS',
            description: 'Architecting enterprise-grade Agentic AI solutions for SAP BPS workflows. Building production-ready AI agents for SAP automation validated on real UI flows. Implemented Graph RAG for organizational knowledge using LangChain and built ML-driven ticket classification systems.',
            tech: ['Agentic AI', 'RAG', 'LLMs', 'Azure AI', 'LangChain', 'Python', 'FastAPI', 'Azure Foundry AI', 'Azure']
        },
        {
            id: 2,
            year: 'Dec 2019 - Jan 2020 ',
            title: 'Robotics Engineering Intern @ CEMS by Ministry of Shipping with Siemens Industry Software India Pvt Ltd',
            description: 'Trained and programmed industrial robotic cells (8-axis KUKA Robot) for precise manufacturing tasks including MIG welding and material handling.',
            tech: ['Robotics', 'Kinematics', 'KUKA SIM Pro', 'Manufacturing', 'NX11']
        }
    ],
    projects: [
        {
            id: 1,
            name: 'How I Built an Agentic System That Runs My LinkedIn for Free',
            desc: 'An autonomous multi-agent system that ingests information from multiple sources and generates high-quality LinkedIn posts using AI agents, retrieval augmented generation (RAG), and workflow orchestration.',
            tech: ['RAG', 'Agentic RAG', 'LangGraph', 'Agentic AI'],
            type: 'Enterprise AI',
            github: 'https://github.com/sarveshtalele/linkedin-autonomous-content-creation-agentic-system'
        },
        {
            id: 2,
            name: 'How I Built a Private Personal Finance Local RAG System with Ollama: Offline AI for Your PDFs',
            desc: 'A private personal finance local RAG system with Ollama: Offline AI for Your PDFs.',
            tech: ['RAG', 'Ollama', 'Python'],
            type: 'Enterprise AI',
            github: 'https://github.com/sarveshtalele/personal-finance-using-RAG-level-1'
        },
        {
            id: 3,
            name: 'AI Chef Pro',
            desc: 'AI Chef Pro is a cutting-edge AI-powered recipe generation platform that transforms your culinary experience. Leveraging advanced AI algorithms, it crafts unique and delicious recipes tailored to your preferences and available ingredients.',
            tech: ['RAG', 'Ollama', 'Python'],
            type: 'Enterprise AI',
            github: 'https://github.com/sarveshtalele/ai_chef_pro'
        },
        {
            id: 4,
            name: 'Unlock Your Unique Playlist: Personalized Song Recommendations Using Spotify API',
            desc: 'Exploring the immense data of music to create your own personalized playlist using the Spotify API.',
            tech: ['Spotify API', 'Python'],
            type: 'Enterprise AI',
            github: 'https://github.com/sarveshtalele/Music-Recommendation-System-using-Spotify-API'
        },
        {
            id: 5,
            name: 'I Stopped Using Libraries and Built TF-IDF From Scratch to Truly Understand Retrieval',
            desc: 'Before working with RAG systems and embeddings, I wanted to understand one thing deeply: how does retrieval actually work under the hood?',
            tech: ['TF-IDF', 'Python'],
            type: 'Enterprise AI',
            github: 'https://github.com/sarveshtalele/neural-network-from-scratch-with-maths'
        }
    ],
    knowledge: [
        { id: 1, title: 'Transforming Corporate Memory into Strategic Intelligence', type: 'Research Paper', date: 'Published', tags: ['Hybrid Graph-Agentic RAG', 'AI'], link: '#' },
        { id: 2, title: 'MIG Welding using 8 - axis KUKA Robot', type: 'Research Paper', date: 'Published', tags: ['Robotics', 'Manufacturing'], link: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=-4Vyig8AAAAJ&citation_for_view=-4Vyig8AAAAJ:UeHWp8X0CEIC' },
        { id: 3, title: 'Water-jet cutting - A Precise Method for Manufacturing', type: 'Research Paper', date: 'Published', tags: ['Mechanical Engineering', 'Precision'], link: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=-4Vyig8AAAAJ&citation_for_view=-4Vyig8AAAAJ:2osOgNQ5qMEC' }
    ],
    blogs: [
        {
            id: 1,
            title: 'How I built an Agentic System that runs my LinkedIn for free',
            desc: 'A deep dive into automating LinkedIn engagement using autonomous AI agents and LangChain.',
            link: 'https://medium.com/gitconnected/how-i-built-an-agentic-system-that-runs-my-linkedin-for-free-78cab68ec108'
        },
        {
            id: 2,
            title: 'I stopped using libraries and built TF-IDF from scratch to truly understand Retrieval',
            desc: 'Understanding the core mathematics of search and retrieval by building TF-IDF from the ground up.',
            link: 'https://medium.com/gitconnected/i-stopped-using-libraries-and-built-tf-idf-from-scratch-to-truly-understand-retrieval-a36b54db266f'
        }
    ],
    skillsWordCloud: [
        { text: 'Agentic AI', value: 100 },
        { text: 'RAG', value: 95 },
        { text: 'LangChain', value: 90 },
        { text: 'Python', value: 98 },
        { text: 'Azure AI', value: 85 },
        { text: 'LLMs', value: 92 },
        { text: 'Playwright', value: 80 },
        { text: 'LangGraph', value: 85 },
        { text: 'Graph RAG', value: 90 },
        { text: 'Machine Learning', value: 88 },
        { text: 'Scikit-learn', value: 80 },
        { text: 'SQL', value: 82 },
        { text: 'FastAPI', value: 85 },
        { text: 'Agentic RAG', value: 90 },
        { text: 'Azure Foundry SDK', value: 70 }
    ]
};
