export interface IDataUser {
  id: string | null;
  firstName: string | null;
  lastName: string | null;
  email: string | null;
  position: string | null;
  phone: string | null;
  roleId: number | null;
  managerId: string | null;
  address: string | null;
  postalCode: string | null;
  city: string | null;
  country: string | null;
  subDepartment: {
    id: string;
    title: string;
  } | null;
  manager: {
    id: string | null;
    firstName: string | null;
    lastName: string | null;
    archivedAt: string | null;
    email: string | null;
    phone: string | null;
    position: string | null;
    avatar: string | null;
  } | null;
  avatar: {
    link: string | null;
  } | null;
  department: {
    id: string | null;
    title: string | null;
    managerId: string | null;
  } | null;
  group: string | null;
  division: string | null;
}

export interface IDataTimesheets {
  id: string | null;
  assessment: number | null;
  breakMinutes: number | null;
  minutes: number | null;
  startTime: string | null;
  endTime: string | null;
  note: string | null;
  status: string | null;
  locationChecked: boolean | null;
  approvalPersonId: string | null;
  userId: string | null;
  companyId: string | null;
}

export interface IGlobalContext {
  dataUser: IDataUser[];
  dataTimesheets: IDataTimesheets[];
}
