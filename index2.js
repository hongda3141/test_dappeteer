import puppeteer from 'puppeteer';
import dappeteer from '@chainsafe/dappeteer';

async function main() {
//   const browser = await dappeteer.launch(puppeteer, { metamaskVersion: 'v10.8.1' });
//   const metamask = await dappeteer.setupMetamask(browser);
//   const [metamask, page] = await dappeteer.bootstrap(puppeteer, { metamaskVersion: 'v10.15.0' });
//   await metamask
const [metamask, page, browser] = await dappeteer.bootstrap(puppeteer, { seed: "blush emerge age admit desert segment effort wood voice level output toddler", password: "maernimanxiezou", showTestNets: true, metamaskVersion: 'v10.15.0' });
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