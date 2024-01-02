const menuSideBar = [
  {
    path: '/pc',
    name: 'PC',
    icon: 'bi bi-person-badge',
    children: [
      {
        path: '/list&%PC',
        name: 'list PC',
        icon: 'bi bi-person-badge',
        children: [],
      },
      {
        path: '/listKeyboard',
        name: 'keyboard',
        icon: 'bi bi-person-badge',
        children: [],
      },
      {
        path: '/listComputerMouse',
        name: 'computer mouse',
        icon: 'bi bi-person-badge',
        children: [],
      },
    ],
  },
  {
    path: '/phone',
    name: 'phone',
    icon: 'bi bi-person-badge',
    children: [
      {
        path: '/listPhone',
        name: 'list phone',
        icon: 'bi bi-person-badge',
        children: [],
      },
      {
        path: '/listheadphone',
        name: 'list headphone',
        icon: 'bi bi-person-badge',
        children: [],
      },
    ],
  },
];

export default menuSideBar;
