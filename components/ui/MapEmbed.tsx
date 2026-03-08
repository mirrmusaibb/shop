import { BUSINESS } from "@/utils/constants";

type MapEmbedProps = {
  title: string;
  className?: string;
};

export const MapEmbed = ({ title, className }: MapEmbedProps) => {
  const { lat, lng } = BUSINESS.coordinates;
  const src = `https://www.google.com/maps?q=${lat},${lng}&z=15&output=embed`;

  return (
    <div className={`overflow-hidden rounded-3xl border border-white/10 bg-black/30 ${className ?? ""}`}>
      <iframe
        title={title}
        src={src}
        width="100%"
        height="380"
        style={{ border: 0 }}
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
};
