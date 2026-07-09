import { cn } from '@/lib/utils';

interface Props {
  label: string;
  color: string;
  className?: string;
}

export const CustomTitle = ({ label, color, className }: Props) => {
  return (
    <h3
      className={cn(`
        text-center font-caveat font-bold leading-none transition-transform duration-300 group-hover:scale-105 
        text-3xl
        md:text-4xl
        xl:text-3xl`,
        color,
        className
      )}
    >
      {label}
    </h3>
  );
};
