import './style.css'

const Checkbox = ({index, label, compeleted, handleToggleComplete }) => {
    return (
      <div>
        <label className="main" style={{ textDecoration: compeleted ? 'line-through' : 'none' }}> {label}
          <input type="checkbox" 
            checked = {compeleted}
            onChange={() => handleToggleComplete(index)}
          />
          <span class="checkbox-container"></span>
        </label>
      </div>
    );
};

export default Checkbox;

