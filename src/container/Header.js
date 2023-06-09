import Logo from "../container/Logo"

const Header = () => {
  return (
    <div className="flex justify-between items-center px-1 py-2">
      <div className="flex justify-start items-center">
        <Logo />
        <div className="pl-12">START</div>
        <div className="pl-6">PROGRAM</div>
        <div className="pl-6">CHANNELS</div>
      </div>
      <div className="flex">
        <div>SEARCH</div>
        <div className="pl-6">SIGN IN</div>
      </div>
    </div>
  )
}

export default Header