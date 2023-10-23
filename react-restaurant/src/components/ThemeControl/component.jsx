import { Button } from '../Button/component'

export const ThemeControl = ({theme, onClick}) => {
  return <Button text={theme} onClick={() => onClick(theme)} />;
}
