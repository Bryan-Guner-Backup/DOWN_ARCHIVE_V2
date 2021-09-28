import React from 'react';
import { render, screen } from '@testing-library/react';

import Footer from '../components/common/Footer';

describe('Tests the links in footer link to main BTP site', () => {
  test('Bridges To Prosperity should link to main BTP site', () => {
    render(<Footer />);
    const btpLink = screen.getByTestId(/testone/i);
    expect(btpLink).toHaveAttribute('href', 'https://bridgestoprosperity.org/');
  });
  test('Join Us should link to main BTP site/join-us', () => {
    render(<Footer />);
    const joinLink = screen.getByTestId(/testtwo/i);
    expect(joinLink).toHaveAttribute(
      'href',
      'https://bridgestoprosperity.org/join-us/'
    );
  });
  test('FAQS should link to main BTP site/faqs', () => {
    render(<Footer />);
    const faqLink = screen.getByTestId(/testthree/i);
    expect(faqLink).toHaveAttribute(
      'href',
      'https://bridgestoprosperity.org/faqs/'
    );
  });
  test('Contact Us should link to main BTP site/contact', () => {
    render(<Footer />);
    const contactLink = screen.getByTestId(/testfour/i);
    expect(contactLink).toHaveAttribute(
      'href',
      'https://bridgestoprosperity.org/contact/'
    );
  });
  test('Financials should link to main BTP site/financials', () => {
    render(<Footer />);
    const financialsLink = screen.getByTestId(/testfive/i);
    expect(financialsLink).toHaveAttribute(
      'href',
      'https://bridgestoprosperity.org/financials/'
    );
  });
  test('Donor Privacy Policy should link to main BTP site/donor-privacy-policy', () => {
    render(<Footer />);
    const donorLink = screen.getByTestId(/testsix/i);
    expect(donorLink).toHaveAttribute(
      'href',
      'https://bridgestoprosperity.org/donor-privacy-policy/'
    );
  });
});
