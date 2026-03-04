import { useRef } from "react";

const GlowCard = ({ card, index }) => {
  const cardRefs = useRef([]);

  const handleMouseMove = (index) => (e) => {
    const cardEl = cardRefs.current[index];
    if (!cardEl) return;

    const rect = cardEl.getBoundingClientRect();
    const mouseX = e.clientX - rect.left - rect.width / 2;
    const mouseY = e.clientY - rect.top - rect.height / 2;

    let angle = Math.atan2(mouseY, mouseX) * (180 / Math.PI);
    angle = (angle + 360) % 360;

    cardEl.style.setProperty("--start", angle + 60);
  };

  return (
    <div
      ref={(el) => (cardRefs.current[index] = el)}
      onMouseMove={handleMouseMove(index)}
      className="card card-border timeline-card rounded-xl p-8 relative bg-[#0f172a]"
    >
      <div className="glow pointer-events-none"></div>

      <div className="flex items-center gap-4 mb-4">
        <img
          src={card.logoPath}
          alt="logo"
          className="w-12 h-12 object-contain"
        />
        <div>
          <h3 className="text-xl font-semibold text-white">
            {card.title}
          </h3>
          <p className="text-sm text-gray-400">{card.date}</p>
        </div>
      </div>

      <p className="text-gray-300 mb-4">{card.review}</p>
    </div>
  );
};

export default GlowCard;