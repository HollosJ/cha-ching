# Cha-Ching

Cha-Ching is a personal finance dashboard built with **Next.js** and **React**, designed to give users a comprehensive, high-level overview of their financial situation. This project is a personal tool aimed at simplifying financial tracking and presenting data in a clear, digestible format.

## Features

### Income and Expense Inputs with Formik and Yup
- Users can enter income and expense details through a **multi-step form** powered by **Formik**, with **Yup** for robust form validation.
- Formik was particularly useful for creating the subscriptions input, leveraging **FieldArray** to handle dynamic data entry effectively.

### Persistent Data Storage
- Using **localStorage**, Cha-Ching retains user data between sessions. Users can close the dashboard and return later, picking up right where they left off without the need for an external database.

### Customisable Dashboard
- Users can reorder their dashboard however they see fit. This customisation is saved across sessions with **localStorage**, thanks to **dnd-kit**, which powers the drag-and-drop functionality.

### Insights into Spending Habits
- Cha-Ching provides users with insights into their spending habits, including a breakdown of expenses and income, offering a clear overview of their financial health.

## Future Improvements
- **Authentication and Server Storage**: Currently, Cha-Ching relies on **localStorage**, limiting cross-device tracking. To remedy this, we could implement authentication and server storage for data syncing.
- **Data Visualisation and Tips**: Users will benefit from additional data visualisation or tips that compare their spending to their income, helping them better understand their financial trends.
- **Easy Data Updates**: A user-friendly interface for updating financial data as changes occur in real life, allowing for seamless updates and better tracking.

## Technologies Used
- **Next.js**
- **React**
- **Formik**
- **Yup**
- **Tailwind CSS**
- **DnD Kit**
- **LocalStorage**
