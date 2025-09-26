
## **Cogentalsyt Website Requirements Document**

### **1.0 Project Overview & Business Goals**

#### **1.1 Project Vision**
To create a modern, professional website for Cogentalsyt that serves as a primary tool for business development. The site will establish Cogentalsyt as a credible and technically proficient AI consulting firm, with a special focus on the financial services industry. A key feature will be interactive proofs-of-concept (POCs) of deployed AI models, starting with a Fannie Mae mortgage underwriting RAG model, to tangibly demonstrate the firm's capabilities.

#### **1.2 Primary Business Objectives**
1.  **Showcase Technical Expertise:** The website must effectively demonstrate Cogentalsyt's ability to build and deploy sophisticated, industry-specific AI solutions.
2.  **Generate Consulting Leads:** The website's ultimate goal is to convert visitors into qualified leads by encouraging them to make contact for more information or a consultation.

#### **1.3 Success Metrics**
1.  **User Engagement:** Measured by metrics such as time on page (especially on model demo and services pages), number of pages visited per session, and interaction rates with the model POCs.
2.  **Lead Generation:** Measured by the number of successful submissions through the "Contact Us" form or other calls-to-action requesting further information.

#### **1.4 Monetization Strategy**
Initially, all showcased models will be publicly accessible as free-to-use proofs-of-concept. The architecture should, however, allow for a future pivot to a metered or subscription-based access model if demand warrants it.

### **2.0 Target Audience**

#### **2.1 Primary Persona: Business Leaders**
*   **Industry:** Primarily financial services (e.g., banking, mortgage, investment firms).
*   **Role:** C-level executives, VPs, Directors, and other decision-makers responsible for technology, innovation, and strategic growth.
*   **Needs & Goals:** They are seeking expert guidance to develop a coherent AI strategy, solve specific business problems with AI, or get help with the practicalities of model development and deployment.
*   **Technical Proficiency:** They possess a foundational business-level understanding of AI concepts like LLMs and Generative AI but are not experts in the underlying technology. The content must be accessible, focusing on business value and outcomes rather than deep technical jargon.

### **3.0 Website Structure & Key Sections**

The website will be a single-page application (SPA) style for a smooth user experience but will have distinct, navigable sections.

*   **Home/Hero Section:**
    *   **Content:** A powerful, concise value proposition. (e.g., "Strategic AI for Financial Services. From Concept to Deployment.")
    *   **CTA:** A primary button leading to the AI model demos (e.g., "Explore Our Models").
*   **Services Section:**
    *   **Content:** A clear outline of Cogentalsyt's core offerings:
        1.  AI Strategy Consulting
        2.  Custom Model Development & Deployment
    *   **CTA:** "Learn More" or "Contact Us for a Consultation."
*   **Model Showcase: Fannie Mae RAG POC**
    *   **Content:**
        1.  **Introduction:** A non-technical overview of what Retrieval-Augmented Generation (RAG) is and its value.
        2.  **The Demo:** An explanation of the specific Fannie Mae use case. Describe the two interaction methods: a Q&A interface and a structured data analysis interface.
    *   **Functionality:**
        1.  A button for the "Question & Answer Demo."
        2.  A button for the "Loan Underwriting Analysis Demo."
        3.  Clicking either button will navigate the user to a dedicated page/view for that specific interactive demo.
*   **About Us Section:**
    *   **Content:** A brief company mission, the team's expertise, and what differentiates Cogentalsyt.
*   **Insights/Blog Section:**
    *   **Content:** Articles discussing relevant AI topics to establish thought leadership. Example topics include "Why AI Model Projects Fail," "Navigating AI in Regulated Industries," etc.
*   **Contact Us Section:**
    *   **Content:** A clear invitation to get in touch.
    *   **Functionality:** A simple contact form (Name, Email, Message) with clear validation and a success message upon submission.

### **4.0 Functional Requirements: AI Model Interaction**

This section details the user experience for the Fannie Mae RAG model showcase.

#### **4.1 Demo Page: Question & Answer**
*   **UI:** A clean, chat-like interface.
*   **Components:**
    *   An input field for the user to type their question (e.g., "What are the DTI requirements for conventional loans?").
    *   A "Submit" button.
    *   A display area for the API's response, which must clearly show both the generated "answer" and the "sources" (section_id, title, page_number) to demonstrate the RAG model's attribution capability.
    *   A loading indicator while waiting for the API response.
    *   Proper error handling for API timeouts or invalid requests.

#### **4.2 Demo Page: Loan Underwriting Analysis**
*   **UI:** A structured web form.
*   **Components:**
    *   Input fields for the required loan characteristics:
        *   Loan-to-Value (LTV) Ratio (numeric input)
        *   Debt-to-Income (DTI) Ratio (numeric input)
        *   Borrower Credit Score (numeric input)
    *   A "Analyze Loan" button.
    *   A display area for the API's response, breaking down the `loan_data`, `analysis`, and `requirements` (with sources) in a clear, readable format.
    *   A loading indicator and error handling.

### **5.0 Technical & Hosting Requirements**

#### **5.1 Hosting Platform: Vercel**
The website will be deployed and hosted on Vercel.

#### **5.2 Vercel Integration Recommendation**
*   **Framework:** Use a modern front-end framework like **Next.js** or **React**. Next.js is highly recommended as it integrates seamlessly with Vercel's platform.
*   **Cost-Effectiveness:** Vercel's free tier is very generous and should be sufficient for the expected low initial volume. It includes serverless function executions, which aligns with the low-cost requirement.
*   **Vercel Serverless Functions:** It is recommended to use Vercel's serverless functions to act as a secure proxy between the front-end website and the Fannie Mae RAG API. This prevents exposing the API endpoint directly to the client browser and allows for better control and potential future additions like API key management or logging. This approach is highly cost-effective as you only pay for compute time when the functions are executed.

### **6.0 Visual Design & Branding**

The design should be clean, professional, and tech-oriented to build credibility and trust.

*   **Visual Style:** Modern, minimalist, spacious, and sharp.
*   **Color Palette:**
    *   **Primary:** Dark charcoal (`#1A202C`).
    *   **Accent:** Vibrant blue (`#007BFF` or similar).
    *   **Neutral:** White (`#FFFFFF`) and light gray (`#F7FAFC`).
*   **Typography:**
    *   **Headings:** **Inter** (sans-serif).
    *   **Body Text:** **Inter** (sans-serif).
*   **UI Component Design:**
    *   **Header:** Cogentalsyt Logo, Navigation Links (Services, Model Demos, About, Insights, Contact).
    *   **Footer:** Copyright, social media links (if applicable), and a link to a simple Privacy Policy page.
    *   **Buttons:**
        *   *Primary CTA:* Solid accent color background with white text.
        *   *Secondary:* Outline style with accent color border and text.
        *   Clear hover and active states for all interactive elements.
    *   **Forms:** Clean input fields with clear labels, placeholder text, and intuitive validation messages for errors.

***

This document should serve as a comprehensive guide for the development of the Cogentalsyt website. The next step would be to move into wireframing and detailed UI design based on these requirements.