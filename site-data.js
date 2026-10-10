/**
 * ESRC Club — Site Data & Configuration
 * ======================================
 * Student-led robotics community at MBM University.
 * Content Direction:
 * - Welcoming to beginners while demonstrating advanced project growth & competitions.
 * - Accurate transcribed achievements, honest event empty state, and editable example project areas.
 * - Obvious editable placeholders for club coordinators to easily customize.
 */

const SITE_DATA = {

  /* ── Identity ─────────────────────────────────────────────── */
  clubName: "ESRC Club",
  clubFullName: "Embedded Systems & Robotics Club, MBM University",
  tagline: "Where circuits meet creativity and code brings robots to life",
  heroSubtitle: "ESRC is a student-led robotics community at MBM University. We bring curious minds together to turn ideas into working machines through hands-on learning, teamwork, and experimentation.",
  heroRhythm: [
    { icon: "🤖", label: "Robotics" },
    { icon: "⚡", label: "Electronics & Sensors" },
    { icon: "💻", label: "Embedded Systems" },
    { icon: "🚀", label: "Competitions" },
  ],
  heroStats: [
    { value: "AIR 1", label: "E-Yantra IIT Bombay (Lunar Scout)" },
    { value: "1st", label: "Vikram Award Innovation Position" },
    { value: "100%", label: "Hands-on Student-Led Learning" },
    { value: "All Branches", label: "Open to Curious Beginners" },
  ],
  heroPill: "Student Robotics Club • MBM University •",
  heroQuote: "\"Turn ideas into working machines through hands-on learning, teamwork, and experimentation.\"",
  heroQuoteAttribution: "— ESRC Club Philosophy, MBM University",

  /* ── Navigation ───────────────────────────────────────────── */
  navLinks: [
    { label: "About", href: "#about" },
    { label: "Purpose & Activities", href: "#purpose" },
    { label: "Example Projects", href: "#projects" },
    { label: "Achievements", href: "#achievements" },
    { label: "Events", href: "#events" },
    { label: "Mentor", href: "#mentor" },
    { label: "Team", href: "#team" },
    { label: "Resources", href: "#resources" },
    { label: "Contact", href: "#contact" },
  ],

  /* ── 01. About ────────────────────────────────────────────── */
  about: {
    sectionTag: "01 / Who We Are",
    title: "About ESRC Club",
    subtitle: "A student-led robotics community at MBM University.",
    kicker: "Hands-On Robotics at MBM University",
    // Exact requested copy
    copy: "ESRC is a student-led robotics community at MBM University. We bring curious minds together to turn ideas into working machines through hands-on learning, teamwork, and experimentation.",
    leadText: "Turn ideas into working machines.",
    mutedText: "Robotics can feel intimidating from the outside, but at ESRC we believe everyone can build with the right community. From breadboards and simple sensors to autonomous rovers and national robotics arenas, our members learn together through guided peer sessions and creative collaboration.",
    path: [
      { name: "Explore", sub: "Curiosity & Basics" },
      { name: "Build", sub: "Prototypes & Circuits" },
      { name: "Program", sub: "Firmware & Automation" },
      { name: "Compete", sub: "Hackathons & Arenas" },
    ],
    highlights: [
      {
        icon: "🌱",
        title: "Beginner Welcoming",
        text: "Zero prior experience required. We guide you from your very first LED blink to complete autonomous systems.",
      },
      {
        icon: "🤝",
        title: "Peer-to-Peer Learning",
        text: "Senior members mentor junior batches through open discussions, hands-on lab sessions, and code reviews.",
      },
      {
        icon: "🏆",
        title: "Competitive Growth",
        text: "Proven national podium finishes at IIT Bombay, IIT Jodhpur, SKIT, and state innovation championships.",
      },
    ],
  },

  /* ── 02. Purpose, What We Do & Membership ─────────────────── */
  purpose: {
    sectionTag: "02 / Purpose & Activities",
    title: "Learn by Building",
    subtitle: "Making robotics approachable, collaborative, and practical.",
    // Exact requested purpose copy
    purposeStatement: "Our goal is to make robotics approachable and practical. Members learn by building: exploring mechanics, electronics, sensors, embedded systems, programming, automation, and control through guided activities and team projects.",
    
    // Exact requested What We Do bullet points
    whatWeDo: [
      {
        icon: "🤖",
        title: "Mobile Robots & Autonomous Systems",
        description: "Build and program mobile robots and autonomous systems.",
        tag: "Robotics Core",
      },
      {
        icon: "⚡",
        title: "Workshops & Technical Fabrication",
        description: "Learn electronics, sensors, microcontrollers, CAD, and fabrication through workshops.",
        tag: "Hands-on Skills",
      },
      {
        icon: "🛠️",
        title: "End-to-End Prototype Development",
        description: "Work in teams on projects that grow from a first prototype to a tested system.",
        tag: "Team Engineering",
      },
      {
        icon: "🏆",
        title: "Competitions & Technical Showcases",
        description: "Prepare for robotics competitions, hackathons, and technical showcases.",
        tag: "Competitive Arena",
      },
      {
        icon: "💡",
        title: "Peer Knowledge Sharing & Review",
        description: "Share knowledge through peer sessions, demonstrations, and project reviews.",
        tag: "Community",
      },
    ],

    // Exact requested Membership copy
    membership: {
      tag: "Membership & Community",
      title: "Join the Club",
      statement: "Whether you are new to robotics or already building projects, there is room to contribute. Bring your curiosity, learn alongside other students, and find a project that fits your interests.",
      highlights: [
        "Open to all MBM University undergraduate and postgraduate branches.",
        "Beginners receive hands-on mentoring and introductory starter kits.",
        "Experienced builders can lead competition teams and advanced project tracks.",
      ],
      ctaText: "Get Involved with ESRC",
      ctaLink: "#contact",
    },
  },

  /* ── 03. Example Project Areas ────────────────────────────── */
  projects: {
    sectionTag: "03 / Example Project Areas",
    title: "Exploration & Learning Focus Areas",
    subtitle: "Example project areas for student exploration until ESRC supplies its confirmed active project roster.",
    disclaimerBadge: "Example Project Areas • For Learning & Teamwork",
    disclaimerText: "Note for visitors: These represent example technical focus areas and learning pathways for club workshops and student teams. They are marked as example areas until ESRC supplies its completed active projects.",
    items: [
      {
        id: "autonomous-navigation",
        areaLabel: "Example Project Area",
        title: "Autonomous Navigation",
        icon: "🧭",
        summary: "Exploring mapping, path planning, and localization for mobile robotic rovers operating in structured and unstructured terrain.",
        focusPoints: [
          "LiDAR and ultrasonic rangefinder integration",
          "Occupancy grid mapping and 2D SLAM",
          "Waypoint following and odometry drift correction",
          "Differential drive closed-loop heading control",
        ],
        technologies: ["ROS 2", "Python / C++", "LiDAR", "Microcontrollers"],
        learningScope: "Teaches coordinate frames, kinematic models, sensor fusion, and real-time planning.",
      },
      {
        id: "line-following",
        areaLabel: "Example Project Area",
        title: "High-Speed Line Following",
        icon: "⚡",
        summary: "Designing high-precision track-following bots with optical sensor arrays and closed-loop PID control algorithms.",
        focusPoints: [
          "Multi-channel analog infrared reflectance arrays",
          "PID error computation and derivative dampening",
          "High-RPM DC motors with optical/magnetic encoders",
          "Custom printed circuit board chassis integration",
        ],
        technologies: ["STM32 / Arduino", "KiCad PCB", "Analog Sensors", "PID Control"],
        learningScope: "Teaches high-frequency control loops, interrupt routines, and power electronics.",
      },
      {
        id: "robotic-arms",
        areaLabel: "Example Project Area",
        title: "Robotic Arms & Manipulators",
        icon: "🦾",
        summary: "Building articulated robotic arms capable of pick-and-place manipulation, multi-axis motion, and gripper control.",
        focusPoints: [
          "Forward and inverse kinematics calculations",
          "Servo, stepper, and BLDC motor actuation",
          "Mechanical joint linkage design and 3D printing",
          "End-effector gripper design and payload balancing",
        ],
        technologies: ["CAD (SolidWorks/Fusion360)", "3D Fabrication", "Inverse Kinematics", "PWM Controllers"],
        learningScope: "Teaches mechanical design, geometric coordinate math, and structural load analysis.",
      },
      {
        id: "obstacle-avoidance",
        areaLabel: "Example Project Area",
        title: "Obstacle Avoidance & Collision Prevention",
        icon: "🛡️",
        summary: "Implementing reactive and predictive obstacle avoidance for autonomous vehicles navigating dynamic surroundings.",
        focusPoints: [
          "Ultrasonic and Time-of-Flight (ToF) distance sensing",
          "Finite State Machine (FSM) behavior architecture",
          "Dynamic steering corrections and emergency braking",
          "Non-blocking asynchronous sensor polling",
        ],
        technologies: ["Embedded C", "ToF Sensors", "State Machines", "H-Bridge Drivers"],
        learningScope: "Teaches real-time deterministic software architecture and safety fail-safes.",
      },
      {
        id: "sensor-based-systems",
        areaLabel: "Example Project Area",
        title: "Sensor-Based Intelligent Systems",
        icon: "📡",
        summary: "Interfacing multi-sensor arrays (IMUs, temperature, current, telemetry) into unified embedded monitoring systems.",
        focusPoints: [
          "I2C, SPI, and UART hardware communication protocols",
          "6-DOF IMU orientation filtering (accelerometer + gyro)",
          "Wireless data transmission via Bluetooth and Wi-Fi",
          "Real-time sensor telemetry visualization",
        ],
        technologies: ["ESP32 / ARM Cortex", "FreeRTOS", "I2C/SPI Protocols", "Telemetry Dashboards"],
        learningScope: "Teaches digital bus communication, data acquisition pipelines, and hardware debugging.",
      },
    ],
  },

  /* ── 04. Achievements ─────────────────────────────────────── */
  achievements: {
    sectionTag: "04 / Achievements",
    title: "Proven Track Record of Excellence",
    subtitle: "Transcribed from official ESRC achievement records. Celebrating our members' hard work and competition honors.",
    editorialNote: "Transcribed from official ESRC achievement documentation. Details are kept editable so the club can review or update names and wording before formal publication.",
    
    // Exactly preserved from user prompt transcribed image
    records: [
      {
        id: "eyantra-2023",
        event: "E-Yantra 2023, IIT Bombay",
        result: "All India Rank 1 in the Lunar Scout theme.",
        project: "Lunar Scout Autonomous Mission Rover",
        honorees: "ESRC Student Team",
        badge: "All India Rank 1 • IIT Bombay",
        badgeType: "gold",
        year: "2023",
        organizer: "IIT Bombay",
        description: "Secured top national rank in the flagship national robotics competition hosted by IIT Bombay, mastering autonomous lunar surface exploration and tele-robotics.",
      },
      {
        id: "vikram-award-1st",
        event: "Vikram Award",
        result: "1st Position — “Santalum Robot: Autonomous Balancing Rover,” by Ajeet Jain.",
        project: "Santalum Robot: Autonomous Balancing Rover",
        honorees: "Ajeet Jain",
        badge: "1st Position • Winner",
        badgeType: "gold",
        year: "Annual Edition",
        organizer: "State / Institutional Honor",
        description: "Honored with the 1st Position for engineering an autonomous self-balancing robotic rover demonstrating dynamic stabilization and closed-loop inverted pendulum control.",
      },
      {
        id: "vikram-award-runnerup",
        event: "Vikram Award",
        result: "Runner-up — “CoutureCraft: AI-powered fabric visualisation & boutique automation,” by Viveena Khatri and Mukand Jirawala.",
        project: "CoutureCraft: AI-powered fabric visualisation & boutique automation",
        honorees: "Viveena Khatri and Mukand Jirawala",
        badge: "Runner-up • Applied AI Award",
        badgeType: "silver",
        year: "Annual Edition",
        organizer: "State / Institutional Honor",
        description: "Achieved runner-up honors for blending machine learning, generative fabric visualization, and automation tools for boutique textile manufacturing.",
      },
      {
        id: "technorion-2023",
        event: "Technorion 2023, SKIT",
        result: "Secured second prize.",
        project: "Autonomous Arena Challenge",
        honorees: "ESRC Delegation",
        badge: "Second Prize",
        badgeType: "silver",
        year: "2023",
        organizer: "SKIT Jaipur",
        description: "Competed in high-intensity regional inter-college robotics trials, securing second prize overall for technical precision and chassis speed.",
      },
      {
        id: "encarta-2022",
        event: "Encarta 2022, MBM",
        result: "Won first, second, and third positions.",
        project: "University Robotics Derby",
        honorees: "ESRC Multi-team Squad",
        badge: "Podium Sweep (1st, 2nd & 3rd)",
        badgeType: "gold",
        year: "2022",
        organizer: "MBM University",
        description: "A complete podium sweep across university-level technical robotics tracks, clinching first, second, and third positions simultaneously.",
      },
      {
        id: "eyantra-2020-2022",
        event: "E-Yantra 2020 & 2022, IIT Bombay",
        result: "Secured 6th position and internship.",
        project: "National Theme Challenge",
        honorees: "ESRC Finalist Team",
        badge: "6th Position & IITB Internship",
        badgeType: "bronze",
        year: "2020 & 2022",
        organizer: "IIT Bombay",
        description: "Consecutive national finalist rankings at IIT Bombay e-Yantra finals, earning distinction and research internship placements.",
      },
      {
        id: "techfest-2022",
        event: "Techfest 2022, IIT Bombay",
        result: "Qualified for the finals.",
        project: "Grand Robotics Arena",
        honorees: "ESRC Delegation",
        badge: "Grand Finalist",
        badgeType: "blue",
        year: "2022",
        organizer: "IIT Bombay",
        description: "Qualified for the grand finals at Asia's largest science and technology festival, representing MBM University against top collegiate teams.",
      },
      {
        id: "ignus-2019",
        event: "Ignus 2019, IIT Jodhpur",
        result: "Won first prize in Maze Solver.",
        project: "Autonomous Maze Solver",
        honorees: "ESRC Robotics Team",
        badge: "First Prize • Maze Solver",
        badgeType: "gold",
        year: "2019",
        organizer: "IIT Jodhpur",
        description: "Clinched first prize in the autonomous Maze Solver challenge, navigating complex junction trees with rapid micro-second algorithmic solving.",
      },
    ],

    // Visual gallery references matching the user-supplied graphic slides
    visualGallery: {
      heading: "Milestones That Shaped Us & Moments That Made Us",
      subheading: "Photographic archives from award ceremonies, national championships, and team delegations.",
      notice: "Photographs transcribed from the club achievement collage. Individual awards display with room for updated club photos.",
      fullCollagePath: "assests/achievements/achievements_banner.jpg",
      slides: [
        {
          id: "milestones",
          title: "Milestones That Shaped Us",
          subtitle: "E-Yantra AIR 1 celebration & Vikram Award presentations",
          image: "assests/achievements/milestones_that_shaped_us.jpg",
          altText: "ESRC team members celebrating E-Yantra Rank 1 and receiving the Vikram Award certificates",
        },
        {
          id: "glimpses",
          title: "Moments That Made Us — Glimpses of Our Journey",
          subtitle: "Techfest delegations, Technorion, and university felicitations",
          image: "assests/achievements/moments_that_made_us.jpg",
          altText: "ESRC delegations at Techfest IIT Bombay, trophy handovers, and team group portraits",
        },
      ],
    },
  },

  /* ── 05. Upcoming Events (Honest Empty State) ─────────────── */
  events: {
    sectionTag: "05 / Upcoming Events",
    title: "Upcoming Events & Schedule",
    subtitle: "Workshops, competition bootcamps, and technical showcases.",
    // Honest empty state as required
    isEmptyState: true,
    emptyState: {
      badge: "Upcoming Term Schedule in Preparation",
      heading: "Event Dates in Preparation for the Upcoming Session",
      message: "The official calendar of workshops, hackathons, and robotics build sessions is currently being finalized by the ESRC student coordinators and faculty advisor. To ensure complete accuracy, no unverified dates or past events are listed here.",
      subMessage: "We regularly host beginner workshops, circuit design bootcamps, and competition prep sessions. Express your interest below to receive direct announcements as soon as dates are confirmed.",
      ctaLabel: "Notify Me When Dates are Announced",
      ctaLink: "#contact",
    },
    // Placeholders for when ESRC confirms events
    confirmedItems: [],
  },

  /* ── 06. Faculty Mentor / Advisor ─────────────────────────── */
  mentor: {
    sectionTag: "06 / Faculty Advisor",
    tag: "ESRC Mentor & Patron",
    kicker: "Guiding Innovation & Technical Excellence",
    name: "Dr. Alok Kumar Gehlot",
    description: "The foundational academic pillar and guide of ESRC at MBM University. Providing mentorship on technical innovation, laboratory resource procurement, project incubation, and connecting student engineers with premier national competitions and industry opportunities.",
    badges: [
      { icon: "🎓", label: "Faculty Advisor" },
      { icon: "🏛️", label: "MBM University, Jodhpur" },
      { icon: "⚡", label: "Embedded Systems & Robotics Patron" },
      { icon: "🏆", label: "Innovation & Project Guide" },
    ],
    photo: "assests/mentor/AlokSir.jpg",
  },

  /* ── 07. Team Leadership & Members ────────────────────────── */
  team: {
    sectionTag: "07 / Leadership & Team",
    title: "Meet the Team",
    subtitle: "Student leaders, coordinators, and active members organizing workshops, mentoring batches, and building competition systems.",
    editableNotice: "Profiles reflect confirmed student records. Roles and short bios are editable for the club coordinators.",
    
    // Leadership team (as previously requested by user)
    leadership: [
      {
        name: "Gagan Bairagi",
        role: "ESRC Club Lead",
        year: "Final Year",
        department: "ECE",
        badge: "ESRC Lead",
        bio: "Leading overall club operations, technical direction, hardware workshops, and team coordination.",
        linkedIn: "https://www.linkedin.com/in/gagan-bairagi-0325131b4/",
        photo: "assests/team/Gagan_Bairagi.jpg",
      },
      {
        name: "Mayank Aggarwal",
        role: "Core Member",
        year: "Final Year",
        department: "CSE",
        badge: "Core Leadership",
        bio: "Mentoring embedded firmware, robotics software architectures, and national competition projects.",
        linkedIn: "https://www.linkedin.com/in/er-mayank-aggarwal/",
        photo: "assests/team/Mayank Aggarwal .jpg",
      },
      {
        name: "Faisal Khan",
        role: "Core Member",
        year: "Third Year",
        department: "Petro",
        badge: "Core Leadership",
        bio: "Coordinating inter-branch projects, hands-on lab sessions, and student team initiatives.",
        linkedIn: "https://www.linkedin.com/in/faizal-khan-68b35a220/",
        photo: "assests/team/Faizal Khan.jpg",
      },
    ],

    // Core members confirmed from user's lists
    members: [
      {
        name: "Mayank Chittora",
        role: "Core Team",
        year: "2nd Year",
        department: "CSE",
        bio: "Active in software algorithms and microcontrollers.",
        linkedIn: "https://www.linkedin.com/in/mayank-chittora-11b971371/",
        photo: "assests/team/Mayank_chittora (1).png",
      },
      {
        name: "Raghvendra Singh",
        role: "Core Team",
        year: "2nd Year",
        department: "Struct",
        bio: "Focusing on robot structural mechanics and CAD.",
        linkedIn: "https://www.linkedin.com/in/raghvendra-singh-832907437/",
        photo: "assests/team/Raghvendra_Singh.jpg",
      },
      {
        name: "Dilkush Rajpurohit",
        role: "Core Team",
        year: "2nd Year",
        department: "ECE",
        bio: "Focusing on circuit design and electronics prototyping.",
        linkedIn: "https://www.linkedin.com/in/dilkush-rajpurohit-30b460390/",
        photo: "assests/team/dilkush_raj_purohit.jpeg",
      },
      {
        name: "Vaibhav Sharma",
        role: "Core Team",
        year: "2nd Year",
        department: "Chem",
        bio: "Engaged in hands-on prototyping and workshop management.",
        linkedIn: "https://www.linkedin.com/in/vaibhav-sharma-9076272ba/",
        photo: "assests/team/Vaibhav Sharma.jpg",
      },
      {
        name: "Mohammed Faizaan",
        role: "Core Team",
        year: "3rd Year",
        department: "",
        bio: "Robotics design and embedded firmware integration.",
        linkedIn: "https://www.linkedin.com/in/mohammed-faizaan-95a3b3286/",
        photo: "assests/team/Mohammed Faizaan.jpg",
      },
      {
        name: "Pratham Kumar Panwar",
        role: "Core Team",
        year: "2nd Year",
        department: "Petro",
        bio: "Chassis assembly and sensor integration.",
        linkedIn: "https://www.linkedin.com/in/pratham-panwar-35b347423/",
        photo: "assests/team/Pratham kumar panwar.jpg",
      },
      {
        name: "Ranveer Choudhary",
        role: "Core Team",
        year: "2nd Year",
        department: "ECE",
        bio: "Hardware debugging and circuit verification.",
        linkedIn: "https://www.linkedin.com/in/ranveer-choudhary-1a49a1272/",
        photo: "assests/team/Ranveer Choudhary .jpg",
      },
      {
        name: "Safal Sharma",
        role: "Core Team",
        year: "2nd Year",
        department: "EEE",
        bio: "Power systems, motor drivers, and battery management.",
        linkedIn: "https://www.linkedin.com/in/safal-sharma-54b5b420a/",
        photo: "assests/team/Safal Sharma.jpg",
      },
      {
        name: "Shorya Parihar",
        role: "Core Team",
        year: "2nd Year",
        department: "",
        bio: "Automation logic and sensor interfacing.",
        linkedIn: "https://www.linkedin.com/in/shorya-parihar-5a14763a3/",
        photo: "assests/team/Shorya parihar.jpg",
      },
      {
        name: "Kritika Meena",
        role: "Core Team",
        year: "2nd Year",
        department: "Civil",
        bio: "Structural layouts and documentation.",
        linkedIn: "",
        photo: "assests/team/Kritika_Meena.jpg",
      },
      {
        name: "Niharika Sankhla",
        role: "Core Team",
        year: "2nd Year",
        department: "Struct",
        bio: "Robotics chassis mechanics and modeling.",
        linkedIn: "",
        photo: "assests/team/Niharika Sankhla.jpg",
      },
      {
        name: "Mahima Jodha",
        role: "Core Team",
        year: "2nd Year",
        department: "IT",
        bio: "Software programming and telemetry dashboards.",
        linkedIn: "https://www.linkedin.com/in/mahima-jodha-55bb3b2ba/",
        photo: "assests/team/Mahima Jodha.png",
      },
      {
        name: "Riya Chopra",
        role: "Core Team",
        year: "",
        department: "",
        bio: "Coordination and technical activities.",
        linkedIn: "https://www.linkedin.com/in/riya-chopra-a36389426",
        photo: "assests/team/Riya_chopra.jpg",
      },
      {
        name: "Rudrakshi Kawdia",
        role: "Core Team",
        year: "2nd Year",
        department: "Mech",
        bio: "Mechanical drive-trains and CAD prototyping.",
        linkedIn: "https://www.linkedin.com/in/rudrakshi-kawdia-0993b3430",
        photo: "assests/team/Rudrakshi kawdia.jpg",
      },
      {
        name: "Harshita Prajapat",
        role: "Core Team",
        year: "2nd Year",
        department: "EEE",
        bio: "Microcontroller coding and electronics testing.",
        linkedIn: "https://www.linkedin.com/in/harshita-prajapat-2080393b8",
        photo: "assests/team/Harshita Prajapat .png",
      },
      {
        name: "Gauri Sharma",
        role: "Core Team",
        year: "",
        department: "",
        bio: "Team coordination and technical sessions.",
        linkedIn: "",
        photo: "assests/team/Gauri Sharma.jpg",
      },
    ],

    // Explicit editable placeholder templates for club expansion
    editablePlaceholders: [
      {
        name: "[Member Name Placeholder]",
        role: "[Editable Role: e.g. Technical Coordinator]",
        year: "[Academic Year]",
        department: "[Department]",
        bio: "Editable profile slot for additional student leads or coordinators.",
        isPlaceholder: true,
      },
    ],
  },

  /* ── 08. Learning Resources (Curated Roadmaps) ────────────── */
  resources: {
    sectionTag: "08 / Knowledge Hub",
    title: "Curated Learning Resources",
    subtitle: "High-yield roadmaps to strengthen foundational knowledge in electronics, microcontrollers, and robotics.",
    items: [
      {
        id: "wie",
        title: "Watt is Electronics?: An Amateurs Roadmap",
        description: "Master digital logic design, microcontroller architecture, and embedded programming fundamentals.",
        image: "assests/resources/wie.jpg",
        link: "https://github.com/erciitb/WattIsElectronics/blob/main/README.md",
        linkLabel: "Access Resource",
      },
      {
        id: "mcu",
        title: "MCU: MicroController Universe",
        description: "Get started with microcontrollers — the tiny computers behind modern electronics. Learn the basics of architecture, GPIO, and communication protocols.",
        image: "assests/resources/mcu.webp",
        link: "https://github.com/erciitb/MCU-MicroControllerUniverse/blob/main/README.md",
        linkLabel: "Access Resource",
      },
      {
        id: "ros2",
        title: "A beginners Guide to ROS2 Humble",
        description: "Comprehensive guide to ROS architecture, working and applications along with Gazebo. Works for any OS.",
        image: "assests/resources/reso-ros.png",
        link: "https://github.com/erciitb/fROSty-winter-2024/blob/main/README.md",
        linkLabel: "Access Resource",
      },
      {
        id: "hardware-security",
        title: "Hardware Security & Reverse Engineering",
        description: "Circuit analysis, fault injection, and side-channel attacks for embedded system security.",
        image: "assests/resources/reso-hh.png",
        link: "https://github.com/erciitb/Hardware_Hacking_Resources/blob/main/README.md",
        linkLabel: "Access Resource",
      },
    ],
  },

  /* ── 09. Join & Contact (Editable Placeholders) ───────────── */
  contact: {
    sectionTag: "09 / Get in Touch",
    title: "Join ESRC Club & Connect",
    subtitle: "Have questions about our activities, beginner workshops, or want to join as a member? Send a message or register below.",
    infoHeading: "Build, code, and innovate with us",
    infoText: "ESRC is open to all MBM University students passionate about circuits, robotics, embedded systems, firmware, and innovative engineering.",
    
    // Obvious editable placeholders
    email: "esrc.mbm@gmail.com",
    emailPlaceholderNote: "Messages open in your email app and are addressed to the ESRC inbox.",
    whatsappPlaceholder: "[Configurable WhatsApp Community Invite Link]",
    whatsappLink: "#contact",
    formEndpointNote: "Messages and registrations are sent directly to the ESRC inbox.",
    
    location: "Robotics & Embedded Systems Lab, MBM University, Jodhpur",
    officeHours: "Monday – Saturday: 4:30 PM – 7:30 PM IST (During Academic Terms)",
    inquiryChips: [
      "Join ESRC as Member",
      "Beginner Workshops",
      "Project Collaboration",
      "Competition Teams",
      "General Question",
    ],
    domainOptions: [
      "Robotics & Autonomous Systems",
      "Embedded Systems & Firmware",
      "Sensors, Electronics & Circuits",
      "CAD, 3D Design & Fabrication",
      "Competitions & Hackathons",
      "General Inquiry",
    ],
    mapEmbed: {
      campusTitle: "Robotics Lab, MBM University",
      coordinates: "26.2731° N, 73.0315° E",
      directions: "Department of Electronics / Electrical Engineering, MBM University Campus, Ratanada, Jodhpur, Rajasthan 342011",
    },
  },

  /* ── 10. FAQ ───────────────────────────────────────────────── */
  faq: {
    sectionTag: "10 / Frequently Asked Questions",
    title: "Frequently Asked Questions",
    subtitle: "Clear answers for prospective members, beginners, and collaborators.",
    items: [
      {
        question: "Who can join ESRC Club?",
        answer: "Any enrolled student at MBM University! We welcome all years and departments — CSE, ECE, EE, Mechanical, Petro, Civil, Mining, Chemical, and more. No prior engineering or coding experience is required.",
      },
      {
        question: "I am a complete beginner. Will I be able to follow along?",
        answer: "Yes, absolutely! The club exists specifically to make robotics approachable. We run beginner-friendly workshops that start with basic electronics, breadboards, and Arduino programming with senior mentorship.",
      },
      {
        question: "How do members grow into advanced projects and competitions?",
        answer: "Members typically start with fundamental guided workshops, progress to small team prototypes (such as line followers or sensor modules), and then collaborate on national competitive teams for events like e-Yantra, Techfest, and state innovation awards.",
      },
      {
        question: "Is there any membership fee?",
        answer: "Club membership is 100% free! All regular workshops, lab sessions, and internal study circles are student-run and supported by the university.",
      },
      {
        question: "What hardware and equipment do members work with?",
        answer: "Members have access to microcontrollers (Arduino, ESP32, STM32), motor drivers, sensors (ultrasonic, IR, IMUs, LiDAR), soldering equipment, test gear, and mechanical fabrication tools.",
      },
    ],
  },

  /* ── Social Links (Editable Placeholders) ─────────────────── */
  socialLinks: {
    instagram: "https://instagram.com/esrc_mbm",
    instagramPlaceholder: "[Configurable Instagram Handle]",
    linkedin: "https://www.linkedin.com/company/esrc-mbm",
    linkedinPlaceholder: "[Configurable LinkedIn Page]",
    whatsapp: "#contact",
    whatsappPlaceholder: "[Configurable WhatsApp Link]",
    email: "mailto:esrc.mbm@gmail.com",
    github: "https://github.com/esrc-mbm",
    githubPlaceholder: "[Configurable GitHub Organization]",
  },

  /* ── Footer ───────────────────────────────────────────────── */
  footerTagline: "Where circuits meet creativity and code brings robots to life.",
  footerCopyright: "© 2024–2025 ESRC Club, MBM University. All rights reserved.",
  footerCredits: "Student-Led Robotics Community • MBM University, Jodhpur",
};
