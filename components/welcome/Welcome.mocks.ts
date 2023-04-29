import { IWelcome } from './Welcome';

const base: IWelcome = {
  title: `Welcome`,
  welcomeBody:
    'An aesthetics doctor who believes in only elevating your natural beauty. Dr Sarah Khan is deeply passionate about combining the art and science of aesthetic treatments with anti-ageing and wellness principles. Her goal is to make subtle shifts for long term enhancement of your own beautiful facial features, to nuture self confidence in your own skin.',
  aboutBody:
    'Dr Sarah Khan is a Board Certified Doctor in Beverly Hills, California with a passion for Medical Aesthetics. Dr Sarah is the Founder and Medical Director of ARA Med Spa in Beverly Hills.',
  medicalTitle: `Medical Training`,
  medicalBody:
    'Dr Sarah was born and raised in London and completed her medical school education at Imperial College, London. She then transitioned to the US to complete a three year residency in Internal Medicine at UCLA Olive View Medical Center, followed by a three year Research Fellowship at UCLA Medical Center, a four year diagnostic radiology residency and two subspecialty fellowships at UCLA Medical Center. Dr Sarah is a practicing board certified Diagnostic & Interventional radiologist in Marina Del Rey and Los Angeles, at Cedars Sinai Marina Del Rey Hospital and Centinela Hospital. ',
  buttonTextMore: `Learn More`,
  buttonLinkMore: `/about`,
  buttonTextBook: `Book Consultation`,
  buttonLinkBook: `/contact`,
};

export const mockWelcomeProps = {
  base,
};
