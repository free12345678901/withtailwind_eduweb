export interface CourseCurriculumSection {
  title: string;
  description?: string;
  items: string[];
}

export interface CoursePageContent {
  id: string;
  slug: string;
  name: string;
  duration: string;
  topicLabel: string;
  description: string;
  overview: string;
  learningOutcomes: string[];
  prerequisites: string[];
  curriculum: CourseCurriculumSection[];
}

export interface CourseNavItem {
  id: string;
  name: string;
  duration: string;
  route: string;
}

export const coursePages: CoursePageContent[] = [
  {
    id: "it-for-kids",
    slug: "it-for-kids",
    name: "IT For Kids",
    duration: "2 Months",
    topicLabel: "~8 Topics",
    description: "This introductory course is designed for children to learn the very basics of computers, including essential applications and some fun multimedia.",
    overview: "This introductory course is designed for children to learn the very basics of computers, including essential applications and some fun multimedia.",
    learningOutcomes: [
      "Master basic keyboard and typing skills.",
      "Learn fundamental document creation using Word Pad and Ms-Word.",
      "Explore basic drawing and editing with Ms-Paint.",
      "Understand data organization using Ms-Access.",
    ],
    prerequisites: ["None"],
    curriculum: [
      {
        title: "Creative Computer Basics",
        items: ["Typing", "Word Pad", "Ms-Paint", "Notepad", "Ms-Word", "Ms-Access", "Games and Multimedia"],
      },
    ],
  },
  {
    id: "ccc",
    slug: "ccc",
    name: "CCC (Course on Computer Concepts)",
    duration: "2 Months",
    topicLabel: "~12 Topics",
    description: "A foundational course covering essential computer skills, the Internet, and basic productivity software, ideal for beginners.",
    overview: "A foundational course covering essential computer skills, the Internet, and basic productivity software, ideal for beginners.",
    learningOutcomes: [
      "Gain a strong foundation in computer fundamentals.",
      "Develop fluency in using the Ms-Office suite (Word, Excel, PowerPoint).",
      "Understand file management, printing, and scanning.",
      "Learn basics of multimedia and the Internet.",
    ],
    prerequisites: ["None"],
    curriculum: [
      {
        title: "Digital Literacy Foundations",
        items: ["Computer fundamental", "Typing (English, Hindi, Gujarati)", "Ms-Paint", "Ms-Office", "Notepad", "Ms-Word"],
      },
      {
        title: "Productivity & Internet Skills",
        items: ["Internet", "Printing & Scanning", "Ms-Excel", "CD/DVD Writing", "Ms-Power Point", "Use of Removable Devices", "Multimedia", "Theory"],
      },
    ],
  },
  {
    id: "ccc-plus",
    slug: "ccc-plus",
    name: "CCC+",
    duration: "3 Months",
    topicLabel: "~13 Topics",
    description: "An expanded version of the CCC course, adding more depth to productivity software, including Ms-Access.",
    overview: "An expanded version of the CCC course, adding more depth to productivity software, including Ms-Access.",
    learningOutcomes: [
      "Deepen skills in the core Ms-Office applications.",
      "Introduce the fundamentals of database management using Ms-Access.",
      "Cover all core concepts of the CCC curriculum with additional practical sessions.",
    ],
    prerequisites: ["Basic computer familiarity recommended."],
    curriculum: [
      {
        title: "Core Productivity Skills",
        items: ["Computer fundamental", "Typing (English, Hindi, Gujarati)", "Ms-Paint", "Ms-Office", "Notepad", "Internet", "Ms-Word"],
      },
      {
        title: "Extended Office Expertise",
        items: ["Printing & Scanning", "Ms-Excel", "CD/DVD Writing", "Ms-Power Point", "Use of Removable Devices", "Multimedia", "Theory", "Ms-Access"],
      },
    ],
  },
  {
    id: "tally-miracles",
    slug: "tally-miracles",
    name: "Tally + Miracles",
    duration: "3 Months",
    topicLabel: "~30+ Topics",
    description: "A comprehensive course on computerized accounting, focusing on Tally Prime, covering advanced features including Inventory, Taxation, and Smart Modules.",
    overview: "A comprehensive course on computerized accounting, focusing on Tally Prime, covering advanced features including Inventory, Taxation (VAT, TDS, GST), and Smart Modules.",
    learningOutcomes: [
      "Master core accounting principles and voucher entry in Tally.",
      "Manage complex inventory, including Godowns and stock valuation.",
      "Implement various tax structures like VAT, TDS, and the entire GST framework.",
      "Utilize Smart Modules like Payroll and Cost Centers.",
    ],
    prerequisites: ["Basic knowledge of accounting principles is highly recommended."],
    curriculum: [
      {
        title: "Accounting Module",
        items: ["Computer Fundamental", "Introduction to Tally", "Accounting Terms", "Voucher Entry", "Contra, Payment, Receipt", "Sale & Purchase", "Day Book", "Bank Reconciliation & BRS", "Interest Calculation", "Year Ending Entries"],
      },
      {
        title: "Inventory Module",
        items: ["Inventory Creation", "Receipt/Issue/Outward", "Stock Transfer", "Manufacturing Journal", "Price Level", "Multiple Godown", "Stock Valuation Method"],
      },
      {
        title: "Smart Module",
        items: ["Multi Currency", "Payroll System", "Cost Center", "Budget & Controls", "Additional Cost on Purchase", "POS Invoice"],
      },
      {
        title: "Taxation Module",
        items: ["VAT", "TDS", "Service Tax", "TCS", "Dealer Excise", "GST"],
      },
      {
        title: "Goods & Service Tax (GST)",
        items: ["Single Slab", "Multiple Tax Slabs", "GST Configuration in Group Level", "Enabling Auto-Billing in Tally", "Recording GST Services", "Recording GST Expenses", "Recording Assets", "GST Components and Adjustments", "GSTR-1", "GSTR-2", "2A & 2B", "GSTR-1B", "E-Way Bill", "Registration", "Generate, Update and Cancel"],
      },
      {
        title: "Special Features",
        items: ["Print Customisation", "Cheque Printing", "Regional Language", "Internet"],
      },
    ],
  },
  {
    id: "graphics-design",
    slug: "graphics-design",
    name: "Graphics Design",
    duration: "4 Months",
    topicLabel: "~40+ Topics",
    description: "A complete training program covering the essential tools of graphic design: Photoshop, Illustrator, and Corel Draw.",
    overview: "A complete training program covering the essential tools of graphic design: Photoshop, Illustrator, and Corel Draw, focusing on image editing, illustration, and design for print and web.",
    learningOutcomes: [
      "Master image manipulation, retouching, and special effects in Photoshop.",
      "Create logos, illustrations, and vector graphics using Illustrator.",
      "Design layouts, brochures, cards, and print materials using Corel Draw.",
      "Understand color theory, typography, and professional design workflow.",
    ],
    prerequisites: ["Basic computer literacy."],
    curriculum: [
      {
        title: "Photoshop",
        items: ["Introduction", "Math", "Layer", "Channels & Tool Box", "Color & Adjustment", "Shapes", "Text Operations", "Selections & Masking", "Smart Objects", "Transform & Distort", "Retouching", "Image Editing", "Photo Mixing with Special Effects", "Wedding Album", "Filters", "Logo Creation", "Web Banners", "Photo Manipulations", "Graphic Design Work", "Creative GIF Animations", "Create Website Mockups"],
      },
      {
        title: "Illustrator",
        items: ["Introduction", "Drawing in Illustrator", "Working with Fonts", "Creating Typography", "Layers & Masking", "Controlling Color Theory", "Creating Effects & Patterns", "Working with Brushes", "Creating New Brush"],
      },
      {
        title: "Corel Draw",
        items: ["Typing (Gujarati, Hindi, English)", "Workspace", "Tool Box", "Creating New Objects", "Drawing Objects", "Transforming Object", "Drawing & Editing Tools", "Text & Adjustments", "Text on Path & Circle", "Power Clip & Rollover Effects", "Effects and Fills", "Working with Layouts", "Logos", "Visiting Cards", "Letterhead", "Wedding Card", "Working Card", "Brochure & Leaflet Design", "Creating Vector Graphics", "Geometric Grid & Artwork", "Creating Complex Images", "3D Material Design", "Export in other formats", "Creating Logos", "Visiting Cards", "Brochure & Leaflet Design", "Creating Vector Graphics", "Creating Portfolio"],
      },
    ],
  },
  {
    id: "autocad",
    slug: "autocad",
    name: "AutoCAD",
    duration: "3 Months",
    topicLabel: "~8 Topics",
    description: "A hands-on course in Computer-Aided Design, teaching students to create and manipulate 2D and 3D drawings for engineering and architectural purposes.",
    overview: "A hands-on course in Computer-Aided Design, teaching students to create and manipulate 2D and 3D drawings for engineering and architectural purposes.",
    learningOutcomes: [
      "Create and edit basic 2D and 3D drawings.",
      "Work effectively with layers and layouts.",
      "Master the manipulation and alteration of drawing objects.",
      "Annotate drawings using text and hatching.",
    ],
    prerequisites: ["Basic knowledge of geometry and technical drawing is helpful."],
    curriculum: [
      {
        title: "2D Drafting Essentials",
        items: ["Creating Basic Drawing", "Manipulating Objects", "Drawing with Layers", "Altering Objects", "Working with Layouts", "Annotating Drawing & Text", "Hatching Objects"],
      },
      {
        title: "3D Visualization & Output",
        items: ["Working with Reusable Contents", "Plotting your Drawing", "3D modeling Workspace", "3D objects from 2D Workplaces", "Materials & Lighting", "Rendering"],
      },
    ],
  },
  {
    id: "c-language",
    slug: "c-language",
    name: "C Language",
    duration: "3 Months",
    topicLabel: "~10 Topics",
    description: "A foundational course introducing structured programming concepts using the C language, covering data types, control flow, functions, arrays, and pointers.",
    overview: "A foundational course introducing structured programming concepts using the C language, covering data types, control flow, functions, arrays, and pointers.",
    learningOutcomes: [
      "Understand and use basic data types, variables, and operators.",
      "Implement control flow statements for program logic.",
      "Write and utilize library and user-defined functions.",
      "Master complex data structures like arrays, pointers, and structures.",
    ],
    prerequisites: ["Basic computer literacy."],
    curriculum: [
      {
        title: "Introduction & Operators",
        items: ["Basic Data Types & Enum Data Types", "Variable", "Constants & Format Specifier", "Arithmetic Operators", "Assignment Operators", "Relational Operators", "Increment & Decrement", "Logical Operators", "Bitwise Operators"],
      },
      {
        title: "Control Flow & Loops",
        items: ["If / Else / Else If", "Switch & Case", "Nested If", "Goto", "Upward & Downward Jump", "Loops (For, While, Do While)", "Nesting of Loops"],
      },
      {
        title: "Data Structures & Functions",
        items: ["Array (Single & Multidimensional)", "Char Functions", "String Functions", "Other Library Functions", "User Defined Functions (With/Without Args/Return)"],
      },
      {
        title: "Advanced Concepts",
        items: ["Pointers", "Structures & Union", "File Input & Output", "Debugging", "Theory"],
      },
    ],
  },
  {
    id: "cpp",
    slug: "cpp",
    name: "CPP (C++)",
    duration: "2 Months",
    topicLabel: "~10 Topics",
    description: "This course introduces Object-Oriented Programming (OOP) using C++, covering core concepts like classes, inheritance, polymorphism, and memory allocation.",
    overview: "This course introduces Object-Oriented Programming (OOP) using C++, covering core concepts like classes, inheritance, polymorphism, and memory allocation.",
    learningOutcomes: [
      "Master fundamental OOP concepts: Class, Object, Constructor, and Destructor.",
      "Implement inheritance and polymorphism effectively.",
      "Understand advanced C++ features like virtual methods, operator overloading, and dynamic memory allocation.",
    ],
    prerequisites: ["Solid understanding of C language fundamentals."],
    curriculum: [
      {
        title: "Introduction of OOP",
        items: ["Basics", "Constructor", "Class", "Object", "Destructor"],
      },
      {
        title: "Inheritance & Encapsulation",
        items: ["Polymorphism", "Encapsulation", "Abstract Method", "Static Method", "Method Overloading"],
      },
      {
        title: "Advanced C++ Techniques",
        items: ["Inline Method", "Virtual Method", "Operator Overloading", "Dynamic Memory Allocation", "File Handling"],
      },
    ],
  },
  {
    id: "diploma-in-computer-application",
    slug: "diploma-in-computer-application",
    name: "Diploma in Computer Application",
    duration: "8 Months",
    topicLabel: "~10 Modules",
    description: "A comprehensive diploma providing an in-depth understanding of computer systems, office automation, web design fundamentals, advanced accounting, and graphic design tools.",
    overview: "A comprehensive diploma providing an in-depth understanding of computer systems, office automation, web design fundamentals, advanced accounting, and graphic design tools.",
    learningOutcomes: [
      "Establish a strong base in Computer Organization & Operating System.",
      "Master the full Ms-Office suite and Web Designing basics (HTML, CSS, Bootstrap).",
      "Gain expertise in Advanced Accounting (Tally Prime, Miracle).",
      "Learn foundational Desktop Publishing (Photoshop, Corel Draw).",
    ],
    prerequisites: ["Basic computer literacy."],
    curriculum: [
      {
        title: "Core Computing",
        items: ["Computer Organization & Fundamental of Operating System"],
      },
      {
        title: "Office Productivity",
        items: ["CCC", "Ms-Office"],
      },
      {
        title: "Web Designing Tools",
        items: ["HTML", "CSS", "Bootstrap"],
      },
      {
        title: "Advanced Accounting System",
        items: ["Tally Prime", "Miracle"],
      },
      {
        title: "Desktop Publishing",
        items: ["Photoshop", "Corel draw"],
      },
    ],
  },
  {
    id: "post-graduate-diploma-in-computer-application-pgdca",
    slug: "post-graduate-diploma-in-computer-application-pgdca",
    name: "Post Graduate Diploma in Computer Application (PGDCA)",
    duration: "1 Year (2 Semesters)",
    topicLabel: "~15 Modules",
    description: "A one-year advanced diploma covering core computing, programming in C, C++, and Web development alongside advanced accounting and soft skills.",
    overview: "A one-year advanced diploma covering core computing, programming in C, C++, and Web development (HTML, CSS, PHP, Script), alongside advanced accounting and soft skills.",
    learningOutcomes: [
      "Master structured programming in C and Object-Oriented Programming in C++.",
      "Develop full-stack basic web applications using HTML, CSS, JavaScript, and PHP.",
      "Gain expertise in advanced accounting (Tally Prime, Miracle) and office automation.",
      "Develop essential soft skills and spoken English for professional success.",
    ],
    prerequisites: ["High School Diploma or equivalent (prior computing exposure recommended)."],
    curriculum: [
      {
        title: "Semester 1",
        items: ["Computer Organization & Fundamental of Operating System", "Computer Programming & Programming Methodology", "C Language", "Office Automation", "CCC", "Ms-Office", "Web Designing Tools (HTML, CSS, Dream Weaver)", "Advanced Accounting System", "Tally Prime", "Miracle"],
      },
      {
        title: "Semester 2",
        items: ["Object Oriented Programming", "C++", "Web Based Programming", "Java Script", "PHP", "Soft Skill", "Spoken English"],
      },
    ],
  },
  {
    id: "spoken-english",
    slug: "spoken-english",
    name: "Spoken English",
    duration: "2 Months",
    topicLabel: "~15 Topics",
    description: "A practical course focused on developing fluency and confidence in spoken English, covering grammar fundamentals, conversational skills, and presentation techniques.",
    overview: "A practical course focused on developing fluency and confidence in spoken English, covering grammar fundamentals, conversational skills, and presentation techniques.",
    learningOutcomes: [
      "Master basic grammar components (Parts of Speech, Tenses, Active/Passive Voice).",
      "Develop fluency in command sentences and complex sentence structures.",
      "Practice essential soft skills like Group Discussion, Interview Skills, Conversation, and Q&A Sessions.",
    ],
    prerequisites: ["Basic reading and writing ability in English."],
    curriculum: [
      {
        title: "Grammar & Vocabulary",
        items: ["Article", "Noun", "Pronoun", "Adjective", "Verb", "Preposition", "Conjunction", "Demonstration", "Part of 'To be'", "Want", "Need & Like", "Infinitive Verb", "Command Sentence", "Continuous Action", "Phrasal Verb", "Asking"],
      },
      {
        title: "Communication Skills",
        items: ["Conversation", "Q&A Sessions", "Presentation Skill", "Group Discussion", "Interview Skill"],
      },
      {
        title: "Advanced English",
        items: ["Tenses", "Active & Passive", "Narration"],
      },
    ],
  },
];

export const courses: CourseNavItem[] = coursePages.map((course) => ({
  id: course.id,
  name: course.name,
  duration: course.duration,
  route: `/course/${course.slug}`,
}));

export interface CourseModule {
  name: string;
  topics: string[];
}

export interface CourseData {
  title: string;
  duration: string;
  slug: string;
  modules: CourseModule[];
}

export const coursesData: CourseData[] = coursePages.map((course) => ({
  title: course.name,
  duration: course.duration,
  slug: course.slug,
  modules: course.curriculum.map((section) => ({
    name: section.title,
    topics: section.items,
  })),
}));