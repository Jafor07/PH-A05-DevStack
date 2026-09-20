# Dev Stack Builder

Dev Stack Builder is a simple React project where users can see different technologies and create their own technology stack. Users can add, remove, and clear technologies from their stack.

## Technologies Used

* React
* TypeScript
* Vite
* Tailwind CSS
* React Toastify
* JSON
* DaisyUI
* React Icons

## Features

* Browse different development technologies.
* Add technologies to my own stack.
* Remove technologies from the stack.

---

# React Questions & Answers

## 1. What is JSX, and why is it used in React?

JSX is a way to write HTML-like code inside JavaScript.

I use JSX in React to create and show the user interface easily.

---

## 2. What is the difference between props and state?

Props are used to send data from a parent component to a child component.

State is used to store data that can change in a component.

For example, I use state to store the technologies selected by the user.

---

## 3. What does the useState hook do, and where did you use it in this project?

useState is used to store and change data in a React component.

In this project, I used it to store the selected technologies and loading state.

Example:

```tsx
const [selected, setSelected] = useState<Technology[]>([])
```

---

## 4. What does the useEffect hook do, and why did you need it to load the JSON data?

useEffect is used to run some code when a component loads or updates.

I used it to load the technology data from the JSON file when the app starts.

---

## 5. Why does every item in a .map() list need a unique key prop?

The key helps React identify each item in a list.

It helps React update the list correctly when something changes.

In my project, I used the technology id as the key.

Example:

```tsx
<TechCard key={tech.id} tech={tech} />
```

---

## 6. What is conditional rendering?

Conditional rendering means showing something based on a condition.

For example, in my project, I show Loading technologies while the JSON data is loading.

Example:

```tsx
{loading ? (
  <p>Loading technologies...</p>
) : (
  <MainLayout />
)}
```

---

## 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A parent sends data to a child using props.

In my project, App.tsx sends technology data and functions to child components.

The child can send something back by calling a function received through props.

For example, when I click Add to Stack, the child calls the onAdd function and the parent updates the stack.
