import {ReactComponent as arrows} from './svg/arrows.svg'
import {ReactComponent as arrowLeft} from './svg/arrow-left.svg'
import {ReactComponent as arrowRight} from './svg/arrow-right.svg'
import {ReactComponent as profile} from './svg/profile.svg'
import {ReactComponent as logo} from './svg/logo.svg'
import {ReactComponent as logoLight} from './svg/logo-light.svg'

const icons = {
  arrows,
  arrowLeft,
  arrowRight,
  profile,
  logo,
  logoLight
}

export const Icon = ({name, ...props})=>{
  const Element = icons[name]
  return <Element {...props} />
}
