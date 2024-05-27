import Categories from '@/components/categories/categories'
import Hero from '@/components/hero/hero'
import HowItWorks from '@/components/how-it-works/how-it-works'
import Instructors from '@/components/instructors/instructors'
import Newsletter from '@/components/newsletter/newsletter'
import PopularCourses from '@/components/popular-courses/popular-courses'
import Sponsorship from '@/components/sponsorship/sponsorship'
import Testimonials from '@/components/testimonials/testimonials'

function Home() {
	return (
		<div className={"mt-[11vh] lg:pl-[300px] p-0 overflow-hidden space-y-10"}>
			<Hero/>
			<Categories/>
			<PopularCourses/>
			<HowItWorks/>
			<Instructors/>
			<Testimonials/>
			<Newsletter/>
			<Sponsorship/>
		</div>
	);
}
 export default Home
