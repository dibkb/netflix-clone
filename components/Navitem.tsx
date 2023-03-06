interface NavItem {
  label: string;
}
export const NavItem: React.FC<NavItem> = ({ label }) => {
  return (
    <p className="cursor-pointer text-white hover:underline underline-offset-3">
      {label}
    </p>
  );
};
