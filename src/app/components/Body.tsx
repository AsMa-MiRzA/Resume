import React from 'react'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';

const Body = () => {
  return (
    <section className="max-w-4xl mx-auto flex md:flex-row flex-col mt-20">
      <div className="p-5 max-w-lg">
        <h1 className="font-autograph1 text-white text-underline ">"I am a Front End Developer"</h1>
        <p className="mt-8 font-semibold"> I am a skilled Frontend Developer with a passion for crafting engaging and user-friendly web experiences. Through my expertise in HTML, CSS, and JavaScript, I transform designs into functional websites, ensuring seamless navigation and optimal performance. With attention to detail and a creative mindset, I strive to deliver impactful digital solutions.</p>
        <button className="group flex  items-center bg-gradient-to-r from-cyan-500 to-blue-500 py-2 px-4 rounded-lg mt-8 font-bold">Profile
          <MdOutlineKeyboardArrowRight size={20} className="group-hover:rotate-90 duration-500"/>
     </button>
    </div>
    {/*left ends here*/}
    {/* {right side starts here} */}
    <div>
          <img src = "https://www.phonak.com/content/phonak/ca/en/about-us/_jcr_content/root/container/tabs_1792417859/container/teaser_copy.coreimg.png/1669112100234/ph-pic-young-muslim-businesswoman-hijab-laptop-2101929397-ne.png"
          className=" w-[300px] h-[300px] mx-auto  mt-10 rounded-full "
          alt="profile pic" 
          width = {400}
          height = {400}/> 
          {/* <img src = "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.phonak.com%2Fen-ca%2Fabout-us&psig=AOvVaw0LhutN_6yE0_RwHmVtzIkR&ust=1685098912281000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCOiihOOokP8CFQAAAAAdAAAAABAU"/>  */}
    </div>
    </section>
  )
}

export default Body