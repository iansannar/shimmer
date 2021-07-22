export default {
  "title": "Remedy",
  "tagline": "Free and simple table-top roleplaying game",
  "url": "https://iansannar.github.io",
  "baseUrl": "/",
  "onBrokenLinks": "throw",
  "onBrokenMarkdownLinks": "warn",
  "favicon": "img/favicon.ico",
  "organizationName": "iansannar",
  "projectName": "remedy",
  "themeConfig": {
    "navbar": {
      "title": "Remedy",
      "logo": {
        "alt": "Remedy RPG Logo",
        "src": "img/icon.svg"
      },
      "items": [],
      "hideOnScroll": false
    },
    "footer": {
      "style": "dark",
      "links": [
        {
          "title": "Documentation",
          "items": [
            {
              "label": "Get Involved",
              "to": "contributing"
            },
            {
              "label": "License",
              "to": "license"
            }
          ]
        },
        {
          "title": "Community",
          "items": [
            {
              "label": "Coming Soon",
              "href": "/"
            }
          ]
        },
        {
          "title": "More",
          "items": [
            {
              "label": "GitHub",
              "href": "https://github.com/iansannar/remedy"
            }
          ]
        }
      ],
      "copyright": "Copyright © 2021 Ian Sannar"
    },
    "colorMode": {
      "defaultMode": "light",
      "disableSwitch": false,
      "respectPrefersColorScheme": false,
      "switchConfig": {
        "darkIcon": "🌜",
        "darkIconStyle": {},
        "lightIcon": "🌞",
        "lightIconStyle": {}
      }
    },
    "docs": {
      "versionPersistence": "localStorage"
    },
    "metadatas": [],
    "prism": {
      "additionalLanguages": []
    },
    "hideableSidebar": false
  },
  "presets": [
    [
      "@docusaurus/preset-classic",
      {
        "docs": {
          "routeBasePath": "/",
          "sidebarPath": "C:\\Users\\Ian\\Documents\\repos\\remedy\\sidebars.js",
          "editUrl": "https://github.com/iansannar/remedy/edit/main/"
        },
        "theme": {
          "customCss": "C:\\Users\\Ian\\Documents\\repos\\remedy\\src\\css\\custom.css"
        }
      }
    ]
  ],
  "baseUrlIssueBanner": true,
  "i18n": {
    "defaultLocale": "en",
    "locales": [
      "en"
    ],
    "localeConfigs": {}
  },
  "onDuplicateRoutes": "warn",
  "customFields": {},
  "plugins": [],
  "themes": [],
  "titleDelimiter": "|",
  "noIndex": false
};