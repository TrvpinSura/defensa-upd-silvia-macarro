
interface Props {
  title?: string;
  subtitle?: string;
}

export const EmptyCell = ({ title = "No cargado", subtitle = "Revisa este elemento" }: Props) => {
  return (
    <div className="flex h-32 w-full items-center justify-center bg-cream/50 px-4 py-4">
      <div className="flex flex-col items-center text-center">
        <span className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-dashed border-pastel-brown/50 font-caveat text-4xl leading-none text-pastel-brown/70">
          ×
        </span>

        <p className="mt-2 font-caveat text-2xl leading-none text-pastel-brown/80">
          {title}
        </p>

        <p className="mt-1 font-indieflower text-sm font-bold text-soft-ink-blue/70">
          {subtitle}
        </p>
      </div>
    </div>
  );
};
