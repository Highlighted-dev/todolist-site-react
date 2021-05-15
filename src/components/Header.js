const Header = ({ onAdd }) => {
    return (
        <header className='header'>
            <h1 align="center">Todolist App</h1>
            <button className="btn" onClick={onAdd}>Add Task</button>
        </header>
    )
}

export default Header
