import greyorangeTeam from "@/assets/photos/greyorange-team.jpeg";
import imperialChallenge from "@/assets/photos/imperial-challenge.jpeg";
import speaking from "@/assets/photos/speaking.jpeg";
import vcic from "@/assets/photos/vcic.jpeg";
import istanbul from "@/assets/photos/istanbul.jpeg";
import krakow from "@/assets/photos/krakow.jpeg";
import rio from "@/assets/photos/rio.jpeg";
import egypt from "@/assets/photos/egypt.jpeg";
import paris from "@/assets/photos/paris.jpeg";

const photos = [
  { src: greyorangeTeam, alt: "GreyOrange team at trade show" },
  { src: imperialChallenge, alt: "Imperial Innovation Challenge winners" },
  { src: istanbul, alt: "Istanbul, Turkey" },
  { src: krakow, alt: "Krakow, Poland" },
  { src: speaking, alt: "Speaking at Imperial College" },
  { src: vcic, alt: "VCIC competition at Imperial" },
  { src: rio, alt: "Rio de Janeiro, Brazil" },
  { src: egypt, alt: "Pyramids of Giza, Egypt" },
  { src: paris, alt: "Louvre, Paris" },
];

const PhotosSection = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="text-sm uppercase tracking-widest text-neon-cyan mb-4">Personal</p>
        <h3 className="text-2xl font-bold text-foreground mb-2">Shivani Saluja</h3>
        <p className="text-muted-foreground mb-10">A few pictures of me</p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {photos.map((photo, i) => (
            <div
              key={i}
              className={`overflow-hidden rounded-xl group ${
                i === 0 ? "md:col-span-2 md:row-span-2" : ""
              }`}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                style={{ minHeight: i === 0 ? 300 : 200, maxHeight: i === 0 ? 500 : 300 }}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PhotosSection;
