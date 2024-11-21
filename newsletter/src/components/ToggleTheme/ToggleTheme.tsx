import { MoonIcon, SunIcon } from "@heroicons/react/24/solid"
import { useEffect } from "react"

const ToggleTheme = () => {

  //recurso oferecido pelo tailwind com o modo dark
  const systemPreference = window.matchMedia('(prefers-color-scheme: dark)').matches
  const pageClasses = document.documentElement.classList

  useEffect(() => {
    systemPreference && pageClasses.add('dark')
  }, [])

  const toggle = () => {
    document.documentElement.classList.toggle('dark')
  }
  return (
    <div className="hidden sm:block">
      <MoonIcon className="h-8 block dark:hidden cursor-pointer" onClick={toggle} />
      <SunIcon className="h-8 hidden dark:block cursor-pointer" onClick={toggle} />

    </div>
  )
}
export default ToggleTheme