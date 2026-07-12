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
          points: ["Robotics & IoT lessons", "Guided projects", "Learn anywhere"],
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
      line: "Numbers below are placeholders — [update with real figures].",
      stats: [
        { value: 1200, suffix: "+", label: "Students taught" },
        { value: 25, suffix: "+", label: "Partner schools" },
        { value: 80, suffix: "+", label: "Workshops run" },
        { value: 500, suffix: "+", label: "Kits in classrooms" },
      ],
    },
    achievements: {
      eyebrow: "Milestones",
      title: "Achievements",
      items: [
        {
          year: "[2023]",
          title: "[ByteLab founded]",
          body: "[Short line about how ByteLab started — replace with the real story.]",
        },
        {
          year: "[2024]",
          title: "[First robot car kit launched]",
          body: "[Milestone description — e.g. first production run, first classroom pilot.]",
        },
        {
          year: "[2024]",
          title: "[National STEM festival]",
          body: "[Award, exhibition, or competition result goes here.]",
        },
        {
          year: "[2025]",
          title: "[Major partnership signed]",
          body: "[Partnership or expansion milestone goes here.]",
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
      // [TODO: real names, roles, and photos]
      members: [
        { name: "[Member name]", role: "[Co-Founder & CEO]" },
        { name: "[Member name]", role: "[Co-Founder & CTO]" },
        { name: "[Member name]", role: "[Hardware Lead]" },
        { name: "[Member name]", role: "[Curriculum Lead]" },
        { name: "[Member name]", role: "[Software Engineer]" },
        { name: "[Member name]", role: "[Education Outreach]" },
        { name: "[Member name]", role: "[Community Manager]" },
        { name: "[Member name]", role: "[Industrial Designer]" },
      ],
    },
    testimonials: {
      eyebrow: "Testimonials",
      title: "What people say",
      quotes: [
        {
          quote:
            "[Placeholder quote — e.g. \"My daughter built her first robot in one afternoon and hasn't stopped talking about it since.\"]",
          name: "[Parent name]",
          role: "Parent",
        },
        {
          quote:
            "[Placeholder quote — e.g. \"ByteLab made it possible for our school to run a robotics program with zero prior experience.\"]",
          name: "[Director name]",
          role: "School director",
        },
        {
          quote:
            "[Placeholder quote — e.g. \"I thought coding was for other people. Now my robot follows lines I drew myself.\"]",
          name: "[Student name]",
          role: "Student, 14",
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
          points: ["ងាយសម្រាប់អ្នកចាប់ផ្តើម", "តម្លៃសមរម្យ", "ត្រៀមសម្រាប់ថ្នាក់រៀន"],
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
      line: "តួលេខខាងក្រោមជាកន្លែងដាក់បណ្តោះអាសន្ន — [ធ្វើបច្ចុប្បន្នភាពជាមួយតួលេខពិត]។",
      stats: [
        { value: 1200, suffix: "+", label: "សិស្សបានរៀន" },
        { value: 25, suffix: "+", label: "សាលាដៃគូ" },
        { value: 80, suffix: "+", label: "សិក្ខាសាលា" },
        { value: 500, suffix: "+", label: "ឈុតក្នុងថ្នាក់រៀន" },
      ],
    },
    achievements: {
      eyebrow: "ចំណុចសំខាន់",
      title: "សមិទ្ធផល",
      items: [
        {
          year: "[2023]",
          title: "[បង្កើត ByteLab]",
          body: "[ប្រវត្តិខ្លីអំពីការចាប់ផ្តើមរបស់ ByteLab — ជំនួសដោយរឿងពិត។]",
        },
        {
          year: "[2024]",
          title: "[បើកដំណើរការឈុតរថយន្តរ៉ូបូតដំបូង]",
          body: "[ការពិពណ៌នាចំណុចសំខាន់ — ឧ. ការផលិតដំបូង ការសាកល្បងថ្នាក់រៀនដំបូង។]",
        },
        {
          year: "[2024]",
          title: "[មហោស្រព STEM ជាតិ]",
          body: "[រង្វាន់ ការតាំងបង្ហាញ ឬលទ្ធផលប្រកួតនៅទីនេះ។]",
        },
        {
          year: "[2025]",
          title: "[ចុះហត្ថលេខាភាពជាដៃគូសំខាន់]",
          body: "[ចំណុចសំខាន់នៃភាពជាដៃគូ ឬការពង្រីកនៅទីនេះ។]",
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
        { name: "[ឈ្មោះសមាជិក]", role: "[សហស្ថាបនិក & CEO]" },
        { name: "[ឈ្មោះសមាជិក]", role: "[សហស្ថាបនិក & CTO]" },
        { name: "[ឈ្មោះសមាជិក]", role: "[ប្រធានហាដវែរ]" },
        { name: "[ឈ្មោះសមាជិក]", role: "[ប្រធានកម្មវិធីសិក្សា]" },
        { name: "[ឈ្មោះសមាជិក]", role: "[វិស្វករសូហ្វវែរ]" },
        { name: "[ឈ្មោះសមាជិក]", role: "[ផ្សព្វផ្សាយអប់រំ]" },
        { name: "[ឈ្មោះសមាជិក]", role: "[អ្នកគ្រប់គ្រងសហគមន៍]" },
        { name: "[ឈ្មោះសមាជិក]", role: "[អ្នករចនាឧស្សាហកម្ម]" },
      ],
    },
    testimonials: {
      eyebrow: "សក្ខីកម្ម",
      title: "អ្វីដែលគេនិយាយ",
      quotes: [
        {
          quote: "[សម្រង់បណ្តោះអាសន្ន — ជំនួសដោយសក្ខីកម្មពិតពីមាតាបិតា។]",
          name: "[ឈ្មោះមាតាបិតា]",
          role: "មាតាបិតា",
        },
        {
          quote: "[សម្រង់បណ្តោះអាសន្ន — ជំនួសដោយសក្ខីកម្មពិតពីនាយកសាលា។]",
          name: "[ឈ្មោះនាយក]",
          role: "នាយកសាលា",
        },
        {
          quote: "[សម្រង់បណ្តោះអាសន្ន — ជំនួសដោយសក្ខីកម្មពិតពីសិស្ស។]",
          name: "[ឈ្មោះសិស្ស]",
          role: "សិស្ស អាយុ ១៤",
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
        email: "[email]",
        phoneLabel: "ទូរស័ព្ទ",
        phone: "[phone]",
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
