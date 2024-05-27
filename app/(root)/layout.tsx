"use client"

import Sidebar from '@/app/(root)/_components/Sidebar'
import {ChildProps} from "@/types";
import Navbar from '@/app/(root)/_components/Navbar'
import { useState } from 'react'

function Layout({children}: ChildProps) {
	
	return (
		<main>
			<Navbar/>
			<Sidebar/>
			{children}
		</main>
	)
}

export default Layout


