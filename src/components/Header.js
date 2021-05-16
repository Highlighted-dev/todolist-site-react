const Header = ({ onAdd, showAdd }) => {
    return (
        <header className='header'>
            <h1 align="center">Todolist App</h1>
            <button className="btn" onClick={onAdd} >{showAdd ? "Close" : 'Open'}</button>
        </header>
    )
}

export default Header
