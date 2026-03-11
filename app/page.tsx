import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeSection from "./components/HomeSection";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import ExperienceSection from "./components/ExperienceSection";
import ContactSection from "./components/ContactSection";

export default function Home() {
	return (
		<div className="flex flex-col">
			<Header />

			<main className="flex-1 flex flex-col items-center justify-center">

			<HomeSection />

			<AboutSection />

			<ProjectsSection />

			<ExperienceSection />

			<ContactSection />

			</main>	

			<Footer />
		</div>
	);
}
