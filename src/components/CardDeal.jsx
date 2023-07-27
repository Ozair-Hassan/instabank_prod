import { card } from '../assets'
import styles, { layout } from '../styles'
import Button from './Button'

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Find your perfect card <br className="sm:block hidden" /> in a few
        simple steps!
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Leveraging our extensive network of company contacts, we effortlessly
        guide you towards finding the best card deals in just a few simple
        steps!
      </p>
      <Button styles="mt-10" />
    </div>
    <div className={layout.sectionImg}>
      <img
        src={card}
        alt="card"
        className="w-[100%] h-[100%]"
      />
    </div>
  </section>
)

export default CardDeal
