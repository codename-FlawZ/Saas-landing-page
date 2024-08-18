import pricingTiers from "../constants/index";
import { CheckIcon } from "@heroicons/react/16/solid";
import { twMerge } from "tailwind-merge";

const Pricing = () => {
  return (
	<section className="py-24">
    <div className="container">
      <div className="section-heading">
       <h2 className="section-title">Pricing</h2>
       <p className="section-description mt-5">Free forever. Upgrade for unlimited tasks, better security, and exclusive featues.</p>
      </div>
      <div className="flex flex-col gap-6 items-center mt-10 lg:flex-row lg:items-end lg:justify-center">
        {pricingTiers.map(({ title, monthlyPrice, buttonText, popular, inverse, features }) => (
          <div className={twMerge("p-10 border border-[#F1F1F1] rounded-3xl shadow-[0_7px_14px_#EAEAEA] max-w-xs w-full", inverse === true && 'border-black bg-black text-white')}>
            <div className="flex justify-between">
              <h3 className={twMerge("text-lg font-bold text-black/50", inverse === true && 'text-white/60')}>{title}</h3>
              {popular === true && (
                <div className="inline-flex text-sm px-4 py-1.5 rounded-xl border border-white/20">
                  <span className="bg-[linear-gradient(to_right,#DD7DDF,#E1CD86,#BBCB92,#71C2EF,#3BFFFF,#DD7DDF)] text-transparent bg-clip-text font-medium">Popular</span>
                </div>
            )}
            </div>
            <div className="flex items-baseline gap-1 mt-[30px]">
              <span className="text-4xl font-bold tracking-tighter leading-none">${monthlyPrice}</span>
              <span className={twMerge("tracking-tight font-bold text-black/50", inverse === true && 'text-white/60')}>/month</span>
            </div>
            <button className={twMerge("btn btn-primary w-full mt-[30px]", inverse === true && 'bg-white text-black hover:bg-transparent hover:text-white transition-all duration-200')}>{buttonText}</button>
            <ul className="flex flex-col gap-5 mt-8">
              {features.map((feature) => (
                <li className="text-sm flex items-center gap-4">
                  <CheckIcon className={twMerge("w-6 h-6", inverse === true && 'text-green-700')} />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>
  )
}

export default Pricing