import {test,expect, chromium} from '@playwright/test'

test('handling a new browser', async({context,page})=>{


await page.goto('https://testautomationpractice.blogspot.com/')

    let allPages = await Promise.all([
      page.waitForEvent('popup'),
      page.locator('#PopUp').click()

    ]) 

    await allPages[0].waitForLoadState()
    await page.waitForTimeout(3000) 
    let pages = context.pages()
    console.log(pages.length)
   
    for (let tab of pages){
        console.log(await tab.title())
    }

})



test('File upload', async({context,page})=>{


await page.goto('https://the-internet.herokuapp.com/upload')

//let fileInput = page.locator('#file-upload').setInputFiles('testdata/result.txt')
let fileInput = page.locator('#file-upload').setInputFiles("E:/STUDY2026/PLAYWRIGHT2026/MohanMohan/Class Recordings/Playwright/Notes/result.txt")


await page.waitForTimeout(3000)
await page.locator('#file-submit').click()
await page.waitForTimeout(3000)
await expect(page.locator('div>h3')).toContainText('File Uploaded!')

await page.goto('https://testautomationpractice.blogspot.com/')



let fileInput1 = page.locator('#multipleFilesInput').setInputFiles([
 
    "D:/testfiles/result1.txt",
    "D:/testfiles/result2.txt",
    "D:/testfiles/result3.txt"

])
await page.waitForTimeout(3000)


await page.locator('[type="submit"]').nth(1).click()

await page.waitForTimeout(5000)

})