import { INavData } from '@coreui/angular';

export const adminItems: INavData[] = [
  {
    name: 'Обзор',
    url: '/dashboard',
    iconComponent: { name: 'cil-speedometer' },
  },
  {
    name: 'Заявки',
    url: '/tickets',
    iconComponent: { name: 'cil-task' },
  },
  {
    name: 'Пользователи',
    url: '/users',
    iconComponent: { name: 'cil-user' },
  },
  {
    name: 'Категории',
    url: '/categories',
    iconComponent: { name: 'cil-bookmark' },
  },
];


export const supportItems: INavData[] = [
  {
    name: 'Обзор',
    url: '/dashboard',
    iconComponent: { name: 'cil-speedometer' },
  },
  {
    name: 'Заявки',
    url: '/tickets',
    iconComponent: { name: 'cil-task' },
  },
];

export const userItems: INavData[] = [
  {
    name: 'Обзор',
    url: '/dashboard',
    iconComponent: { name: 'cil-speedometer' },
  },
];

