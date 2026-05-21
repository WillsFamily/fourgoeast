# Editing Guide — Four Go East

A map of where every editable bit of text lives, so you can change words
without having to read code. This file is for your reference only — it
won't appear on the live site.

---

## The workflow, end to end

1. **Open the repo in an editor.** In GitHub Desktop, go to
   `Repository` → `Open in External Editor`. If you don't have one set up,
   install [Visual Studio Code](https://code.visualstudio.com/) (free,
   takes two minutes) and it'll appear there. Or use `Repository` →
   `Show in Finder`, right-click an `.html` file, `Open With` →
   any text editor will do.
2. **Find the text you want to change.** Open the page from the list
   below, jump to the line number, or just press `Cmd + F` and search
   for the exact phrase. The text you can read on the live page is the
   text in the file — anything between `<` and `>` is layout/styling, leave
   that alone.
3. **Type your change, then save** (`Cmd + S`).
4. **Switch to GitHub Desktop.** You'll see the changed file listed,
   with the old text in red and new text in green. Check it looks right.
5. **Commit and push.** Write a short summary (e.g. _"Fix typo on About
   page"_), click `Commit to main`, then click `Push origin`. Vercel
   redeploys in about a minute.

If anything looks scary or you're not sure, just leave the file open and
ask me — I'm happy to make any edit on your behalf.

---

## Safe-to-edit, leave-alone

Anything between `<` and `>` is HTML markup that controls the layout. Don't
delete those tags — just change the words in between. For example:

```html
<h4>J — Dad</h4>      ← change the words "J — Dad", leave the <h4> tags
<p>Plans the routes…</p>   ← change anything between <p> and </p>
```

Tags that wrap a word for styling are also fine to keep:

```html
Meet the <em>four</em>      ← "four" is in italics; change "four" if you like
```

---

# Page-by-page map

There are **5 live pages**, all at the root of your repo:

| File              | What it is                                  |
|-------------------|---------------------------------------------|
| `index.html`      | Homepage                                    |
| `journal.html`    | Blog index — all posts in scrapbook grid    |
| `post.html`       | A single blog post (currently _Tết II_)     |
| `about.html`      | About the four — bios, why we left, FAQ     |
| `map.html`        | Route map and list of stops                 |
| `style.css`       | Colours, fonts, sizing (only edit if asked) |

The five HTML files share a top navigation bar and footer. Those sit
inside each file individually right now — so changing the nav means
editing all five (or asking me to do it once across the board).

---

## `index.html` — Homepage

| Line | Section                              | What's there                                                  |
|------|--------------------------------------|---------------------------------------------------------------|
| 124  | Top nav                              | "Home / Journal / The Four / The Map" links                   |
| 133  | Page header                          | Dateline + handwritten "Four go east →" title block           |
| 138  | The big title                        | `Four go east` — search for `titlemark`                       |
| 139  | Subtitle                             | _"one family · four backpacks · no return ticket"_            |
| 143  | Intro paragraphs                     | The "We are J, R, E and e…" introduction                      |
| 170  | **Meet the Four** section           | Section heading + four cards                                  |
| 178  | J's card                             | `<h4>J — Dad</h4>` + paragraph below                          |
| 183  | R's card                             | `<h4>R — Mum</h4>` + paragraph below                          |
| 188  | E's card                             | `<h4>E — Eldest, 12</h4>` + paragraph                         |
| 193  | e's card                             | `<h4>e — The Boss, 10</h4>` + paragraph                       |
| 199  | **Pages from the journal** section  | Six recent post cards                                         |
| 211  | Featured post 1                      | Tết II preview                                                |
| 221  | Featured post 2                      | Tết I preview                                                 |
| 231  | Featured post 3                      | Water buffalo preview                                         |
| 241  | Featured post 4                      | Ghost buildings preview                                       |
| 251  | Featured post 5                      | Fruit man preview                                             |
| 261  | Featured post 6                      | World-schooling preview                                       |
| 270  | **Wander by theme** section         | Tag chips                                                     |
| 289  | The pull-quote band                  | "There is more than one way to live…"                         |
| 294  | Mini route map                       | "The route, so far" + SVG                                     |
| 311  | Recent stamps                        | Passport stamp gallery                                        |
| 325  | Postcard sign-up                     | The newsletter form                                           |
| ~360 | Footer                               | Bottom links + © line                                         |

---

## `journal.html` — Blog index

| Line | Section                              | What's there                                                  |
|------|--------------------------------------|---------------------------------------------------------------|
| 93   | Page header                          | Title "The journal" + sub-line ("27 entries · …")             |
| 103  | Tag filter chips                     | The row of clickable tags                                     |
| 121  | **2026** year heading + posts        | Section heading + 6 cards from 2026                           |
| 135  | Tết II card                          | Title + summary                                               |
| 145  | Tết I card                           |                                                               |
| 155  | Water buffalo card                   |                                                               |
| 165  | Ghost buildings card                 |                                                               |
| 175  | Fruit man card                       |                                                               |
| 185  | Beat poems card                      |                                                               |
| 192  | **2025** year heading + posts        | Section heading + 8 cards from 2025                           |
| 203  | Vietnam rain card                    |                                                               |
| 213  | Christmas abroad card                |                                                               |
| 223  | World-schooling card                 |                                                               |
| 233  | Walk to the light card               |                                                               |
| 243  | Dog meat card                        |                                                               |
| 253  | Da Nang airport card                 |                                                               |
| 263  | Bangkok limbo card                   |                                                               |
| 273  | Long train card                      |                                                               |
| ~283 | Pagination                           | 1 · 2 · 3                                                     |
| 289  | Postcard sign-up                     |                                                               |

> **To add a new post:** copy one of the existing `<article class="entry">`
> blocks (about 9 lines), paste it in the same year section, then edit
> the date, title, image URL and description. I'm happy to do this for
> you — just send me the new entry's details.

---

## `post.html` — Single post (currently "Tết II: Tết")

| Line | Section                              | What's there                                                  |
|------|--------------------------------------|---------------------------------------------------------------|
| ~178 | Page header                          | Breadcrumb + title block                                      |
| 184  | The post title                       | `Tết II: Tết`                                                 |
| ~186 | Subtitle                             | _"a deep breath before plunging into a new year"_             |
| ~189 | Byline / dateline                    | Date · location · read time · author                          |
| 195  | Hero image + caption                 | Big photo at top, with caption underneath                     |
| ~203 | The essay itself                     | Each paragraph is one `<p>…</p>` block                        |
| ~225 | Inline photo (left)                  | "Kumquat trees — wealth on a scooter"                         |
| ~232 | Subheading                           | _"And then, the flags."_                                      |
| ~244 | Pull-quote                           | "It was a pause. A deep breath…"                              |
| ~252 | Inline photo (right)                 | "CHÚC MỪNG NĂM MỚI — happy new year"                          |
| ~256 | Closing paragraphs                   | The last two paragraphs + the "— J ✻" signoff                 |
| ~256 | Tags row                             | The little stamp-style tags below the essay                   |
| 258  | "Leave a note" form                  | Comments-style text box                                       |
| 271  | Prev / Next post links               | Two cards at the bottom                                       |

> **To turn this into a different post:** the simplest path is to swap
> the title, the body paragraphs, the photos, and the tags — the
> structure stays the same. Or just give me the new essay and I'll
> rebuild the page around it.

---

## `about.html` — About the Four

| Line | Section                              | What's there                                                  |
|------|--------------------------------------|---------------------------------------------------------------|
| 170  | Page header                          | "Meet the four" title block                                   |
| 180  | **Meet the Four** card grid          | Four detailed bio cards                                       |
| 186  | J's photo caption                    | "J, the writer"                                               |
| 189  | J's heading + role                   | `J — Dad` + "Writer-in-residence"                             |
| ~191 | J's bio paragraphs                   | The two paragraphs about J                                |
| 200  | R's photo caption                    | "R, the navigator"                                            |
| 203  | R's heading + role                   | `R — Mum` + "Chief navigator"                                 |
| ~205 | R's bio paragraphs                   |                                                               |
| 217  | E's heading + role                   | `E — The eldest, 12` + "Reader · swimmer"                     |
| ~219 | E's bio paragraphs                   |                                                               |
| 231  | e's heading + role                   | `e — The boss, 10` + "Two e's · one boss"                     |
| ~233 | e's bio paragraphs                   |                                                               |
| 240  | **Why we left** section              | The long-form letter from J                                   |
| 243  | "Why we left" heading                |                                                               |
| ~246 | The four paragraphs of the letter    |                                                               |
| 256  | **Where we've been** timeline        | Section heading                                               |
| ~260 | Timeline entries                     | One `<div class="tl-item">` per stop                          |
| 263–293 | The seven timeline stops          | India / Penang / Departure / Chiang Mai / Đà Nẵng / Hội An / Onward |
| 299  | **Things people ask us** (FAQ)       | Section heading                                               |
| 305  | The FAQ block                        | Each Q&A is a `<details>` block                               |
| ~307 | "What do you mean by world-schooling?" |                                                            |
| ~313 | "How do you afford this?"            |                                                               |
| ~317 | "What about the children's socialising?" |                                                            |
| ~321 | "Don't you miss home?"               |                                                               |
| ~325 | "Will you ever come back?"           |                                                               |
| 331  | Postcard sign-up                     |                                                               |

---

## `map.html` — Route map

| Line | Section                              | What's there                                                  |
|------|--------------------------------------|---------------------------------------------------------------|
| 155  | Page header                          | Title block "The map"                                         |
| 165  | The big SVG map                      | Country shapes + route + city labels                          |
|      |                                      | _City names live inside `<text>` tags in the SVG_             |
| ~287 | "Currently filing from" card         | The pulsing-dot card under the map                            |
| 296  | The location                         | "Hội An, Việt Nam · 215 days here so far"                     |
| 301  | **The stops, in order** list         | Four detailed stop cards                                      |
| 312  | London → Bangkok stop                |                                                               |
| 323  | Chiang Mai stop                      |                                                               |
| 334  | Đà Nẵng stop                         |                                                               |
| 345  | Hội An stop                          |                                                               |
| 354  | **By the numbers** strip             | The four big stat cards                                       |
| 364  | **Stamps in the passport** gallery   | The grid of country stamps                                    |
| 383  | Postcard sign-up                     |                                                               |

---

## Shared bits (appear on every page)

| Where        | Lines           | Edit how                                          |
|--------------|-----------------|---------------------------------------------------|
| Top nav      | First ~10 lines after `<body>` (`<nav class="site">`) | Same in all 5 files. If you want to rename a nav item or add one, do it in each. |
| Footer       | Last ~10 lines before `</body>` (`<footer class="site">`) | Same in all 5 files. |
| Newsletter postcard | "Send me a postcard?" section near the bottom | Identical wording across pages — change in one or all. |

---

## Tips

- **Cmd + F** in any editor opens a find box. Type the exact phrase you
  want to change and it'll jump straight there.
- **Cmd + Z** undoes anything. Don't be afraid to experiment.
- **Don't touch `style.css`** unless you want to change fonts, colours
  or layout. Tell me what you want different and I'll handle it.
- **Always check the preview before pushing.** Open the `.html` file
  in your browser (double-click it in Finder) to see your change. If it
  looks right, commit and push.
- **If you break something**, in GitHub Desktop right-click the file
  in the changes list and choose `Discard Changes` — it'll snap back
  to the last committed version. Nothing is ever permanently broken.

---

## Or just ask me

Honestly — for anything fiddly, give me the page name and the new text
and I'll do it in seconds. _"On the about page, change e's bio to: [new
text]"_ is all I need. The DIY route is good for tiny tweaks; for
anything bigger I'd rather just do it for you.
