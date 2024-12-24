import React from 'react'
import Presentation from '../[locale]/presentation/page'
import About from '../[locale]/about/About'
import Activities from '../[locale]/activities/Activities'
import Destinations from '../[locale]/destinations/Destinations'
import HeroSection from '../[locale]/home/page'
import {useTranslations} from 'next-intl';
import {Link} from '../../i18n/routing';

export default function page() {
  const t = useTranslations('HomePage');
  return (
    
    <>
      <HeroSection/>
      <Presentation/>
      <About/>
      <Activities/>
      <Destinations/>
      <h1 className='text-black'>{t('title')}</h1>
      <Link href="/about">{t('about')}</Link>
    </>
  )
}
