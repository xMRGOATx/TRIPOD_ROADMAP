const quizzes = {
  frontend: [
    { id: 'q1', question: 'Which HTML tag is used for the largest heading?', options: ['<h6>', '<h1>', '<header>', '<title>'], correct: 1 },
    { id: 'q2', question: 'Which CSS property controls the text size?', options: ['font-weight', 'text-size', 'font-size', 'text-style'], correct: 2 },
    { id: 'q3', question: 'What does the "C" in CSS stand for?', options: ['Computer', 'Cascading', 'Creative', 'Compiled'], correct: 1 },
    { id: 'q4', question: 'Which method is used to add an element to the end of an array in JavaScript?', options: ['push()', 'pop()', 'shift()', 'append()'], correct: 0 },
    { id: 'q5', question: 'What is a React hook?', options: ['A lifecycle class method', 'A function that lets you use state in functional components', 'A type of component', 'An event listener'], correct: 1 },
    { id: 'q6', question: 'What does JSX stand for?', options: ['JavaScript XML', 'Java Syntax Extension', 'JavaScript Extension', 'JSON XML'], correct: 0 },
    { id: 'q7', question: 'Which hook is used for side effects in React?', options: ['useState', 'useCallback', 'useEffect', 'useMemo'], correct: 2 },
    { id: 'q8', question: 'What is the virtual DOM?', options: ['A real browser DOM', 'A lightweight copy of the actual DOM', 'A CSS framework', 'A state management tool'], correct: 1 },
    { id: 'q9', question: 'Which CSS layout model is best for one-dimensional layouts?', options: ['Grid', 'Flexbox', 'Float', 'Position'], correct: 1 },
    { id: 'q10', question: 'What does "async/await" replace in JavaScript?', options: ['Callbacks and Promises', 'Only Callbacks', 'For loops', 'Event listeners'], correct: 0 }
  ],
  backend: [
    { id: 'q1', question: 'What does REST stand for?', options: ['Remote Execution Standard Technology', 'Representational State Transfer', 'Real-time Event State Transfer', 'Request/Response State Transport'], correct: 1 },
    { id: 'q2', question: 'Which HTTP status code means "Not Found"?', options: ['200', '301', '401', '404'], correct: 3 },
    { id: 'q3', question: 'What is middleware in Express.js?', options: ['A database layer', 'Functions that execute between request and response', 'A routing mechanism', 'A templating engine'], correct: 1 },
    { id: 'q4', question: 'What does JWT stand for?', options: ['JavaScript Web Token', 'JSON Web Token', 'Java Web Transfer', 'JSON Worker Thread'], correct: 1 },
    { id: 'q5', question: 'Which database is MongoDB?', options: ['Relational', 'Document-oriented NoSQL', 'Graph', 'Key-value store'], correct: 1 },
    { id: 'q6', question: 'What HTTP method should be used to update a resource?', options: ['GET', 'POST', 'PUT', 'DELETE'], correct: 2 },
    { id: 'q7', question: 'What is bcrypt used for?', options: ['Compressing files', 'Hashing passwords', 'Generating JWT tokens', 'Database encryption'], correct: 1 },
    { id: 'q8', question: 'What is an ORM?', options: ['Object Relational Mapping', 'Online Resource Manager', 'Open Route Middleware', 'Optimized Request Model'], correct: 0 },
    { id: 'q9', question: 'Which port does MongoDB use by default?', options: ['3000', '5432', '27017', '6379'], correct: 2 },
    { id: 'q10', question: 'What is CORS?', options: ['Cross-Origin Resource Sharing', 'Centralized Object Routing System', 'Client-side Object Resolution', 'Cross-Origin Route Security'], correct: 0 }
  ],
  devops: [
    { id: 'q1', question: 'What is a Docker container?', options: ['A virtual machine', 'A lightweight isolated runtime environment', 'A cloud server', 'A build tool'], correct: 1 },
    { id: 'q2', question: 'What does CI/CD stand for?', options: ['Code Integration/Code Delivery', 'Continuous Integration/Continuous Deployment', 'Container Image/Container Deployment', 'Cloud Infrastructure/Cloud Delivery'], correct: 1 },
    { id: 'q3', question: 'What is Kubernetes primarily used for?', options: ['Container orchestration', 'Writing Dockerfiles', 'Load balancing only', 'Database management'], correct: 0 },
    { id: 'q4', question: 'What is Infrastructure as Code (IaC)?', options: ['Writing application code', 'Managing infrastructure through configuration files', 'Container build scripts', 'Cloud pricing models'], correct: 1 },
    { id: 'q5', question: 'Which tool is used for IaC in cloud environments?', options: ['Docker', 'Ansible', 'Terraform', 'Jenkins'], correct: 2 },
    { id: 'q6', question: 'What is a Kubernetes Pod?', options: ['A Docker image', 'The smallest deployable unit in K8s', 'A namespace', 'A service type'], correct: 1 },
    { id: 'q7', question: 'What command starts a Docker container?', options: ['docker build', 'docker run', 'docker start-container', 'docker exec'], correct: 1 },
    { id: 'q8', question: 'What is a load balancer?', options: ['A server that stores logs', 'Distributes traffic across multiple servers', 'A monitoring tool', 'A CI/CD tool'], correct: 1 }
  ],
  cloud: [
    { id: 'q1', question: 'What does S3 stand for in AWS?', options: ['Simple Server Storage', 'Simple Storage Service', 'Scalable Storage System', 'Structured Storage Service'], correct: 1 },
    { id: 'q2', question: 'What is a VPC in AWS?', options: ['Virtual Private Computer', 'Virtual Private Cloud', 'Volume Processing Center', 'Verified Private Container'], correct: 1 },
    { id: 'q3', question: 'What is AWS Lambda?', options: ['A container service', 'A serverless compute service', 'A database service', 'A networking tool'], correct: 1 },
    { id: 'q4', question: 'What is the cloud computing model where the vendor manages everything except applications?', options: ['IaaS', 'PaaS', 'SaaS', 'FaaS'], correct: 1 },
    { id: 'q5', question: 'What is IAM in AWS?', options: ['Infrastructure and Monitoring', 'Identity and Access Management', 'Instance Auto Manager', 'Integration API Module'], correct: 1 },
    { id: 'q6', question: 'Which service is used for DNS in AWS?', options: ['CloudFront', 'Route 53', 'EC2', 'ELB'], correct: 1 },
    { id: 'q7', question: 'What is auto-scaling?', options: ['Automatically backing up data', 'Adjusting compute resources based on demand', 'Auto-patching servers', 'Automatic billing adjustment'], correct: 1 }
  ],
  cybersecurity: [
    { id: 'q1', question: 'What does CIA stand for in cybersecurity?', options: ['Central Intelligence Agency', 'Confidentiality, Integrity, Availability', 'Computer Incident Analysis', 'Critical Infrastructure Assessment'], correct: 1 },
    { id: 'q2', question: 'What is SQL injection?', options: ['A database migration technique', 'Inserting malicious SQL code into queries', 'A SQL optimization method', 'A backup strategy'], correct: 1 },
    { id: 'q3', question: 'What is a zero-day vulnerability?', options: ['A vulnerability with no impact', 'An unknown vulnerability with no available patch', 'A vulnerability fixed on day zero', 'A low-severity bug'], correct: 1 },
    { id: 'q4', question: 'What does HTTPS ensure?', options: ['Faster page loading', 'Encrypted communication between client and server', 'Better SEO ranking only', 'Authentication only'], correct: 1 },
    { id: 'q5', question: 'What is phishing?', options: ['Network scanning', 'Social engineering to trick users into revealing information', 'A type of malware', 'A firewall bypass technique'], correct: 1 },
    { id: 'q6', question: 'What is a firewall?', options: ['An antivirus program', 'A network security system that monitors and controls traffic', 'A VPN service', 'An intrusion detection tool'], correct: 1 },
    { id: 'q7', question: 'What is two-factor authentication (2FA)?', options: ['Using two passwords', 'Verification using two different authentication factors', 'Logging in twice', 'Two-step email verification only'], correct: 1 }
  ],
  aiml: [
    { id: 'q1', question: 'What is overfitting in machine learning?', options: ['When a model performs too slowly', 'When a model learns training data too well and fails on new data', 'When training data is too large', 'When accuracy is too high'], correct: 1 },
    { id: 'q2', question: 'What is a neural network?', options: ['A computer network', 'A system inspired by the brain with layers of connected nodes', 'A type of database', 'A statistical formula'], correct: 1 },
    { id: 'q3', question: 'What does gradient descent do?', options: ['Increases model accuracy instantly', 'Minimizes loss by adjusting model parameters', 'Downloads training data', 'Visualizes model predictions'], correct: 1 },
    { id: 'q4', question: 'What is supervised learning?', options: ['Learning with labeled data', 'Learning without any data', 'Unsupervised learning with feedback', 'Reinforcement learning with supervision'], correct: 0 },
    { id: 'q5', question: 'What is a transformer model?', options: ['A type of CNN', 'An attention-based architecture for sequences', 'A hardware accelerator', 'A data preprocessing method'], correct: 1 },
    { id: 'q6', question: 'What is cross-validation?', options: ['Validating across multiple datasets', 'A technique to evaluate model performance on different data splits', 'Comparing two models', 'A training optimization method'], correct: 1 },
    { id: 'q7', question: 'What library is commonly used for ML in Python?', options: ['NumPy', 'Scikit-learn', 'Pandas', 'Matplotlib'], correct: 1 }
  ],
  database: [
    { id: 'q1', question: 'What does ACID stand for in databases?', options: ['Array, Column, Index, Data', 'Atomicity, Consistency, Isolation, Durability', 'Access, Create, Insert, Delete', 'Async, Consistent, Integrated, Durable'], correct: 1 },
    { id: 'q2', question: 'What is a primary key?', options: ['A password for database access', 'A unique identifier for each row in a table', 'The first column in a table', 'The most important table'], correct: 1 },
    { id: 'q3', question: 'What is a JOIN in SQL?', options: ['Combining two databases', 'Linking rows from two or more tables', 'Creating a new table', 'A type of index'], correct: 1 },
    { id: 'q4', question: 'What is database normalization?', options: ['Optimizing query speed', 'Organizing data to reduce redundancy', 'Backing up the database', 'Converting data types'], correct: 1 },
    { id: 'q5', question: 'What is an index in a database?', options: ['The first table in a database', 'A data structure that speeds up data retrieval', 'A list of all tables', 'A foreign key constraint'], correct: 1 },
    { id: 'q6', question: 'What is the difference between SQL and NoSQL?', options: ['SQL is newer', 'SQL uses structured tables; NoSQL uses flexible schemas', 'NoSQL is always faster', 'SQL is only for small databases'], correct: 1 }
  ],
  mobile: [
    { id: 'q1', question: 'What is React Native?', options: ['A CSS framework for mobile', 'A framework for building native mobile apps with React', 'A native Android SDK', 'An iOS development tool'], correct: 1 },
    { id: 'q2', question: 'What does Expo simplify in React Native?', options: ['State management', 'Development setup and native module access', 'CSS styling', 'Database connections'], correct: 1 },
    { id: 'q3', question: 'What is the equivalent of div in React Native?', options: ['Container', 'View', 'Box', 'Section'], correct: 1 },
    { id: 'q4', question: 'How does React Native differ from React?', options: ['No JavaScript in React Native', 'React Native renders native components; React renders HTML', 'React Native is slower', 'No JSX in React Native'], correct: 1 },
    { id: 'q5', question: 'What is AsyncStorage used for?', options: ['API calls', 'Persisting key-value data locally on device', 'State management', 'Async functions'], correct: 1 }
  ],
  blockchain: [
    { id: 'q1', question: 'What is a smart contract?', options: ['A legal contract stored digitally', 'Self-executing code on a blockchain', 'A type of cryptocurrency', 'An NFT standard'], correct: 1 },
    { id: 'q2', question: 'What is Solidity?', options: ['A cryptocurrency', 'A programming language for Ethereum smart contracts', 'A consensus algorithm', 'A blockchain wallet'], correct: 1 },
    { id: 'q3', question: 'What is gas in Ethereum?', options: ['Fuel for mining rigs', 'The fee required to execute transactions on Ethereum', 'A token standard', 'The Ether currency unit'], correct: 1 },
    { id: 'q4', question: 'What is a blockchain?', options: ['A type of database', 'A distributed, immutable ledger of transactions', 'A private server', 'An encryption algorithm'], correct: 1 },
    { id: 'q5', question: 'What is an NFT?', options: ['Non-Fungible Token — a unique digital asset', 'New Financial Technology', 'Network File Transfer', 'Node Function Token'], correct: 0 }
  ],
  dsa: [
    { id: 'q1', question: 'What is Big O notation?', options: ['A sorting algorithm', 'A way to describe algorithm time/space complexity', 'A data structure', 'A debugging method'], correct: 1 },
    { id: 'q2', question: 'What is the time complexity of binary search?', options: ['O(n)', 'O(n²)', 'O(log n)', 'O(1)'], correct: 2 },
    { id: 'q3', question: 'What data structure uses LIFO order?', options: ['Queue', 'Stack', 'Linked List', 'Heap'], correct: 1 },
    { id: 'q4', question: 'What is a hash table?', options: ['A sorted array', 'A data structure mapping keys to values', 'A tree data structure', 'A graph representation'], correct: 1 },
    { id: 'q5', question: 'What is dynamic programming?', options: ['Writing dynamic code', 'Breaking problems into overlapping subproblems and caching solutions', 'A programming language paradigm', 'A runtime optimization'], correct: 1 },
    { id: 'q6', question: 'What is BFS in graphs?', options: ['Breadth-First Search — explores level by level', 'Backward First Search', 'Binary First Scan', 'Block Flow Search'], correct: 0 },
    { id: 'q7', question: 'Which sorting algorithm has O(n log n) average complexity?', options: ['Bubble Sort', 'Insertion Sort', 'Quick Sort', 'Selection Sort'], correct: 2 }
  ]
};

module.exports = quizzes;
