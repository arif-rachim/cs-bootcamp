# Computer Science Bootcamp (CS50-based, Python-first)

This repository holds a 16-module (weeks 00 to 15), roughly 14 to 16 week computer science bootcamp written for an incoming first-year computer science university student, plus a small web app for working through it. Its purpose is to build solid CS foundations before and during the first semester and then finish with an introduction to AI and machine learning. The curriculum adapts Harvard's CS50 with two changes: it is Python-first, so that the path into AI is smooth, with one detour into C in week 05 to teach memory and low-level thinking; and it ends with AI, where a data science toolkit, machine learning, modern LLMs and a capstone project replace CS50's later weeks. Each module is a Markdown file in `curriculum/`, written in Bahasa Indonesia, and follows the same structure of goals, labs, problem sets and a mini-project. The companion `webapp/` (Next.js, Prisma and SQLite) renders those modules, runs and auto-grades Python exercises in the browser with Pyodide, and stores accounts, progress and scores. The content was written in May 2026 and the web app is an MVP.

> Status: curriculum outline complete; web app is an early MVP. Module content is in Bahasa Indonesia.

## Bootcamp goals

After finishing the bootcamp the student should be able to:

- Think **computationally**: break problems down, abstract, and design algorithms.
- Write clean, modular and tested Python programs.
- Understand core **algorithms and data structures** and analyse their efficiency (Big O).
- Build real applications: data processing, databases (SQL) and simple web apps.
- Understand the foundations of **AI and machine learning** and build a small AI project.
- Learn independently: read documentation, debug, and use AI assistants in a healthy way.

## Learning philosophy

- **Slow but deep.** About 14 to 16 weeks at 8 to 12 hours per week. Understanding matters more than speed.
- **Learn by building.** Every week has a lab and a mini-project. Theory is for using, not memorising.
- **Failure is part of the process.** Debugging is a core skill, not a sign of failure.
- **AI as a tutor, not a cheat sheet.** Asking AI to explain concepts or help debug is fine, but every core exercise must be rewritable without help.

## Curriculum map

| Week | Module | CS50 equivalent | Focus |
|:----:|--------|-----------------|-------|
| **00** | [Computational Thinking](curriculum/week-00-computational-thinking.md) | Week 0 (Scratch) | Binary, algorithms, pseudocode, data representation |
| **01** | [Python Basics](curriculum/week-01-python-basics.md) | Week 1 (C) | Variables, data types, input/output, expressions |
| **02** | [Control Flow](curriculum/week-02-control-flow.md) | Weeks 1–2 | Conditionals, loops, boolean logic |
| **03** | [Functions & Abstraction](curriculum/week-03-functions.md) | Week 1 | Functions, scope, problem decomposition |
| **04** | [Algorithms & Big O](curriculum/week-04-algorithms.md) | Week 3 | Searching, sorting, complexity, recursion |
| **05** | [Memory & Low-Level (C)](curriculum/week-05-memory-low-level.md) | Week 4 | Pointers, arrays, stack/heap, linked lists in C |
| **06** | [Data Structures](curriculum/week-06-data-structures.md) | Week 5 | List, tuple, dict, set, hash table |
| **07** | [Strings & Text](curriculum/week-07-strings.md) | Week 2 | String manipulation, regex, encoding |
| **08** | [OOP](curriculum/week-08-oop.md) | Week 6 (Python) | Classes, objects, inheritance, encapsulation |
| **09** | [Files, Errors & Data Formats](curriculum/week-09-files-and-errors.md) | Week 6 | File I/O, exceptions, CSV/JSON |
| **10** | [SQL & Databases](curriculum/week-10-sql.md) | Week 7 | Relations, queries, CRUD, normalisation |
| **11** | [Web & APIs](curriculum/week-11-web.md) | Weeks 8–9 | HTML/CSS/JS, Flask, REST APIs |
| **12** | [Data Science Toolkit](curriculum/week-12-data-science.md) | — (bridge to AI) | NumPy, Pandas, visualisation |
| **13** | [Introduction to Machine Learning](curriculum/week-13-machine-learning.md) | — | Supervised learning, scikit-learn |
| **14** | [Modern AI & LLMs](curriculum/week-14-modern-ai.md) | — | Neural networks (intuition), using LLM APIs |
| **15** | [Capstone Project](curriculum/week-15-capstone.md) | Final Project | End-to-end final project |

## Weekly structure

Every module follows the same pattern:

1. **CS50 mapping**: where the topic comes from and what was changed.
2. **Learning objectives**: what must be mastered by the end of the week.
3. **Key concepts**: the core material.
4. **Lab**: guided practice in a session.
5. **Problem set**: independent CS50-style exercises (psets).
6. **Mini-project**: one small project that ties the concepts together.
7. **Resources**: videos, reading and documentation.
8. **Ready-to-continue checklist**: signals readiness for the next week.

## Setup and tools

| Need | Recommended option |
|------|--------------------|
| Language | **Python 3.12+** |
| Editor | **VS Code** (free, with the Python extension) |
| Online coding (no install) | **CS50 Codespace / Replit / Google Colab** |
| Notebooks for data and AI | **Jupyter / Google Colab** |
| Version control | **Git + GitHub** (introduced gradually from week 03) |
| AI assistant (tutor) | **Claude / GitHub Copilot**, for explanations and debugging |

> **Beginner tip:** start with online coding (Colab or Codespace) so installation does not get in the way. Move to a local VS Code setup around weeks 03–04 once comfortable.

## Assessment (optional, to track progress)

- **Problem sets (50%)**: weekly exercises, graded on correctness and code style.
- **Mini-projects (20%)**: one small project per module.
- **Participation & reflection (10%)**: a weekly learning journal.
- **Capstone (20%)**: the final project.

Every submission should come with a **short reflection**: what was hard, how it was solved, and what is still confusing.

## Companion web app

`webapp/` is a Next.js app that reads the modules straight from `curriculum/*.md` (one source of truth) and classifies each one in `webapp/lib/content.ts`:

- **pyodide** (weeks 1–4 and 6–9): an in-browser code editor with Run and auto-grading through Python `assert` test cases, defined in `webapp/lib/exercises.ts` (currently for weeks 1–4, 6 and 7).
- **linkout** (weeks 5 and 10–15): a card linking to Replit or Codespaces, since these weeks need C, a server or heavy packages.
- **conceptual** (week 0): reading only.

Accounts use email and password (bcrypt hashes, JWT session cookie valid for 7 days); progress and submissions are stored with Prisma in SQLite.

Tech stack: Next.js 16 · React 19 · Tailwind CSS 4 · Prisma 6 · SQLite · Pyodide · CodeMirror · jose · bcryptjs

```bash
cd webapp
npm install
cp .env.example .env   # then fill in the values
npx prisma generate
npx prisma db push     # creates prisma/dev.db
npm run dev            # http://localhost:3000
npm run build && npm run start   # production
```

Environment variables: `DATABASE_URL`, `AUTH_SECRET` (signs the JWT session; must be replaced in production). More detail, in Bahasa Indonesia, is in [webapp/README.md](webapp/README.md).

Known gaps listed in the web app README: grading runs in the browser and can be bypassed, SQLite would need to move to Postgres for many students, OAuth is not implemented, and the data science week is not yet runnable in the browser.

## Project structure

```text
curriculum/                 16 weekly modules (week-00 … week-15), Markdown, Bahasa Indonesia
webapp/
  app/                      pages (module list, lessons/[slug], dashboard, login, signup) and api/ routes
  components/               PythonRunner (Pyodide + grading), MarkdownView, LinkOutCard, auth forms
  lib/                      content.ts, exercises.ts, auth.ts, prisma.ts
  prisma/schema.prisma      User, Progress, Submission
```

## How to use this repo

1. Start with [week 00](curriculum/week-00-computational-thinking.md).
2. Work through the modules in order; each one builds on the previous.
3. Do not jump to code before understanding the concept, and do not stop at the concept without writing code.
4. Keep all exercises and projects in this repo (one folder per week).

## Main resources

- **CS50x Harvard**: https://cs50.harvard.edu/x/
- **CS50's Introduction to Programming with Python**: https://cs50.harvard.edu/python/
- **Python docs**: https://docs.python.org/3/
- **Automate the Boring Stuff with Python**: https://automatetheboringstuff.com/

*Welcome to computer science. Go slowly, stay consistent, and enjoy the process.*
