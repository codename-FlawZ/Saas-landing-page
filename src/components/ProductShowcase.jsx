import productImage from "../assets/product-image.png";
import pyramidImage from "../assets/pyramid.png";
import tubeImage from "../assets/tube.png";

const ProductShowcase = () => {
  return (
	<section className="bg-gradient-to-b from-[#FFFFFF] to-[#D2DCFF] py-24 overflow-x-clip">
    <div className="container">
      <div className="max-w-[540px] mx-auto">
       <div className="flex justify-center">
        <div className="tag">Boost your Productivity</div>
        </div>
         <h2 className="text-center text-3xl md:text-[54px] md:leading-[60px] font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text mt-5">A more effective way to track progress</h2>
         <p className="text-center text-[22px] leading-[30px] tracking-tight text-[#010D3E] mt-5">Effortlessy turn your ideas into a fully functional, responsive, Saas website in just minutes with this template.</p>
       </div>
       <div className="relative">
       <img src={productImage} alt="Product Image" className="mt-10" />
       <img src={pyramidImage} alt="Pyramid Image" className="hidden md:block absolute -right-36 -top-32" height={262} width={262} />
       <img src={tubeImage} alt="Tube Image" className="hidden md:block absolute bottom-24 -left-36" height={248} width={248} />
       </div>
    </div>
  </section>
  )
}

export default ProductShowcase