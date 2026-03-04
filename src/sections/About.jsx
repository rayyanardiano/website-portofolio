const About = () => {
    return (
      <section
        id="about"
        className="relative bg-black text-white py-2 px-5 md:px-20 flex flex-col md:flex-row items-center gap-12"
      >
        {/* LEFT: Foto / ilustrasi */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="/public/images/rayyann2.png" 
            alt="About Me"
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
  
        {/* RIGHT: About Text */}
        <div className="w-full md:w-1/2 flex flex-col gap-6">
          <h2 className="text-3xl md:text-5xl font-bold text-blue-400">
            Tentang Saya
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            Saya <span className="font-semibold text-white">Muhammad Rayyan Ardiano</span>, 
            seorang <span className="text-blue-400">Front-End Developer</span> dan 
            <span className="text-blue-400"> UI/UX Designer</span> yang memiliki semangat tinggi dalam menciptakan pengalaman digital yang bermakna.
            <br /><br />
            Sebagai Front-End Developer, saya berfokus pada pengembangan website modern yang responsif dan user-friendly. 
            Keahlian utama saya meliputi:
            <br /><br />
            • Frontend: HTML, CSS, JavaScript, Tailwind CSS, Bootstrap  
            <br />
            • Backend Dasar: PHP  
            <br />
            • Database: MySQL / MariaDB (Perancangan, Normalisasi, Query Optimization)  
            <br />
            • Metodologi: Clean Code & Software Development Life Cycle (SDLC)
          </p>
          {/* <p className="text-gray-300 text-lg leading-relaxed">
            My goal is to transform ideas into real projects that not only 
            look great but also provide impact and value for users. 
            I always strive to combine creativity with functionality in 
            every project I work on.
          </p> */}
  
          {/* CTA */}
          <div className="flex gap-4 mt-4">
            <a
            href="https://www.linkedin.com/in/muhammad-rayyan-ardiano-bb2aa6297/" // ganti dengan link LinkedIn kamu
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-600 hover:bg-blue-700 transition"
            >
                <img src="/public/images/logos/linkedin.png" alt="LinkedIn" className="w-6 h-6" />
            </a>
            
            <a
            href="mailto:rayyan.ardiano24@gmail.com" 
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 flex items-center justify-center rounded-full bg-red-600 hover:bg-red-700 transition"
            >
                <img src="/public/images/logos/email.png" alt="Email" className="w-8 h-6" />
            </a>

            {/* <a
            href="https://github.com/your-username" // ganti dengan link GitHub kamu
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 flex items-center justify-center rounded-full bg-white hover:bg-gray-100 transition"
            >
                <img src="/public/images/logos/github.svg" alt="GitHub" className="w-6 h-6" />
            </a> */}
          </div>
        </div>
      </section>
    );
  };
  
  export default About;
  