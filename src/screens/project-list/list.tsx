import { User } from "screens/project-list/search-panel";

interface Project {
  id: string;
  name: string;
  personId: string;
  organization: string;
  created: number;
}

interface ListProps {
  list: Project[];
  users: User[];
}
export const List = ({ list, users }: ListProps) => {
  return (
    <table>
      <thead>
        <tr>
          <th>名称</th>
          <th>负责人</th>
        </tr>
      </thead>
      <tbody>
        {list.map((project) => (
          <tr key={project.id}>
            <td>{project.name}</td>
            {/* undefined.name 如果 users.find 没有找到任何user，
                    就会是 undefined，会报错，加个？就不会报错 
                    找到 user 之后 .name */}
            <td>
              {users.find((user) => user.id === project.personId)?.name ||
                "未知"}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
