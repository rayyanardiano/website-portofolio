import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import TitleHeader from "../components/TitleHeader";

gsap.registerPlugin(ScrollTrigger);

const AppShowcase = () => {
  const sectionRef = useRef(null);
  const cardRefs = useRef([]);

  useGSAP(() => {
    cardRefs.current.forEach((card) => {
      gsap.fromTo(
        card,
        {
          y: 30,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          ease: "power3.out",
          duration: 1.2,
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);

  const projects = [
    {
      name: "Website Sistem Informasi Destinasi Wisata (Future Dev)",
      description:
        "Platform informasi destinasi wisata dengan fitur kategori, detail halaman, dan sistem admin.",
      image: "/images/WebFutureDev.png",
      link: "https://myfreeweb.xo.je/pages/index.php",
      type: "website",
    },
    {
      name: "Website Platform Baca Komik Digital (Mangawa)",
      description:
        "Platform baca komik digital dengan sistem login, kategori komik, dan fitur favorit.",
      image: "/images/WebMangaw.png",
      // link: "https://your-website-link.com",
      type: "website",
    },
    {
      name: "UI/UX AISA Learning App",
      description:
        "Prototype UI/UX aplikasi pembelajaran anak berbasis game edukatif menggunakan Figma.",
      image: "/images/AISA.jpg",
      link: "https://www.figma.com/proto/8caMlwNDZmiYdyNKSXIrFI/AISA---AISA-Web-UI--Community-?node-id=305-11823&t=jKUkV0f7pKms61wj-1&scaling=min-zoom&content-scaling=fixed&page-id=112%3A174&starting-point-node-id=305%3A11808&show-proto-sidebar=1",
      type: "uiux",
    },
    {
      name: "UI/UX Future Dev",
      description:
        "Prototype aplikasi travel untuk membantu traveler menemukan destinasi dan komunitas.",
      image: "/images/projecttravel.jpg",
      link: "https://www.figma.com/proto/HhI85LUQXlPrPhVRjioGnG/FutureDev?node-id=650-17&starting-point-node-id=650%3A17&scaling=scale-down-width&content-scaling=fixed",
      type: "uiux",
    },
        {
      name: "UI/UX Mangawa",
      description: "Akses ratusan komik populer dengan antarmuka cepat dan nyaman.",
      image: "/images/projectkomik.jpg",
      link: "https://www.figma.com/proto/HhI85LUQXlPrPhVRjioGnG/FutureDev?node-id=1552-24244&t=7WjxztH5bk5eVZYU-0&scaling=contain&content-scaling=fixed&page-id=1552%3A24242&starting-point-node-id=1552%3A24244",
      type: "uiux",
    },
    {
      name: "UI/UX GrowUp",
      description: "Grafik pertumbuhan, jadwal imunisasi, dan tips sehat dalam satu platform intuitif.",
      image: "/images/projectstunting.jpg",
      link: "https://www.figma.com/proto/78xTItrjN1s77kZD0q07tS/Solution-Challenge-team-library?node-id=3469-581&t=ZBpVqPdsnCk4LLQ3-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=3526%3A841&show-proto-sidebar=1",
      type: "uiux",
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="work"
      className="px-6 md:px-16 lg:px-20 py-24 bg-[#000000]"
    >
      <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
        <TitleHeader
          title="Project yang dikembangkan"
          sub="🎨 Front End Website & UI/UX"
        />
      </h2>

      <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <div
            key={index}
            ref={(el) => (cardRefs.current[index] = el)}
            className="project-card bg-gradient-to-br from-[#1e293b] to-[#0f172a] rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
          >
            {project.image && (
              <div className="overflow-hidden rounded-xl mb-4">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-auto object-cover rounded-lg transform hover:scale-105 transition-transform duration-300"
                />
              </div>
            )}

            <h3 className="text-2xl font-semibold text-white">
              {project.name}
            </h3>

            <p className="text-neutral-300 text-base mt-3">
              {project.description}
            </p>

            {/* BUTTON */}
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-6 px-5 py-2 rounded-lg font-medium text-white 
                bg-gradient-to-r from-blue-500 
                hover:scale-105 transition duration-300"
              >
                {project.type === "uiux"
                  ? "Lihat Prototype →"
                  : "Lihat Website →"}
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default AppShowcase;