interface Props {
  icon: string;
}

export const CustomIcon = ({ icon }: Props) => {
  return (
    <img
      src={icon}
      alt=""
      className="shrink-0 object-contain transition-transform duration-300 group-hover:scale-105 
        h-18 w-18
        md:h-22 md:w-22 
        xl:h-20 xl:w-20"
    />
  );
};
