"use client"
import Image from 'next/image'
import React from 'react';
import logo from '../../public/karze-hasana.png';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Lock } from 'lucide-react';
import Marquee from 'react-fast-marquee'

import Link from 'next/link';
import { useUser } from './ContextProvider';
import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
	AlertDialogTrigger,
} from "@/components/ui/alert-dialog"


function HeaderSlider() {
	const { user, setUser } = useUser();
	return (
		<div className=" bg-color-main">
			<div className='md:px-20 px-2 h-100 flex flex-row items-center py-2'>

				<Image src={logo} className='md:mr-4 mr-1 border-dashed rounded basis-1/12 border-white md:pr-4 pr-1 border-r-2 md:w-32 w-16 md:h-20 h-10' alt='logo' placeholder='blur' />
				<div className="basis-10/12">
					<Marquee className='md:py-4'>
						<h2 className="md:text-xl text-base text-white px-4">কর্জে হাসানা: সুদ যেখানে হার মানতে বাধ্য (দরিদ্র এবং সুবিধা বঞ্চিতদের জন্য 100% সুদ-মুক্ত ঋণ ♦ কোন সুদ নেই ♦ কোন প্রসেসিং ফি নেই ♦ কোন গোপন চার্জ নেই ♦ কোন সার্ভিস চার্জ নেই ♦ কোন আবেদন ফি নেই♦ কোন লাভ নেই।)</h2>
					</Marquee>
				</div>
				<div className="md:px-4 px-2 basis-1/12">
					{user?.username ?

						<AlertDialog>
							<AlertDialogTrigger>
								<Avatar>
									<AvatarImage src={user?.photoUrl} />
									<AvatarFallback>U</AvatarFallback>
								</Avatar>
							</AlertDialogTrigger>
							<AlertDialogContent>
								<AlertDialogHeader>
									<Link href={`${user.username}`} ><AlertDialogTitle className=' text-color-main'>Dashboard</AlertDialogTitle></Link>
									<AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
								</AlertDialogHeader>
								<AlertDialogFooter>
									<AlertDialogCancel className=' text-color-main'>Cancel</AlertDialogCancel>
									<AlertDialogAction>Continue</AlertDialogAction>
								</AlertDialogFooter>
							</AlertDialogContent>
						</AlertDialog>

						: <Link href="/login" className="font-semibold leading-6 hover:text-color-sub">
							<h2 className='text-white'><Lock /></h2>
						</Link>
					}
				</div>
			</div>
		</div>
	)
}

export default HeaderSlider