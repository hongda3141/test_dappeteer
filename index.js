import puppeteer from 'puppeteer';
import dappeteer from '@chainsafe/dappeteer';

async function main() {
//   const [metamask, page] = await dappeteer.bootstrap(puppeteer, { metamaskVersion: 'v10.15.0' });
  // const [metamask, page] = await dappeteer.launch(puppeteer, { metamaskVersion: 'v10.15.0' });
  const [metamask, page, browser] = await dappeteer.bootstrap(puppeteer, { seed: "blush emerge age admit desert segment effort wood voice level output toddler", password: "metamaskPassword", metamaskVersion: 'v10.15.0' });
  
  const pages = await browser.pages();
  await pages[1].reload();
  await pages[1].waitForNavigation();
  
  // click continue
  await pages[1].evaluate(() => document.querySelector('.btn-primary').click());
  
  // click connect
  await pages[1].evaluate(() => document.querySelector('.btn-primary').click());
  // you can change the network if you want
  await metamask.switchNetwork('ropsten');

  // you can import a token
  await metamask.addToken({
    tokenAddress: '0x4f96fe3b7a6cf9725f59d353f723c1bdb64ca6aa',
    symbol: 'KAKI',
  });

  // go to a dapp and do something that prompts MetaMask to confirm a transaction
  await page.goto('http://my-dapp.com');
  const payButton = await page.$('#pay-with-eth');
  await payButton.click();

  // 🏌
  await metamask.confirmTransaction();
}

main();

// import puppeteer from 'puppeteer';
// import dappeteer from '@chainsafe/dappeteer';

// async function main() {
//   const browser = await dappeteer.launch(puppeteer, { metamaskVersion: 'v10.15.0' });
//   const metamask = await dappeteer.setupMetamask(browser);

//   // you can change the network if you want
//   await metamask.switchNetwork('ropsten');

//   // you can import a token
//   await metamask.addToken('0x4f96fe3b7a6cf9725f59d353f723c1bdb64ca6aa');

//   // go to a dapp and do something that prompts MetaMask to confirm a transaction
//   const page = await browser.newPage();
//   await page.goto('http://my-dapp.com');
//   const payButton = await page.$('#pay-with-eth');
//   await payButton.click();

//   // 🏌
//   await metamask.confirmTransaction();
// }

// main();



// https://api.github.com/repos/metamask/metamask-extension/releases?per_page=100