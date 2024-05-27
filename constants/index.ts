import { FaBook , FaQuestion  } from 'react-icons/fa';
import { FaCirclePlay } from "react-icons/fa6";
import { RiTeamLine } from "react-icons/ri";
import { MdOutlineContactPhone } from "react-icons/md";
import { TbCurrencyDollar } from "react-icons/tb";





import { MdImportContacts,MdOutlineExplore ,  } from 'react-icons/md';





export const general = [
			{
				label: 'Explore',
				route: '/',
				icon: MdOutlineExplore,
			},
			{
				label: 'Courses',
				route: '/courses',
				icon: FaCirclePlay,
			},
			{
				label: 'Books',
				route: '/books',
				icon: FaBook  ,
			},
			{
				label: 'Articles',
				route: '/articles',
				icon: MdImportContacts,
			},
		
	
	]
export const pages = [
		
			{
				label: 'About',
				route: '/about',
				icon: RiTeamLine,
			},
			{
				label: 'Contact',
				route: '/contact',
				icon: MdOutlineContactPhone,
			},
			{
				label: 'Pricing',
				route: '/pricing',
				icon: TbCurrencyDollar,
			},
			{
				label: 'FAQ',
				route: '/faq',
				icon: FaQuestion,
			},
	
];

