import { test, expect } from '@playwright/test';
test('public website and admission preview', async ({ page }) => {
 const errors: string[]=[]; page.on('pageerror', e=>errors.push(e.message));
 await page.goto('/'); await expect(page.getByRole('heading', { name: 'A life of learning. A future of teaching.' })).toBeVisible();
 await page.getByRole('link',{name:'Discover the programme'}).first().click();
 await expect(page).toHaveURL(/bed/); await expect(page.getByRole('heading',{name:'St. Thomas B.Ed',exact:true})).toBeVisible();
 await page.getByRole('button',{name:'Enquire about admissions'}).click();
 await page.getByLabel('Your name').fill('Preview Visitor'); await page.getByLabel('Email address').fill('preview@example.com'); await page.getByLabel('Your question').fill('Please share the admission process.');
 await page.getByRole('button',{name:'Preview enquiry'}).click(); await expect(page.getByRole('status')).toContainText('hasn’t been sent');
 await page.getByRole('button',{name:'Back to the college'}).click();
 expect(errors).toEqual([]);
});
for(const role of ['student','faculty','admin']) test(`${role} portal navigation, search, save and sign out`,async({page})=>{
 await page.goto(`/portal/${role}`);await page.getByRole('button',{name:'Explore demo portal'}).click();
 await expect(page.getByRole('heading',{name:/Hello,/})).toBeVisible();
 await page.locator('.workspace-row').first().click();await page.getByRole('button',{name:'Save to my workspace'}).click();await expect(page.getByRole('button',{name:'Saved · click to remove'})).toBeVisible();await page.getByRole('button',{name:'Close resource'}).click();
 await page.getByLabel('Search workspace').fill('no-match-xyz');await expect(page.getByText('No matches. Try another search.')).toBeVisible();
 await page.getByRole('button',{name:'Sign out of preview'}).click();await expect(page.getByRole('heading',{name:'Welcome back.'})).toBeVisible();
});
test('mobile layout and navigation',async({page})=>{
 await page.setViewportSize({width:390,height:844});await page.goto('/');await page.getByRole('button',{name:'Toggle navigation'}).click();await page.getByRole('button',{name:'College portal',exact:true}).click();await page.getByRole('button',{name:'Faculty login'}).click();await expect(page).toHaveURL(/portal\/faculty/);
 expect(await page.evaluate(()=>document.documentElement.scrollWidth<=window.innerWidth)).toBe(true);
 await page.goto('/');expect(await page.evaluate(()=>document.documentElement.scrollWidth<=window.innerWidth)).toBe(true);
 await page.screenshot({path:'artifacts/mobile-home.png',fullPage:true});
});
test('desktop visual capture and loaded imagery',async({page})=>{await page.setViewportSize({width:1440,height:1000});await page.goto('/');await page.evaluate(()=>document.fonts.ready);await expect(page.locator('.hero-image')).toBeVisible();await expect.poll(()=>page.locator('.hero-image').evaluate((img:HTMLImageElement)=>img.naturalWidth)).toBeGreaterThan(0);await expect(page.getByRole('button',{name:'Toggle navigation'})).toBeHidden();await page.screenshot({path:'artifacts/desktop-home.png',fullPage:true});await page.goto('/portal/faculty');await page.screenshot({path:'artifacts/faculty-login.png',fullPage:true});await page.getByRole('button',{name:'Explore demo portal'}).click();await page.screenshot({path:'artifacts/faculty-dashboard.png',fullPage:true});});

test('separate programmes, archive, sticky header and saved preferences',async({page})=>{
 await page.goto('/');
 await expect(page.getByText('K.P. EDUCATIONAL SOCIETY',{exact:true})).toBeVisible();
 await page.getByRole('link',{name:'St. Thomas D.Ed',exact:true}).click();
 await expect(page).toHaveURL(/ded/);
 await expect(page.getByRole('heading',{name:'St. Thomas D.Ed',exact:true})).toBeVisible();
 await expect(page.getByRole('link',{name:/B-category admission notice/})).toHaveAttribute('href',/DedNotification/);
 await page.locator('#documents').scrollIntoViewIfNeeded();
 expect(await page.locator('.header').evaluate(e=>e.getBoundingClientRect().top)).toBe(0);
 await page.getByRole('button',{name:'Website settings'}).click();
 await page.getByLabel('Larger text',{exact:true}).check();
 await page.getByLabel('High contrast',{exact:true}).check();
 await page.getByRole('button',{name:'Close settings or search'}).click();
 await page.reload();await expect(page.locator('html')).toHaveAttribute('data-large','true');
 await page.getByRole('link',{name:'Photo Gallery',exact:true}).click();
 await page.getByRole('button',{name:'College main building'}).click();
 await expect(page.getByRole('dialog')).toBeVisible();
 await page.getByRole('button',{name:/Next/}).click();
 await expect(page.getByRole('dialog')).toContainText('College exterior');
 await page.keyboard.press('Escape');
 await page.getByRole('button',{name:'Search website'}).click();
 await page.getByLabel('Search pages and portals').fill('student');
 await page.getByRole('link',{name:'Student portal',exact:true}).click();await expect(page).toHaveURL(/portal\/student/);
});
test('public routes fit narrow and tablet screens',async({page})=>{
 for(const width of [360,390,768,1024,1440]){
  await page.setViewportSize({width,height:900});
  for(const path of ['/','/bed','/ded','/gallery','/contact']){
   await page.goto(path);
   expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),`${path} at ${width}`).toBe(true);
  }
 }
});
