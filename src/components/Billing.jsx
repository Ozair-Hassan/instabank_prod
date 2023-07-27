import { apple, bill, google } from '../assets'
import styles, { layout } from '../styles'

const Billing = () => (
  <section
    id="product"
    className={layout.sectionReverse}
  >
    <div className={layout.sectionImgReverse}>
      <img
        src={bill}
        alt="billing"
        className="w-[100%] h-[100%] relative z-[5]"
      />
      <div className="absolute z-[3] -left-1/2 top-0 w-[45%] h-[35%] rounded-full white__gradient2" />
      <div className="absolute z-[3] -left-1/2 top-0 w-[45%] h-[35%] rounded-full pink__gradient2" />
    </div>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Simplify your <br className="sm:block hidden" /> billing & invoicing
      </h2>
      <p className={`${styles.paragraph} max-w-[4760px] mt-5`}>
        Effortlessly manage billing and invoices with our efficient record
        keeping and user friendly platform. Experience hassle free financial
        transactions and secure record management!
      </p>
      <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
        <img
          src={apple}
          alt="apple_store"
          className="w-[128px] h-[42px] object-contain mr-5 cursor-pointer"
        />
        <img
          src={google}
          alt="google_play"
          className="w-[128px] h-[42px] object-contain  cursor-pointer"
        />
      </div>
    </div>
  </section>
)

export default Billing
