import { useState } from 'react'

const AddTask = ({ onSave }) => {
    const [text, setText] = useState('');
    const [date, setDate] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();

        if (!text) {
            alert('Please add a task');
            return
        }
        else if (!date) {
            alert('Please add a task');
            return
        }

        onSave({ text, date });
        setText('');
        setDate('');
            
    }

    return (
        <form className='add-form' onSubmit={onSubmit }>
            <div className='form-control'>
                <label>Task</label>
                <input type='text' placeholder='Add Task' value={text}
                    onChange={(e) => setText(e.target.value)}/>
            </div>
            <div className='form-control'>
                <label>Date</label>
                <input type='text' placeholder='Add date' value={date}
                    onChange={(e) => setDate(e.target.value)}/>
            </div>
            <input type="submit" value='Save Task' className='btn btn-block' />
        </form>
    )
}

export default AddTask
