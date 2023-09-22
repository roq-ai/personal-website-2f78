import { CompanyInterface } from 'interfaces/company';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface ExperienceInterface {
  id?: string;
  company_id: string;
  title: string;
  start_date: any;
  end_date?: any;
  user_id: string;
  created_at?: any;
  updated_at?: any;

  company?: CompanyInterface;
  user?: UserInterface;
  _count?: {};
}

export interface ExperienceGetQueryInterface extends GetQueryInterface {
  id?: string;
  company_id?: string;
  title?: string;
  user_id?: string;
}
