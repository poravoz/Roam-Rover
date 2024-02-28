import { FC, useState } from 'react'

interface ButtonProperty {
  title: string,
  color: string,
  width:number,
  height: number
}

interface IButtonsListProps {
    buttons: ButtonProperty[],
    onClickCallback: React.MouseEventHandler<HTMLLIElement>
}

/*
person.state = 'sleepy'
drink()
person.state = 'active'
*/

const ButtonList: FC<IButtonsListProps> = (props) => { 
  const {buttons, onClickCallback} = props;
  
  return (
    <ul>
      {
        buttons.map(button => {
          const {title, color, width, height} = button;
          
          return (
            <li onClick={onClickCallback} style={{
              backgroundColor:color,
              color: "red",
              width: width,
              height: height
            }}>
              {title}
            </li>          
          )
        })
      }
    </ul>
  )
}

export default ButtonList