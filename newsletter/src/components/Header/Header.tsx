import ToggleTheme from '../ToggleTheme/ToggleTheme'

const Header = () => {
  return (
    <div className="flex h-20 bg-alura-200 dark:bg-dark-200 justify-between items-center px-5 rounded-lg sm:m-5 text-slate-300 text-xl">
      <span>Olá, usuário</span>
      <h1>Alura Newsletter</h1>
      <ToggleTheme/>
    </div>
  )
}
export default Header