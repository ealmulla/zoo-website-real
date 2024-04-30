import { useNavigate } from "react-router-dom";

const NavButton = ({ path, label, className,id}) => {
  const navigate = useNavigate();
  return (
    <div>
      <button onClick={() => navigate(path )} id={id}class={className}> {label} </button>

    </div>
  );
};
export default NavButton
