const styles = {
  boxWidth: 'xl:max-w-[1280px] w-full',

  heading2:
    'font-poppins font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] w-full',
  heading3:
    'font-poppins font-semibold xs:text-[20px] text-[16px] text-white xs:leading-[50.8px] leading-[40.8px] w-full',
  heading4:
    'flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[60.8px] leading-[45px]  w-full mb-[15px] ml-[4px] ',
  paragraph:
    'font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px]',
  formInput:
    ' outline-none text-black text-[14px] font-medium font-poppins rounded-[5px] border border-solid border-yellow-300 focus:border-2 focus:border-yellow-400 focus:border-solid bg-orange-100',

  flexCenter: 'flex justify-center items-center',
  flexStart: 'flex justify-center items-start',

  paddingX: 'sm:px-16 px-6',
  paddingY: 'sm:py-16 py-6',
  paddingY2: 'sm:py-14 py-4',
  padding: 'sm:px-16 px-6 sm:py-12 py-4',

  marginX: 'sm:mx-16 mx-6',
  marginY: 'sm:my-16 my-6',
}

export const layout = {
  section: `flex md:flex-row flex-col ${styles.paddingY}`,
  section2: `flex md:flex-row flex-col ${styles.paddingY2}`,
  sectionReverse: `flex md:flex-row flex-col-reverse ${styles.paddingY}`,

  sectionImgReverse: `flex-1 flex ${styles.flexCenter} md:mr-10 mr-0 md:mt-0 mt-10 relative`,
  sectionImg: `flex-1 flex ${styles.flexCenter} md:ml-10 ml-0 md:mt-0 mt-10 relative`,

  sectionInfo: `flex-1 ${styles.flexStart} flex-col`,
}

export default styles
