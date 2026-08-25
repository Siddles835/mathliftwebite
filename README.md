# MathLift team site

A dark-green React site introducing the people behind **MathLift**.

## The team

- **Lalith Durbhakula** — App Manager
- **Jayanth Savitala** — Outreach / PR, primary contact for teachers
- **Sidhaanth Kapoor** — Developer

## Run locally

```bash
npm install
npm run dev
```

Then open the printed local URL (usually `http://localhost:5173`).

## Add team photos

Drop portraits into `public/team/` and set the `photo` field in `src/data/team.js`, for example:

```js
photo: '/team/lalith.jpg'
```

Until then, each card shows an initials placeholder.
