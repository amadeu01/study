// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/study/";
    },
  },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/study/blog/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "A growing collection of your cool projects.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/study/projects/";
          },
        },{id: "nav-repositories",
          title: "repositories",
          description: "Edit the `_data/repositories.yml` and change the `github_users` and `github_repos` lists to include your own GitHub profile and repositories.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/study/repositories/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/study/cv/";
          },
        },{id: "dropdown-bookshelf",
              title: "bookshelf",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/study/books/";
              },
            },{id: "dropdown-blog",
              title: "blog",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/study/blog/";
              },
            },{id: "post-aprofundamento-em-cetose-corpos-cetônicos-e-autofagia",
        
          title: "Aprofundamento em Cetose, Corpos Cetônicos e Autofagia",
        
        description: "Entender profundamente o metabolismo energético normal e cetogênico.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/study/blog/2025/mapa-cetose/";
          
        },
      },{id: "post-max-biohacking-cheatsheet-jejum",
        
          title: "Max Biohacking Cheatsheet Jejum",
        
        description: "Resumo de biohacking focado em jejum.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/study/blog/2025/max_biohacking_cheatsheet_jejum_4be609/";
          
        },
      },{id: "post-jejum",
        
          title: "Jejum",
        
        description: "Informações essenciais sobre o jejum.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/study/blog/2025/jejum_51ca27/";
          
        },
      },{id: "post-fitoterapia-jejum",
        
          title: "Fitoterapia Jejum",
        
        description: "Uso de fitoterapia para apoio ao jejum.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/study/blog/2025/fitoterapia_jejum_e4ac42/";
          
        },
      },{id: "post-fitoterapia-estudos",
        
          title: "Fitoterapia Estudos",
        
        description: "Estudos científicos sobre fitoterapia.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/study/blog/2025/fitoterapia_estudos_e2985a/";
          
        },
      },{id: "post-fitoterapia",
        
          title: "Fitoterapia",
        
        description: "Guia básico sobre fitoterapia.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/study/blog/2025/fitoterapia_5a712d/";
          
        },
      },{id: "post-cheatsheet-jejum",
        
          title: "Cheatsheet Jejum",
        
        description: "Guia rápido (cheatsheet) para práticas de jejum.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/study/blog/2025/cheatsheet_jejum_4ae7c0/";
          
        },
      },{id: "post-biohacking-jejum",
        
          title: "Biohacking Jejum",
        
        description: "Como o biohacking pode otimizar seu jejum.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/study/blog/2025/biohacking_jejum_6f0929/";
          
        },
      },{id: "post-google-gemini-updates-flash-1-5-gemma-2-and-project-astra",
        
          title: 'Google Gemini updates: Flash 1.5, Gemma 2 and Project Astra <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "We’re sharing updates across our Gemini family of models and a glimpse of Project Astra, our vision for the future of AI assistants.",
        section: "Posts",
        handler: () => {
          
            window.open("https://blog.google/technology/ai/google-gemini-update-flash-ai-assistant-io-2024/", "_blank");
          
        },
      },{id: "post-displaying-external-posts-on-your-al-folio-blog",
        
          title: 'Displaying External Posts on Your al-folio Blog <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@al-folio/displaying-external-posts-on-your-al-folio-blog-b60a1d241a0a?source=rss-17feae71c3c4------2", "_blank");
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/study/books/the_godfather/";
            },},{id: "news-a-simple-inline-announcement",
          title: 'A simple inline announcement.',
          description: "",
          section: "News",},{id: "news-a-long-announcement-with-details",
          title: 'A long announcement with details',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/study/news/announcement_2/";
            },},{id: "news-a-simple-inline-announcement-with-markdown-emoji-sparkles-smile",
          title: 'A simple inline announcement with Markdown emoji! :sparkles: :smile:',
          description: "",
          section: "News",},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%61%6D%61%64%65%75%30%31@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/amadeu01", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/study/feed.xml", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=qc6CJjYAAAAJ", "_blank");
        },
      },{
        id: 'social-telegram',
        title: 'telegram',
        section: 'Socials',
        handler: () => {
          window.open("https://telegram.me/amadeu11", "_blank");
        },
      },{
        id: 'social-custom_social',
        title: 'Custom_social',
        section: 'Socials',
        handler: () => {
          window.open("https://www.alberteinstein.com/", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
