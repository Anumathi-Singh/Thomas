# St. Thomas: research, design decisions, and implemented changes

Reviewed 30 September 2026. Project inspected and updated locally in `D:\Thomas`.

## What the original site establishes

The [official home page](https://stthomascollegeofeducation.org.in/index.html) places K.P. Educational Society above its navigation. It identifies two institutions in Bodhan: St. Thomas College of Education and St. Thomas Institution of Elementary Teachers Education. The published address is Pegadapally Road, Achanpally, Bodhan, Nizamabad, Telangana 503180. The [contact page](https://stthomascollegeofeducation.org.in/contact.html) corroborates the location and supplies a map; the published coordinates are 18.677198, 77.906005.

The five original navigation destinations are Home, St. Thomas B.Ed, St. Thomas D.Ed, Photo Gallery, and Contact Us. The replacement should preserve this institutional structure while improving readability and adding convenient services.

| Original page | Published content checked | Treatment in the revised UI |
|---|---|---|
| Home | Society identity, both institution names, address, coordinates, main-building photograph | Prominent society masthead, institution introduction, authentic building hero, location |
| [B.Ed](https://stthomascollegeofeducation.org.in/bed.html) | Two NCTE-labelled scans, five staff images, one university staff-approval scan | Dedicated B.Ed page with eight individually linked archive documents |
| [D.Ed](https://stthomascollegeofeducation.org.in/ded.html) | B-category admission notice, two NCTE-labelled scans, six staff-approval images | Dedicated D.Ed page with nine individually linked archive documents |
| [Photo Gallery](https://stthomascollegeofeducation.org.in/photo.html) | Seven archived photographs of rooms and teaching materials | Separate gallery with captions and a previous/next lightbox |
| Contact Us | Address, exterior photo, map | Dedicated contact page, directions, enquiry preview |

All 17 document URLs returned HTTP 200 with image content when checked. This verifies availability, not current regulatory validity or the accuracy of every statement inside a scan. The scans have not been fully transcribed or legally audited. Current staff appointments and approval status remain unverified.

## Society and college details that remain unresolved

The official pages establish the society's management relationship, but do not provide enough readable evidence to confirm its founding year, registration number, founders, office-bearers, expanded initials, current leadership, or approved mission statement. Those facts were deliberately not invented.

The current academic year's fees, eligibility thresholds, course duration, intake, admission dates, contact phone/email, curriculum, facilities availability, outcomes, and recognition/affiliation status require current institutional evidence. The old website's developer telephone number must never become the college contact number.

The NCTE's [2022 institution listing](https://ncte.gov.in/WebAdminFiles/DocMarquee/0_05_05_2022_637873276585564383.pdf) includes the combined St. Thomas institutional name at Achanpally, Bodhan, and lists B.Ed/D.El.Ed. It provides historical corroboration of identity, not a current recognition certificate. Preserve “D.Ed” as the old site's navigation label and confirm current terminology before presenting an admissions prospectus.

A search also surfaced an [NCTE corrigendum](https://ncte.gov.in/WebAdminFiles/SRC/St.Thomas%20College%20of%20Teacher%20Education-B.Ed-Mhbn-APS00022.pdf.pdf) that corrects a reference from Bodhan to a St. Thomas institution in Gadwal. It is particularly unsuitable as evidence for this college's current intake or approval. Similar names are a real source of mistaken attribution.

## Other existing online listings

- [Youth4work](https://www.university.youth4work.com/stceb_st-thomas-college-of-education-bodhan) names the Bodhan institution and supplies contact/affiliation claims, but contains inconsistent geographical wording and unsourced facilities copy.
- [IndCareer](https://www.indcareer.com/telangana/nizamabad/st-thomas-college-education-bodhan) has a Bodhan listing with a 2014 modification date and conflicting one-/two-year course wording.
- [India Colleges Hub](https://www.indiacollegeshub.com/colleges/st-thomas-college-of-education.aspx) has an older-looking directory entry with incomplete approval/year information and generic promotional claims.
- [Edial](https://edial.in/institute/st-thomas-college-of-education-bodhan) provides a directory entry, but its short-course catalogue and contact details were not corroborated by the supplied official site.

These are existing listings, not verified alternative official college websites. They were used to identify inconsistencies, not to populate admissions claims. St. Thomas sites for Thrissur, Palai, and other locations belong to different institutions and must not supply this project's biography or branding.

## Relevant contemporary website patterns

[Oxford](https://www.ox.ac.uk/) provides programme discovery, search, audience links, practical visiting information, and institutional information. [Stanford](https://www.stanford.edu/) uses structured navigation and audience destinations such as applicants and faculty/staff. These support a practical design direction for St. Thomas: distinct programme paths, immediate portal access, page search, and useful contact information.

These examples are qualitative design benchmarks, not a ranked market survey. There is no reliable finite list of “all current market features.” The master prompt prioritises useful patterns and explicitly marks speculative features as optional. Accessibility targets follow [W3C's WCAG 2.2 guidance](https://www.w3.org/WAI/WCAG22/quickref/); a complete compliance audit has not been performed.

## Theme and imagery decisions

**Forest & Ivory** retains the current theme's character while strengthening hierarchy: deep forest `#163E34`, warm ivory `#FAF8F1`, pale sage `#E9EDDF`, and restrained gold `#B7995C`. Playfair Display headings pair with larger DM Sans body and UI text. Public-page body copy is approximately 18px, with larger-text preferences available.

Two building photographs and all seven gallery images were retrieved directly from the supplied college domain and visually inspected. The hero and campus preview now use these assets. They are labelled as archive photographs; no capture date or current condition is implied. Some gallery originals are small or soft, especially the teaching-materials shelf image, so the gallery preserves their proportions. No stock campus or generated college photograph is presented as the actual institution.

See the separate **St-Thomas-Asset-Register.md** for original URLs and local mappings. Original files are retained at their source resolution; image-delivery optimisation and institutional confirmation of reuse rights remain publication-stage work.

## Implemented in this revision

- Society masthead above sticky navigation.
- All five original navigation labels and destinations.
- Separate B.Ed, D.Ed, gallery, and contact pages.
- Distinct programme links from the landing page; the former programme pop-up is no longer the primary pathway.
- Student/faculty/admin login dropdown, admission shortcut, and separate B.Ed/D.Ed document shortcuts.
- Search across main pages and portals, including no-result feedback.
- Larger-text, high-contrast, reduced-motion, and reset preferences saved on the device.
- Original programme documents presented as archival records.
- Official college photographs and gallery lightbox.
- Larger typography and responsive navigation for mobile/tablet widths.
- Legacy `.html` path aliases inside the local application.
- Existing student, faculty, and admin demo workspaces retained.

The larger portal feature catalogue in the master prompt is a roadmap, not a claim that every future screen was built in this pass. Public notice management, full admissions tracking, expanded role workspaces, translations, and optional additional login roles are not implemented as live services.

## Validation and delivery boundaries

The production build passes. Eight Playwright checks pass, covering the enquiry preview, all three demo portals, mobile portal access, loaded hero imagery, programme routing, sticky navigation, settings persistence, gallery navigation, search, and public-page overflow at 360, 390, 768, 1024, and 1440 pixels. Desktop and mobile screenshots were inspected.

This is a local UI update. Nothing was published to the college's live domain. Sign-in forms do not authenticate, enquiries are not transmitted, and portal data remains sample data. Hosting must be configured to serve application routes on direct requests before deployment.

Local preview: run `npm.cmd run dev` from `D:\Thomas` and open the displayed local address. Production verification: `npm.cmd run build`. Interaction checks: `npm.cmd test`.

The master prompt, this research report, asset register, and review images are delivered together. Copies of the research documents are also kept with the project's documentation.
