import {Before, Given, Then} from 'cucumber';
import { AppPage } from '../../src/app.po';

import * as chaiExpect from 'chai';
import * as cap from 'chai-as-promised';

chaiExpect.use(cap);
const expect = chaiExpect.expect;

let app: AppPage;

Before(function() {
  app = new AppPage();
});

Given(/^I navigate to the app$/, () => {
  app.navigateTo();
});

Then(/^the page title should be "([^"]*)"$/, (pageTitle) => {
  expect(app.getParagraphText()).to.eventually.equal(pageTitle);
});
