# 🚀 Productive PPA – Deep Work Landing Page

🔗 **Live Site:** https://productive-ppa.vercel.app/
📦 **Repository:** https://github.com/Beyond-Sifat/productive-ppa
---

## 📌 Overview

**Productive PPA** is a modern, responsive landing page designed to promote a productivity-focused course centered around **deep work, focus, and habit building**.

The project focuses heavily on:

* Clean UI/UX
* Dark & Light theme support
* Responsive design system
* Component-based architecture

---

## 🧠 Thought Process (Step-by-Step)

### 1. Understanding the Goal

The main goal was to build a **high-converting landing page** that:

* Communicates value clearly
* Looks modern and premium
* Works seamlessly across devices

---

### 2. Breaking Down Sections

The UI was divided into **clear sections**:

1. **Banner / Hero**

   * Strong headline
   * Supporting text
   * CTA buttons
   * Background pattern + hero image

2. **Benefits Section**

   * Timeline-style layout
   * Shows key outcomes of the course
   * Focus on clarity and readability

3. **Curriculum Section**

   * Structured learning path
   * Accordion-style modules
   * Supporting card UI

4. **Testimonials**

   * Social proof
   * Mixed card types (text + video)
   * Slider interaction

5. **CTA Section**

   * Pricing emphasis
   * Feature highlights
   * Conversion-focused layout

6. **Footer**

   * Minimal and clean

---

### 3. Design Decisions

#### 🎨 Dark-First Design

* Primary background: `#0A0A0A`
* Card background: `#111`
* Borders: subtle (`white/10`)
* Accent: `#2466F2`

#### 🧩 Component Reusability

Each section is built as a **separate reusable component**, making the code:

* Scalable
* Maintainable
* Easy to update

---

### 4. Responsive Strategy

Custom breakpoints were used:

* `mobile` → default (stacked, centered)
* `tablet-sm` → small layout adjustments
* `tablet` → left alignment + spacing improvements
* `desktop` → multi-column layouts

Key approach:

* Mobile-first design
* Gradual enhancement across breakpoints

---

### 5. Dark & Light Theme System

Implemented using Tailwind’s `dark:` class strategy:

* Theme toggled via `document.documentElement.classList`
* No hardcoded colors
* Every element supports both modes

Example:

```css
text-black dark:text-white
bg-white dark:bg-[#0A0A0A]
```

---

### 6. Image Optimization

Used Next.js built-in image optimization:

* `next/image`
* Proper responsive handling
* Performance-focused loading

---

### 7. Deployment

The project is deployed on **Vercel**, which enables:

* Instant deployments from GitHub
* Fast global CDN delivery
* Seamless integration with Next.js

Vercel automatically deploys projects from Git repositories and provides preview URLs for every push. ([Vercel][1])

---

## ⚙️ Tech Stack

* **Next.js (App Router)**
* **Tailwind CSS v4**
* **next/image**
* **next/font (local fonts)**
* **Lucide Icons**
* **Vercel (Deployment)**

---

## 📂 Project Structure

```
app/
 ├── layout.js
 ├── page.js

components/
 ├── Banner.jsx
 ├── Benefits.jsx
 ├── Curriculum.jsx
 ├── Testimonials.jsx
 ├── CTA.jsx
 ├── Footer.jsx

public/
 ├── image/
 ├── fonts/
```

---

## 🚧 Challenges Faced

* Managing **dark/light theme consistency**
* Fixing **Next.js image path issues**
* Handling **Turbopack errors**
* Designing **responsive layouts across custom breakpoints**
* Maintaining **consistent UI across mixed card types**

---

## 🎯 Key Learnings

* Importance of **design consistency**
* How to structure scalable UI components
* Proper usage of **Tailwind dark mode**
* Handling real-world layout edge cases
* Debugging Next.js build and runtime issues

--

GitHub: https://github.com/Beyond-Sifat
--
## ⭐ Support

If you like this project, consider giving it a ⭐ on GitHub!