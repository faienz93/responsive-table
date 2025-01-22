

import { students } from '../student.tsx'
import './TableComponent.css'

export default function TableComponent({ className }) {
  return (
    <table className={className}>
      <thead>
        <tr>
          <th>Student ID</th>
          <th>Name</th>
          <th>Date of Birth</th>
          <th>Major</th>
        </tr>
      </thead>
      <tbody>
        {students.map(student => (
          <tr key={student.id}>
            <td>
              <span className="cell-header">Student ID:</span> {student.id}
            </td>
            <td>
              <span className="cell-header">Name:</span> {student.name}
            </td>
            <td>
              <span className="cell-header">Date of Birth:</span> {student.dob}
            </td>
            <td>
              <span className="cell-header">Major:</span> {student.major}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}