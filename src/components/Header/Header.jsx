import { Search } from '@mui/icons-material';
import './header.css';
import { Avatar } from '@mui/material';
import { useDataLayerValue } from '../../DataLayer';

const Header = () => {
    const [{user}, dispatch] = useDataLayerValue();
  return (
    <div className='header'>
        <div className="header__left">
            <Search />
            <input type="text" placeholder='What do you want to listen to?' />
        </div>
        <div className="header__right">
            <Avatar src={user?.images[0]?.url} aly={user?.display_name} />
            <h4>{user?.display_name}</h4>
        </div>
    </div>
  )
}

export default Header