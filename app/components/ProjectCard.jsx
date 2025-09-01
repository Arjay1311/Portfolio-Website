import React, { useState } from "react";

const ProjectCard = ({ imgUrl, title, desc, tag }) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="relative w-full h-80 cursor-pointer perspective"
      onClick={() => setFlipped(!flipped)}
    >
      <div
        className={`transition-transform duration-500 w-full h-full ${
          flipped ? "rotate-y-180" : ""
        } relative preserve-3d`}
      >
        {/* Front Side */}
        <div className="absolute w-full h-full backface-hidden rounded-xl overflow-hidden bg-[#181818]">
          <div
            className="h-1/2 w-full bg-cover bg-center"
            style={{ backgroundImage: `url(${imgUrl})` }}
          />
          <div className="p-4 flex flex-col items-center">
            <h5 className="text-xl font-semibold mb-2 text-white">{title}</h5>
            <div className="flex flex-wrap gap-2 justify-center mb-2">
              {tag &&
                tag.map((t, i) => (
                  <span
                    key={i}
                    className="bg-gray-700 text-xs px-2 py-1 rounded-full text-white"
                  >
                    {t}
                  </span>
                ))}
            </div>

          </div>
        </div>
        {/* Back Side */}
        <div className="absolute w-full h-full backface-hidden rotate-y-180 rounded-xl overflow-hidden bg-[#181818] flex flex-col justify-center items-center p-6">
          <h5 className="content-center text-xl font-semibold mb-2 text-white">{title}</h5>
          <p className="text-base text-white">{desc}</p>
        </div>
      </div>
      <style jsx>{`
        .perspective {
          perspective: 1200px;
        }
        .preserve-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
      `}</style>
    </div>
  );
};

export default ProjectCard;
