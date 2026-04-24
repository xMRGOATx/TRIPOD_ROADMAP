const roadmaps = {
  frontend: {
    id: 'frontend',
    title: 'Frontend Development',
    description: 'Master modern web development with HTML, CSS, JavaScript, and React',
    icon: '🌐',
    color: '#3B82F6',
    estimatedHours: 120,
    steps: [
      { id: 'fe-1', title: 'HTML Fundamentals', description: 'Learn semantic HTML, forms, accessibility, and document structure.', category: 'Foundation', resources: ['MDN HTML Guide', 'HTML5 Spec'] },
      { id: 'fe-2', title: 'CSS Basics', description: 'Understand selectors, box model, flexbox, and grid layouts.', category: 'Foundation', resources: ['CSS Tricks', 'Flexbox Froggy'] },
      { id: 'fe-3', title: 'Responsive Design', description: 'Build mobile-first responsive layouts using media queries.', category: 'Foundation', resources: ['Responsive Web Design', 'MDN'] },
      { id: 'fe-4', title: 'JavaScript Essentials', description: 'Variables, functions, DOM manipulation, events, and ES6+.', category: 'Core', resources: ['javascript.info', 'Eloquent JavaScript'] },
      { id: 'fe-5', title: 'JavaScript Advanced', description: 'Closures, promises, async/await, prototypes, and modules.', category: 'Core', resources: ['You Don\'t Know JS', 'MDN'] },
      { id: 'fe-6', title: 'Version Control with Git', description: 'Git basics, branching, merging, and GitHub workflows.', category: 'Tools', resources: ['Pro Git Book', 'GitHub Docs'] },
      { id: 'fe-7', title: 'Package Managers', description: 'Learn npm and yarn for managing project dependencies.', category: 'Tools', resources: ['npm Docs', 'Yarn Docs'] },
      { id: 'fe-8', title: 'React Fundamentals', description: 'Components, props, state, lifecycle, and hooks.', category: 'Framework', resources: ['React Docs', 'Scrimba React'] },
      { id: 'fe-9', title: 'React Advanced', description: 'Context API, custom hooks, performance optimization, and patterns.', category: 'Framework', resources: ['React Patterns', 'Epic React'] },
      { id: 'fe-10', title: 'State Management', description: 'Redux, Zustand, or Recoil for global state management.', category: 'Framework', resources: ['Redux Toolkit Docs', 'Zustand Docs'] },
      { id: 'fe-11', title: 'CSS Frameworks', description: 'Tailwind CSS, styled-components, and CSS modules.', category: 'Styling', resources: ['Tailwind Docs', 'styled-components Docs'] },
      { id: 'fe-12', title: 'Testing', description: 'Unit testing with Jest, component testing with React Testing Library.', category: 'Quality', resources: ['Testing Library Docs', 'Jest Docs'] },
      { id: 'fe-13', title: 'Build Tools & Bundlers', description: 'Vite, Webpack, and modern build pipelines.', category: 'Tools', resources: ['Vite Docs', 'Webpack Guide'] },
      { id: 'fe-14', title: 'TypeScript', description: 'Static typing, interfaces, generics, and TypeScript with React.', category: 'Language', resources: ['TypeScript Handbook', 'Total TypeScript'] },
      { id: 'fe-15', title: 'Performance & SEO', description: 'Core Web Vitals, lazy loading, code splitting, and SEO basics.', category: 'Advanced', resources: ['web.dev', 'Lighthouse Docs'] }
    ]
  },
  backend: {
    id: 'backend',
    title: 'Backend Development',
    description: 'Build robust server-side applications with Node.js, databases, and APIs',
    icon: '⚙️',
    color: '#10B981',
    estimatedHours: 140,
    steps: [
      { id: 'be-1', title: 'Programming Fundamentals', description: 'Data structures, algorithms, OOP, and software design principles.', category: 'Foundation', resources: ['CS50', 'CLRS'] },
      { id: 'be-2', title: 'Node.js Basics', description: 'Event loop, modules, file system, streams, and npm ecosystem.', category: 'Core', resources: ['Node.js Docs', 'Node.js Design Patterns'] },
      { id: 'be-3', title: 'Express.js', description: 'Routing, middleware, error handling, and REST API design.', category: 'Framework', resources: ['Express Docs', 'REST API Tutorial'] },
      { id: 'be-4', title: 'Databases - SQL', description: 'PostgreSQL or MySQL: schemas, queries, joins, and transactions.', category: 'Database', resources: ['PostgreSQL Docs', 'SQLZoo'] },
      { id: 'be-5', title: 'Databases - NoSQL', description: 'MongoDB: documents, collections, aggregation, and indexing.', category: 'Database', resources: ['MongoDB University', 'Mongoose Docs'] },
      { id: 'be-6', title: 'Authentication & Security', description: 'JWT, OAuth, bcrypt, HTTPS, and OWASP security principles.', category: 'Security', resources: ['JWT.io', 'OWASP Top 10'] },
      { id: 'be-7', title: 'RESTful API Design', description: 'HTTP methods, status codes, versioning, and API documentation.', category: 'API', resources: ['REST API Best Practices', 'Swagger Docs'] },
      { id: 'be-8', title: 'GraphQL', description: 'Schema definition, resolvers, queries, mutations, and subscriptions.', category: 'API', resources: ['GraphQL.org', 'Apollo Docs'] },
      { id: 'be-9', title: 'Caching', description: 'Redis basics, caching strategies, session storage.', category: 'Performance', resources: ['Redis Docs', 'Caching Patterns'] },
      { id: 'be-10', title: 'Message Queues', description: 'RabbitMQ or Kafka for async communication.', category: 'Architecture', resources: ['RabbitMQ Tutorials', 'Kafka Docs'] },
      { id: 'be-11', title: 'Testing', description: 'Unit testing, integration testing, and API testing with Jest/Supertest.', category: 'Quality', resources: ['Jest Docs', 'Supertest'] },
      { id: 'be-12', title: 'Microservices', description: 'Service decomposition, API gateways, and inter-service communication.', category: 'Architecture', resources: ['Microservices.io', 'Building Microservices'] }
    ]
  },
  devops: {
    id: 'devops',
    title: 'DevOps Engineering',
    description: 'Master CI/CD, containerization, and infrastructure automation',
    icon: '🔄',
    color: '#F59E0B',
    estimatedHours: 160,
    steps: [
      { id: 'do-1', title: 'Linux Fundamentals', description: 'Shell commands, file permissions, processes, networking basics.', category: 'Foundation', resources: ['Linux Journey', 'The Linux Command Line'] },
      { id: 'do-2', title: 'Networking Basics', description: 'TCP/IP, DNS, HTTP/HTTPS, load balancing, firewalls.', category: 'Foundation', resources: ['Computer Networking: A Top-Down Approach', 'Cisco Networking Academy'] },
      { id: 'do-3', title: 'Git & Version Control', description: 'Advanced Git workflows, branching strategies, GitFlow.', category: 'Tools', resources: ['Pro Git', 'GitHub Flow'] },
      { id: 'do-4', title: 'Docker', description: 'Containers, images, Dockerfile, docker-compose, registries.', category: 'Containers', resources: ['Docker Docs', 'Play with Docker'] },
      { id: 'do-5', title: 'Kubernetes', description: 'Pods, deployments, services, ingress, Helm charts.', category: 'Orchestration', resources: ['Kubernetes.io', 'Kubernetes in Action'] },
      { id: 'do-6', title: 'CI/CD Pipelines', description: 'GitHub Actions, Jenkins, GitLab CI for automated deployments.', category: 'Automation', resources: ['GitHub Actions Docs', 'Jenkins Tutorial'] },
      { id: 'do-7', title: 'Infrastructure as Code', description: 'Terraform for provisioning cloud resources declaratively.', category: 'IaC', resources: ['Terraform Docs', 'HashiCorp Learn'] },
      { id: 'do-8', title: 'Configuration Management', description: 'Ansible for server configuration and automation.', category: 'Automation', resources: ['Ansible Docs', 'Ansible for DevOps'] },
      { id: 'do-9', title: 'Monitoring & Logging', description: 'Prometheus, Grafana, ELK stack for observability.', category: 'Observability', resources: ['Prometheus Docs', 'Grafana Docs'] },
      { id: 'do-10', title: 'Cloud Platforms', description: 'AWS, GCP, or Azure fundamentals and core services.', category: 'Cloud', resources: ['AWS Training', 'Google Cloud Skills Boost'] }
    ]
  },
  cloud: {
    id: 'cloud',
    title: 'Cloud Computing',
    description: 'Design and deploy scalable cloud architecture on AWS, GCP, or Azure',
    icon: '☁️',
    color: '#6366F1',
    estimatedHours: 150,
    steps: [
      { id: 'cl-1', title: 'Cloud Fundamentals', description: 'Cloud models (IaaS, PaaS, SaaS), deployment models, shared responsibility.', category: 'Foundation', resources: ['AWS Cloud Practitioner', 'Google Cloud Fundamentals'] },
      { id: 'cl-2', title: 'AWS Core Services', description: 'EC2, S3, VPC, IAM, RDS, Lambda fundamentals.', category: 'AWS', resources: ['AWS Docs', 'A Cloud Guru'] },
      { id: 'cl-3', title: 'Serverless Architecture', description: 'AWS Lambda, API Gateway, Step Functions, event-driven design.', category: 'Architecture', resources: ['Serverless Framework Docs', 'AWS SAM'] },
      { id: 'cl-4', title: 'Cloud Networking', description: 'VPCs, subnets, route tables, security groups, NAT gateways.', category: 'Networking', resources: ['AWS VPC Docs', 'Cloud Networking Course'] },
      { id: 'cl-5', title: 'Cloud Storage & Databases', description: 'S3, DynamoDB, Aurora, ElastiCache, storage classes.', category: 'Storage', resources: ['AWS Storage Docs', 'DynamoDB Guide'] },
      { id: 'cl-6', title: 'Cloud Security', description: 'IAM best practices, KMS, CloudTrail, WAF, Shield.', category: 'Security', resources: ['AWS Security Docs', 'Cloud Security Alliance'] },
      { id: 'cl-7', title: 'Cloud Architecture Patterns', description: 'Well-architected framework, microservices, event-driven architectures.', category: 'Architecture', resources: ['AWS Well-Architected', 'Cloud Design Patterns'] },
      { id: 'cl-8', title: 'Cost Optimization', description: 'Reserved instances, Spot instances, cost monitoring, right-sizing.', category: 'FinOps', resources: ['AWS Cost Management', 'FinOps Foundation'] },
      { id: 'cl-9', title: 'Cloud Certifications', description: 'AWS Solutions Architect, Google Cloud Professional, or Azure Administrator.', category: 'Certification', resources: ['AWS Cert Prep', 'Whizlabs'] }
    ]
  },
  cybersecurity: {
    id: 'cybersecurity',
    title: 'Cybersecurity',
    description: 'Learn ethical hacking, threat analysis, and defensive security practices',
    icon: '🔐',
    color: '#EF4444',
    estimatedHours: 180,
    steps: [
      { id: 'cs-1', title: 'Security Fundamentals', description: 'CIA triad, threat modeling, attack surfaces, security policies.', category: 'Foundation', resources: ['CompTIA Security+', 'Cybrary'] },
      { id: 'cs-2', title: 'Networking for Security', description: 'Protocols, packet analysis, Wireshark, network scanning.', category: 'Networking', resources: ['Practical Packet Analysis', 'Wireshark Docs'] },
      { id: 'cs-3', title: 'Linux for Security', description: 'Kali Linux, command-line tools, scripting for automation.', category: 'Tools', resources: ['Kali Linux Docs', 'OverTheWire'] },
      { id: 'cs-4', title: 'Web Application Security', description: 'OWASP Top 10, XSS, SQLi, CSRF, penetration testing basics.', category: 'Web Security', resources: ['OWASP WebGoat', 'PortSwigger Web Academy'] },
      { id: 'cs-5', title: 'Cryptography', description: 'Symmetric/asymmetric encryption, hashing, PKI, TLS/SSL.', category: 'Cryptography', resources: ['Cryptography I (Coursera)', 'Crypto101'] },
      { id: 'cs-6', title: 'Ethical Hacking', description: 'Reconnaissance, scanning, exploitation, post-exploitation methodology.', category: 'Offensive', resources: ['Hack The Box', 'TryHackMe'] },
      { id: 'cs-7', title: 'Malware Analysis', description: 'Static and dynamic analysis, reverse engineering basics, sandboxing.', category: 'Malware', resources: ['Malware Analysis Course', 'SANS FOR610'] },
      { id: 'cs-8', title: 'Incident Response', description: 'SIEM, log analysis, forensics, incident handling procedures.', category: 'Defensive', resources: ['SANS Incident Handler', 'Splunk Fundamentals'] },
      { id: 'cs-9', title: 'Cloud Security', description: 'Cloud security posture, CSPM tools, securing cloud environments.', category: 'Cloud', resources: ['AWS Security Specialty', 'CCSP Cert'] }
    ]
  },
  aiml: {
    id: 'aiml',
    title: 'AI / Machine Learning',
    description: 'Build intelligent systems with Python, ML algorithms, and deep learning',
    icon: '🤖',
    color: '#8B5CF6',
    estimatedHours: 200,
    steps: [
      { id: 'ai-1', title: 'Python for Data Science', description: 'NumPy, Pandas, Matplotlib, Seaborn for data manipulation and visualization.', category: 'Foundation', resources: ['Python for Data Analysis', 'Kaggle Python Course'] },
      { id: 'ai-2', title: 'Statistics & Math', description: 'Probability, statistics, linear algebra, and calculus for ML.', category: 'Foundation', resources: ['StatQuest', '3Blue1Brown'] },
      { id: 'ai-3', title: 'ML Fundamentals', description: 'Supervised, unsupervised learning, evaluation metrics, overfitting.', category: 'Core ML', resources: ['Hands-On ML (Aurélien Géron)', 'Coursera ML Specialization'] },
      { id: 'ai-4', title: 'Scikit-Learn', description: 'Classification, regression, clustering, pipelines, and model selection.', category: 'Libraries', resources: ['Scikit-learn Docs', 'Kaggle Courses'] },
      { id: 'ai-5', title: 'Deep Learning Basics', description: 'Neural networks, backpropagation, activation functions, CNNs, RNNs.', category: 'Deep Learning', resources: ['Deep Learning Specialization', 'fast.ai'] },
      { id: 'ai-6', title: 'PyTorch / TensorFlow', description: 'Building and training neural networks with modern DL frameworks.', category: 'Frameworks', resources: ['PyTorch Docs', 'TensorFlow Tutorials'] },
      { id: 'ai-7', title: 'Natural Language Processing', description: 'Text processing, transformers, BERT, LLMs, and NLP pipelines.', category: 'NLP', resources: ['Hugging Face Course', 'Stanford NLP'] },
      { id: 'ai-8', title: 'Computer Vision', description: 'Image classification, object detection, segmentation, GANs.', category: 'CV', resources: ['CS231n', 'PyTorch Vision'] },
      { id: 'ai-9', title: 'MLOps', description: 'Model deployment, monitoring, MLflow, feature stores, CI/CD for ML.', category: 'Production', resources: ['MLOps Zoomcamp', 'Made With ML'] },
      { id: 'ai-10', title: 'Large Language Models', description: 'Prompt engineering, fine-tuning, RAG, and building LLM applications.', category: 'Advanced', resources: ['LLM Course', 'LangChain Docs'] }
    ]
  },
  database: {
    id: 'database',
    title: 'Database Engineering',
    description: 'Design, optimize, and manage SQL and NoSQL database systems',
    icon: '🗄️',
    color: '#14B8A6',
    estimatedHours: 100,
    steps: [
      { id: 'db-1', title: 'Database Fundamentals', description: 'ACID properties, transactions, normalization, ER diagrams.', category: 'Foundation', resources: ['Database System Concepts', 'CMU Database Course'] },
      { id: 'db-2', title: 'SQL Mastery', description: 'Advanced queries, joins, subqueries, CTEs, window functions.', category: 'SQL', resources: ['SQLZoo', 'Mode SQL Tutorial'] },
      { id: 'db-3', title: 'PostgreSQL', description: 'Advanced PostgreSQL features, extensions, JSON support, full-text search.', category: 'RDBMS', resources: ['PostgreSQL Docs', 'pgexercises.com'] },
      { id: 'db-4', title: 'Database Design', description: 'Schema design, relationships, normalization forms, anti-patterns.', category: 'Design', resources: ['Database Design for Mere Mortals', 'Vertabelo Academy'] },
      { id: 'db-5', title: 'Indexing & Query Optimization', description: 'B-trees, query plans, EXPLAIN, slow query analysis.', category: 'Performance', resources: ['Use The Index, Luke', 'PostgreSQL Query Optimization'] },
      { id: 'db-6', title: 'MongoDB & NoSQL', description: 'Document modeling, aggregation pipeline, indexes, Atlas.', category: 'NoSQL', resources: ['MongoDB University', 'NoSQL Distilled'] },
      { id: 'db-7', title: 'Redis', description: 'Data structures, persistence, pub/sub, Lua scripting, clustering.', category: 'Cache', resources: ['Redis Docs', 'Redis University'] },
      { id: 'db-8', title: 'Replication & Sharding', description: 'High availability, read replicas, horizontal scaling strategies.', category: 'Scaling', resources: ['Designing Data-Intensive Applications', 'Percona Blog'] }
    ]
  },
  mobile: {
    id: 'mobile',
    title: 'Mobile Development',
    description: 'Build cross-platform mobile apps with React Native and Flutter',
    icon: '📱',
    color: '#F97316',
    estimatedHours: 130,
    steps: [
      { id: 'mob-1', title: 'Mobile App Fundamentals', description: 'App lifecycle, navigation patterns, gestures, responsive design.', category: 'Foundation', resources: ['Mobile Design Patterns', 'Google Material Design'] },
      { id: 'mob-2', title: 'React Native Basics', description: 'Components, StyleSheet, Flexbox for mobile, platform APIs.', category: 'React Native', resources: ['React Native Docs', 'Expo Docs'] },
      { id: 'mob-3', title: 'Navigation in React Native', description: 'React Navigation: stack, tab, drawer navigators.', category: 'React Native', resources: ['React Navigation Docs', 'React Native School'] },
      { id: 'mob-4', title: 'State Management for Mobile', description: 'Redux, Context API, AsyncStorage for mobile apps.', category: 'State', resources: ['Redux Docs', 'Zustand Docs'] },
      { id: 'mob-5', title: 'Native Device APIs', description: 'Camera, location, push notifications, biometrics, sensors.', category: 'Native', resources: ['Expo Modules', 'React Native Community'] },
      { id: 'mob-6', title: 'Flutter Basics', description: 'Dart language, widgets, layouts, theming in Flutter.', category: 'Flutter', resources: ['Flutter Docs', 'Dart Language Tour'] },
      { id: 'mob-7', title: 'App Publishing', description: 'App Store and Google Play submission, signing, app store optimization.', category: 'Deployment', resources: ['Apple Developer Docs', 'Google Play Academy'] },
      { id: 'mob-8', title: 'Mobile Testing', description: 'Unit tests, integration tests, E2E with Detox.', category: 'Testing', resources: ['Detox Docs', 'React Native Testing Library'] }
    ]
  },
  blockchain: {
    id: 'blockchain',
    title: 'Blockchain & Web3',
    description: 'Develop decentralized applications and smart contracts',
    icon: '⛓️',
    color: '#EC4899',
    estimatedHours: 150,
    steps: [
      { id: 'bc-1', title: 'Blockchain Fundamentals', description: 'Distributed ledger, consensus mechanisms, cryptographic hashing.', category: 'Foundation', resources: ['Bitcoin Whitepaper', 'Blockchain Basics Coursera'] },
      { id: 'bc-2', title: 'Ethereum & EVM', description: 'Ethereum architecture, gas, wallets, transactions, Metamask.', category: 'Ethereum', resources: ['ethereum.org', 'Mastering Ethereum'] },
      { id: 'bc-3', title: 'Solidity', description: 'Smart contract language, data types, functions, events, inheritance.', category: 'Smart Contracts', resources: ['Solidity Docs', 'CryptoZombies'] },
      { id: 'bc-4', title: 'Smart Contract Development', description: 'Hardhat/Foundry, testing, deployment, contract patterns.', category: 'Development', resources: ['Hardhat Docs', 'OpenZeppelin Docs'] },
      { id: 'bc-5', title: 'DeFi Protocols', description: 'AMMs, lending protocols, yield farming, smart contract auditing basics.', category: 'DeFi', resources: ['DeFi Developer Roadmap', 'Uniswap Docs'] },
      { id: 'bc-6', title: 'Web3.js / Ethers.js', description: 'Interacting with blockchain from frontend applications.', category: 'Frontend', resources: ['Ethers.js Docs', 'Web3.js Docs'] },
      { id: 'bc-7', title: 'NFT Development', description: 'ERC-721, ERC-1155, metadata, IPFS, NFT marketplaces.', category: 'NFTs', resources: ['OpenZeppelin ERC-721', 'IPFS Docs'] }
    ]
  },
  dsa: {
    id: 'dsa',
    title: 'Data Structures & Algorithms',
    description: 'Master algorithmic thinking and ace technical interviews',
    icon: '📊',
    color: '#059669',
    estimatedHours: 120,
    steps: [
      { id: 'dsa-1', title: 'Big O Notation', description: 'Time and space complexity analysis, best/worst/average cases.', category: 'Foundation', resources: ['Big O Cheat Sheet', 'NeetCode'] },
      { id: 'dsa-2', title: 'Arrays & Strings', description: 'Two pointers, sliding window, array manipulation patterns.', category: 'Linear', resources: ['LeetCode Arrays', 'NeetCode 150'] },
      { id: 'dsa-3', title: 'Linked Lists', description: 'Singly/doubly linked lists, fast/slow pointers, reversal patterns.', category: 'Linear', resources: ['LeetCode Linked List', 'Visualgo'] },
      { id: 'dsa-4', title: 'Stacks & Queues', description: 'Stack patterns, monotonic stack, queue implementations.', category: 'Linear', resources: ['LeetCode Stack', 'AlgoExpert'] },
      { id: 'dsa-5', title: 'Hash Tables', description: 'Hashing, collision resolution, frequency counting patterns.', category: 'Non-Linear', resources: ['LeetCode Hash Table', 'Hash Map Internals'] },
      { id: 'dsa-6', title: 'Trees & Binary Search Trees', description: 'Traversals (BFS/DFS), BST operations, balanced trees.', category: 'Trees', resources: ['LeetCode Trees', 'Visualgo Trees'] },
      { id: 'dsa-7', title: 'Heaps & Priority Queues', description: 'Min/max heaps, k-th element problems, heap sort.', category: 'Trees', resources: ['LeetCode Heap', 'Heap Visualization'] },
      { id: 'dsa-8', title: 'Graphs', description: 'BFS, DFS, Dijkstra, topological sort, Union-Find.', category: 'Graphs', resources: ['LeetCode Graphs', 'CP Algorithms'] },
      { id: 'dsa-9', title: 'Dynamic Programming', description: 'Memoization, tabulation, common DP patterns (knapsack, LCS, etc).', category: 'Advanced', resources: ['NeetCode DP', 'DP for Interviews'] },
      { id: 'dsa-10', title: 'Sorting Algorithms', description: 'QuickSort, MergeSort, HeapSort, counting sort, and when to use each.', category: 'Sorting', resources: ['Sorting Visualizations', 'CLRS Chapter 6-8'] }
    ]
  }
};

module.exports = roadmaps;
