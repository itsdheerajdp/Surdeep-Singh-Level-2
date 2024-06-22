# Job Application Form - Level 2

This project is a job application form with dynamic fields and validation, built using React functional components and hooks. The form collects applicant information and displays a summary of the entered data upon submission.

## Table of Contents

- [Demo](#demo)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)

## Demo

You can interact with the form hosted on [Netlify](https://level2-dheeraj.netlify.app/).

## Features

- **Form Fields:**
  - Full Name (Text)
  - Email (Email)
  - Phone Number (Text)
  - Applying for Position (Dropdown: Developer, Designer, Manager)
  - Relevant Experience (Number, visible for Developer and Designer)
  - Portfolio URL (Text, visible for Designer)
  - Management Experience (Text, visible for Manager)
  - Additional Skills (Checkboxes: JavaScript, CSS, Python)
  - Preferred Interview Time (Datetime-local)

- **Conditional Logic:**
  - Show the "Relevant Experience" field only if applying for Developer or Designer.
  - Show the "Portfolio URL" field only if applying for Designer.
  - Show the "Management Experience" field only if applying for Manager.

- **Validation:**
  - Full Name: Required
  - Email: Required and must be a valid email format
  - Phone Number: Required and must be a valid number
  - Relevant Experience: Required and must be a number greater than 0 (for Developer and Designer)
  - Portfolio URL: Required and must be a valid URL (for Designer)
  - Management Experience: Required (for Manager)
  - Additional Skills: At least one skill must be selected
  - Preferred Interview Time: Required

- **Submission:**
  - On form submission, display a summary of the entered data.

## Technologies Used

- React
- JavaScript
- HTML
- CSS

## Getting Started

Follow these instructions to set up the project locally.

### Prerequisites

- Node.js (v12 or later)
- npm (v6 or later) or yarn (v1.22 or later)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/itsdheerajdp/Surdeep-Singh-Level-2.git
   cd Surdeep-Singh-Level-2
   ```
2. Install the dependencies:
     ```bash
   npm install
   ```
   
### Usage

1. Start the development server:

   ```bash
   npm start
   ```
2. Open your browser and navigate to http://localhost:3000 to see the form.
