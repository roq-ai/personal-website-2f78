import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface EducationInterface {
  id?: string;
  school_name: string;
  degree: string;
  field_of_study: string;
  start_date: any;
  end_date?: any;
  user_id: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  _count?: {};
}

export interface EducationGetQueryInterface extends GetQueryInterface {
  id?: string;
  school_name?: string;
  degree?: string;
  field_of_study?: string;
  user_id?: string;
}
