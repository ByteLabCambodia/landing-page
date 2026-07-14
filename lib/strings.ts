/**
 * All page copy lives here so the site can go bilingual (EN / Khmer).
 * English is the default. Khmer strings are DRAFT machine-assisted
 * translations — [TODO: have a native speaker review all `km` copy].
 *
 * Replace anything wrapped in [brackets] with real content:
 * team member names/roles, impact numbers, achievements, testimonials.
 */

export type Lang = "en" | "km";

export const strings = {
  en: {
    nav: {
      mission: "Mission",
      whatWeDo: "What We Do",
      about: "About Us",
      forYou: "For You",
      contact: "Contact",
      cta: "Get in Touch",
    },
    hero: {
      words: ["Imagine.", "Build.", "Innovate."],
      tagline:
        "ByteLab brings hands-on robotics education to Cambodia — real kits, real code, real projects built by young inventors.",
      cta: "Get in Touch",
      scrollCue: "Scroll to explore",
    },
    mission: {
      eyebrow: "Our mission",
      statement:
        "ByteLab helps learners imagine what technology can do, build it with their own hands, and innovate for Cambodia's future.",
      highlights: ["imagine", "build", "innovate"],
    },
    whatWeDo: {
      eyebrow: "What we do",
      title: "From first spark to real-world builds",
      intro: "Four ways we help learners go from curiosity to creation.",
      explore: "Explore this service",
      items: [
        {
          tag: "Hardware",
          title: "Plug & Play Robot Car Kits",
          body: "Affordable, beginner-friendly kits that go from box to moving robot in one session. No soldering, no fear — just build, code, and drive.",
          points: ["Beginner-friendly", "Affordable", "Classroom-ready"],
          detail: {
            intro:
              "Our robot car kit is designed to make the first hour of robotics feel like play, not homework. Everything snaps together, the code starts as blocks, and by the end of one session your robot is driving.",
            features: [
              {
                title: "No soldering required",
                body: "Every connector is plug & play. Kids build with confidence and nothing breaks when they experiment.",
              },
              {
                title: "Block-to-code progression",
                body: "Start with drag-and-drop blocks, graduate to real code when ready — the same robot grows with the learner.",
              },
              {
                title: "Expandable sensors",
                body: "Line-following, obstacle avoidance, and light sensors extend the base kit into months of new challenges.",
              },
              {
                title: "Classroom packs",
                body: "Multi-kit bundles with teacher guides and spare parts, priced for Cambodian schools.",
              },
            ],
            audience:
              "Best for beginners aged 10+, families, and schools starting their first robotics program.",
          },
        },
        {
          tag: "Software",
          title: "Digital Learning Platform",
          body: "Online lessons and guided projects in robotics and IoT, designed for self-paced learning at home or structured use in class.",
          points: [
            "Robotics & IoT lessons",
            "Guided projects",
            "Learn anywhere",
          ],
          detail: {
            intro:
              "The platform turns curiosity into a path. Lessons build on each other, projects end with something real, and learners can continue at home exactly where the classroom left off.",
            features: [
              {
                title: "Structured learning paths",
                body: "From first blink of an LED to IoT projects — a clear sequence, no guessing what comes next.",
              },
              {
                title: "Real project builds",
                body: "Every module ends in a working project you can show, not a quiz score.",
              },
              {
                title: "Khmer + English lessons",
                body: "Learn in the language you think in; switch anytime.",
              },
              {
                title: "Progress tracking",
                body: "Learners, parents, and teachers see progress at a glance.",
              },
            ],
            audience:
              "Best for self-paced learners at home and schools that want a ready-made robotics curriculum.",
          },
        },
        {
          tag: "Programs",
          title: "Project-Based Services",
          body: "Hands-on programs, workshops, and real-world builds — run with schools, communities, and organizations across Cambodia.",
          points: ["Workshops", "School programs", "Real-world builds"],
          detail: {
            intro:
              "Some things you can't learn from a screen. Our team runs hands-on programs where learners build real things together — in schools, at community events, and with partner organizations.",
            features: [
              {
                title: "School programs",
                body: "Term-length robotics programs delivered in your school, with our kits and trained instructors.",
              },
              {
                title: "Workshops & bootcamps",
                body: "One-day to one-week intensives for students, teachers, or teams.",
              },
              {
                title: "Custom builds",
                body: "Real-world engineering projects co-built with learners — from smart-farm demos to competition robots.",
              },
              {
                title: "Community events",
                body: "Maker days and showcases that bring families and schools into the lab.",
              },
            ],
            audience:
              "Best for schools, NGOs, and companies that want hands-on STEM programs with measurable outcomes.",
          },
        },
        {
          tag: "Research",
          title: "R&D",
          body: "We research and prototype new tools for tech education, pushing what's possible for the next generation of Cambodian makers.",
          points: ["New learning tools", "Prototypes", "Open exploration"],
          detail: {
            intro:
              "R&D is how ByteLab stays ahead of what Cambodian classrooms need. We prototype new kits, test new ways of teaching, and explore local manufacturing so technology education keeps getting cheaper and better.",
            features: [
              {
                title: "New kit prototypes",
                body: "Next-generation kits designed around real classroom feedback.",
              },
              {
                title: "Learning-tools research",
                body: "We study how Cambodian students learn best and design tools to match.",
              },
              {
                title: "Local manufacturing",
                body: "Exploring locally produced parts to cut costs and build local capacity.",
              },
              {
                title: "Open collaboration",
                body: "We partner with universities and makers — bring us a hard problem.",
              },
            ],
            audience:
              "Best for universities, partners, and funders who want to shape the future of STEM education in Cambodia.",
          },
        },
      ],
      backToServices: "All services",
    },
    whyUs: {
      eyebrow: "Why ByteLab",
      title: "Why choose us",
      reasons: [
        {
          title: "Built for Cambodia",
          body: "Affordable kits, Khmer-language support, and content designed for local classrooms — not imported one-size-fits-all.",
        },
        {
          title: "Hands-on first",
          body: "Every lesson ends with something that moves, lights up, or drives. Learners remember what they build.",
        },
        {
          title: "One complete ecosystem",
          body: "Hardware, learning platform, programs, and research under one roof — each part makes the others better.",
        },
        {
          title: "Educator-friendly",
          body: "Teacher training, curriculum support, and classroom packs so any school can run robotics with confidence.",
        },
      ],
    },
    impact: {
      eyebrow: "Impact",
      title: "The impact of ByteLab",
      stats: [
        { value: 100, suffix: "+", label: "Students taught" },
        { value: 5, suffix: "+", label: "Partner schools" },
        { value: 5, suffix: "+", label: "Workshops run" },
        { value: 100, suffix: "+", label: "Kits in classrooms" },
      ],
    },
    achievements: {
      eyebrow: "Milestones",
      title: "Achievements",
      items: [
        {
          year: "2023",
          title: "ByteLab founded",
          body: "Started as a school project by 8 team members — and scaled step by step into the startup we are today.",
        },
        {
          year: "2023",
          title: "MRC 2023: 1st Place Winner",
          body: "Won first place representing Team Cambodia.",
        },
        {
          year: "2024",
          title: "First robot launched",
          body: "Launched our first robot at Toutes à l'école (Happy Chandara School).",
        },
        {
          year: "2026",
          title: "ACTSmart Cohort 2: 2nd Place Winner",
          body: "Awarded second place in the ACTSmart incubation program, Cohort 2.",
        },
        // {
        //   year: "2026",
        //   title: "ACIR+ Program Incubation: Second Prize",
        //   body: "Won second prize at the ACIR+ Program Incubation of Start-Ups and Innovation, held at VKU in Da Nang, Vietnam.",
        // },
        {
          year: "Ongoing",
          title: "Agriculture Drone Project",
          body: "Building drone technology to support Cambodian agriculture.",
        },
      ],
    },
    about: {
      teaser: {
        eyebrow: "Behind the lab",
        title: "The people and the story behind ByteLab",
        body: "Meet the 8 makers building ByteLab, and the milestones along the way.",
        cta: "About us",
      },
      hero: {
        eyebrow: "About ByteLab",
        title: "The people and the journey behind ByteLab",
        body: "We're a small team in Phnom Penh building the robotics education we wished we'd had — and we're just getting started.",
      },
    },
    team: {
      eyebrow: "The team",
      title: "Meet the 8 makers behind ByteLab",
      intro:
        "Engineers, educators, and builders — all in Phnom Penh, all obsessed with what learners can create.",
      members: [
        {
          name: "Chhoeun Reaksa",
          role: "Product Development Director",
          description:
            "Leading the vision for our educational products and ensuring they meet global standards.",
          expertise: ["Product Strategy", "Leadership", "Education"],
        },
        {
          name: "Pun Solita",
          role: "Communication Director",
          description:
            "Managing internal and external communications to build a strong community around Byte Lab.",
          expertise: ["Communication", "Finance", "Public Relations"],
        },
        {
          name: "Meng Oudom",
          role: "Operation & Logistic Director",
          description:
            "Overseeing daily operations and leading software development initiatives.",
          expertise: ["Operations", "Software Development", "Logistics"],
        },
        {
          name: "Gnep Vandara",
          role: "Sale & Logistic Specialist",
          description:
            "Ensuring our kits reach schools and students efficiently while managing sales partners.",
          expertise: ["Sales", "Logistics", "Customer Relations"],
        },
        {
          name: "Hoy Seiha",
          role: "Business Analyst",
          description:
            "Analyzing market trends and business performance to drive growth and sustainability.",
          expertise: ["Business Analysis", "Strategy", "Market Research"],
        },
        {
          name: "Sophat Sophana",
          role: "Robotics Software Engineer",
          description:
            "Designing and refining the electronic components that power our robots.",
          expertise: ["Electronics", "Circuit Design", "Prototyping"],
        },
        {
          name: "Chheng Maraviraktep",
          role: "Mechanic Engineer",
          description:
            "Engineering robust and kid-friendly mechanical parts for our robot kits.",
          expertise: ["Mechanical Engineering", "3D Design", "Manufacturing"],
        },
        {
          name: "Cheang Thornsopanha",
          role: "Web Developer",
          description:
            "Building our digital platforms to support students and teachers online.",
          expertise: ["Web Development", "UI/UX", "React"],
        },
      ],
    },
    testimonials: {
      eyebrow: "Testimonials",
      title: "What people say",
      quotes: [
        {
          quote:
            "I can build my own robot car now! Thanks to the coaches for giving guidance — I wouldn't be where I am today without you.",
          name: "Student testimony",
          role: "AUPP High School",
        },
        {
          quote:
            "Robotics class is my favorite part of the week. I built a robot that follows a line all by myself!",
          name: "Student testimony",
          role: "Lycée Français René Descartes",
        },
        {
          quote:
            "Learning with ByteLab is so much fun — my friends and I can't wait for the next session.",
          name: "Student testimony",
          role: "Lycée Français René Descartes",
        },
      ],
    },
    faq: {
      eyebrow: "Q&A",
      title: "Questions, answered",
      items: [
        {
          q: "Who can join ByteLab programs?",
          a: "Anyone curious — we design for learners from about age 10 up, and we run separate tracks for students, teachers, and adults. No prior experience needed.",
        },
        {
          q: "Do I need any coding or electronics experience?",
          a: "No. Our kits start with plug & play hardware and block-based coding. Experienced learners can skip ahead to real code.",
        },
        {
          q: "How much does a robot car kit cost?",
          a: "[Pricing placeholder — add real kit pricing and classroom-pack pricing here.]",
        },
        {
          q: "Are lessons available in Khmer?",
          a: "Yes — our platform and workshops are bilingual (Khmer and English), and you can switch anytime.",
        },
        {
          q: "How can my school start a program?",
          a: "Get in touch and we'll scope it together — most schools start with a one-day workshop, then grow into a term program with classroom packs.",
        },
        {
          q: "Can companies or NGOs partner with ByteLab?",
          a: "Absolutely. Partners sponsor programs, co-develop projects, or bring ByteLab to their communities. Tell us what impact you want to make.",
        },
      ],
    },
    forYou: {
      eyebrow: "For you",
      title: "One lab, four ways in",
      audiences: [
        {
          label: "Students",
          title: "Build things that actually move",
          body: "Start from zero and end with a robot you coded yourself. Learn skills that open doors — and have fun doing it.",
        },
        {
          label: "Parents",
          title: "A head start that's safe and structured",
          body: "Guided, age-appropriate learning that builds real STEM skills, confidence, and creativity — with clear progress you can see.",
        },
        {
          label: "Schools",
          title: "Robotics for your classroom, made easy",
          body: "Ready-to-teach kits, curriculum support, and training so any school can run a modern robotics program.",
        },
        {
          label: "Partners",
          title: "Grow Cambodia's tech talent with us",
          body: "Sponsor programs, co-develop projects, or bring ByteLab to your community. Let's build the pipeline together.",
        },
      ],
    },
    partners: {
      eyebrow: "Trusted by",
      line: "Working with schools, communities, and partners across Cambodia.",
      placeholder: "[partner logos here]",
    },
    contact: {
      eyebrow: "Contact",
      title: "Let's build something together",
      body: "Student, parent, school, or partner — tell us who you are and we'll take it from there.",
      form: {
        name: "Your name",
        email: "Email address",
        message: "What would you like to build or ask?",
        submit: "Send message",
        sent: "Message sent — we'll get back to you soon!",
      },
      details: {
        emailLabel: "Email",
        email: "info@bytelabkh.com", // TODO: real email, e.g. hello@bytelab.com.kh
        phoneLabel: "Phone",
        phone: "+855 93 554 082", // TODO: real phone number
        locationLabel: "Location",
        location: "Phnom Penh, Cambodia",
        socialLabel: "Follow us",
      },
    },
    footer: {
      blurb: "Robotics education for Cambodia's next generation of inventors.",
      quickLinks: "Quick links",
      social: "Social",
      copyright: `© ${new Date().getFullYear()} ByteLab. All rights reserved.`,
    },
  },

  /* ---- KHMER (DRAFT — needs native review) ---- */
  km: {
    nav: {
      mission: "បេសកកម្ម",
      whatWeDo: "អ្វីដែលយើងធ្វើ",
      about: "អំពីយើង",
      forYou: "សម្រាប់អ្នក",
      contact: "ទំនាក់ទំនង",
      cta: "ទាក់ទងមកយើង",
    },
    hero: {
      words: ["ស្រមៃ។", "បង្កើត។", "ច្នៃប្រឌិត។"],
      tagline:
        "ByteLab នាំការអប់រំរ៉ូបូតិកបែបអនុវត្តជាក់ស្តែងមកកម្ពុជា — ឧបករណ៍ពិត កូដពិត និងគម្រោងពិតដែលបង្កើតដោយអ្នកច្នៃប្រឌិតវ័យក្មេង។",
      cta: "ទាក់ទងមកយើង",
      scrollCue: "រំកិលដើម្បីស្វែងយល់",
    },
    mission: {
      eyebrow: "បេសកកម្មរបស់យើង",
      statement:
        "ByteLab ជួយអ្នកសិក្សាឱ្យស្រមៃពីអ្វីដែលបច្ចេកវិទ្យាអាចធ្វើបាន បង្កើតវាដោយដៃខ្លួនឯង និងច្នៃប្រឌិតសម្រាប់អនាគតកម្ពុជា។",
      highlights: ["ស្រមៃ", "បង្កើត", "ច្នៃប្រឌិត"],
    },
    whatWeDo: {
      eyebrow: "អ្វីដែលយើងធ្វើ",
      title: "ពីគំនិតដំបូង ដល់ការបង្កើតជាក់ស្តែង",
      intro: "វិធីបួនយ៉ាងដែលយើងជួយអ្នកសិក្សា ពីការចង់ដឹង ទៅការបង្កើត។",
      explore: "ស្វែងយល់សេវាកម្មនេះ",
      items: [
        {
          tag: "ហាដវែរ",
          title: "ឈុតរថយន្តរ៉ូបូត Plug & Play",
          body: "ឈុតឧបករណ៍តម្លៃសមរម្យ ងាយស្រួលសម្រាប់អ្នកចាប់ផ្តើម — គ្មានការផ្សារ គ្មានការភ័យខ្លាច គ្រាន់តែដំឡើង សរសេរកូដ និងបើកបរ។",
          points: [
            "ងាយសម្រាប់អ្នកចាប់ផ្តើម",
            "តម្លៃសមរម្យ",
            "ត្រៀមសម្រាប់ថ្នាក់រៀន",
          ],
          detail: {
            intro:
              "ឈុតរថយន្តរ៉ូបូតរបស់យើងត្រូវបានរចនាឡើងដើម្បីធ្វើឱ្យម៉ោងដំបូងនៃរ៉ូបូតិកមានអារម្មណ៍ដូចការលេង មិនមែនកិច្ចការផ្ទះទេ។ អ្វីៗគ្រប់យ៉ាងភ្ជាប់គ្នាបានយ៉ាងងាយ ហើយនៅចុងបញ្ចប់នៃវគ្គមួយ រ៉ូបូតរបស់អ្នកកំពុងបើកបរ។",
            features: [
              {
                title: "មិនត្រូវការការផ្សារ",
                body: "គ្រប់ឧបករណ៍ភ្ជាប់សុទ្ធតែ plug & play។ ក្មេងៗបង្កើតដោយទំនុកចិត្ត ហើយគ្មានអ្វីខូចពេលពួកគេពិសោធន៍។",
              },
              {
                title: "ពីប្លុកទៅកូដពិត",
                body: "ចាប់ផ្តើមជាមួយប្លុកអូសទម្លាក់ បន្តទៅកូដពិតនៅពេលត្រៀមខ្លួន — រ៉ូបូតដដែលរីកចម្រើនជាមួយអ្នកសិក្សា។",
              },
              {
                title: "សេនស័រពង្រីកបាន",
                body: "សេនស័រតាមបន្ទាត់ ជៀសវាងឧបសគ្គ និងពន្លឺ ពង្រីកឈុតមូលដ្ឋានទៅជាបញ្ហាប្រឈមថ្មីៗរាប់ខែ។",
              },
              {
                title: "កញ្ចប់សម្រាប់ថ្នាក់រៀន",
                body: "កញ្ចប់ឈុតច្រើន ជាមួយសៀវភៅណែនាំគ្រូ និងគ្រឿងបន្លាស់ ក្នុងតម្លៃសមរម្យសម្រាប់សាលារៀនកម្ពុជា។",
              },
            ],
            audience:
              "ល្អបំផុតសម្រាប់អ្នកចាប់ផ្តើមអាយុ ១០ឆ្នាំឡើង គ្រួសារ និងសាលារៀនដែលចាប់ផ្តើមកម្មវិធីរ៉ូបូតិកដំបូង។",
          },
        },
        {
          tag: "សូហ្វវែរ",
          title: "វេទិកាសិក្សាឌីជីថល",
          body: "មេរៀន និងគម្រោងអនឡាញផ្នែករ៉ូបូតិក និង IoT សម្រាប់រៀនតាមល្បឿនខ្លួនឯងនៅផ្ទះ ឬប្រើក្នុងថ្នាក់រៀន។",
          points: ["មេរៀនរ៉ូបូតិក & IoT", "គម្រោងណែនាំ", "រៀនបានគ្រប់ទីកន្លែង"],
          detail: {
            intro:
              "វេទិកានេះប្រែក្លាយការចង់ដឹងទៅជាផ្លូវច្បាស់លាស់។ មេរៀនបន្តគ្នាទៅមុខ គម្រោងបញ្ចប់ដោយអ្វីដែលពិត ហើយអ្នកសិក្សាអាចបន្តនៅផ្ទះត្រង់កន្លែងដែលថ្នាក់រៀនឈប់។",
            features: [
              {
                title: "ផ្លូវសិក្សាមានរចនាសម្ព័ន្ធ",
                body: "ពីការភ្លឺ LED ដំបូង ដល់គម្រោង IoT — លំដាប់ច្បាស់លាស់ គ្មានការស្មាន។",
              },
              {
                title: "គម្រោងពិតៗ",
                body: "គ្រប់មេរៀនបញ្ចប់ដោយគម្រោងដែលដំណើរការ ដែលអ្នកអាចបង្ហាញបាន មិនមែនពិន្ទុតេស្តទេ។",
              },
              {
                title: "មេរៀនខ្មែរ + អង់គ្លេស",
                body: "រៀនជាភាសាដែលអ្នកគិត ប្តូរបានគ្រប់ពេល។",
              },
              {
                title: "តាមដានវឌ្ឍនភាព",
                body: "អ្នកសិក្សា មាតាបិតា និងគ្រូ ឃើញវឌ្ឍនភាពភ្លាមៗ។",
              },
            ],
            audience:
              "ល្អបំផុតសម្រាប់អ្នកសិក្សាដោយខ្លួនឯងនៅផ្ទះ និងសាលារៀនដែលចង់បានកម្មវិធីសិក្សារ៉ូបូតិកត្រៀមរួច។",
          },
        },
        {
          tag: "កម្មវិធី",
          title: "សេវាកម្មផ្អែកលើគម្រោង",
          body: "កម្មវិធីអនុវត្តជាក់ស្តែង សិក្ខាសាលា និងការបង្កើតពិតៗ — ធ្វើជាមួយសាលារៀន សហគមន៍ និងអង្គការទូទាំងកម្ពុជា។",
          points: ["សិក្ខាសាលា", "កម្មវិធីសាលារៀន", "គម្រោងជាក់ស្តែង"],
          detail: {
            intro:
              "រឿងខ្លះមិនអាចរៀនពីអេក្រង់បានទេ។ ក្រុមរបស់យើងដឹកនាំកម្មវិធីអនុវត្តជាក់ស្តែង ដែលអ្នកសិក្សាបង្កើតរបស់ពិតជាមួយគ្នា — នៅសាលារៀន ព្រឹត្តិការណ៍សហគមន៍ និងជាមួយអង្គការដៃគូ។",
            features: [
              {
                title: "កម្មវិធីសាលារៀន",
                body: "កម្មវិធីរ៉ូបូតិកពេញឆមាស ផ្តល់ជូននៅសាលារបស់អ្នក ជាមួយឈុតឧបករណ៍ និងគ្រូបណ្តុះបណ្តាលរបស់យើង។",
              },
              {
                title: "សិក្ខាសាលា & វគ្គបណ្តុះបណ្តាល",
                body: "វគ្គខ្លីពីមួយថ្ងៃដល់មួយសប្តាហ៍ សម្រាប់សិស្ស គ្រូ ឬក្រុមការងារ។",
              },
              {
                title: "គម្រោងតាមតម្រូវការ",
                body: "គម្រោងវិស្វកម្មពិតៗ បង្កើតរួមជាមួយអ្នកសិក្សា — ពីគំរូកសិដ្ឋានឆ្លាតវៃ ដល់រ៉ូបូតប្រកួត។",
              },
              {
                title: "ព្រឹត្តិការណ៍សហគមន៍",
                body: "ថ្ងៃច្នៃប្រឌិត និងការតាំងបង្ហាញ ដែលនាំគ្រួសារ និងសាលារៀនចូលមន្ទីរពិសោធន៍។",
              },
            ],
            audience:
              "ល្អបំផុតសម្រាប់សាលារៀន អង្គការ និងក្រុមហ៊ុនដែលចង់បានកម្មវិធី STEM អនុវត្តជាក់ស្តែង ជាមួយលទ្ធផលវាស់វែងបាន។",
          },
        },
        {
          tag: "ស្រាវជ្រាវ",
          title: "ស្រាវជ្រាវ និងអភិវឌ្ឍន៍",
          body: "យើងស្រាវជ្រាវ និងបង្កើតគំរូឧបករណ៍ថ្មីៗសម្រាប់ការអប់រំបច្ចេកវិទ្យា ដើម្បីជំរុញអ្វីដែលអាចធ្វើទៅបានសម្រាប់អ្នកបង្កើតជំនាន់ក្រោយ។",
          points: ["ឧបករណ៍សិក្សាថ្មី", "គំរូដើម", "ការរុករកបើកចំហ"],
          detail: {
            intro:
              "R&D គឺជារបៀបដែល ByteLab នៅមុខតម្រូវការថ្នាក់រៀនកម្ពុជា។ យើងបង្កើតគំរូឈុតថ្មី សាកល្បងវិធីបង្រៀនថ្មី និងស្វែងយល់ការផលិតក្នុងស្រុក ដើម្បីឱ្យការអប់រំបច្ចេកវិទ្យាកាន់តែថោក និងកាន់តែល្អ។",
            features: [
              {
                title: "គំរូឈុតថ្មី",
                body: "ឈុតជំនាន់ក្រោយ រចនាតាមមតិកែលម្អពីថ្នាក់រៀនពិត។",
              },
              {
                title: "ស្រាវជ្រាវឧបករណ៍សិក្សា",
                body: "យើងសិក្សាពីរបៀបដែលសិស្សកម្ពុជារៀនបានល្អបំផុត ហើយរចនាឧបករណ៍ឱ្យសម។",
              },
              {
                title: "ការផលិតក្នុងស្រុក",
                body: "ស្វែងយល់គ្រឿងបន្លាស់ផលិតក្នុងស្រុក ដើម្បីកាត់បន្ថយថ្លៃ និងកសាងសមត្ថភាពក្នុងស្រុក។",
              },
              {
                title: "កិច្ចសហការបើកចំហ",
                body: "យើងសហការជាមួយសាកលវិទ្យាល័យ និងអ្នកបង្កើត — នាំបញ្ហាពិបាកមកយើង។",
              },
            ],
            audience:
              "ល្អបំផុតសម្រាប់សាកលវិទ្យាល័យ ដៃគូ និងម្ចាស់ជំនួយ ដែលចង់រួមកសាងអនាគតនៃការអប់រំ STEM នៅកម្ពុជា។",
          },
        },
      ],
      backToServices: "សេវាកម្មទាំងអស់",
    },
    whyUs: {
      eyebrow: "ហេតុអ្វី ByteLab",
      title: "ហេតុអ្វីជ្រើសរើសយើង",
      reasons: [
        {
          title: "បង្កើតសម្រាប់កម្ពុជា",
          body: "ឈុតតម្លៃសមរម្យ ការគាំទ្រភាសាខ្មែរ និងខ្លឹមសាររចនាសម្រាប់ថ្នាក់រៀនក្នុងស្រុក — មិនមែននាំចូលបែបមួយសមគ្រប់គ្នាទេ។",
        },
        {
          title: "អនុវត្តជាក់ស្តែងជាមុន",
          body: "គ្រប់មេរៀនបញ្ចប់ដោយអ្វីដែលធ្វើចលនា ភ្លឺ ឬបើកបរ។ អ្នកសិក្សាចងចាំអ្វីដែលពួកគេបង្កើត។",
        },
        {
          title: "ប្រព័ន្ធពេញលេញមួយ",
          body: "ហាដវែរ វេទិកាសិក្សា កម្មវិធី និងស្រាវជ្រាវ ក្រោមដំបូលតែមួយ — ផ្នែកនីមួយៗធ្វើឱ្យផ្នែកផ្សេងកាន់តែល្អ។",
        },
        {
          title: "ងាយស្រួលសម្រាប់គ្រូ",
          body: "ការបណ្តុះបណ្តាលគ្រូ ការគាំទ្រកម្មវិធីសិក្សា និងកញ្ចប់ថ្នាក់រៀន ដើម្បីឱ្យសាលាណាក៏អាចដំណើរការរ៉ូបូតិកដោយទំនុកចិត្ត។",
        },
      ],
    },
    impact: {
      eyebrow: "ផលប៉ះពាល់",
      title: "ផលប៉ះពាល់របស់ ByteLab",
      stats: [
        { value: 100, suffix: "+", label: "សិស្សបានរៀន" },
        { value: 5, suffix: "+", label: "សាលាដៃគូ" },
        { value: 5, suffix: "+", label: "សិក្ខាសាលា" },
        { value: 100, suffix: "+", label: "ឈុតក្នុងថ្នាក់រៀន" },
      ],
    },
    achievements: {
      eyebrow: "ចំណុចសំខាន់",
      title: "សមិទ្ធផល",
      items: [
        {
          year: "2023",
          title: "បង្កើត ByteLab",
          body: "ចាប់ផ្តើមជាគម្រោងសាលារៀនដោយសមាជិកក្រុម ៨ នាក់ ហើយបានពង្រីកបន្តិចម្តងៗ ក្លាយជាស្ថាប័នអាជីវកម្មដូចសព្វថ្ងៃ។",
        },
        {
          year: "2023",
          title: "MRC 2023: ជើងឯកលេខ ១",
          body: "ឈ្នះចំណាត់ថ្នាក់លេខ ១ ដោយតំណាងក្រុមកម្ពុជា។",
        },
        {
          year: "2024",
          title: "បើកដំណើរការរ៉ូបូតដំបូង",
          body: "បើកដំណើរការរ៉ូបូតដំបូងរបស់យើងនៅសាលា Toutes à l'école (Happy Chandara School)។",
        },
        {
          year: "2026",
          title: "ACTSmart Cohort 2: ចំណាត់ថ្នាក់លេខ ២",
          body: "ទទួលបានចំណាត់ថ្នាក់លេខ ២ ក្នុងកម្មវិធី ACTSmart Cohort 2។",
        },
        // {
        //   year: "2026",
        //   title: "ACIR+ Program Incubation: រង្វាន់លេខ ២",
        //   body: "ឈ្នះរង្វាន់លេខ ២ ក្នុងកម្មវិធី ACIR+ Program Incubation of Start-Ups and Innovation នៅសាកលវិទ្យាល័យ VKU ទីក្រុងដាណាំង ប្រទេសវៀតណាម។",
        // },
        {
          year: "កំពុងបន្ត",
          title: "គម្រោងដ្រូនកសិកម្ម",
          body: "កសាងបច្ចេកវិទ្យាដ្រូនដើម្បីគាំទ្រវិស័យកសិកម្មកម្ពុជា។",
        },
      ],
    },
    about: {
      teaser: {
        eyebrow: "ពីក្រោយមន្ទីរពិសោធន៍",
        title: "មនុស្ស និងរឿងរ៉ាវនៅពីក្រោយ ByteLab",
        body: "ជួបអ្នកបង្កើតទាំង ៨ នាក់ដែលកសាង ByteLab និងចំណុចសំខាន់ៗតាមផ្លូវ។",
        cta: "អំពីយើង",
      },
      hero: {
        eyebrow: "អំពី ByteLab",
        title: "មនុស្ស និងដំណើរនៅពីក្រោយ ByteLab",
        body: "យើងជាក្រុមតូចមួយនៅភ្នំពេញ កំពុងកសាងការអប់រំរ៉ូបូតិកដែលយើងធ្លាប់ចង់បាន — ហើយយើងទើបតែចាប់ផ្តើម។",
      },
    },
    team: {
      eyebrow: "ក្រុមការងារ",
      title: "ជួបអ្នកបង្កើតទាំង ៨ នាក់នៅពីក្រោយ ByteLab",
      intro:
        "វិស្វករ អ្នកអប់រំ និងអ្នកបង្កើត — ទាំងអស់នៅភ្នំពេញ ទាំងអស់ចូលចិត្តអ្វីដែលអ្នកសិក្សាអាចបង្កើតបាន។",
      members: [
        {
          name: "Chhoeun Reaksa",
          role: "នាយកអភិវឌ្ឍន៍ផលិតផល",
          description:
            "ដឹកនាំចក្ខុវិស័យសម្រាប់ផលិតផលអប់រំរបស់យើង និងធានាថាវាឈានដល់ស្តង់ដារអន្តរជាតិ។",
          expertise: ["យុទ្ធសាស្ត្រផលិតផល", "ភាពជាអ្នកដឹកនាំ", "ការអប់រំ"],
        },
        {
          name: "Pun Solita",
          role: "នាយកទំនាក់ទំនង",
          description:
            "គ្រប់គ្រងទំនាក់ទំនងផ្ទៃក្នុង និងខាងក្រៅ ដើម្បីកសាងសហគមន៍រឹងមាំជុំវិញ Byte Lab។",
          expertise: ["ទំនាក់ទំនង", "ហិរញ្ញវត្ថុ", "ទំនាក់ទំនងសាធារណៈ"],
        },
        {
          name: "Meng Oudom",
          role: "នាយកប្រតិបត្តិការ និងឡូជីស្ទិក",
          description:
            "ត្រួតពិនិត្យប្រតិបត្តិការប្រចាំថ្ងៃ និងដឹកនាំគំនិតផ្តួចផ្តើមអភិវឌ្ឍន៍សូហ្វវែរ។",
          expertise: ["ប្រតិបត្តិការ", "អភិវឌ្ឍន៍សូហ្វវែរ", "ឡូជីស្ទិក"],
        },
        {
          name: "Gnep Vandara",
          role: "អ្នកឯកទេសផ្នែកលក់ និងឡូជីស្ទិក",
          description:
            "ធានាថាឧបករណ៍របស់យើងទៅដល់សាលា និងសិស្សប្រកបដោយប្រសិទ្ធភាព ខណៈគ្រប់គ្រងដៃគូលក់។",
          expertise: ["ការលក់", "ឡូជីស្ទិក", "ទំនាក់ទំនងអតិថិជន"],
        },
        {
          name: "Hoy Seiha",
          role: "អ្នកវិភាគអាជីវកម្ម",
          description:
            "វិភាគនិន្នាការទីផ្សារ និងដំណើរការអាជីវកម្ម ដើម្បីជំរុញកំណើន និងនិរន្តរភាព។",
          expertise: ["ការវិភាគអាជីវកម្ម", "យុទ្ធសាស្ត្រ", "ស្រាវជ្រាវទីផ្សារ"],
        },
        {
          name: "Sophat Sophana",
          role: "វិស្វករសូហ្វវែររ៉ូបូតិក",
          description:
            "រចនា និងកែលម្អគ្រឿងអេឡិចត្រូនិកដែលផ្តល់ថាមពលដល់រ៉ូបូតរបស់យើង។",
          expertise: ["អេឡិចត្រូនិក", "រចនាសៀគ្វី", "បង្កើតគំរូ"],
        },
        {
          name: "Chheng Maraviraktep",
          role: "វិស្វករមេកានិក",
          description:
            "បង្កើតគ្រឿងមេកានិករឹងមាំ និងសមរម្យសម្រាប់កុមារ សម្រាប់ឧបករណ៍រ៉ូបូតរបស់យើង។",
          expertise: ["វិស្វកម្មមេកានិក", "រចនា 3D", "ផលិតកម្ម"],
        },
        {
          name: "Cheang Thornsopanha",
          role: "អ្នកអភិវឌ្ឍន៍វេប",
          description:
            "កសាងវេទិកាឌីជីថលរបស់យើង ដើម្បីគាំទ្រសិស្ស និងគ្រូតាមអ៊ីនធឺណិត។",
          expertise: ["អភិវឌ្ឍន៍វេប", "UI/UX", "React"],
        },
      ],
    },
    testimonials: {
      eyebrow: "សក្ខីកម្ម",
      title: "អ្វីដែលគេនិយាយ",
      quotes: [
        {
          quote:
            "ឥឡូវខ្ញុំអាចសង់រថយន្តរ៉ូបូតដោយខ្លួនឯងបានហើយ! អរគុណដល់គ្រូបង្វឹកសម្រាប់ការណែនាំ — បើគ្មានពួកគាត់ ខ្ញុំមិនអាចមកដល់ថ្ងៃនេះបានទេ។",
          name: "សក្ខីកម្មសិស្ស",
          role: "វិទ្យាល័យ AUPP",
        },
        {
          quote:
            "ថ្នាក់រ៉ូបូតិកជាផ្នែកដែលខ្ញុំចូលចិត្តបំផុតក្នុងសប្តាហ៍។ ខ្ញុំសង់រ៉ូបូតដើរតាមបន្ទាត់ដោយខ្លួនឯង!",
          name: "សក្ខីកម្មសិស្ស",
          role: "Lycée Français René Descartes",
        },
        {
          quote:
            "រៀនជាមួយ ByteLab សប្បាយណាស់ — ខ្ញុំនិងមិត្តភក្តិទន្ទឹងរង់ចាំវគ្គបន្ទាប់។",
          name: "សក្ខីកម្មសិស្ស",
          role: "Lycée Français René Descartes",
        },
      ],
    },
    faq: {
      eyebrow: "សំណួរ-ចម្លើយ",
      title: "សំណួរដែលសួរញឹកញាប់",
      items: [
        {
          q: "តើនរណាអាចចូលរួមកម្មវិធី ByteLab បាន?",
          a: "អ្នកចង់ដឹងគ្រប់គ្នា — យើងរចនាសម្រាប់អ្នកសិក្សាអាយុប្រហែល ១០ឆ្នាំឡើង ហើយមានផ្លូវដាច់ដោយឡែកសម្រាប់សិស្ស គ្រូ និងមនុស្សពេញវ័យ។ មិនត្រូវការបទពិសោធន៍ពីមុនទេ។",
        },
        {
          q: "តើខ្ញុំត្រូវការបទពិសោធន៍កូដ ឬអេឡិចត្រូនិកទេ?",
          a: "ទេ។ ឈុតរបស់យើងចាប់ផ្តើមជាមួយហាដវែរ plug & play និងកូដបែបប្លុក។ អ្នកមានបទពិសោធន៍អាចរំលងទៅកូដពិត។",
        },
        {
          q: "តើឈុតរថយន្តរ៉ូបូតតម្លៃប៉ុន្មាន?",
          a: "[កន្លែងដាក់តម្លៃ — បន្ថែមតម្លៃឈុតពិត និងតម្លៃកញ្ចប់ថ្នាក់រៀននៅទីនេះ។]",
        },
        {
          q: "តើមេរៀនមានជាភាសាខ្មែរទេ?",
          a: "មាន — វេទិកា និងសិក្ខាសាលារបស់យើងមានពីរភាសា (ខ្មែរ និងអង់គ្លេស) ហើយអ្នកអាចប្តូរបានគ្រប់ពេល។",
        },
        {
          q: "តើសាលារបស់ខ្ញុំចាប់ផ្តើមកម្មវិធីយ៉ាងដូចម្តេច?",
          a: "ទាក់ទងមកយើង ហើយយើងនឹងរៀបចំជាមួយគ្នា — សាលាភាគច្រើនចាប់ផ្តើមដោយសិក្ខាសាលាមួយថ្ងៃ បន្ទាប់មករីកទៅជាកម្មវិធីពេញឆមាស។",
        },
        {
          q: "តើក្រុមហ៊ុន ឬអង្គការអាចធ្វើជាដៃគូជាមួយ ByteLab បានទេ?",
          a: "ប្រាកដណាស់។ ដៃគូឧបត្ថម្ភកម្មវិធី សហការបង្កើតគម្រោង ឬនាំ ByteLab ទៅសហគមន៍របស់ពួកគេ។ ប្រាប់យើងពីផលប៉ះពាល់ដែលអ្នកចង់បង្កើត។",
        },
      ],
    },
    forYou: {
      eyebrow: "សម្រាប់អ្នក",
      title: "មន្ទីរពិសោធន៍មួយ ផ្លូវចូលបួន",
      audiences: [
        {
          label: "សិស្ស",
          title: "បង្កើតរបស់ដែលអាចធ្វើចលនាបានពិតៗ",
          body: "ចាប់ផ្តើមពីសូន្យ ហើយបញ្ចប់ដោយរ៉ូបូតដែលអ្នកសរសេរកូដដោយខ្លួនឯង។",
        },
        {
          label: "មាតាបិតា",
          title: "ការចាប់ផ្តើមមុនគេ ដែលមានសុវត្ថិភាព",
          body: "ការសិក្សាមានការណែនាំ សមស្របតាមអាយុ បង្កើនជំនាញ STEM ទំនុកចិត្ត និងភាពច្នៃប្រឌិត។",
        },
        {
          label: "សាលារៀន",
          title: "រ៉ូបូតិកសម្រាប់ថ្នាក់រៀនរបស់អ្នក",
          body: "ឈុតឧបករណ៍ត្រៀមបង្រៀន ការគាំទ្រកម្មវិធីសិក្សា និងការបណ្តុះបណ្តាល។",
        },
        {
          label: "ដៃគូ",
          title: "អភិវឌ្ឍទេពកោសល្យបច្ចេកវិទ្យាកម្ពុជាជាមួយយើង",
          body: "ឧបត្ថម្ភកម្មវិធី សហការបង្កើតគម្រោង ឬនាំ ByteLab ទៅសហគមន៍របស់អ្នក។",
        },
      ],
    },
    partners: {
      eyebrow: "ទទួលបានទំនុកចិត្តពី",
      line: "ធ្វើការជាមួយសាលារៀន សហគមន៍ និងដៃគូទូទាំងកម្ពុជា។",
      placeholder: "[partner logos here]",
    },
    contact: {
      eyebrow: "ទំនាក់ទំនង",
      title: "តោះបង្កើតអ្វីមួយជាមួយគ្នា",
      body: "សិស្ស មាតាបិតា សាលារៀន ឬដៃគូ — ប្រាប់យើងថាអ្នកជានរណា ហើយយើងនឹងបន្តពីទីនោះ។",
      form: {
        name: "ឈ្មោះរបស់អ្នក",
        email: "អាសយដ្ឋានអ៊ីមែល",
        message: "តើអ្នកចង់បង្កើត ឬសួរអ្វី?",
        submit: "ផ្ញើសារ",
        sent: "សាររបស់អ្នកបានផ្ញើហើយ — យើងខ្ញុំនឹងឆ្លើយតបទៅអ្នកឆាប់ៗនេះ!",
      },
      details: {
        emailLabel: "អ៊ីមែល",
        email: "info@bytelabkh.com",
        phoneLabel: "ទូរស័ព្ទ",
        phone: "+855 93 554 082",
        locationLabel: "ទីតាំង",
        location: "ភ្នំពេញ កម្ពុជា",
        socialLabel: "តាមដានយើង",
      },
    },
    footer: {
      blurb: "ការអប់រំរ៉ូបូតិកសម្រាប់អ្នកច្នៃប្រឌិតជំនាន់ក្រោយរបស់កម្ពុជា។",
      quickLinks: "តំណភ្ជាប់រហ័ស",
      social: "បណ្តាញសង្គម",
      copyright: `© ${new Date().getFullYear()} ByteLab. រក្សាសិទ្ធិគ្រប់យ៉ាង។`,
    },
  },
} as const;

export type Strings = (typeof strings)["en"];
