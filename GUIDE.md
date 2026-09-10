# Dreamtone LA — going live and editing it yourself

Everything you need is in this folder. Follow the five parts in order.
Total time, first run: about 45 minutes, most of it waiting on DNS.

---

## What you're setting up

    You type in a browser form  →  it saves to GitHub  →  Netlify rebuilds  →  the site is updated

Your text and photos live in the `content/` folder as plain data files.
The pages read from them. `/admin` is a form that edits them for you.
No software to install, no build step, nothing to compile.

---

## PART 1 — Put the site on GitHub

You said GitHub website, no installs. This is that path.

1. Go to https://github.com/new
2. **Repository name:** `dreamtone-la`
3. **Public.** Leave everything else alone. Click **Create repository**.
4. On the next screen click **uploading an existing file**.
5. Open this `deploy-la` folder on your computer. Select **everything inside it** — not the
   folder itself, the contents — and drag it into the browser window.
   That means `index.html`, all the `.jsx` files, and the `admin`, `assets`, `content`,
   `uploads`, and `_ds` folders.
6. Wait for every file to finish uploading. Scroll down, click **Commit changes**.

**One thing to check:** `index.html` must sit at the top level of the repository, not inside a
`deploy-la` folder. If you see `deploy-la` listed on the repo homepage, you dragged the folder
instead of its contents — delete it and redo step 5.

GitHub calls the main branch `main` by default. The editor config expects that name.

---

## PART 2 — Connect Netlify

1. https://app.netlify.com → **Add new site** → **Import an existing project**
2. Choose **GitHub**, authorize it, pick `dreamtone-la`.
3. Build settings:
   - **Build command:** leave empty
   - **Publish directory:** `.` (a single dot)
4. **Deploy site.** About 30 seconds later you get a URL like `fluffy-otter-1a2b3c.netlify.app`.
5. **Site configuration → Change site name** → `dreamtone-la`. Now it's `dreamtone-la.netlify.app`.

Open it. The site should look exactly like the preview. If the page is blank, see
Troubleshooting at the bottom.

---

## PART 3 — Turn on the editor

This is the part that makes `/admin` work. Two switches.

### 3a. Identity (your login)

1. In your site: **Site configuration → Identity** → **Enable Identity**.
2. Under **Registration**, set it to **Invite only**. You're the only editor; this stops
   strangers signing themselves up.

### 3b. Git Gateway (lets the editor save)

1. Still under Identity, find **Services → Git Gateway** → **Enable Git Gateway**.
2. It will ask to authorize GitHub. Say yes.

### 3c. Invite yourself

1. Identity → **Invite users** → enter your email → send.
2. Check your inbox, click the link, set a password.
3. Go to `https://dreamtone-la.netlify.app/admin` and log in.

You should now see a sidebar: **Page text · Projects · The Loft · Development offer · Settings**.

---

## PART 4 — Point DreamtoneLA.com at it (GoDaddy)

Do this after Part 2 works. Netlify's own nameservers are the least fiddly route, so that's
what's below.

### On Netlify

1. **Domain management → Add a domain** → type `dreamtonela.com` → **Verify** → **Add domain**.
2. Netlify shows four nameservers, like:

       dns1.p03.nsone.net
       dns2.p03.nsone.net
       dns3.p03.nsone.net
       dns4.p03.nsone.net

   Yours will have different numbers. Copy all four.

### On GoDaddy

1. Log in → **My Products** → find `dreamtonela.com` → **DNS** → **Nameservers** → **Change**.
2. Choose **I'll use my own nameservers** (GoDaddy sometimes labels this "Custom").
3. Paste in all four Netlify nameservers. Save. Confirm the warning.

### Back on Netlify

- Wait. Usually 15–60 minutes, occasionally a few hours.
- Netlify issues a free HTTPS certificate automatically once DNS resolves — you don't
  do anything for that.
- Under **Domain management**, set your primary domain. `dreamtonela.com` (no www) reads
  better on a title card; `www` is marginally more forgiving technically. Either is fine —
  Netlify redirects the other one to it.

**Careful:** switching nameservers moves *all* DNS for the domain to Netlify. If GoDaddy is
currently handling email for `@dreamtonela.com`, write down those MX records first and re-add
them in Netlify DNS, or the email stops. If the domain only points at a website, nothing to worry about.

---

## PART 5 — Editing, from now on

Go to `dreamtonela.com/admin`, log in, change something, click **Publish**.
The live site updates in about 30 seconds. If it looks unchanged, hard-refresh (Cmd-Shift-R).

### What you can change

**Page text** — every headline, intro paragraph, and button label on all seven pages.
Headlines are split into two fields, *plain part* and *underlined part*, because the marigold
underline is a brand device: "A thousand square feet" + "of daylight". Keep the underlined
part short — two or three words — or the effect turns into a highlighter.

**Projects** — add, delete, and drag to reorder. Each one takes a title, category, client,
location, year, your role, a description, and a photo. **Show on the homepage** controls
whether it appears in the three-up on the front page. *Category* becomes a filter chip on the
Work page, so spell repeats identically — "Music Video" and "Music video" would make two chips.

**The Loft** — description, square footage, status badge, opening date, the hero photo, the
three gallery photos, and the roman-numeral summary. When the buildout finishes, change the
status badge from "Under construction" to "Now booking" and rewrite the availability
paragraph. That's the whole update.

**Murals** — the mural partner block (name, website, statement, paragraph) and the wall gallery.
Each wall takes a title, location line, description, artist credit, and a photo. Add, delete, and drag
to reorder. The four working titles are descriptive placeholders — correct them here.

**Development offer** — fee range, turnaround, credit-back line, the four deliverables, and the
four process steps. Change the fee in one place and it updates on the homepage band and the
Development page together.

**Settings → Contact & links** — emails, Instagram, the inquiry form URL, the Getty link, the
map. **Settings → Look & feel** — page mode, the LA accent (four approved options), the brand
accent, and the headline font. These are short lists on purpose: any color you can pick here
still passes contrast and still looks like Dreamtone.

### Photos

Any photo field has an upload button. Drop a file, it lands in `assets/uploads`, and the
frame fills in. Sensible sizes: 2000px on the long edge, JPG, under about 500KB. Larger files
work but slow the page down.

The empty frames on the live site are placeholders with labels saying what belongs there. The
ones worth filling first: the loft hero and its three gallery slots, the Sho Madjozi LA River
still, and a Signature Tracks session photo.

### What you cannot change in the admin

Layout, spacing, the nav, page structure, and the small metadata labels are in code. That's
deliberate — it's what stops the site drifting out of shape. Ask me and I'll change them.

---

## PART 6 — Getting found on Google

Every page now has a real address: `/work`, `/murals`, `/the-loft`, `/development`, `/start`,
`/contact` — each with its own title and description. Shared links unfurl with the logo instead of a
blank card.

One step is left, and only you can do it:

1. https://search.google.com/search-console → add `dreamtonela.com` as a Domain property.
2. Verify with the TXT record it gives you. Netlify runs your DNS now, so add it under
   **Domain management → DNS records**.
3. Open **Sitemaps** and submit `sitemap.xml`.

Indexing takes days to weeks. Searching your own name is the wrong test — search a phrase from the
homepage in quotes.

---

## Troubleshooting

**Blank white page.** Open the browser console (Cmd-Option-J). If it says content failed to
load, the `content/` folder didn't upload — check it exists in the repo and redo the upload.

**"Content failed to load" message on screen.** You opened `index.html` by double-clicking it.
This site reads its text over the network, so it needs a real URL. Use the Netlify link.

**/admin says "Config Errors" or won't log in.** Almost always Identity or Git Gateway is off.
Recheck Part 3. Also confirm your repo's branch is named `main` — if GitHub made it `master`,
edit `admin/config.yml` and change `branch: main` to `branch: master`.

**Netlify Identity isn't offered on your account.** Netlify has been steering new sites away
from Identity. If you don't see it, tell me and I'll switch the editor to log in with your
GitHub account directly instead — it's a four-line change to `admin/config.yml`.

**An edit published but the site looks the same.** Hard-refresh. Then check **Deploys** in
Netlify — a red entry means the deploy failed and the log will say why.

**You broke something in the admin.** Every save is a commit. In GitHub, open the file's
**History**, find the version before the mistake, and restore it. Nothing is ever really lost.
