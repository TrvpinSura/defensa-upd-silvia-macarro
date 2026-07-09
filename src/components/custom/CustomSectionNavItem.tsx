interface Props {
  id: string;
  icon: string;
  label: string;
  color: string;
  isActive: boolean;
}

export const CustomSectionNavItem = ({ id, icon, label, color, isActive }: Props) => {
  return (
    <a
      href={`#${id}`}
      className="group custom-section-nav-item"
      data-active={isActive}
      style={{ "--section-nav-item-color": color } as React.CSSProperties}
    >
      <img
        src={icon}
        alt=""
        className="custom-section-nav-item-image"
      />

      <span className="custom-section-nav-item-label">
        {label}
      </span>
    </a>
  );
};