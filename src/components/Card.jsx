export default function Card({ image, title, description }) {
  return (
    <div className="group flex flex-col rounded-t-2xl bg-card border border-slate-900 hover:border-primary/40 hover:shadow-lg shadow-primary/5 overflow-hidden h-full">
      <div className="h-44">
        <img src={image} alt={title} className="w-full h-full object-cover"/>
      </div>
      <div className="flex flex-col p-5 text-left">
        <h3 className="font-extrabold text-base mb-1.5 line-clamp-1 font-title">{title}</h3>
        <p className="text-sm leading-relaxed line-clamp-3 mb-4 text-muted-foreground">{description}</p>
        <div className="flex-1"></div>

        <div className="flex gap-1 mt-4 pt-3.5 border-t border-white/10">
          <span className="">VIte</span>
          <span>VIte</span>
          <span>VIte</span>
        </div>
        <div className="ml-auto">LIve Demo</div>
      </div>
    </div>
  );
}
