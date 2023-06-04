import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';

import React from 'react';
import Link from 'next/link';

export const SocialIcon = () => {
    return (
        <div>
            <Link href={"http://Linkedin.com/"} target={"_blank"}>
                <div className='flex justify-between ml-[-86px] hover:ml-0 duration-200  text-sm items-stretch gap-4 fixed text-white bg-slate-800 top-[30vh] w-32 py-3 px-5 rounded-full'>
                    Linkedin
                    <FaLinkedin size={30} />
                </div>
            </Link>

            <Link href={"http://github.com/"} target={"_blank"}>
                <div className='ml-[-86px] w-32 flex justify-between hover:ml-0 duration-200 text-sm items-center gap-6 fixed text-white bg-slate-800 top-[40vh]  py-3 px-5 rounded-full'>
                    GitHub
                    <FaGithub size={30} />
                </div>

            </Link>

            <Link href={"http://facebook.com/"} target={"_blank"}>
                <div className='ml-[-86px] hover:ml-0 duration-200 flex justify-between text-sm items-center gap-2 fixed text-white bg-slate-800 top-[50vh] w-32 py-3 px-5 rounded-full'>
                    FaceBook
                    <FaFacebook size={30} />


                </div>

            </Link>

        </div>
    )
}
export default SocialIcon;