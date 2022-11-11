import Search from "./components/Search";
import Logo, { StyledMenu } from "../../styled/Menu"
import DarkModeSwitch from "./components/DarkModeSwitch";

export default function Menu(props) {

  return (
      <StyledMenu>
        <div>
          <Logo/>
        </div>
        <Search ValorDoFiltro={props.ValorDoFiltro} setValorDoFiltro={props.setValorDoFiltro} />
        <DarkModeSwitch />
      </StyledMenu>
  );
}