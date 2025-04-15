### Instatillation Version


npm install -g @angular/cli@14



## Tech Stack

- Angular 14
- Angular Material
- CSS
- TypeScript
- Local Storage
- Bootstrap

---

## Getting Started

### Prerequisites

- Node.js & npm
- Angular CLI

### Installation

```bash
git clone https://github.com/rkishore1117/Dynamic-form.git
cd dynamic-form-builder
npm install
ng serve

Then open http://localhost:4200 in your browser.



📁 Project Structure

src/
|-- app/
|    |-- components/
|    |    |-- form-builder/
|    |    |    |-- form-builder.component.ts
|    |    |    |-- form-builder.component.html
|    |    |    |-- form-builder.component.css      
|    |    |    
|    |-- models/
|    |    |-- form-field.model.ts
|    |-- services/
|    |    |-- form-builder.service.ts
|    |-- app.module.ts
|-- assets/
|-- environments/
|-- index.html
|-- main.ts
|-- styles.css




💡 Features
✅ Dynamic Form Builder

Users can dynamically add form fields like:

Text Input

Textarea

Dropdown

Checkbox

Radio Button




✅ Field Configuration

Each field supports:

Custom Label

Placeholder

Validation (Required / Not Required)

Options for Dropdown and Radio (Comma separated input).




✅ Dynamic Form Rendering

The form preview is updated in real-time when fields are added or removed.

Validation is applied automatically according to the selected rules.





✅ Form Submission

On successful submission:

Logs the form data to the browser console.

Displays a success alert message.

Handles validation errors gracefully with alerts.



✅ Clean Code Structure


Components for UI separation

Services 

Models for strong typing and field structure.



🧠 Usage Overview
Add Fields

Select a field type.

Enter label, placeholder, and validation rules.

Add options for dropdown or radio types.

Form Preview

The fields appear in real-time.

Required fields are marked and enforced.

Submit Form

Click "Submit Form" — if valid:

Data is printed in the browser console.

Success message is shown.

If invalid, the app prompts you to complete missing fields.

📋 Evaluation Highlights

Criteria	Implementation
Functionality	✔️ Fully dynamic field creation and form rendering
Code Quality	✔️ Organized in components, services, models
Angular Proficiency	✔️ Uses Observables, Reactive Forms, Services
User Experience	✔️ Clean Angular Material UI, real-time updates
Error Handling	✔️ Validation errors, empty input checks



### sample output


![sampleoutput](https://github.com/rkishore1117/Dynamic-form/blob/537989103daf73a20d28b97581f0bcfa8bf95f92/sample%20output.png)
