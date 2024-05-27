'use client'

import { Button } from '@/components/ui/button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { Sheet, SheetContent,  SheetTrigger } from '@/components/ui/sheet'
import { general, pages } from '@/constants'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import React from 'react'
import Link from "next/link";
import ModeToggle from "@/components/shared/mode-toggle";
import { CgLogIn } from 'react-icons/cg'
import { HiOutlineMenuAlt1 } from 'react-icons/hi'
import { IoLanguage } from 'react-icons/io5'
import { MdOutlineLiveHelp } from 'react-icons/md'

function Navbar() {
	const router = usePathname()
	
	return (
		<div className={"w-full px-[10px] border-b fixed border-blue-400 h-[10vh] backdrop-blur-sm z-40 inset-0 bg-background left-0"}>
			<div className={"container max-w-6xl mx-auto h-[10vh] w-full flex items-center justify-between"}>
				{/*Logo*/}
				<div className={"flex"}>
					<HiOutlineMenuAlt1 className={"w-[30px] h-[30px] mt-1 mr-1 cursor-pointer hidden lg:block"}/>
					
					
					<Sheet>
						<SheetTrigger>
							<HiOutlineMenuAlt1 className={"w-[30px] h-[30px] mt-1 mr-1 cursor-pointer hidden max-lg:block"}/>
						</SheetTrigger>
						<SheetContent side={'left'} className={'w-full'}>
							<div
								className={'p-0 max-lg:overflow-y-scroll overflow-x-hidden w-full h-full'}>
								<div className={'w-full p-5'}>
									<p className={'p-0 m-0 mb-4 text-lg'}>General</p>
									{general.map((item, idx) => {
										const active = router == item.route
										return (
											<Link href={`/${item.route}`} key={idx} className={'m-5'}>
												<Button className={'w-[50%] my-1 py-[27px] border-blue-400 text-lg'}
												        variant={active ? 'default' : 'outline'}>
													{item.label}
												</Button>
											</Link>
										)
									})}
									<p className={'m-5 text-lg'}>Pages</p>
									{pages.map((item, idx) => {
										const active = router == item.route
										return (
											<Link href={`/${item.route}`} key={idx} className={'m-5'}>
												<Button className={'w-[50%] my-1 py-[27px] border-blue-400 text-lg'}
												        variant={active ? 'default' : 'outline'}>
													{item.label}
												</Button>
											</Link>
										)
									})}
								</div>
							</div>
						</SheetContent>
					</Sheet>
					
					
					<Link href={'/'}>
						<Image src={'/logo/logo.png'} alt={'logo'} width={120} height={150}/>
					</Link>
				</div>
				
				<div className={'gap-1 flex items-center'}>
					<ModeToggle />
					<Button variant={'ghost'}>
						<MdOutlineLiveHelp className={'cursor-pointer w-[25px] h-[25px] justify-center'} />
					</Button>
					
					<DropdownMenu>
						<DropdownMenuTrigger>
							<IoLanguage className={'mx-1 cursor-pointer w-[25px] h-[25px] justify-center'} />
						</DropdownMenuTrigger>
						<DropdownMenuContent>
							
							<DropdownMenuItem>
								<Image src={'https://upload.wikimedia.org/wikipedia/commons/8/84/Flag_of_Uzbekistan.svg'} alt={'uzb'}
								       width={'30'} height={'30'} className={'rounded'}/>
								<p className={'pl-3 text-lg'}>Uzb</p>
							</DropdownMenuItem>
							
							<DropdownMenuItem>
								<Image src={'https://upload.wikimedia.org/wikipedia/commons/f/f3/Flag_of_Russia.svg'} alt={'rus'}
								       width={'30'} height={'30'} className={'rounded'}/>
								<p className={'pl-3 text-lg'}>Rus</p>
							</DropdownMenuItem>
								<DropdownMenuItem>
									<Image src={'https://upload.wikimedia.org/wikipedia/en/b/be/Flag_of_England.svg'} alt={"eng"} width={"30"} height={"30"} className={'rounded'}/>
									<p className={'pl-3 text-lg'}>Eng</p>
								</DropdownMenuItem>
							</DropdownMenuContent>
						</DropdownMenu>
					
					
					<Button variant={"ghost"}>
						<CgLogIn className={"cursor-pointer w-[25px] h-[25px]"} />
					</Button>
				
				</div>
			</div>
		</div>
	)
}

export default Navbar
