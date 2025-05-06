interface PropsType {
    describle: 'users' | 'employees';
  }
  
  export default function routeType({ describle }: PropsType): string {
    const data = {
      users: 'users',
      employees: 'employees',
    };
  
    return data[describle];
  }
  