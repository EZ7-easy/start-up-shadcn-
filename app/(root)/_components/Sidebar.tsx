'use client'

import { Button } from '@/components/ui/button'
import { general, } from '@/constants'
import { pages } from '@/constants'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'



function Sidebar() {
	const router = usePathname()
	
	return (
		<div className={"hidden lg:flex max-lg:overflow-y-scroll overflow-x-hidden w-[350px] h-[90vh] border-r border-blue-400 fixed border-[2px] border-l-0 border-t-0 top-[10vh] left-0 border-b-0"}>
			<div className={"max-w-xl"}>
				<p className={"m-5 text-lg"}>General</p>
				{general.map((item, idx) => {
					const active = router == item.route
					return (
						<Link href={`/${item.route}`} key={idx} className={"m-5"}>
							<Button className={"w-[90%] my-1 py-[27px] border-blue-400 text-lg"} variant={active ? 'default' : 'outline'}>
								{item.label}
							</Button>
						</Link>
					)
				})}
				<p className={"m-5 text-lg"}>Pages</p>
				{pages.map((item, idx) => {
					const active = router == item.route
					return (
						<Link href={`/${item.route}`} key={idx} className={"m-5"}>
							<Button className={"w-[90%] my-1 py-[27px] border-blue-400 text-lg"} variant={active ? 'default' : 'outline'}>{item.label}</Button>
						</Link>
					)
				})}
			</div>
		</div>
		
	)
}
export default Sidebar
