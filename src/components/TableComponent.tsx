

import { students} from '../student.tsx'

export default function TableComponent() {
    return (
        <table>
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
                <td>{student.id}</td>
                <td>{student.name}</td>
                <td>{student.dob}</td>
                <td>{student.major}</td>
              </tr>
            ))}
          </tbody>
        </table>
      );
}