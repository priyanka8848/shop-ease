import React from "react";
import useDisplayTagHooks from "../hooks/HomePageHooks/DisplayTagHooks";
import useHomeTopCategories from "../hooks/HomePageHooks/HomeTopCategoriesHook";
import SecondaryThemeOurFeaturedBrand from "./Home_page2/SecondaryThemeOurFeaturedBrand";
import SecondaryThemeHomeBanner from "./Home_page2/SecondaryThemeHomeBanner";
import SecondaryThemeHomeTopCategories from "./Home_page2/SecondaryThemeHomeTopCategories";
import SecondaryThemeTopCategoriesBanner from "./Home_page2/SecondaryThemeTopCategoriesBanner";
import SecondaryThemeDisplayTag from "./Home_page2/SecondaryThemeDisplayTag";

const Homepage3Master = () => {
  const { allTagsData }: any = useDisplayTagHooks();

  const { homeTopCategories, isLoading, selectedCurrencyVal }: any =
    useHomeTopCategories();

  const renderSectionComponent: any = (index: number) => {
    switch (index) {
      case 0:
        return (
          <SecondaryThemeTopCategoriesBanner
            homeTopCategories={homeTopCategories}
            selectedCurrencyVal={selectedCurrencyVal}
          />
        );
      case 1:
        return <SecondaryThemeOurFeaturedBrand />;
      // Add more cases as needed for other section components
      default:
        return null;
    }
  };

  console.log("display tag in home ", allTagsData);

  return (
    <>
      <SecondaryThemeHomeBanner />
      <SecondaryThemeHomeTopCategories
        homeTopCategories={homeTopCategories}
        isLoading={isLoading}
        selectedCurrencyVal={selectedCurrencyVal}
      />

      {allTagsData?.map((data: any, index: number) => (
        <React.Fragment key={index}>
          <SecondaryThemeDisplayTag data={data} />
          {renderSectionComponent(index)}
        </React.Fragment>
      ))}

      {/* <NewArrivals newarrivalTagListing={newArrivalTagListingOfProducts} />
      <HomeTopCategoriesBanner homeTopCategories={homeTopCategories} />
      <SpecialOffer specialTagListing={specialOfferTagListingOfProducts} />
      <HomeTopBrands />
      <BestSeller bestSellerListing={bestSellerTagListingOfProducts} /> */}
    </>
  );
};

export default Homepage3Master;
