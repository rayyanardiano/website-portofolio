import { images, socialLinks } from "../constants";

const About = () => {
  return (
    <section
      id="about"
      className="relative bg-black text-white py-16 px-5 md:px-20 flex flex-col md:flex-row items-center gap-12"
    >
      {/* LEFT: Profile Image */}
      <div className="w-full md:w-1/2 flex justify-center">
        <img
          src={images.profile}
          alt="Muhammad Rayyan Ardiano"
          className="rounded-2xl shadow-lg max-w-md"
          style={{
            WebkitMaskImage:
              "linear-gradient(to right, transparent 0%, black 5%, black 70%, transparent 100%), linear-gradient(to bottom, black 85%, transparent 100%)",
            WebkitMaskComposite: "intersect",
            WebkitMaskRepeat: "no-repeat",
            WebkitMaskSize: "100% 100%",
          }}
        />
      </div>

      {/* RIGHT: About Content */}
      <div className="w-full md:w-1/2 flex flex-col gap-6">
        <h2 className="text-3xl md:text-5xl font-bold text-blue-400">
          Tentang Saya
        </h2>

        <p className="text-gray-300 text-lg leading-relaxed">
          Saya{" "}
          <span className="font-semibold text-white">
            Muhammad Rayyan Ardiano
          </span>
          , seorang{" "}
          <span className="text-blue-400">Front-End Developer</span> dan{" "}
          <span className="text-blue-400">UI/UX Designer</span> yang memiliki
          semangat tinggi dalam menciptakan pengalaman digital yang bermakna.
          <br />
          <br />
          Saya berfokus pada pengembangan website modern yang responsif dan
          user-friendly dengan pendekatan clean code dan struktur sistem yang
          terorganisir.
        </p>

        {/* Skills */}
        <div className="text-gray-300 text-lg space-y-2">
          <p>
            <span className="text-white font-semibold">Frontend:</span> HTML,
            CSS, JavaScript, Tailwind CSS, Bootstrap
          </p>
          <p>
            <span className="text-white font-semibold">
              Backend Dasar:
            </span>{" "}
            PHP
          </p>
          <p>
            <span className="text-white font-semibold">Database:</span> MySQL /
            MariaDB (Perancangan, Normalisasi, Query Optimization)
          </p>
          <p>
            <span className="text-white font-semibold">Metodologi:</span> Clean
            Code & Software Development Life Cycle (SDLC)
          </p>
        </div>

        {/* Social Links */}
        <div className="flex gap-4 mt-6">
          {socialLinks.map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`w-12 h-12 flex items-center justify-center rounded-full transition ${item.bg}`}
            >
              <img
                src={item.icon}
                alt={item.name}
                className="w-6 h-6 object-contain"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;