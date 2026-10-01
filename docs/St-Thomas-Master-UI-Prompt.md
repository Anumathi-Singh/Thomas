# St. Thomas — master prompt for the website UI

Use this prompt to continue the existing project in `D:\Thomas`. Research reviewed on 30 September 2026. Scope: public website and portal interface prototypes only.

---

Act as a senior education website designer, accessibility specialist, and frontend engineer. Improve the existing St. Thomas project rather than starting an unrelated site. Deliver a distinctive, welcoming, credible college website with a society-first identity, separate B.Ed and D.Ed destinations, larger typography, sticky navigation, and immediately accessible portals. Preserve useful existing interactions and architecture.

## 1. Institutional identity and evidence

The institution is the St. Thomas college in **Achanpally, Bodhan, Nizamabad, Telangana**, under **K.P. Educational Society**. It is not St. Thomas College in Thrissur, Palai, Gadwal, Dehradun, or another similarly named institution.

Use these verified identifiers:

- Society: K.P. Educational Society.
- B.Ed institution: St. Thomas College of Education.
- D.Ed institution: St. Thomas Institution of Elementary Teachers Education.
- Address: Pegadapally Road, Achanpally, Bodhan, Nizamabad, Telangana – 503180.
- Map coordinates published by the college: 18.677198, 77.906005.
- Preserve the existing website's visible B.Ed and D.Ed labels. Where useful, explain that applicants should confirm the current D.Ed / D.El.Ed designation with the institution.

The original site has five top-level links: **Home, St. Thomas B.Ed, St. Thomas D.Ed, Photo Gallery, Contact Us**. Retain all five explicitly; do not hide both programmes under a generic “Programmes” link.

Primary references:

- https://stthomascollegeofeducation.org.in/index.html
- https://stthomascollegeofeducation.org.in/bed.html
- https://stthomascollegeofeducation.org.in/ded.html
- https://stthomascollegeofeducation.org.in/photo.html
- https://stthomascollegeofeducation.org.in/contact.html

Use the accompanying research and asset register for the original document and photo URLs. Do not invent society registration details, an expanded form of “K.P.”, founder names, leadership biographies, establishment date, achievements, rankings, NAAC grades, placement percentages, student counts, phone numbers, email addresses, admission dates, fees, approved intake, or present recognition status. Historical approval scans do not prove current approval. The phone number in the old site's developer credit is not a college contact number.

## 2. Creative direction: Academic Spectrum

Use a vibrant professional academic design: midnight navy `#17254D`, indigo `#3849A2`, lavender `#E9EAFB`, coral `#CF7653`, teal `#247365`, warm amber `#FFCB83`, and warm white `#FFFDF9`. Give B.Ed a lavender/indigo identity and D.Ed a peach/coral identity. Use teal for campus content, amber for primary calls to action, and distinct pastel portal cards. Colour changes must communicate hover, pressed, selected, and focus states.

Use Playfair Display for expressive headings and DM Sans for text, forms, navigation, and portal interfaces. Keep font fallback stacks. Use approximately 18px body text on desktop and at least 16px on mobile, 16–18px navigation, 14px minimum supporting labels where feasible, 44–76px hero headings, and 34–52px section headings. Body line height should be around 1.65–1.8. Avoid the old 8–12px UI text. Use rem-based sizes that respond to reading preferences. Do not treat gold as low-contrast body text.

Balance confident headings, generous spacing, authentic photography, fine borders, modest corner rounding, and subtle hover feedback. Avoid a generic SaaS template, excessive gradients, oversized empty blocks, continuous carousels, animated counters, and decorative features that obscure the college identity. Keep the interface lightweight for mobile connections. Add a brief staggered hero entrance, gentle one-time scroll reveals, card hover lift, and tactile button press feedback. Include an interactive B.Ed/D.Ed pathway explorer that changes its content, illustration, and palette when selected. Keep animations short and respect both system and website reduced-motion settings.

## 3. Header and navigation — highest priority

Create a prominent society masthead above the navigation. Display “K.P. EDUCATIONAL SOCIETY”, the two institutional names, and Bodhan, Telangana. This must read as the governing identity, not a tiny incidental utility label.

Below it, create a separate sticky navigation bar with the St. Thomas identity, the original five links, a **College portal** dropdown, search, and a labelled settings control. The masthead may scroll away; the navigation must stay at the top. Mark the active page and ensure sticky elements never obscure anchor headings or keyboard focus.

The portal dropdown must provide Student login, Faculty login, Admin login, admission enquiries, B.Ed documents, and D.Ed documents. The same access must be available on mobile without scrolling to the footer. Do not expose administrative actions as though they are public permissions.

Use keyboard-operable disclosure buttons with expanded state, Enter/Space activation, sensible tab order, Escape dismissal, outside-click dismissal, and restored focus. Navigation must work by click and touch rather than hover alone. Avoid nested dropdowns where direct links will work.

On narrower screens, use an accessible hamburger menu, sufficiently large touch targets, an internally scrollable menu if necessary, and no clipped links. All desktop destinations must remain available. Use genuine links for routes so URLs can be copied, opened in another tab, refreshed, and reached through browser history. Preserve or redirect `/index.html`, `/bed.html`, `/ded.html`, `/photo.html`, and `/contact.html` when deployment routing is configured.

## 4. Home page composition

In order:

1. Society masthead and sticky navigation.
2. A photographic hero using the actual Bodhan college building. Suggested editorial headline: “A life of learning. A future of teaching.” Keep the institution identifiable and the text legible without hiding the entire building. Include “Explore our programmes” and an admission enquiry action. No unverified “Admissions open” claim.
3. A compact introduction identifying teacher education, the two pathways, and Bodhan.
4. Two equally prominent **B.Ed** and **D.Ed** cards within the first substantial scroll. Each has its own institutional identity, plain-language introduction, and unmistakable link to a dedicated page. A pop-up alone is not sufficient.
5. About the institutions and K.P. Educational Society. Explain only the verified management relationship. Add layout slots for approved history, mission, leadership, and society registration content, but do not fill them with invented facts or publish empty decorative cards.
6. Authentic campus and facilities gallery preview, clearly dated when dates become available; otherwise describe it as the official archive.
7. Admission guidance, a preview enquiry form, and useful FAQs.
8. College updates/notices component with B.Ed/D.Ed filters when approved material exists. Use an honest empty state until then; archived documents must not masquerade as current notices.
9. Student, faculty, and admin portal shortcuts as secondary access points.
10. Contact/location section and a useful footer with institutional identity, both programmes, documents, gallery, contact, portals, and verified policies when supplied.

Use a clear visual rhythm rather than making every section a card grid. Preserve a compact, readable mobile experience.

## 5. Separate B.Ed and D.Ed pages

Provide independent, shareable routes `/bed` and `/ded`, each with unique title, breadcrumb, heading, institution name, relevant content, and an obvious way to explore the other programme.

Both pages should support overview, admission guidance, eligibility, duration, intake, fees, academic structure, teaching practice, staff, facilities, resources, approval documents, and FAQs. Render only verified details. For missing application-year information, provide a short “Contact the college for current details” message instead of fabricated numbers.

The B.Ed document area must preserve the two original NCTE-labelled scans, five published staff images, and one Telangana University staff approval scan. The D.Ed document area must preserve the B-category admission notice, two NCTE-labelled scans, and six staff approval images. Separate these collections and label them as historical records. Do not reinterpret old approval wording as a current regulatory guarantee.

Use readable document rows with a descriptive title, known date/year if verified, programme, file type, and an accessible view/open action. The originals are image files; do not falsely call them PDFs or show invented file dates. Any later OCR transcription must be verified against the scan. Preserve access to the original image.

## 6. Gallery and contact experience

Build `/gallery` with all usable official campus photographs, descriptive captions, lazy loading, and an accessible lightbox with previous/next, Escape, close, and focus restoration. Preserve aspect ratios for the small archive images; do not enlarge a low-resolution thumbnail into a hero. Filter categories only when there is enough accurately classified material.

Use `/contact` for the published address, college names, a directions link based on the published coordinates, and admission enquiry access. Do not use the original developer's telephone number. Add telephone, email, office hours, and staff contact roles only after the college confirms them. Do not imply that the enquiry preview sends a message.

## 7. Portal and login interfaces

Retain and improve the existing student, faculty, and admin UI previews. Each login screen needs a clear role selector, labelled identifier/password fields, password visibility control, validation states, recovery/help state, back-to-website link, and an explicit “Explore demo portal” option. Keep a persistent demo label in sample workspaces. Never request real credentials for a nonfunctional preview.

For the complete UI roadmap, prepare these role-specific screens with clearly fictional sample data:

- Student: overview, attendance, timetable, subjects, assignments, teaching-practice journal, resources, notices, profile, and a fee/receipt presentation if requested. Do not collect payments.
- Faculty: classes, attendance entry preview, timetable, materials, assignment review, student feedback, and teaching-practice supervision.
- Admin: admissions queue, people directory, notice publishing preview, programme documents, gallery management preview, timetable management, and role/settings presentation. No actual privileged writes.

Applicant, alumni, and parent/guardian access are optional future roles, not verified existing college services. Show them only if the institution requests them and supplies a meaningful workflow. Do not add dummy login choices simply to increase the number of roles.

Use empty, loading, error, validation, disabled, and success-preview states where relevant. Saving sample items may work locally or for the session; label its scope. No backend, real authentication, OTP delivery, identity authorization, uploads, notifications, or payment integration is in this stage.

## 8. Search, settings, and useful contemporary features

Provide working local page/portal search with matching results and a no-results state. Expand to document metadata and approved notices as the content grows; do not suggest that text inside scans is searchable before verified transcription exists.

Settings must support larger text, high contrast, reduced motion, and reset. Persist only these nonsensitive preferences on the device. Respect system reduced-motion preferences. A dark theme is optional and should appear only after all public and portal surfaces have been designed and checked. Do not show a decorative toggle that does nothing.

Plan English and Telugu content support for a later approved translation pass. Do not publish a language selector until that language's navigation, forms, content, and error messages actually work. Make FAQs easy to scan. Add back-to-top or section shortcuts where page length warrants them. Avoid chatbot widgets, push notification prompts, autoplay videos, or cookie banners without an actual product need.

The benchmark is useful patterns seen on prominent university sites—clear programme discovery, audience-specific gateways, search, contact/location access, and structured information—not copying another university's identity or claiming every fashionable feature is necessary.

## 9. Accessibility, performance, and implementation

Work within the existing React, TypeScript, and Vite project. Preserve the package manager, useful components, and portal behaviour. Keep institutional facts and asset metadata separate from UI code. Keep reusable navigation, dialogs, programme content, and tokens maintainable.

Target WCAG 2.2 AA: semantic landmarks, one main heading per page, skip link, logical heading order, visible focus, labelled forms, accessible disclosure and modal behaviour, useful alt text, sufficient colour contrast, and understandable error messages. Aim for 44px touch targets, 200% zoom usability, and no horizontal page overflow. High contrast settings supplement a readable default design; they do not replace it.

Keep a source record for each factual claim and image. Prefer approved local copies with accurate alt text. Optimise delivery dimensions and formats without altering documentary content. Reserve image dimensions to minimise layout shifts. Load the hero deliberately and lazy-load gallery images. Preserve source provenance and distinguish archived images from recent photography.

Use page-specific titles and descriptions. Do not invent structured-data ratings, accreditation, contact details, or opening hours. Configure hosting rewrites for direct route refreshes at deployment time. This prompt does not authorize publishing or changes to the existing live college site.

## 10. Acceptance criteria and handoff

- The society name is clearly above the navigation.
- All five original menu destinations remain present and usable.
- B.Ed and D.Ed are distinct pages, reachable both from navigation and home-page cards.
- Navigation remains accessible while scrolling on desktop and mobile.
- Student, faculty, and admin portals are reachable without scrolling to the footer.
- Text is noticeably larger throughout the site and portals.
- Search, settings persistence/reset, dropdown dismissal, FAQs, gallery navigation, and enquiry preview work.
- Official document links are preserved in their correct programme collections.
- Images load and retain accurate archive captions; no unrelated campus photography is misrepresented.
- Verify 360px, 390px, 768px, 1024px, and 1440px layouts, large-text mode, browser history, direct-route refresh, keyboard access, and reduced motion.
- Run the production build and meaningful interaction tests. Inspect actual desktop and mobile screenshots for clipping, crowding, tiny text, and hidden controls.
- Deliver a concise change summary, local preview instructions, source/asset register, screenshots, checks performed, and a clear split between implemented UI, remaining UI roadmap, and services requiring a future backend.

Begin by reviewing the existing project and this evidence. Complete the requested UI work using the Academic Spectrum direction; do not stop at a generic proposal.

---

Benchmark references: [Oxford](https://www.ox.ac.uk/), [Stanford](https://www.stanford.edu/), and [W3C WCAG 2.2 guidance](https://www.w3.org/WAI/WCAG22/quickref/). These inform interface patterns; they provide no facts about St. Thomas.
