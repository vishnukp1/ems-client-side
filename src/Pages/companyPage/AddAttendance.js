import React, { useState } from 'react';

function AddAttendance() {
  const initialData = [
    { id: 1, name: 'John', age: 30 },
    { id: 2, name: 'Jane', age: 25 },
    { id: 3, name: 'Bob', age: 40 },
  ];

  const [data, setData] = useState(initialData);

  const handleInputChange = (id, field, value) => {
    const updatedData = data.map((item) =>
      item.id === id ? { ...item, [field]: value } : item
    );
    setData(updatedData);
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>
                <input
                  type="text"
                  value={item.name}
                  onChange={(e) =>
                  handleInputChange(item.id, 'name', e.target.value)
                  }
                />
              </td>
              <td>
                <input
                  type="number"
                  value={item.age}
                  onChange={(e) =>
                  handleInputChange(item.id, 'age', e.target.value)
                  }
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AddAttendance;
