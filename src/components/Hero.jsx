import styles from '../styles'
import { discount, robot } from '../assets'
import GetStarted from './GetStarted'
import { Canvas } from '@react-three/fiber'
import SpinningSphere from './SpinningSphere'
import { OrbitControls } from '@react-three/drei'

const Hero = () => {
  return (
    <section
      id="home"
      className={`flex md:flex-row flex-col ${styles.paddingY}`}
    >
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
      >
        <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          <img
            src={discount}
            alt="discount"
            className="w-[32px] h-[32px]"
          />
          <p className={`${styles.paragraph} ml-2`}>
            <span className="text-yellow-300">15%</span> Discount For{' '}
            <span className="text-yellow-300">3 Month</span> Account
          </p>
        </div>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
            The New <br className="sm:block hidden" />{' '}
            <span className="text-gradient">Unparalleled</span>
          </h1>
          <div className="ss:flex hidden md:mr-4 mr-0 ml-4">
            <GetStarted />
          </div>
        </div>

        <h1 className="font-poppins font-semibold ss:text-[60px] text-[50px] text-white ss:leading-[100.8px] leading-[75px] w-full">
          Payment Experiance.
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Discovering your ideal credit card is our expertise, with our team
          employing a proven methodology that relies on analysis of annual
          percentage rates and fees
        </p>
      </div>
      {/* bg-[url('src/assets/robot.png')]  bg-no-repeat bg-contain */}
      <div
        className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative `}
      >
        <img
          src={robot}
          alt="billing"
          className="w-[100%] h-[100%] relative z-[5]"
        />
        <div className="absolute z-[10] -top-5 -left-20">
          <Canvas>
            <OrbitControls />
            {/* Add lighting and other components you may want */}
            <ambientLight intensity={0.5} />
            <directionalLight
              position={[0, 5, 10]}
              intensity={1}
            />

            <SpinningSphere size={2.5} />
          </Canvas>
        </div>
        <div className="absolute z-[10] -bottom-14 -left-20  ">
          <Canvas>
            <OrbitControls />
            {/* Add lighting and other components you may want */}
            <ambientLight intensity={0.5} />
            <directionalLight
              position={[0, 5, 10]}
              intensity={1}
            />

            <SpinningSphere size={1.5} />
          </Canvas>
        </div>
        <div className="absolute z-[10] -bottom-5 -right-10">
          <Canvas>
            <OrbitControls />
            {/* Add lighting and other components you may want */}
            <ambientLight intensity={0.5} />
            <directionalLight
              position={[0, 5, 10]}
              intensity={1}
            />

            <SpinningSphere size={2} />
          </Canvas>
        </div>

        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}
      </div>

      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div>
    </section>
  )
}

export default Hero
