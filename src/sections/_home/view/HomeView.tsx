// _mock
import { _pricingHome } from 'src/_mock';
//
import PricingHome from '../../pricing/home';
import {
  HomeHero,
  HomeFAQs,
  HomeNewStart,
  HomeForDesigner,
  HomeCombination,
  HomeAdvertisement,
  HomeFeatureHighlights,
  HomeFlexibleComponents,
} from '../components';

// ----------------------------------------------------------------------

export default function HomeView() {
  return (
    <>

      <HomeHero />

      <HomeNewStart />

      <HomeFlexibleComponents />

      <HomeFeatureHighlights />

      <HomeForDesigner />

      <PricingHome plans={_pricingHome} />

      <HomeFAQs />

      <HomeCombination />

      <HomeAdvertisement />
    </>
  );
}
