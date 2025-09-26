
1. Website Wireframe
The wireframe focuses on layout, element placement, and user flow, intentionally omitting color and detailed styling.
1.1 Main Landing Page (Single-Scroll Layout)

+----------------------------------------------------------------------+
| [Cogentalsyt Logo]         [Services] [Model Demos] [About] [Contact] |
+----------------------------------------------------------------------+

+----------------------------------------------------------------------+
|                                                                      |
|                  <H1> Strategic AI for Financial Services.            |
|                  <p> From concept to deployment, we build AI          |
|                  solutions that drive business value.                 |
|                                                                      |
|                  +--------------------------+                        |
|                  |    Explore Our Models    |                        |
|                  +--------------------------+                        |
|                                                                      |
+----------------------------------------------------------------------+
|                            <H2> Our Services                         |
+------------------------------------+---------------------------------+
|      [Icon]                        |       [Icon]                    |
|      <H3> AI Strategy Consulting   |       <H3> Custom Model Dev.    |
|      <p> Short paragraph about     |       <p> Short paragraph about |
|      strategy services...          |       development services...   |
|                                    |                                 |
+------------------------------------+---------------------------------+

+----------------------------------------------------------------------+
|                    <H2> Interactive Model Showcase                   |
| <p> Intro to RAG and explanation of the demo's purpose.              |
+------------------------------------+---------------------------------+
|                                    |                                 |
| <H3> Question & Answer Demo        | <H3> Loan Underwriting Analysis |
| <p> Ask freeform questions about   | <p> Analyze a loan scenario     |
| Fannie Mae guidelines.             | against underwriting rules.     |
|                                    |                                 |
| +------------------+               | +------------------+            |
| |   Launch Demo    |               | |   Launch Demo    |            |
| +------------------+               | +------------------+            |
|                                    |                                 |
+------------------------------------+---------------------------------+

+----------------------------------------------------------------------+
|                            <H2> About Us                             |
|                                                                      |
| <p> Paragraph about Cogentalsyt's mission, expertise, and team.      |
| Maybe a small team photo or abstract graphic on the side.            |
|                                                                      |
+----------------------------------------------------------------------+

+----------------------------------------------------------------------+
|                            <H2> Contact Us                           |
+------------------------------------+---------------------------------+
| <p> Ready to build your AI         | [ Full Name (Input)      ]      |
| strategy? Let's talk.              | [ Email Address (Input)    ]      |
|                                    | [ Message (Text Area)    ]      |
|                                    | +--------------------------+    |
|                                    | |     Submit Message       |    |
|                                    | +--------------------------+    |
+------------------------------------+---------------------------------+

+----------------------------------------------------------------------+
| [Logo]          [Links Column 1]   [Links Column 2]    [Social Icons]|
| <p> Copyright   [About]            [Services]                        |
|                 [Contact]          [Model Demos]                     |
+----------------------------------------------------------------------+

1.2 Model Demo Pages
These would be separate pages/views linked from the "Launch Demo" buttons.
Question & Answer Demo Wireframe:

+----------------------------------------------------------------------+
| <H2> Fannie Mae - Question & Answer                                  |
+----------------------------------------------------------------------+
|                                                                      |
| [Display area for conversation history]                              |
|   You: What are the DTI requirements?                                |
|   AI: [API Answer shows here...]                                     |
|       Sources:                                                       |
|       - [B3-6-02] Debt-to-Income Ratios                              |
|                                                                      |
+----------------------------------------------------------------------+
| [ Type your question here... (Input)                      ] [Send]   |
+----------------------------------------------------------------------+

Loan Underwriting Analysis Demo Wireframe:

+----------------------------------------------------------------------+
| <H2> Fannie Mae - Loan Underwriting Analysis                         |
+------------------------------------+---------------------------------+
| <H3> Enter Loan Data              | <H3> Analysis Results           |
|                                    |                                 |
| [ LTV (%) (Input)          ]      | <p> Analysis:                   |
| [ DTI (%) (Input)          ]      |     [API analysis text here...] |
| [ Credit Score (Input)     ]      |                                 |
|                                    | <p> Requirements:               |
| +--------------------------+       |     - [Req 1] Source: [B3-6-02] |
| |      Analyze Loan        |       |     - [Req 2] Source: [...]     |
| +--------------------------+       |                                 |
|                                    |                                 |
+------------------------------------+---------------------------------+

Detailed UI Design
This section applies the specified visual style to the wireframe.
2.1 General Style
Typography: Inter font used throughout.
H1: 60px, Bold, White (#FFFFFF)
H2: 48px, Semi-Bold, Dark Charcoal (#1A202C)
H3: 24px, Semi-Bold, Dark Charcoal (#1A202C)
Body Text: 18px, Regular, a slightly lighter charcoal for readability (#4A5568).
Spacing: Generous use of white space. Sections will have significant top and bottom padding (e.g., 96px) to feel distinct and uncluttered.
Buttons:
Primary CTA: Solid vibrant blue (#007BFF) background, white text, slightly rounded corners (e.g., 8px). On hover, it gets slightly brighter and gains a subtle drop-shadow.
Secondary CTA: Transparent background with a 1px vibrant blue (#007BFF) border and blue text. On hover, the background fills with a very light blue.
2.2 Section-Specific Design
Header & Hero Section:
The header is semi-transparent and sits over the hero section.
The hero section has a dark charcoal (#1A202C) background. A subtle, abstract background graphic (like faint network lines or data points) adds a tech feel without being distracting.
The H1 text is centered and prominent. The primary CTA button is directly below it.
Services Section:
This section has a light gray (#F7FAFC) background to contrast with the dark hero.
The two service offerings are presented in cards with white backgrounds and a very subtle box-shadow to make them "lift" off the page. The icons above the H3 titles are rendered in the accent blue color.
Model Showcase Section:
White background. The intro text is centered.
The two demo options are presented in cards, similar to the services section. Each card contains the H3 title, a short descriptive paragraph, and a large, primary-style "Launch Demo" button to emphasize this is the key interactive part of the site.
Contact Section:
Light gray (#F7FAFC) background.
The form inputs are clean and minimalist: light gray backgrounds, thin border that turns blue on focus. Labels are placed above the inputs. The "Submit" button is a full-width primary CTA.
Footer:
Dark charcoal (#1A202C) background. Text is a light gray for readability.
2.3 Model Demo Page UI Design
Question & Answer Demo Page:
Layout: Clean, centered content area with a maximum width to ensure readability.
Chat Display: User messages are in a simple gray bubble aligned to the right. The AI's response is in a white bubble aligned to the left.
Response Formatting: The answer text is displayed as normal paragraph text. The sources are formatted as a bulleted list below the answer, with each source being a clickable link (if we wanted to link to the actual Fannie Mae guide, for example). The Section ID (B3-6-02) is bolded.
Input Bar: A fixed bar at the bottom of the viewport. The text input has a clean, borderless look, and the "Send" button is an icon (e.g., a paper plane) in the accent blue.
Loan Underwriting Analysis Demo Page:
Layout: A two-column grid. The left column contains the input form, and the right column is for results.
Form: Very clean and simple. Each input has a clear label above it. The "Analyze Loan" button is prominent below the last input field.
Results Display:
This area is initially empty or shows a prompt like "Your analysis will appear here."
Upon a successful API call, the area is populated. The analysis text is displayed under a bolded "Analysis Summary" heading.
The requirements are displayed as a list of cards. Each card has a title (the requirement text) and a subtitle showing the source (e.g., "Source: FNMA Selling Guide, Section B3-6-02"). This makes the structured data easy to digest.
A loading spinner is shown in the results column while the API call is in progress. Error messages are displayed in a clear, user-friendly manner (e.g., "An error occurred. Please try again.").