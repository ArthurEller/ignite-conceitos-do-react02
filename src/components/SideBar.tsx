import { Button } from './Button';
import { GenreResponseProps } from '../App';

interface SideBarProps {
  genres: GenreResponseProps[];
  selectedId: number;
  handleClickButton: (id: number) => void;
}


export function SideBar({ handleClickButton, genres, selectedId }: SideBarProps) {
  return(
    <nav className="sidebar">
    <span>Watch<p>Me</p></span>

    <div className="buttons-container">
      {genres.map(genre => (
        <Button
          id={String(genre.id)}
          title={genre.title}
          iconName={genre.name}
          onClick={() => handleClickButton(genre.id)}
          selected={selectedId === genre.id}
        />
      ))}
    </div>
  </nav>
  )
}