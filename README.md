# BMI Calculator

A simple web-based BMI (Body Mass Index) calculator built using HTML, Tailwind CSS, and vanilla JavaScript. This is a mini project done to practice DOM manipulation, form handling, and conditional logic.

## About

This project takes a user's weight and height as input and calculates their BMI, then displays the result along with the BMI category (Underweight, Normal, Overweight, Obese), with different text colors for each category.

## Tech Used

- **HTML5** — page structure and form
- **Tailwind CSS (CDN)** — styling, including responsive design (`sm:`, `md:` breakpoints)
- **JavaScript (vanilla)** — logic and DOM manipulation

## Files

```
├── index.html        # Page layout and form
└── studentjava.js    # BMI calculation logic
```

## How It Works

1. User enters weight (kg) and height (m) in the input fields.
2. On clicking "Calculate", the `register()` function runs:
   - Stops the default form submission (`event.preventDefault()`)
   - Reads and converts the input values to numbers
   - Checks if the values are valid (greater than 0)
   - Calculates BMI using the formula:

     ```
     BMI = weight / (height * height)
     ```

   - Displays the result with the correct category and color based on the BMI value (e.g. "You are Underweight. BMI is 17.50")

The layout is responsive — the form, text sizes, and inputs adjust for mobile, tablet, and desktop screens using Tailwind's `sm:` and `md:` breakpoints, and `w-full` / `max-w-lg` for flexible width.

## BMI Formula Reference

| Category    | BMI Range   |
|-------------|-------------|
| Underweight | ≤ 18.5      |
| Normal      | 18.5 – 25   |
| Overweight  | 25 – 30     |
| Obese       | > 30        |

## How to Run

No installation needed since it's plain HTML/JS.

1. Download/clone the files.
2. Open `index.html` in any browser.

## What I Learned

- Handling form submission with `event.preventDefault()`
- Reading input values using `document.getElementById()`
- Basic input validation
- Using `classList.add()` / `classList.remove()` to change styling dynamically
- Using Tailwind CSS utility classes for quick styling

## Possible Improvements

- Add labels to inputs for better accessibility
- Add option to switch between kg/cm and lb/inches
- Add a reset button
- Test responsiveness on more real devices/screen sizes, not just browser resize

## Author

Ketan — 2nd Year BE Software Engineering, Deakin University
