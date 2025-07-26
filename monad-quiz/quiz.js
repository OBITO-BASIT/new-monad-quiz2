const questions = [
  // First 10 Monad basics
  {
    question: "When did Monad start building?",
    options: ["2019", "2021", "2023", "2025"],
    answer: "2021"
  },
  {
    question: "What is Monad BFT?",
    options: [
      "A blockchain explorer",
      "A scalable BFT consensus protocol",
      "A DeFi app",
      "A wallet software"
    ],
    answer: "A scalable BFT consensus protocol"
  },
  {
    question: "What is Monad building?",
    options: [
      "Layer 1 blockchain",
      "Decentralized exchange",
      "NFT marketplace",
      "Social media platform"
    ],
    answer: "Layer 1 blockchain"
  },
  {
    question: "What year did Monad testnet launch?",
    options: ["2020", "2021", "2022", "2023"],
    answer: "2023"
  },
  {
    question: "Name two features of Monad.",
    options: [
      "Fast finality & secure consensus",
      "High fees & slow transactions",
      "Centralized control & censorship",
      "None of the above"
    ],
    answer: "Fast finality & secure consensus"
  },
  {
    question: "How many projects are currently on Monad?",
    options: ["20", "50", "100", "100+"],
    answer: "100+"
  },
  {
    question: "Is Monad incentivized?",
    options: ["Yes", "No", "Maybe", "Not sure"],
    answer: "Yes"
  },
  {
    question: "Which DEX is on Monad?",
    options: ["Uniswap", "Sushiswap", "Swapmon", "PancakeSwap"],
    answer: "Swapmon"
  },
  {
    question: "Is there NFT support on Monad?",
    options: ["Yes", "No", "Coming soon", "Not planned"],
    answer: "Yes"
  },
  {
    question: "What’s the Monad Layer version?",
    options: ["L1", "L2", "L1 + L2", "Sidechain"],
    answer: "L1"
  },

  // Next 15 from KOL quiz you provided
  {
    question: "Who is the founder of Chog NFT?",
    options: ["Ans", "Benja", "Sora", "John"],
    answer: "Benja"
  },
  {
    question: "Who is the founder of Bober NFT?",
    options: ["Ley's Baby", "Benja", "Ans", "Sora"],
    answer: "Ley's Baby"
  },
  {
    question: "Who is the highest clown in the Monad eco?",
    options: ["John", "Benja", "Sora", "Ans"],
    answer: "John"
  },
  {
    question: "Who is the Monad founder?",
    options: ["Benja", "Ans", "John", "Sora"],
    answer: "Ans"
  },
  {
    question: "Who is the most beautiful girl on Monad?",
    options: ["Ley's Baby", "Ans", "Sora", "Benja"],
    answer: "Ley's Baby"
  },
  {
    question: "Who is the most handsome man on Monad?",
    options: ["John", "Benja", "Ans", "Sora"],
    answer: "John"
  },
  {
    question: "What is Monad's native token called?",
    options: ["MON", "MONAD", "MND", "MDT"],
    answer: "MON"
  },
  {
    question: "What consensus algorithm does Monad use?",
    options: ["PoW", "PoS", "MonadBFT", "DPoS"],
    answer: "MonadBFT"
  },
  {
    question: "Which programming language is Monad primarily built with?",
    options: ["Rust", "Solidity", "Go", "C++"],
    answer: "Rust"
  },
  {
    question: "What is Monad's mainnet status?",
    options: ["Live", "Testnet only", "In development", "Deprecated"],
    answer: "In development"
  },
  {
    question: "Monad focuses on which main sector?",
    options: ["DeFi", "Gaming", "Infrastructure", "Social Media"],
    answer: "Infrastructure"
  },
  {
    question: "What wallet supports Monad testnet?",
    options: ["Metamask", "Nash Wallet", "Phantom", "Ledger"],
    answer: "Nash Wallet"
  },
  {
    question: "Which is Monad’s main programming paradigm?",
    options: ["Functional", "OOP", "Procedural", "Event-driven"],
    answer: "Functional"
  },
  {
    question: "Monad's testnet launched in which year?",
    options: ["2022", "2023", "2024", "2025"],
    answer: "2023"
  },
  {
    question: "Monad's validator count aims to be?",
    options: ["Small", "Highly scalable", "Centralized", "Static"],
    answer: "Highly scalable"
  },

  // Next 15 searched questions
  {
    question: "Monad’s consensus guarantees?",
    options: ["No reorgs", "Reorgs allowed", "Forks every block", "Manual finality"],
    answer: "No reorgs"
  },
  {
    question: "Monad’s testnet chain ID?",
    options: ["42", "100", "1101", "1"],
    answer: "1101"
  },
  {
    question: "Monad’s token economics focus on?",
    options: ["Staking & rewards", "No incentives", "High inflation", "No token"],
    answer: "Staking & rewards"
  },
  {
    question: "Monad uses which VM for smart contracts?",
    options: ["EVM", "WASM", "Bitcoin Script", "None"],
    answer: "WASM"
  },
  {
    question: "Which ecosystem does Monad mainly target?",
    options: ["Ethereum", "Bitcoin", "Cosmos", "Solana"],
    answer: "Cosmos"
  },
  {
    question: "Monad’s Layer1 is optimized for?",
    options: ["Speed & security", "Privacy", "Large files", "Social apps"],
    answer: "Speed & security"
  },
  {
    question: "Monad has how many validator nodes approx?",
    options: ["50", "100", "150", "200+"],
    answer: "200+"
  },
  {
    question: "Monad is built using which consensus family?",
    options: ["BFT", "PoW", "PoS", "DPoS"],
    answer: "BFT"
  },
  {
    question: "Monad aims to be?",
    options: ["Decentralized & scalable", "Centralized & fast", "Private & closed", "Testnet only"],
    answer: "Decentralized & scalable"
  },
  {
    question: "Monad incentivizes which participants?",
    options: ["Validators & delegators", "Only miners", "Only developers", "None"],
    answer: "Validators & delegators"
  },
  {
    question: "Monad uses what mechanism for finality?",
    options: ["Instant finality", "Probabilistic finality", "No finality", "Manual"],
    answer: "Instant finality"
  },
  {
    question: "Monad testnet supports?",
    options: ["NFTs", "Only tokens", "No smart contracts", "None"],
    answer: "NFTs"
  },
  {
    question: "Monad’s native wallet is?",
    options: ["Monad Wallet", "Nash Wallet", "MetaMask", "Ledger"],
    answer: "Monad Wallet"
  },
  {
    question: "Monad focuses on which programming language for SDK?",
    options: ["Rust", "Go", "Solidity", "JavaScript"],
    answer: "Rust"
  },
  {
    question: "Monad's key benefit is?",
    options: ["Scalability & security", "Low cost only", "Privacy", "Speed only"],
    answer: "Scalability & security"
  },
];
